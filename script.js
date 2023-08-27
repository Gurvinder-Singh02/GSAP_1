// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function init() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", (dets) => {

    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top = dets.y + "px";

})

var video = document.querySelector("video");
video.addEventListener("mouseenter", () => {
    crsr.style.width = "60px";
})
video.addEventListener("mouseleave", () => {
    crsr.style.width = "20px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 2
    }
})

tl.to(".page1 h1", {
    x: -80,
}, "anim")

tl.to(".page1 h2", {
    x: 80,
}, "anim")

tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -300%",
        end: "top -310%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#000"
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", () => {
        elem.style.backgroundColor = "red";
        var img = elem.getAttribute("data-image");
        crsr.style.width = "300px";
        crsr.style.height = "250px";
        crsr.style.backgroundImage = `url(${img})`;
    })
})
boxes.forEach(function (elem) {
    elem.addEventListener("mouseleave", () => {
        elem.style.backgroundColor = "black";
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.backgroundImage = ``;
    })
})