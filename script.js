const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function firstPageAnim() {
//     var tl = gsap.timeline();

//     tl.from("#nav", {
//         y: '-10',
//         opacity: 0,
//         duration: 1.5,
//         ease: Expo.easeInOut
//     })
//         .to(".bondingelem", {
//             y: 0,
//             duration: 2,
//             ease: Expo.easeInOut,
//             stagger: .2
//         })
// }

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.easeInOut"
    })
    .to(".bondingelem", {
        y: 0,
        ease: "expo.easeInOut",
        duration: 2,
        delay: -1
        stagger: 0.2
    })
    .from("#hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1
        ease: "expo.easeInOut"
    })
}


function circleMouseFollower() {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

circleMouseFollower();
firstPageAnim();
