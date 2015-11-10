---
layout: default
title: Articles
permalink: /articles/
---

<div class="row">
	<div class="col-lg-12">
	   <h1 class="page-heading">Published Articles</h1>
   </div>
</div>

<div class="row">
{% for magazines in site.data.magazines %}
   <h2>{{ magazines[1].magazine }}</h2><h3>Total: {{ magazines[1].num_articles }} articles; ({{ magazines[1].dates }})</h3>
   <ul>
	{% for article in magazines[1].articles %}
		<li>{{ article.title }}</li>
	{% endfor %}
   </ul>
{% endfor %}
</div>

