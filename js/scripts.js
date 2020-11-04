console.log('Hello from js/scripts.js!');
const customName = document.getElementById('customname');
const customNamE = document.getElementById('customnamE');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Jet and Skye were playing outside on a beautiful Fall day. It was 75 degrees fahrenheit and sunny. They decide to stroll through the Los Angeles streets. With 40 dollars, they stop at a cafe for a :inserta:. They continue on their journey around the city until they reach the :insertb:. While taking selfies, Skye drops her phone in :insertc:. Jet tried to rescue the phone, but it was too late. The phone and their pictures were gone.';
let insertA = ['coffee','varm chokolade','cuppa'];
let insertB = ['Statue of Liberty','harbor Nyhavn','Sydney Opera House'];
let insertC = ['a puddle','the canal','the harbor'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let aItem = randomValueFromArray(insertA);
  let bItem = randomValueFromArray(insertB);
  let cItem = randomValueFromArray(insertC);

  newStory = newStory.replace(':inserta:',aItem);
  newStory = newStory.replace(':insertb:',bItem);
  newStory = newStory.replace(':insertc:',cItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Jet',name);
  }

  if(customName.value !== '') {
    const name = customNamE.value;
    newStory = newStory.replace('Skye',name);
  }

  if(document.getElementById("dk").checked) {
    document.body.className += ' dk';
  }

  if(document.getElementById("dk").checked) {
    const currency = Math.round(40*6.34) + ' Krone';
    const temperature =  Math.round((75-32) * 5 / 9) + 'celsius';
    newStory = newStory.replace('40 dollars',currency);
    newStory = newStory.replace('75 fahrenheit',temperature);
    newStory = newStory.replace('Los Angeles','Copenhagen');
  }

  if(document.getElementById("us").checked) {
    document.body.className += ' us';
  }

  if(document.getElementById("us").checked) {
    const currency = Math.round(40*1) + ' dollars';
    const temperature =  Math.round((75-0) * 1) + ' fahrenheit';
    newStory = newStory.replace('40 dollars',currency);
    newStory = newStory.replace('75 fahrenheit',temperature);
    newStory = newStory.replace('Los Angeles','New York City');
  }

  if(document.getElementById("au").checked) {
    document.body.className += ' au';
  }

  if(document.getElementById("au").checked) {
    const currency = Math.round(40*1.39) + ' australian dollars';
    const temperature =  Math.round((75-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('40 dollars',currency);
    newStory = newStory.replace('75 fahrenheit',temperature);
    newStory = newStory.replace('Los Angeles','Sydney');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

$(document).ready(function() {
  $('.randomize').click(function () {

    if($('.randomize').is('click')){

      $('.reset').hide();
    }

    else {
      $('.reset').show();
    }
  });
});

function refreshPage(){
  window.location.reload();
}
