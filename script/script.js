
const content = document.getElementsByClassName('content');
// 공통 클래스인 content 불러옴
window.addEventListener('scroll', () => {
    // 윈도우에 스크롤 했을 때
    const winH = window.innerHeight;
    // winH = 브라우저 위쪽에 잡다한거 빼고 콘텐츠가 표시되는 부분의 height만 대입함

    for (let i = 0; i < content.length; i++) {
        // i 가 content 의 갯수보다 작으면 i는 content의 갯수만큼 증가함
        const contentTop = content[i].getBoundingClientRect().top;
        // i 번째에 있는 요소의 top으로부터의 거리를 계산해서 contentTop에 대입함

        //-------------- getBoundingClientRect()로 얻을 수 있는것들!!!---------------------
        // top, bottom, left, right, width, height, x, y의 값이 출력됩니다.
        // top or y - 화면 상단 부터 대상의 처음 위치 값
        // bottom - 화면 상단 부터 대상의 끝 위치 값
        // left or x - 화면 좌측 부터 대상의 처음 위치 값
        // right - 화면 좌측 부터 대상의 끝 위치 값
        // width - 대상의 길이
        // height - 대상의 높이


        if (contentTop - winH < 0) {
            // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값 - 브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 작으면
            content[i].classList.add('in');
            // content 의  i 번째에 있는 요소에 in 을 붙여준다
        }
        if (contentTop - winH > 0) {
            // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값-브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 크면 
            content[i].classList.remove('in');
            // content 의 i 번째에 있는 요소에 in 을 제거해서 스크롤을 올렸다가 다시 내려도 다시 작동하게 함
        }
    }
})


const slideButtons = document.getElementsByClassName('slide-button');
// dot 으로 사용할 text
const slider1 = document.querySelector('.slider1');
// 이미지들이 들어있는  ul



    for (let i = 0 ; i < slideButtons.length ; i ++ ){
    // i = 0 i가 dot 으로 사용할 text의 개수보다 작으면 i는 dot 의 개수만큼 증감식 실행
        slideButtons[i].addEventListener('click', ()=> {
        // 버튼으로 사용할 i 번째의 텍스트를 클릭하면

            for (let j = 0 ; j < slideButtons.length ; j ++){
                slideButtons[j].classList.remove('selected');
                // 우선 모든 버튼에 들어있는 selected 를 지워준 후

            }
            slider1.style.transform = 'translateY(-'+ 100*i +'vh)';
            // 모든 이미지를 포함하고 있어 width 가 큰 ul을 translate*클릭한 해당 사진 + vh 만큼 올려준다.
            slideButtons[i].classList.add('selected');
            // 클릭된 사진에 selected 색을 붙힘
        })
    }






let containerFirst = document.getElementsByClassName("controller1")[0];
let controller = containerFirst.children;
// let liList = controller.children;

let textArea = document.getElementsByClassName("text-area")[0];
let textAreaUl = textArea.children[0];
let textAreaLi = textAreaUl.children;

let n = 0;

for (let i = 0; i < controller.length; i++) {
    controller[i].index = i;
    
    controller[i].addEventListener("click", function (e) {
        e.preventDefault();
        n = e.currentTarget.index;
        
        for (let j = 0; j < controller.length; j++) {
            if (j == n) {
                textAreaLi[j].classList.add("active");
            }
            else {
                textAreaLi[j].classList.remove("active");
            }
        }
    });
};





// -----------------------section3---------------------------------


        const box = document.querySelector('.box');
        const imgBox = document.getElementsByClassName('img-box');
        let sliderWidth = 711;

        let keword = document.getElementsByClassName("keword-container")[0];
        let kewordUl = keword.children[0];
        let kewordLi = kewordUl.children;

        let imgArea = document.getElementsByClassName("slider-box")[0];
        let imgAreaUl = imgArea.children[0];
        let imgAreaLi = imgAreaUl.children;
        
        let num = 0;

            for (let i = 0; i < kewordLi.length; i++) {
                kewordLi[i].index = i;
                
                kewordLi[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    num = e.currentTarget.index;
                    
                    for (let j = 0; j < kewordLi.length; j++) {
                        if (j == num) {
                            kewordLi[j].classList.add("on");
                            imgAreaLi[j].classList.add("active");
                        }
                        
                        else {
                            kewordLi[j].classList.remove("on");
                            imgAreaLi[j].classList.remove("active");
                        }
                }
                
            });
        };

        for (let i = 0 ; i < imgBox.length ; i++) {
            makeSlider(i);
        }

        function makeSlider(number) {

            let index = 0;
            setInterval(() => {
                slide();
            }, 2000);
                   
            
            function slide() {
                if (index === 3)
                index = -1;
                index++;
                // imgBox.style.trasnform =`translateX(-${index * sliderWidth}px)`;
                imgBox[number].style.transform = 'translateX(-' + index * sliderWidth + 'px)';
                // box.innerText = index;
            }
        }


        // ----------------------드래그--------------


        const slider = document.querySelector('.items');
        let isMouseDown = false;
        let startX, scrollLeft;
            
        slider.addEventListener('mousedown', (e) => {
          isMouseDown = true;
          slider.classList.add('active');
        
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
          isMouseDown = false;
          slider.classList.remove('active');
        });
        
        slider.addEventListener('mouseup', () => {
          isMouseDown = false;
          slider.classList.remove('active');
        });
    
        slider.addEventListener('mousemove', (e) => {
          if (!isMouseDown) return;
        
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1;
          slider.scrollLeft = scrollLeft - walk;
        });