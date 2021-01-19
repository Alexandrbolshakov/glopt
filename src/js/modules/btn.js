const btn = () =>{

    const tab = document.querySelectorAll('.price__card-btn');

    tab.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.parentNode.querySelector('.price__card-text').style.display = 'block';
            item.parentNode.querySelector('.price__card-time').style.display = 'block';
            item.parentNode.querySelector('.price__card-cost').style.display = 'block';
        });
    });

}

export default btn;