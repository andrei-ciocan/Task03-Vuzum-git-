'use strict';

$(document).ready(function (){

function Slider() {
    this.colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50','#f06c64','#66FF00','#9900CC','#003300'];
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
    }.bind(this));

    this.$previous.click(function(){
        this.previous();
    }.bind(this));
}

Slider.prototype.next = function next() {
        this.$slider.css({'background': '' + this.colors[Math.floor(Math.random() * this.colors.length)]});
        this.slideTransitionLeft(function(){
        }.bind(this));      
   
}


Slider.prototype.previous = function previous() {
     this.$slider.css({'background': '' + this.colors[Math.floor(Math.random() * this.colors.length)]});
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
    }.bind(this));

}

Slider.prototype.slideTransitionRight = function slideTransitionRight(callback) {
    if(this.currentSlide != 1)
    this.$slideContainer.stop().animate({'margin-left': '+='+this.width}, this.animationSpeed, function() {
        
        if(this.currentSlide === 1){
            this.$slideContainer.css('margin-left',5*this.$slideLength);
        }
        else
            this.currentSlide--;
        callback();
    }.bind(this));

}


$(function(){
    new Slider();
});

});