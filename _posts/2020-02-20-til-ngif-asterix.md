---
layout: post
title:  "TIL: What the asterix in *ngIf is for"
date:   2020-02-20
excerpt: ""
category: til
categoryText: Today I Learned
tag:
- angular 
- code
- TIL
---
The following snippets are equivalent:

{% highlight html %}
<div *ngIf="let item of items">
  {% raw %} {{item.name}} {% endraw %}
</div>
{% endhighlight %}

{% highlight html %}
<ng-template [ngIf]="let item of items">
  <div>
    {% raw %} {{item.name}} {% endraw %}
  </div>
</ng-template>
{% endhighlight %}

`*ngIf` is syntactic suger for not having to wrap our `<div>` in `<ng-template>`, the directive itself is still being used under the hood as a bound property.

Similar is the case with `*ngFor` (with extra directives).