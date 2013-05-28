function resizeHeadline(){
    var winH = jQuery(window).height();
    var vc = jQuery('.headline .vertically-centered');
    var mainNav = jQuery('.main-navigation');
    jQuery('.headline').height(winH);
    vc.css('margin-top',((winH-vc.height())/2) - mainNav.height());
    refreshMenuPos();
}

function refreshMenuPos(){
    var winH = jQuery(window).height();
    var mainNav = jQuery('.main-navigation');
    var scrollTop = jQuery(window).scrollTop();
    var headline = jQuery('.headline');

    //console.log([scrollTop, winH-]);

    if(scrollTop >= winH-mainNav.height() || headline.length === 0){
        mainNav.addClass('navbar-fixed-top');
        mainNav.removeClass('navbar-absolute-bottom');
        mainNav.css('top', 0);
    }else{
        mainNav.addClass('navbar-absolute-bottom');
        mainNav.removeClass('navbar-fixed-top');
        mainNav.css('top', winH - mainNav.height());
    }
}

jQuery(document).ready(function(){
    resizeHeadline();
    refreshMenuPos();
    jQuery(window).on('resize', resizeHeadline);
    jQuery(window).on('scroll', refreshMenuPos);
    //jQuery('.full-browser-width');
});
