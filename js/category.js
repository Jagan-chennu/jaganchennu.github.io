// category.js - auto-populate category pages from search-index.json
// Usage: set window.CATEGORY = 'devops' | 'cloud' | 'random' | 'aws' | 'azure' before including this script

(function(){
  async function tryFetch(paths){
    for(const p of paths){
      try{
        const res = await fetch(p);
        if(!res.ok) continue;
        const data = await res.json();
        return data.documents || [];
      }catch(e){
        // try next
      }
    }
    console.error('Could not load search-index.json from tried paths:', paths);
    return [];
  }

  async function loadIndex(){
    const candidates = ['/search-index.json','search-index.json','./search-index.json'];
    return await tryFetch(candidates);
  }

  function isPostUrl(doc){
    const u = (doc.url || '').toString();
    return u.includes('/posts/') || u.startsWith('posts/');
  }

  async function fetchFrontMatter(doc){
    try{
      const url = doc.url || '';
      // try to fetch a markdown source: prefer .md if available
      let mdPath = url;
      if(mdPath.endsWith('.html')) mdPath = mdPath.replace(/\.html$/, '.md');
      // try multiple candidate paths
      const candidates = [mdPath, ('/' + mdPath).replace(/\/g,'/')];
      for(const p of candidates){
        try{
          const res = await fetch(p);
          if(!res.ok) continue;
          const text = await res.text();
          if(text.trim().startsWith('---')){
            const parts = text.split('---');
            if(parts.length >= 3){
              const yaml = parts[1];
              // crude YAML parsing for categories/tags
              const m = yaml.match(/(?:categories|category|tags):\s*(?:\[(.*?)\]|(.+))/i);
              if(m){
                const raw = (m[1] || m[2] || '').trim();
                // split comma-separated or space-separated
                const items = raw.replace(/\[|\]/g,'').split(/,|\n/).map(s=>s.trim().toLowerCase()).filter(Boolean);
                return items;
              }
              // also handle list style: lines starting with -
              const listMatches = yaml.split(/\r?\n/).map(l=>l.trim()).filter(l=>l.startsWith('- ')).map(l=>l.replace(/^-\s*/,'').toLowerCase());
              if(listMatches.length) return listMatches;
            }
          }
        }catch(e){
          // ignore and try next
        }
      }
    }catch(e){/* nop */}
    return [];
  }

  function matchesCategory(doc, category){
    const text = ((doc.title||'') + ' ' + (doc.content||'')).toLowerCase();
    const devopsKeys = ['docker','container','containers','kubernetes','ci','cd','git','devops','jenkins','ansible','terraform'];
    const cloudKeys = ['cloud','gcp','cloudformation','infrastructure','serverless'];
    if(category === 'devops'){
      return devopsKeys.some(k=> text.includes(k));
    }
    if(category === 'cloud'){
      // generic cloud matches (includes providers)
      return ['aws','azure','gcp'].some(p=> text.includes(p)) || cloudKeys.some(k=> text.includes(k));
    }
    if(category === 'aws'){
      return ['aws','amazon','ec2','s3','lambda','cloudfront','route53','iam','ebs','ecr','elastic beanstalk','cloudformation'].some(k=> text.includes(k));
    }
    if(category === 'azure'){
      return ['azure','microsoft','aks','app service','appservice','functions','blob storage','vm','cosmos','resource manager','services'].some(k=> text.includes(k));
    }
    if(category === 'random'){
      const randomKeys = ['grep','permission','permissions','shell','scripting','security','news','random','tips','tricks','automation','tutorial','guide'];
      const isRandom = randomKeys.some(k=> text.includes(k));
      const isDevops = devopsKeys.some(k=> text.includes(k));
      const isCloud = ['cloud','aws','azure','gcp'].some(k=> text.includes(k));
      return isRandom || (!isDevops && !isCloud);
    }
    return false;
  }

  function buildCard(doc){
    const anchor = document.createElement('a');
    anchor.className = 'post-card';
    anchor.setAttribute('role','article');
    anchor.href = doc.url || '#';

    const img = document.createElement('div');
    img.className = 'post-image';
    const t = ((doc.title||'') + ' ' + (doc.content||'')).toLowerCase();
    let emoji = '📝';
    if(/docker|container/.test(t)) emoji = '🐳';
    else if(/git|version control/.test(t)) emoji = '🔀';
    else if(/grep|search/.test(t)) emoji = '🔍';
    else if(/shell|script/.test(t)) emoji = '⌨️';
    else if(/permission|security|chmod|chown/.test(t)) emoji = '🔐';
    else if(/aws|ec2|s3|lambda/.test(t)) emoji = '☁️';
    else if(/azure|microsoft/.test(t)) emoji = '☁️';
    img.textContent = emoji;

    const content = document.createElement('div');
    content.className = 'post-content';

    const h3 = document.createElement('h3');
    h3.className = 'post-title';
    h3.textContent = doc.title || '';

    const p = document.createElement('p');
    p.className = 'post-excerpt';
    p.textContent = (doc.content || '').slice(0,180).trim() + '...';

    content.appendChild(h3);
    content.appendChild(p);

    anchor.appendChild(img);
    anchor.appendChild(content);

    return anchor;
  }

  async function populate(){
    const category = (window.CATEGORY || '').toLowerCase();
    if(!category) return;
    const docs = await loadIndex();
    const container = document.getElementById('category-posts');
    if(!container) return;

    // Only consider posts (avoid listing site index/about pages)
    const postDocs = docs.filter(isPostUrl);

    // fetch front-matter for posts and prefer explicit categories when present
    const withFM = await Promise.all(postDocs.map(async d=>{
      const fm = await fetchFrontMatter(d);
      return Object.assign({}, d, {frontMatterCategories: fm});
    }));

    const filtered = withFM.filter(d=>{
      const fm = d.frontMatterCategories || [];
      if(fm.length){
        return fm.includes(category);
      }
      return matchesCategory(d, category);
    });
    if(!filtered.length){
      container.innerHTML = '<p>No posts found for this category yet.</p>';
      return;
    }

    container.innerHTML = '';
    filtered.forEach(doc => {
      const card = buildCard(doc);
      container.appendChild(card);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
})();
