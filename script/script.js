const slideButtons = document.getElementsByClassName('slide-button');
// dot 으로 사용할 text
const slider1 = document.querySelector('.slider1');
// 이미지들이 들어있는  ul



    for (let i = 0 ; i < slideButtons.length ; i ++ ){
    // i = 0 i가 dot 으로 사용할 text의 개수보다 작으면 i는 dot 의 개수만큼 증감식 실행
        slideButtons[i].addEventListener('click', ()=> {
        // 닷으로 사용할 i 번째의 텍스트를 클릭하면

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






let containerFirst = document.getElementsByClassName("expert-keword-container")[0];
let controller = containerFirst.children[0];
let liList = controller.children;

let textArea = document.getElementsByClassName("text-area")[0];
let textAreaUl = textArea.children[0];
let textAreaLi = textAreaUl.children;

let n = 0;

for (let i = 0; i < liList.length; i++) {
    liList[i].index = i;
    
    liList[i].addEventListener("click", function (e) {
        e.preventDefault();
        n = e.currentTarget.index;
        
        for (let j = 0; j < liList.length; j++) {
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

        let imgArea = document.getElementsByClassName("box")[0];
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
