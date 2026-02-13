---
categories: [random]
---

# Understanding Linux File Permissions

Date: February 5, 2026  
Tags: linux, security, permissions  
Category: Linux Concepts

File permissions are fundamental to Linux security. Whether you're a system administrator or a regular user, understanding how permissions work is crucial.

## What Are File Permissions?

File permissions determine who can read (r), write (w), or execute (x) a file or directory. There are three categories of users:

- **Owner (User):** The person who created the file
- **Group:** A set of users with shared permissions
- **Others:** Everyone else on the system

## Reading Permission Notation

When you run `ls -l`, you see something like:

```bash
-rw-r--r--  1  john  developers  1024  Feb 5  10:30  file.txt
drwxr-xr-x  2  john  developers  4096  Feb 4  15:45  directory
```

Breaking down `-rw-r--r--`:

- `-` = Regular file (d = directory, l = symlink)
- `rw-` = Owner permissions (read, write, no execute)
- `r--` = Group permissions (read only)
- `r--` = Others permissions (read only)

## Changing Permissions with chmod

### Symbolic Method

```bash
$ chmod u+x file.txt        # Add execute for owner
$ chmod g+w file.txt        # Add write for group
$ chmod o-r file.txt        # Remove read for others
$ chmod a+r file.txt        # Add read for all
```

### Numeric Method

```bash
4 = read (r)
2 = write (w)
1 = execute (x)

$ chmod 755 directory       # rwx r-x r-x
$ chmod 644 file.txt        # rw- r-- r--
$ chmod 777 shared-folder   # rwx rwx rwx (not recommended!)
```

## Changing Ownership with chown

```bash
$ chown newowner file.txt           # Change owner
$ chown newowner:newgroup file.txt  # Change owner and group
$ chown -R newowner directory       # Change recursively
```

## Best Practices

- Never give unnecessary permissions to "Others"
- Use group permissions to share access securely
- Regularly audit file permissions on critical files
- Use `644` for regular files, `755` for executables
- Be careful with `chmod 777` - it's a security risk

## Real-World Scenarios

### Scenario: Protect Sensitive Configuration File

```bash
$ chmod 600 /etc/myapp/secrets.conf  # Owner read/write only
$ chown myapp:myapp /etc/myapp/secrets.conf
```

### Scenario: Share Script with Team

```bash
$ chmod 755 deploy.sh              # Owner: rwx, Others: r-x
$ chown developer:team deploy.sh   # Set group ownership
```

Master these concepts and you'll have a solid foundation in Linux security!
