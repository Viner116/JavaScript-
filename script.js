const show = document.querySelector('.show-btn');
const arrowUp = document.querySelector('.show-btn__arrow');
const brandsList = document.querySelector('.brands__list');



show.addEventListener('click', showAll);

function showAll (event) {
	brandsList.classList.toggle('brands__list--full');
	arrowUp.classList.toggle('show-btn__arrow--up');
}

window.addEventListener('resize', initMobileSlider);
    initMobileSlider();

document.addEventListener('click', textBtn);

function textBtn (event) {
	if (event.target.closest ('.show-btn')) {
		show.classList.toggle('show-btn--active');
	}
}



    
    toggleButton.onclick = () => {
        if (secondGroup.style.display === 'none' || secondGroup.style.display === '') {
            secondGroup.style.display = 'grid'; 
            toggleButton.classList.remove('closed');
            toggleButton.classList.add('open');
            toggleButton.querySelector('.up-arrow').style.display = 'block';
            toggleButton.querySelector('.down-arrow').style.display = 'none';
            toggleButton.querySelector('.label-text').innerText = 'Скрыть';
        } else {
            secondGroup.style.display = 'none';
            toggleButton.classList.remove('open');
            toggleButton.classList.add('closed');
            toggleButton.querySelector('.up-arrow').style.display = 'none';
            toggleButton.querySelector('.down-arrow').style.display = 'block';
            toggleButton.querySelector('.label-text').innerText = 'Показать все';
        }
    };

