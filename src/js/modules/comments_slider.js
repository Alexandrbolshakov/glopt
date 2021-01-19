const comments_slider=() => {
    const slides = document.querySelectorAll('.comments__slider-card'),
        prev = document.querySelector('.comments__slider-prev'),
        next = document.querySelector('.comments__slider-next');

    let index = 0;

    function changeIndex(n){
        index += n;
        if(index > slides.length-1){
            index = 0;
        }
        if(index < 0){
            index = slides.length - 1;
        }
    }

    function clear(){
        slides.forEach(slide=>{
            slide.style.display = 'none';
            slide.classList.add('animated');
            slide.classList.remove('comments__slider-card-prev');
            slide.classList.remove('comments__slider-card-next');
            slides[index].classList.remove('slideInLeft');        
            slides[index].classList.remove('slideInRight');
        });
    }

 
    function show(index){
        slides[index].style.display = 'block';
        if(index == 0){
            slides[slides.length-1].classList.add('comments__slider-card-prev');
            slides[slides.length-1].style.display = 'block';
            slides[index+1].classList.add('comments__slider-card-next');
            slides[index+1].style.display = 'block';
        }
        else if(index == slides.length-1){
            slides[index-1].classList.add('comments__slider-card-prev');
            slides[index-1].style.display = 'block';
            slides[0].classList.add('comments__slider-card-next');
            slides[0].style.display = 'block';
        }
         else{
            slides[index-1].classList.add('comments__slider-card-prev');
            slides[index-1].style.display = 'block';
            slides[index+1].classList.add('comments__slider-card-next');
            slides[index+1].style.display = 'block';
        }

    }

    clear();
    show(index);

    prev.addEventListener('click', (e)=>{
        if(e.target){
            e.preventDefault();
        };
        clear();
        changeIndex(-1);
        show(index);
        slides[index].classList.add('slideInLeft');

    });
    next.addEventListener('click', (e)=>{
        if(e.target){
            e.preventDefault();
        };
        clear();
        changeIndex(1);
        show(index);
        slides[index].classList.add('slideInRight');
    });

    // setInterval(function(){
    //     clear();
    //     changeIndex(1);
    //     show(index);
    //     slides[index].classList.add('slideInRight');
    // },3000);


}

export default comments_slider;