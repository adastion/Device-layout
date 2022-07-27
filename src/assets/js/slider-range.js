window.onload = function () {
  slOne();
  slTwo();
};

 sliderOne = document.getElementById('slider_1');
 sliderTwo = document.getElementById('slider_2');
 displayValOne = document.getElementById('outValue_1');
 displayValTwo = document.getElementById('outValue_2');
 minGap = 0;
 sliderTrack = document.querySelector('.range__track');
 sliderMaxValue = document.getElementById('slider_1').max;

function slOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dbdbdb ${percent1}% , #91c92f ${percent1}% , #91c92f ${percent2}%, #dbdbdb ${percent2}%)`;
}
