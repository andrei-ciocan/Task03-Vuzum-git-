'use strict';
function Slider() {
   
    this.animationSpeed=1000;
    this.currentSlide=1;
    this.$slider=$('.slider');
    this.$previous=$('.slider-container .slider_arrow-left');
    this.$next=$('.slider-container .slider_arrow-right');
    this.$slideContainer= this.$slider.find('.slides');
    this.$slides = this.$slideContainer.find('.slide');
    this.$slideLength=this.$slides.length;
    this.width = $(".slides").width()/this.$slideLength;
    this.interval;
    this.startSlider();

}


Slider.prototype.startSlider = function startSlider() {
     //this.next();
    this.$next.click(function(){
        this.next();
    })

    this.$previous.click(function(){
        this.previous();
    })
}

Slider.prototype.next = function next() {
    
        this.slideTransitionLeft(function(){
        }.bind(this));      
   
}


Slider.prototype.previous = function previous() {
    
        this.slideTransitionRight(function(){
        }.bind(this));      
   
}


Slider.prototype.slideTransitionLeft = function slideTransitionLeft(callback) {
    this.$slideContainer.stop().animate({'margin-left': '-='+this.width}, this.animationSpeed, function() {
        this.currentSlide++;
        if(this.currentSlide === this.$slideLength){
            this.currentSlide=1;
            this.$slideContainer.css('margin-left',0);
        }
        callback();
    });

}

Slider.prototype.slideTransitionRight = function slideTransitionRight(callback) {
    this.$slideContainer.stop().animate({'margin-left': '+='+this.width}, this.animationSpeed, function() {
        this.currentSlide--;
        if(this.currentSlide === 1){
            this.currentSlide=5;
            this.$slideContainer.css('margin-left',this.$slideLength*this.width);
        }
        callback();
    });

}


$(function(){
    new Slider();
});