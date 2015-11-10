---
layout: default
title: Skills
permalink: /skills/
---

<div class="row">
	<div class="col-lg-12">
	   <h1 class="page-heading">Technical Skills</h1>
   </div>
</div>

{% for skill in site.data.skills %}
<div class="row">
	<div class="col-lg-4">
	    {{ skill.skill }}
	</div>
	<div class="col-lg-8">
	<div class="progress">
	<div class="progress-bar" role="progressbar" aria-valuenow="{{ skill.progress }}" aria-valuemin="0" aria-valuemax="100"
	style="width: {{ skill.progress }}%;">
	{{ skill.progress }}%
	</div>
	</div>
	</div>
</div>
{% endfor %}

