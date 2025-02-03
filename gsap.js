/* page1 */

gsap.registerPlugin(ScrollTrigger);


let pages = gsap.utils.toArray(".page1");

pages.forEach((page1, i) => {
    ScrollTrigger.create({
        trigger: page1,
        onEnter:() => {
            gsap.to(".page1 .tra", {opacity:"0", duration:0.9})
        },
        onLeaveBack:() => {
            gsap.to(".page1 .tra", {opacity:"1", duration:0.9})
        },
        start: "top 20%",
        endTrigger: ".section1 .card2",
        end: "top +=180",
        pin: true, 
        scrub: 2,
        pinSpacing: false 
    });
});

/* page1 */


/* section2 */

const section2 = document.querySelector('.section2');
const h3Text = document.querySelector('.section_bg h3');


let tc = gsap.timeline({
    scrollTrigger: {
        trigger: section2,
        start: "top top", // 스크롤 시작 위치
        end: "bottom+=2000", // 끝나는 위치 (스크롤이 조금 더 내려가게 설정)
        scrub: true,  // 스크롤과 동기화
        pin: section2, // 배경 고정
    }
});

// h3의 opacity와 top 변경 애니메이션
tc.to(h3Text, {
    opacity: 1,      // opacity 0에서 1로 변경        
    duration: 4,     // 애니메이션 duration
    ease: "none",    // easing 없음 (기본 속도 유지)
});

/* section2 */








/* section2 */

