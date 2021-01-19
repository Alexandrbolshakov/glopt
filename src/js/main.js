import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
// import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import comments_slider from './modules/comments_slider';
import btn from './modules/btn';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    comments_slider();
    modals();
    btn();
    // sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    // sliders('.main-slider-item', 'vertical');
    forms();
    // mask('[name="phone"]');
    // checkTextInputs('[name="name"]');
    // checkTextInputs('[name="message"]');
    // showMoreStyles('.button-styles', '#styles .row');
});