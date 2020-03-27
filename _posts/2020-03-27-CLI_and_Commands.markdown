---
layout: post
title:  "CLI & its Commands"
date:   2020-03-27 13:27:00 -0500
categories: tech
background: '/img/posts/hacker.jpeg'
---

One of the reasons I fell in love with technology while growing up was seeing the computer whiz in the movies, well specifically the hacking scenes, not even going to lie. I always felt they held the highest power in a group; they seem to be the secret weapon of any team. Everybody looks to them for information, problem-solving, etc. I always wanted to be that person. The thing that excited me the most was that black screen that would pop up with a bunch of different letters and numbers. It seemed to be in a language that only the computer whiz could understand. I needed to learn this secret language.

Well, I have come of age and realized that intimidating yet intriguing screen is the Command Line Interface (CLI).

> First, let's cover something the CLI is NOT.

Have you ever heard of __Window’s Command Line__ or __Power Shell__?

![Window's Command Line and Power Shell Logos]({{ site.baseurl }}/img/posts/notCLI_logos.png){:.center-img}

These names, even some of the operations that can be performed, may cause the wolf to be in sheep’s wool. Nevertheless, these are not programs under the Command Line Interface umbrella we are covering under this subject.

## So , what is the CLI?

These names can be considered synonymous to the CLI:
- Command Line
- Terminal (Mac)
- Git Bash (Windows)
- Bash
- Shell

The names differ based on the operating system. Each you may notice a slight difference in appearances and some operations, but at their root, they are all intended for the same purpose.

CLI is a powerful tool that anyone working with computers will come across. It allows the user to type in commands to the computer and have them performed immediately.  Once you begin to understand the CLI, the need for a mouse almost becomes obsolete. We can perform the same CRUD actions as we would in our GUI (“gooey”).

So this leads to our next question.

## What is the GUI?

It is the nickname we gave our Graphical User Interface. The GUI is the kid-friendly, visually appealing version of the CLI.

On Windows, we call this File Explorer.

![Window's GUI]({{ site.baseurl }}/img/posts/WindowsGUI.jpg){:.center-img}

Mac users are more familiar with their Finder

![Mac GUI]({{ site.baseurl }}/img/posts/MacGUI.jpeg){:.center-img}

I describe the GUI as the kid-friendly version of the command line because it gives us warnings and ensures we want to proceed before completing an action. 

Warning: The CLI will not ask if you are sure. Many of the safeguards we have become familiar with in the GUI do not exist in the CLI.

## So why should you learn it?

Given the gorgeous GUI, it’s easy to question why do we even need the CLI anymore. There are several reasons to make this tool a primary one in your artillery belt. I urge you not to shy away from the terminal because it looks intimidating. I have learned the hard way, hesitating to learn a complex topic is seldom a good idea.

### There is no escape

One way or another, you are going to have to use the CLI on your computer career journey, so start early. I can’t stress this enough. Later we will go over a list of commands I recommend you practice as much as possible and commit to memory. These will be safe commands that will not cause any harm to your computer. Start weaning yourself off of that GUI. It will be worth it in the future.

### Better Computer Control

You get direct communication with your computer; you tell it what to do. You get firm control and understanding of your system, all of its ins and outs.  The more one practices, the more familiar one is with how to navigate through the system. Since most computers have a similar root file structure, you’ll feel right at home on almost any system. 

### Packages!!

Specifically, Node Package Manager (NPM). The best metaphor I have for this is an App Store that gives us access to thousands of tools made from developers to help developers. *There is more to come on this topic in the future.* But the takeaway here is that the CLI is needed for NPM as it does not have its own GUI. (Acronym Test)

### Version Control

Another topic we will deep dive on real soon. Those familiar with Git already know how important it is in the industry. For now, the main takeaway is that the CLI is essential for interaction with Git and Github.

### Run things in the Background 

Take advantage of Task Runners & Preprocessors such as a SASS & LESS.

### Local Backend Development

The CLI allows us to run a local server on our computer for real-time updates without real-world eyes on a premature project. 

## Word to the Wise, Be comfortable & cautious

Get started early!! This can't be addressed enough. Learn to become comfortable with the CLI and its commands early in your journey. Exercise your ability as often as possible. But be cautious with the commands you execute. Ensure you understand what they do and the consequences that may accompany it.

Also, remember that those handy safeguards we have become used to do not exist in the CLI. Confirmation screens and being able to undo something will not always be possible. 

The commands we are about to go over are safe to use. However, that is not always the case. Before copying and pasting a command from the internet, ensure you are aware of what it does and any consequences that may come. Comfortable and cautious.

## Let's practice

> Screen Navigation Commands

- `⌃A` - Moves the cursor to the beginning of the line
- `⌃E` - Moves the cursor to the end of the line
- `⌃U` - Deletes everything to the beginning of the line
- `Option-click` - Moves the cursor to the location clicked
- `clear` - clears the screen
- `exit` - exists the screen

> File Navigation Commands

`ls`

- This command stands for “List”
- Lists all the items found in the current directory
- A fresh terminal starts at the TOP LEVEL or root directory
- A great command for helping figure out where you are if you ever get lost during navigation.
- Note: Names ending without a document type are directories

`cd {directory name}`

- Means “Change Directory”
- Allows us to navigate through directories
- Common Shortcuts:
    - `cd ~` sends us back to root
    - `cd ..` sends us back up one directory

`mkdir {directory name}`

- "Make Directory"
- creates a new directory in the current direct

`touch {new file name and extension}` 

- creates a new blank file 
- Be sure to include the entire file name including the file type

`rm {file name}`

- "Remove"
- Deletes a file 

`man {command}`

- Stands for "Manual"
- Displays the manual page for the command
- If you ever want to know what a command does, this is a handy helper

`echo {string}`	

- Print string to screen
