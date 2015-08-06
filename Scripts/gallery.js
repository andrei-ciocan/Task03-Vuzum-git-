 $(document).ready(function(){

var $image=$('.portofolio_gallery img');
var $zoomArea=$('.portofolio_default_image .portofolio_zoomed_image');

$image.click(function() {
   var src = $(this).attr('src');
   $zoomArea.fadeTo('5000',0.2, function(){
    $zoomArea.attr('src',src);
     $zoomArea.fadeTo('4000',1);

    });
});

});
