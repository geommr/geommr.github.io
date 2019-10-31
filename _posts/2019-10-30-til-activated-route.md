---
layout: post
title:  "TIL: Subscribe to ActivatedRoute Params"
date:   2019-10-30
excerpt: "To always get the current parameter. "
category: til
categoryText: Today I Learned
tag:
- angular 
- code
- TIL
---
I Came across the following piece of code while refactoring, which was causing a weird behaviour while routing:

{% highlight js %} ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.doSomething(id);
} {% endhighlight %}

The relevant item with id `id` was being fetched and displayed, but on route change (same parent route, i.e. "/items/:id") the `id` wasn't *"surprised face"* being updated anymore, so no new requests were sent.

Subscription for the rescue:

{% highlight js %} ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.doSomething(params.id);
    });
} {% endhighlight %}