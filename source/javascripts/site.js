// This is where it all goes :)


// ---- JS Global Compulsory ----
//= require jquery-migrate/jquery-migrate.min
//= require popper.min
//= require bootstrap/bootstrap.min
//= require bootstrap/offcanvas
//= require jquery.easing/js/jquery.easing.min

// ---- JS Implementing Plugins ----
//= require dzsparallaxer/dzsparallaxer
//= require dzsparallaxer/dzsscroller/scroller
//= require dzsparallaxer/advancedscroller/plugin
//= require chosen/chosen.jquery
//= require malihu-scrollbar/jquery.mCustomScrollbar.concat.min
//= require fancybox/jquery.fancybox.min
//= require jquery.maskedinput/src/jquery.maskedinput
//= require gmaps/gmaps.min


//=require unify/offcanvas
//=require unify/hs.core
//=require unify/hs.header
//=require unify/hs.go-to
//=require unify/hs.hamburgers
//=require unify/hs.popup



$(window).on('load', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');
    });

    $(document).on('ready', function () {
            $.HSCore.components.HSGoTo.init('.js-go-to');
});