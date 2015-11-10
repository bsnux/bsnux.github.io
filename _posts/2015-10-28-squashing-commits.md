---
layout: post
title:  "Squashing git commits with rebase"
date:   2015-10-28
tags: git, dev
---

*rebase* git command is very useful for *squashing* different commits into an unique
commit. It helps to reduce the number of commits, specially when all of them are
related to same functionality.

Let's say we want to *squash* last four commits into one. We should execute the following
command:

{% highlight ruby %}
git rebase -i HEAD~4
{% endhighlight %}

The `-i` option means *interactive* git will display which commits we want to pick up and
which will be squashed.
