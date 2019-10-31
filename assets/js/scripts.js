//dlmenu
(function($,window,undefined){var Modernizr=window.Modernizr,$body=$("body");$.DLMenu=function(options,element){this.$el=$(element);this._init(options)};$.DLMenu.defaults={animationClasses:{classin:"dl-animate-in-1",classout:"dl-animate-out-1"},onLevelClick:function(el,name){return false},onLinkClick:function(el,ev){return false}};$.DLMenu.prototype={_init:function(options){this.options=$.extend(true,{},$.DLMenu.defaults,options);this._config();var animEndEventNames={"WebkitAnimation":"webkitAnimationEnd",
"OAnimation":"oAnimationEnd","msAnimation":"MSAnimationEnd","animation":"animationend"},transEndEventNames={"WebkitTransition":"webkitTransitionEnd","MozTransition":"transitionend","OTransition":"oTransitionEnd","msTransition":"MSTransitionEnd","transition":"transitionend"};this.animEndEventName=animEndEventNames[Modernizr.prefixed("animation")]+".dlmenu";this.transEndEventName=transEndEventNames[Modernizr.prefixed("transition")]+".dlmenu",this.supportAnimations=Modernizr.cssanimations,this.supportTransitions=
Modernizr.csstransitions;this._initEvents()},_config:function(){this.open=false;this.$trigger=this.$el.children(".dl-trigger");this.$menu=this.$el.children("ul.dl-menu");this.$menuitems=this.$menu.find("li:not(.dl-back)");this.$el.find("ul.dl-submenu").prepend('<li class="dl-back"><a href="#">back</a></li>');this.$back=this.$menu.find("li.dl-back")},_initEvents:function(){var self=this;this.$trigger.on("click.dlmenu",function(){if(self.open)self._closeMenu();else self._openMenu();return false});this.$menuitems.on("click.dlmenu",
function(event){event.stopPropagation();var $item=$(this),$submenu=$item.children("ul.dl-submenu");if($submenu.length>0){var $flyin=$submenu.clone().css("opacity",0).insertAfter(self.$menu),onAnimationEndFn=function(){self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass("dl-subview");$item.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview");$flyin.remove()};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classin);
self.$menu.addClass(self.options.animationClasses.classout);if(self.supportAnimations)self.$menu.on(self.animEndEventName,onAnimationEndFn);else onAnimationEndFn.call();self.options.onLevelClick($item,$item.children("a:first").text())});return false}else self.options.onLinkClick($item,event)});this.$back.on("click.dlmenu",function(event){var $this=$(this),$submenu=$this.parents("ul.dl-submenu:first"),$item=$submenu.parent(),$flyin=$submenu.clone().insertAfter(self.$menu);var onAnimationEndFn=function(){self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
$flyin.remove()};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classout);self.$menu.addClass(self.options.animationClasses.classin);if(self.supportAnimations)self.$menu.on(self.animEndEventName,onAnimationEndFn);else onAnimationEndFn.call();$item.removeClass("dl-subviewopen");var $subview=$this.parents(".dl-subview:first");if($subview.is("li"))$subview.addClass("dl-subviewopen");$subview.removeClass("dl-subview")});return false})},closeMenu:function(){if(this.open)this._closeMenu()},
_closeMenu:function(){var self=this,onTransitionEndFn=function(){self.$menu.off(self.transEndEventName);self._resetMenu()};this.$menu.removeClass("dl-menuopen");this.$menu.addClass("dl-menu-toggle");this.$trigger.removeClass("dl-active");if(this.supportTransitions)this.$menu.on(this.transEndEventName,onTransitionEndFn);else onTransitionEndFn.call();this.open=false},openMenu:function(){if(!this.open)this._openMenu()},_openMenu:function(){var self=this;$body.off("click").on("click.dlmenu",function(){self._closeMenu()});
this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName,function(){$(this).removeClass("dl-menu-toggle")});this.$trigger.addClass("dl-active");this.open=true},_resetMenu:function(){this.$menu.removeClass("dl-subview");this.$menuitems.removeClass("dl-subview dl-subviewopen")}};var logError=function(message){if(window.console)window.console.error(message)};$.fn.dlmenu=function(options){if(typeof options==="string"){var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=
$.data(this,"dlmenu");if(!instance){logError("cannot call methods on dlmenu prior to initialization; "+"attempted to call method '"+options+"'");return}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for dlmenu instance");return}instance[options].apply(instance,args)})}else this.each(function(){var instance=$.data(this,"dlmenu");if(instance)instance._init();else instance=$.data(this,"dlmenu",new $.DLMenu(options,this))});return this}})(jQuery,window);

//goup
(function(e){function t(e,t,n){if(t=="show"){switch(n){case"fade":e.fadeIn();break;case"slide":e.slideDown();break;default:e.fadeIn()}}else{switch(n){case"fade":e.fadeOut();break;case"slide":e.slideUp();break;default:e.fadeOut()}}}e.goup=function(n){var r=e.extend({location:"right",locationOffset:20,bottomOffset:10,containerSize:40,containerRadius:10,containerClass:"goup-container",arrowClass:"goup-arrow",alwaysVisible:false,trigger:500,entryAnimation:"fade",goupSpeed:"slow",hideUnderWidth:500,containerColor:"#000",arrowColor:"#fff",title:"",titleAsText:false,titleAsTextClass:"goup-text"},n);e("body").append('<div style="display:none" class="'+r.containerClass+'"></div>');var i=e("."+r.containerClass);e(i).html('<div class="'+r.arrowClass+'"></div>');var s=e("."+r.arrowClass);if(r.location!="right"&&r.location!="left"){r.location="right"}if(r.locationOffset<0){r.locationOffset=0}if(r.bottomOffset<0){r.bottomOffset=0}if(r.containerSize<20){r.containerSize=20}if(r.containerRadius<0){r.containerRadius=0}if(r.trigger<0){r.trigger=0}if(r.hideUnderWidth<0){r.hideUnderWidth=0}var o=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;if(!o.test(r.containerColor)){r.containerColor="#000"}if(!o.test(r.arrowColor)){r.arrowColor="#fff"}if(r.title===""){r.titleAsText=false}var u={};u={position:"fixed",width:r.containerSize,height:r.containerSize,background:r.containerColor,cursor:"pointer"};u["bottom"]=r.bottomOffset;u[r.location]=r.locationOffset;u["border-radius"]=r.containerRadius;e(i).css(u);if(!r.titleAsText){e(i).attr("title",r.title)}else{e("body").append('<div class="'+r.titleAsTextClass+'">'+r.title+"</div>");var a=e("."+r.titleAsTextClass);e(a).attr("style",e(i).attr("style"));e(a).css("background","transparent").css("width",r.containerSize+40).css("height","auto").css("text-align","center").css(r.location,r.locationOffset-20);var f=e(a).height()+10;e(i).css("bottom","+="+f+"px")}var l={};var c=.25*r.containerSize;l={width:0,height:0,margin:"0 auto","padding-top":Math.ceil(.325*r.containerSize),"border-style":"solid","border-width":"0 "+c+"px "+c+"px "+c+"px","border-color":"transparent transparent "+r.arrowColor+" transparent"};e(s).css(l);var h=false;e(window).resize(function(){if(e(window).outerWidth()<=r.hideUnderWidth){h=true;t(e(i),"hide",r.entryAnimation);if(a)t(e(a),"hide",r.entryAnimation)}else{h=false;e(window).trigger("scroll")}});if(e(window).outerWidth()<=r.hideUnderWidth){h=true;e(i).hide();if(a)e(a).hide()}if(!r.alwaysVisible){e(window).scroll(function(){if(e(window).scrollTop()>=r.trigger&&!h){t(e(i),"show",r.entryAnimation);if(a)t(e(a),"show",r.entryAnimation)}if(e(window).scrollTop()<r.trigger&&!h){t(e(i),"hide",r.entryAnimation);if(a)t(e(a),"hide",r.entryAnimation)}})}else{t(e(i),"show",r.entryAnimation);if(a)t(e(a),"show",r.entryAnimation)}if(e(window).scrollTop()>=r.trigger&&!h){t(e(i),"show",r.entryAnimation);if(a)t(e(a),"show",r.entryAnimation)}var p=true;e(i).add(a).on("click",function(){if(p){p=false;e("html,body").animate({scrollTop:0},r.goupSpeed,function(){p=true})}return false})}})(jQuery)
//fitvid
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(){var e=t(this);if(!(e.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/a;if(!e.attr("name")){var o="fitvid"+t.fn.fitVids._count;e.attr("name",o),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto);
// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});
