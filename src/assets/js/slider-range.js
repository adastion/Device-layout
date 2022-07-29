window.onload = () => {
  slOne();
  slTwo();
};

let sliderOne = document.getElementById('slider_1');
let sliderTwo = document.getElementById('slider_2');
let displayValOne = document.getElementById('outValue_1');
let displayValTwo = document.getElementById('outValue_2');
let minGap = 5;
let sliderTrack = document.querySelector('.range__track');
let sliderMaxValue = document.getElementById('slider_1').max;

sliderOne.addEventListener('input', () => {
  slOne();
})

sliderTwo.addEventListener('input', () => {
  slTwo();
});

const slOne = () => {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value;
  fillColor();
}

const slTwo = () => {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();
}
const fillColor = () => {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dbdbdb ${percent1}% , #91c92f ${percent1}% , #91c92f ${percent2}%, #dbdbdb ${percent2}%)`;
}
