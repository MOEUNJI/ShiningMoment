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
// container = 버튼들이 들어있는 ul
let controller = containerFirst.children[0];
// controller = 버튼들이 들어있는 ul의 첫번째 li
let liList = controller.children;

let textArea = document.getElementsByClassName("text-area")[0];
// textArea = 텍스트들이 들어있는 ul
let textAreaUl = textArea.children[0];
// textAreaUl = 텍스트들이 들어있는 ul의 첫번째 li
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








let containerFirst2 = document.getElementsByClassName("keword-container")[0];
// container = 버튼들이 들어있는 ul
let controller2 = containerFirst2.children[0];
// controller = 버튼들이 들어있는 ul의 첫번째 li
let liList2 = controller2.children;

let textArea2 = document.getElementsByClassName("text-area2")[0];
// textArea = 텍스트들이 들어있는 ul
let textAreaUl2 = textArea2.children[0];
// textAreaUl = 텍스트들이 들어있는 ul의 첫번째 li
let textAreaLi2 = textAreaUl2.children;

        

        let num = 0;

            for (let i = 0; i < liList2.length; i++) {
                liList2[i].index = i;
                
                liList2[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    num = e.currentTarget.index;
                    
                    for (let j = 0; j < liList2.length; j++) {
                        if (j == num) {
                            liList2[j].classList.add("on");
                            textAreaLi2[j].classList.add("active");
                        }
                        
                        else {
                            liList2[j].classList.remove("on");
                            textAreaLi2[j].classList.remove("active");
                        }
                }
                
            });
        };


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
