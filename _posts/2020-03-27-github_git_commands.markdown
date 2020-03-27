---
layout: post
title:  "Git Commands"
subtitle: "Intro to the GitHub Workflow"
date:   2020-03-27 14:33:00 -0500
categories: tech
background: '/img/posts/bg-default.jpg'
---

If you do not have a GitHub account, I recommend making your free account as soon as possible [here](https://github.com/). It is never too early.

Once you have that account, start exploring. Maybe there is a project you’ve heard of and want to add to.

The first thing you want to do is connect your personal computer to your GitHub with an SSH key. It will allow you to clone projects &  push or pull the changes.

You can find the instructions [here](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

## Forking and Cloning

To work on an existing project, the first thing you want to do is fork the repository. This makes a copy of all the files in that repo and associates them to your GitHub account. You never want to start working on the original repository, unless you are the author of the project or given permission.

One reason for this is to keep track of who is doing what on a project. Another reason is that no changes are allowed on a repository not associated with your account. With the SSH Key, there is a special connection between your machine and GitHub that places a safeguard on repositories. The author has to consent to any changes

![Fork on GitHub]({{ site.baseurl }}/img/posts/fork_highlight.png){:.center-img}

In order to fork a project, you navigate to the repository of that project on GitHub. In the upper right hand corner, you will see a button with the word “Fork” on it. Next to that button is a number that denotes how many times that project has been forked by other people. 

![Pick and Account]({{ site.baseurl }}/img/posts/fork_acct_pick.png){:.center-img}

Once you click this button, you will be asked where you want the forked copy to live. Typically, you should only see your username. In may case, I have had a few projects under my belt. DOn;t be surprised if yours looks similar in the near future.

![Midfork]({{ site.baseurl }}/img/posts/MidFork.png){:.center-img}

You will see an animation stating the process is being completed. When all is said and done, you will be redirected to your forked copy of the repository.

![After Fork]({{ site.baseurl }}/img/posts/AfterFork.png){:.center-img}

What’s next? Let’s clone.

![Clone with SSH]({{ site.baseurl }}/img/posts/clone_with_SSH.png){:.center-img}

![Clone with HTTPS]({{ site.baseurl }}/img/posts/clone_with_HTTPS.png){:.center-img}

Cloning a repo brings all those files down from the GitHub cloud to your computer for manipulation. Any changes made to the files on the computer are not known to the cloud until you send that information back up. 

> What about starting from scratch? I am glad you asked.

An existing project is not required, you can always start from scratch. You can create a new repository on GitHub and it will give you the instructions needed to get started.

The main step for this fresh start is the `git init` command. This command is ran in your terminal in the root directory of the project. It tells Git that it needs to start tracking files in this directory. From here you connect your local files to the online repo. GitHub will provide all those instructions based on how you begin.

## Branching

Now, you may think that once you have those files on your computer, you can get to work. Not quite. Another precaution we can take to ensure we don’t jeopardize anything and allows an easy fall back when we make a mistake is branching. A branch is a copy of the repo on your local machine. Creating a branch allows us to access the current version of the computer and make modification without making them permanent. If we made a mistake on our cloned copy of the project, we may have to completely erase those files and clone again. With Branches, there is no need. On that branch, we can make our modifications and merge them with the original copy once we know we want them for sure.

## Git Commands & Sample Work Flow

So, how do we alert GitHub of these new changes? There are a few steps we can follow for a basic work flow.

Ok, let’s say we have the project on our computer and are ready to get started.

### Let’s create a branch using `git checkout -b example-branch`

We are now on our new branch and can make all those modification our heart desires. Once we save those changes, we run few more commands to let GitHub know we need to update our repository.

### `git status`

Any changes made to the files are not official to your Git until you tell it track those changes.  In order to find out if there are any files that Git is not tracking, we run our git status command. If all is well, the names of the files modified will typically show up in your terminal denoted in green letters. If there are changes not being tracked on a file, the name of that file will appear in read.

### `git add`

In order to tell Git to track the changes of a file, we run the git add command followed by the file name. A clever shortcut available to us is `git add .`; this command adds any and all untracked files to the next round being sent to the cloud.

### `git commit`

Once we have all those changes tracked by git, we need to let git know to go ahead and save this version of the repo. With commit, we can add a message describing what changes have been made. The syntax you want to follow for a commit is as follows: `git commit -m “message describing modification”`

__*Pro Tip*__: When creating a commit description, be sure to add as much detail as possible in the most direct way. This will help you and others in the future. Instead of having to open the previous version of the project and compare it to the current version, this small description will help save you and your team headaches and time if it is done right.

### `git checkout master`

While on our editing branch, we move over to our master branch

### `git pull origin master`

Updates our version of the files with the most recent and approved finalized version. This is a very important step. You may not see your team members actively working in your face so in order to stay up to date, always pull before you send your changes up.

### `git merge {branch_name}`

Once we have those updated changes pulled down from the cloud, we go ahead and merge our changes to our master copy. We then merge our changes from our editing branch into our master copy on our machine by running `git merge example_branch`. From here, we will be alerted of any confections between our code updates and the master copy. We can then make those adjustments and send it to GitHub.

### `git push origin master`

This command is final conformation. It takes the modifications you made on the file, the description of what happened, the timestamp, and the author of the contributions to GitHub. Now others have access to your changes.

Now we can see all our changes on our GitHub repository of that project. We just need to let the author of that project know so they can review and possibly even use our contributions. In order to do this, we create what we call a pull request. A pull request alerts the author so he or she can review the changes. If they approve of the changes, they can go ahead and merge your changes into the final project.

This cycle can be repeated as many times as you like during a project. I recommend adding and committing often. Any time you finish one piece of the project, commit those changes. This will be a lot easier to keep track of and allows for an easier understanding of what is going on.

I also recommend starting the use of these commands as soon as possible, even on your own projects. The work flow may differ based on who you work for or what works best for you, but one way or another these commands will come up.

__*Pro Tip*__: trouble shooting Git and its commands can be as simple as a google search. Since Git is so popular, someone has ran into the same situation one way or another. The online community is a key resource with troubleshooting. Search engines are our allies.
