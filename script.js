/* hyndai 로고 */

document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('#hyundai div');
    
    divs.forEach(function(div, index) {
        // 각 div의 애니메이션 딜레이 설정
        div.style.animationDelay = `${index * 0.1}s`; // 0.1초씩 딜레이를 주어 하나씩 순차적으로 올라오게
    });
});

/* hyndai 로고 */



/* 모바일 네비게이션 드롭다운 */


document.addEventListener("DOMContentLoaded", function(){
    const lists = document.querySelectorAll(".menu-list .list");

    lists.forEach((item) => {
        item.addEventListener("click", function(){
            if(window.innerWidth <= 960){
                this.classList.toggle("active");
            }
        });
    });

})


/* 모바일 네비게이션 드롭다운 */


/* MODEL 탭바 */


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabList button');
    const imageBox = document.querySelector('.carBox .box1 .image-box');
    const imageBoxText = document.querySelector('.carBox .box1 .image-box h3');
    const boxBg = document.querySelector('.carBox .box2 .boxbg');
    const boxText = document.querySelector('.carBox .box2 .boxtext p');

    const tabData = {
        all: {
            imageBoxUrl: 'img/avantae.jpg',  
            imageBoxText : '1위. 아반떼',
            boxBgUrl: 'img/santanpae.jpg',  
            boxBgText : '2위. 싼타페',
            boxText: '최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.' 
        },
        '20s-30s': {
            imageBoxUrl: 'img/palisade.jpg',
            imageBoxText : '1위. 디 올 뉴 팰리세이드',
            boxBgUrl: 'img/ionic.jpg',
            boxBgText : '2위. 아이오닉',
            boxText: '2~30대 고객님들이 선호하는 모델입니다.'  
        },
        '40s': {
            imageBoxUrl: 'img/sonata.jpg',
            imageBoxText : '1위. 쏘나타',
            boxBgUrl: 'img/casper.jpg',
            boxBgText : '2위. 캐스퍼',
            boxText: '40대 고객님들이 많이 구매한 모델입니다.'  
        },
        '50s': {
            imageBoxUrl: 'img/ssantapae.jpg',
            imageBoxText : '1위. 싼타페',
            boxBgUrl: 'img/ionic.jpg',
            boxBgText : '2위. 아이오닉',
            boxText: '50대 고객님들이 많이 구매한 모델입니다.' 
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const selectedTab = tab.getAttribute('data-tab');
            const data = tabData[selectedTab];
            
           
            imageBox.style.backgroundImage = `url(${data.imageBoxUrl})`;
            boxBg.style.backgroundImage = `url(${data.boxBgUrl})`;
            boxBg.innerHTML = `${data.boxBgText}`;
            boxText.textContent = data.boxText;
            imageBoxText.textContent = data.imageBoxText;
        });
    });
});

/* MODEL 탭바 */




/* 패밀리 사이트 */


document.addEventListener('DOMContentLoaded', function() {
    const selectBox = document.querySelector('.select-box');

    selectBox.addEventListener('click', function() {
        // 'active' 클래스를 토글합니다.
        this.classList.toggle('active');
    });
});

/* 패밀리 사이트 */