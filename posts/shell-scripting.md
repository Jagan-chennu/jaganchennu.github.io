# Shell Scripting: Automate Your Tasks

Date: January 28, 2026  
Tags: bash, scripting, automation  
Category: Linux Concepts

One of the most powerful skills in Linux is shell scripting. Scripts allow you to automate repetitive tasks, combine multiple commands, and create powerful tools.

## Why Shell Scripting?

- Automate daily tasks (backups, log cleanup)
- Create system administration tools
- Improve productivity exponentially
- Create reproducible processes
- Chain commands together intelligently

## Your First Shell Script

Create a file called `hello.sh`:

```bash
#!/bin/bash

# This is a comment
echo "Hello, World!"
echo "Welcome to shell scripting!"
```

Make it executable and run it:

```bash
$ chmod +x hello.sh
$ ./hello.sh
Hello, World!
Welcome to shell scripting!
```

## Variables

```bash
#!/bin/bash

name="Alice"
age=25
greeting="Hello, $name! You are $age years old."

echo $greeting
# Output: Hello, Alice! You are 25 years old.
```

## Conditionals

```bash
#!/bin/bash

file="myfile.txt"

if [ -f "$file" ]; then
    echo "File exists"
else
    echo "File does not exist"
fi
```

## Loops

### For Loop

```bash
#!/bin/bash

for i in {1..5}; do
    echo "Iteration $i"
done
```

### While Loop

```bash
#!/bin/bash

count=1
while [ $count -le 3 ]; do
    echo "Count: $count"
    count=$((count + 1))
done
```

## Functions

```bash
#!/bin/bash

greet() {
    local name=$1
    echo "Hello, $name!"
}

greet "Alice"
greet "Bob"
```

## Practical Example: Backup Script

```bash
#!/bin/bash

# Simple backup script
source_dir="/home/user/documents"
backup_dir="/backup/daily"
date=$(date +%Y%m%d)

echo "Starting backup..."
cp -r "$source_dir" "$backup_dir/backup_$date"
echo "Backup completed: $backup_dir/backup_$date"
```

## Tips for Writing Better Scripts

- Always use quotes around variables: `"$var"`
- Use meaningful variable names
- Add comments to explain your code
- Handle errors with `set -e`
- Test scripts thoroughly before automation
- Make scripts executable with `chmod +x`

Shell scripting is a valuable skill that will make you significantly more productive. Start small and build up to more complex scripts!
