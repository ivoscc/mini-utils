/*! Mini-utils 2013-11-26 */
var __bind=function(a,b){return function(){return a.apply(b,arguments)}};define(["./raf"],function(a){var b,c;return b=a.Animation,c=function(){function a(a,b,c){var d,e,f,g,h,i,j,k;for(this.slider=a,this.previous=b,this.next=c,this.simulate_scroll=__bind(this.simulate_scroll,this),j=[this.previous,this.next],f=0,h=j.length;h>f;f++)for(d=j[f],k=["mouseover","mouseout","mousedown","mouseup"],g=0,i=k.length;i>g;g++)e=k[g],d.addEventListener(e,this)}return a.prototype.handleEvent=function(a){var c;switch(c=a.currentTarget,a.type){case"mouseover":return this.update_direction(c,1),this.animation=new b(this.simulate_scroll),this.animation.start();case"mousedown":return this.update_direction(c,2);case"mouseup":return this.update_direction(c,1);case"mouseout":return this.animation.stop()}},a.prototype.update_direction=function(a,b){return a===this.previous?this.direction=-b:a===this.next?this.direction=+b:void 0},a.prototype.simulate_scroll=function(a){return this.slider.scrollLeft+=.48*a*this.direction},a}(),{ScrollArrows:c}});