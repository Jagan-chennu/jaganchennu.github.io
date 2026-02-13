#!/usr/bin/env python3
"""Check which posts match each category and verify URLs respond from local server.
Run from repo root where `search-index.json` exists. Attempts HTTP fetch from http://localhost:8000 first.
"""
import json
import sys
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

INDEX_URLS = ['http://localhost:8000/search-index.json', 'search-index.json']

def load_index():
    for u in INDEX_URLS:
        try:
            if u.startswith('http'):
                req = Request(u, headers={'User-Agent':'curl/7.0'})
                with urlopen(req, timeout=5) as r:
                    return json.load(r).get('documents', [])
            else:
                with open(u, 'r', encoding='utf-8') as f:
                    return json.load(f).get('documents', [])
        except Exception as e:
            # try next
            # print(f"Failed to load {u}: {e}")
            pass
    print('ERROR: could not load search-index.json', file=sys.stderr)
    return []


def matches(text, keys):
    t = text.lower()
    return any(k in t for k in keys)


def devops_match(doc):
    text = (doc.get('title','') + ' ' + doc.get('content',''))
    devopsKeys = ['docker','container','containers','kubernetes','ci','cd','git','devops','jenkins','ansible','terraform']
    return matches(text, devopsKeys)


def cloud_match(doc):
    text = (doc.get('title','') + ' ' + doc.get('content',''))
    cloudKeys = ['cloud','gcp','cloudformation','infrastructure','serverless']
    return matches(text, ['aws','azure','gcp']) or matches(text, cloudKeys)


def aws_match(doc):
    text = (doc.get('title','') + ' ' + doc.get('content',''))
    keys = ['aws','amazon','ec2','s3','lambda','cloudfront','route53','iam','ebs','ecr','elastic beanstalk','cloudformation']
    return matches(text, keys)


def azure_match(doc):
    text = (doc.get('title','') + ' ' + doc.get('content',''))
    keys = ['azure','microsoft','aks','app service','appservice','functions','blob storage','vm','cosmos','resource manager']
    return matches(text, keys)


def random_match(doc):
    text = (doc.get('title','') + ' ' + doc.get('content',''))
    randomKeys = ['grep','permission','permissions','shell','scripting','security','news','random','tips','tricks','automation','tutorial','guide']
    isRandom = matches(text, randomKeys)
    isDevops = devops_match(doc)
    isCloud = matches(text, ['cloud','aws','azure','gcp'])
    return isRandom or (not isDevops and not isCloud)


CATEGORY_FUNCS = {
    'devops': devops_match,
    'cloud': cloud_match,
    'aws': aws_match,
    'azure': azure_match,
    'random': random_match,
}


def check_url(path):
    url = path if path.startswith('http') else f'http://localhost:8000/{path.lstrip("/")}'
    try:
        req = Request(url, headers={'User-Agent':'curl/7.0'})
        with urlopen(req, timeout=5) as r:
            return r.status
    except HTTPError as e:
        return e.code
    except URLError as e:
        return None


def read_front_matter_local(doc):
    # Try to open a local .md source corresponding to the post url
    url = doc.get('url','')
    if url.endswith('.html'):
        md = url[:-5] + '.md'
    else:
        md = url
    try:
        with open(md, 'r', encoding='utf-8') as f:
            text = f.read()
        if text.strip().startswith('---'):
            parts = text.split('---')
            if len(parts) >= 3:
                yaml = parts[1]
                # crude parse
                import re
                m = re.search(r"(?:categories|category|tags):\s*(?:\[(.*?)\]|(.+))", yaml, re.I)
                if m:
                    raw = (m.group(1) or m.group(2) or '').strip()
                    items = [s.strip().lower() for s in raw.replace('[','').replace(']','').split(',') if s.strip()]
                    return items
                # list-style
                lines = [l.strip() for l in yaml.splitlines() if l.strip().startswith('- ')]
                if lines:
                    return [l[2:].strip().lower() for l in lines]
    except Exception:
        pass
    return []


def main():
    docs = load_index()
    if not docs:
        print('No documents loaded; aborting')
        return

    # Only consider posts directory for category population
    posts = [d for d in docs if ('/posts/' in (d.get('url','')) or (d.get('url','') or '').startswith('posts/'))]
    for cat,fn in CATEGORY_FUNCS.items():
        matched = []
        for d in posts:
            # prefer explicit front-matter in local .md
            fm = read_front_matter_local(d)
            if fm and cat in fm:
                matched.append((d, 'front-matter'))
                continue
            if fn(d):
                matched.append((d, 'keywords'))
        print(f'== {cat.upper()} ({len(matched)}) ==')
        for d,reason in matched:
            title = d.get('title') or d.get('id')
            url = d.get('url') or d.get('id')
            status = check_url(url)
            status_str = str(status) if status else 'NO RESPONSE'
            print(f'- {title} -> {url} ({status_str}) [{reason}]')
            # suggest tags if no front-matter
            if reason == 'keywords':
                # print a suggested front-matter categories line
                suggestion = f'categories: [{cat}]'
                print(f'  Suggestion: add front-matter to {url}:\n  ---\n  {suggestion}\n  ---')
        print()

if __name__ == '__main__':
    main()
