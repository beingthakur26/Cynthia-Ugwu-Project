const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("nav",{
        y: '10%',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: '0%',
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: 0.2
    })

    .from("#hero-footer",{
        z: '-10%',
        duration: 1.5,
        delay: -1.3,
        opacity: 0,
        ease: Expo.easeInOut
    })
}

// function circleChotaKaro(){
//     var xscale = 1;
//     var yscale = 1;

//     var xprex = 0; 
//     var yprex = 0;

//     window.addEventListener('mousemove', function(dets){;
//         xscale = gsap.util.clamp(0.8, 1.2, dets.clientX - xprex);
//         yscale = gsap.util.clamp(0.8, 1.2, dets.clientY - yprex);

//         xprex = dets.clientX;
//         yprex = dets.clientY;

//         // circleMouseFollow(xscale, yscale)
//     });
// }

function circleMouseFollow(xscale, yscale){
    window.addEventListener('mousemove', function(dets){
        this.document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

// circleChotaKaro();
circleMouseFollow();
firstPageAnimation();

document.querySelectorAll("#elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        });
    });

    elem.addEventListener("mousemove", function(details){

        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

