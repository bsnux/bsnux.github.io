---
layout: post
title:  "Deleting Docker zombies images"
date:   2015-11-04
tags: docker, sysadmin
---

When you're working building *Docker* images and something is wrong, then
*zombies* images can be created. We should clean-up those images because
they're taking room on the hard drive. The following command help us to
do that:

{% highlight ruby %}
docker images | grep 'none' |  awk '{ print $3 }'  | while read x ; do docker rmi $x; done
{% endhighlight %}

Keep in mind that those *zombies* images are identified by `<none>` value in the `REPOSITORY`
column in the output of the `docker ps -a` command.
