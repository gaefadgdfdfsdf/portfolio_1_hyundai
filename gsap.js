 
gsap.registerPlugin(ScrollTrigger);
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((section, i) => {
            ScrollTrigger.create({
                trigger:section,
                start:'top top',
                pin:true,
                /*
                    1.핀 고정 시 공간 처리:
                    false로 설정하면 핀으로 고정된 요소가 차지하는 공간을 제거합니다.
                    즉, 스크롤 시 다음 섹션이 바로 위로 올라오게 됩니다.
                    2.연속적인 스크롤 효과:
                    각 섹션이 서로 붙어있는 듯한 효과를 만들어냅니다.
                    사용자가 스크롤할 때 부드럽게 다음 섹션으로 전환되는 느낌을 줍니다.
                    3. 레이아웃 영향:
                    핀 고정된 요소 아래의 콘텐츠가 자연스럽게 흐르도록 합니다.
                    페이지 전체 길이에 영향을 주어 스크롤 동작을 더 예측 가능하게 만듭니다.
                    이 설정은 특히 전체 화면 섹션을 순차적으로 보여주는 디자인에 효과적입니다. 각 섹션이 화면에 꽉 차게 표시되고, 스크롤 시 다음 섹션이 부드럽게 나타나는 효과를 만들 수 있습니다.
                */
                pinSpacing:false,
                markers:true,
            })
            // ScrollTrigger.create({
            //     snap : 1 / (section.length - 1) // 탑에 좀 더 달라붙는다는데 잘 모르겠음
            // })
        })
    }, []);