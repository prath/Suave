function resizeHeadline(){
    var winH = jQuery(window).height();
    var vc = jQuery('.headline .vertically-centered');
    var mainNav = jQuery('.main-navigation');
    jQuery('.headline').height(winH);
    vc.css('margin-top',(( winH - mainNav.height() - vc.height() )/2));
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


function switchDropdownPosition(){
    if(jQuery('.headline').length == 1){
        var headlineHeight  = jQuery('.headline').height();
        var scrollTop       = jQuery(window).scrollTop();
        if(headlineHeight/2 > scrollTop){
            jQuery('.main-navigation li.dropdown').removeClass('dropdown').addClass('dropup');
        }else{
            jQuery('.main-navigation li.dropup').removeClass('dropup').addClass('dropdown');
        }
    }
}

jQuery(document).ready(function(){
    resizeHeadline();
    refreshMenuPos();
    switchDropdownPosition();
    jQuery(window).on('resize', resizeHeadline);
    jQuery(window).on('resize', switchDropdownPosition);
    jQuery(window).on('scroll', refreshMenuPos);
    jQuery(window).on('scroll', switchDropdownPosition);
});
