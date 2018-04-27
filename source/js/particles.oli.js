$(function () {

    particlesJS("particles-oli-wrapper", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#399c9c"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                // "image": {
                //     "src": "img/github.svg",
                //     "width": 100,
                //     "height": 100
                // }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 20,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#40afaf",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 100,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },

            }
        },
        "retina_detect": true
    });

    var $particle = $('#particles-oli-wrapper').css({ display: 'none' }).removeClass('hide');
    var $navH1 = $('.index-wrapper header h1, .index-wrapper header nav').hide();

    var $header = $('.index-wrapper .hide')
                    .removeClass('hide')
                    .css({
                        height: 0
                    })
                    .animate({
                        height: 120
                    }, 800, function() {
                        $particle.fadeIn(600);
                        $navH1.fadeIn(600);
                    });

    $('.head-nav__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        
        $particle.fadeOut(600);
        $navH1.fadeOut(100);

        $header.animate({
            height: 0
        }, 800, function() {
            window.location.href = $this.attr('href');
        });
    });

});
