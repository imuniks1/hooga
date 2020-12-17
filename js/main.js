var map;
function initMap() {
    'use strict';
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(41.8156996,-71.4505261),
        mapTypeId: 'roadmap',
        styles: [{
            stylers: [{
                saturation: 0
            }]
        }]
    });
    var icon = {
        url: 'images/marker.png',
        scaledSize: new google.maps.Size(30, 30),
    };
    var features = [{
        position: new google.maps.LatLng(41.817135, -71.444421),
        type: 'icon'
    }];
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icon,
            map: map
        });
    });
}
var vm = new Vue ({
    el: ".wrapper",
    vuetify: new Vuetify(),
    data: {
        showBurger: false,
        showFilter: false,
        showSignIn: false,
        showCart: false,
        min: 0,
        max: 4999,
        slider: 40,
        range: [0, 5000],
        passwordFieldType: 'password',
        newPasswordFieldType: 'password',
        swiperOptionTop: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        swiperOptionThumbs: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
        }
    },
    methods: {
        toggleClass(event) {
            event.target.nextElementSibling.classList.toggle('active');
        },
        togglePassword() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },
        toggleNewPassword() {
            this.newPasswordFieldType = this.newPasswordFieldType === 'password' ? 'text' : 'password'
        }
    }
});

// slider-product
