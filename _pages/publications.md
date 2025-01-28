---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can find my publications on <a href="https://figshare.com/authors/Burak_Erdil_Bi_er/20504651" target="_blank">Figshare</a>.</div>
{% endif %}

{% include base_path %}

<h2>Journal Articles</h2>
<div class="publications">
  {% for post in site.publications reversed %}
    {% if post.type == "journal" %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
</div>

<h2>Conference Papers</h2>
<div class="publications">
  {% for post in site.publications reversed %}
    {% if post.type == "conference" %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
</div>

<h2>Preprints & Working Papers</h2>
<div class="publications">
  {% for post in site.publications reversed %}
    {% if post.type == "preprint" %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
</div>

<style>
.publications {
  margin-bottom: 2em;
}

.publications .archive__item-title {
  margin-top: 1em;
  font-size: 1em;
}

.publications .archive__item-excerpt {
  margin-top: 0.5em;
  font-size: 0.9em;
  line-height: 1.5;
}

.wordwrap {
  margin-bottom: 2em;
  padding: 1em;
  background: #f8f9fa;
  border-radius: 4px;
}

.wordwrap a {
  color: #2a76dd;
  text-decoration: none;
}

.wordwrap a:hover {
  text-decoration: underline;
}
</style>
