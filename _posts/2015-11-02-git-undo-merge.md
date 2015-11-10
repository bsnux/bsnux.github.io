---
layout: post
title:  "git undo a merge with conflicts"
date:   2015-11-02
tags: git, dev
---

When you merge a branch into another one and then conflicts appear you can come back
to inital state running the following command:

{% highlight ruby %}
git merge --abort
{% endhighlight %}

If you're using `git` previous to version *1.7.4* then you can run the next command:

{% highlight ruby %}
git reset --merge
{% endhighlight %}



