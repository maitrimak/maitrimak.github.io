/*Name: Maitri Makwana
File: assignment4_part1
Date: 16th July, 2024
Description: This is the javascript for random story generator */

// Get the custom name, random buttom and text element
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// addind function to select a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// adding the story text for random output.
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// arrays will all the given values to insert in story
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// adding the random button to generater random story.
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

   // Get random values for each placeholder
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

   // Replace the placeholders in the story with the random values
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // adding custom name value for any coustom name is provided
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // if uk button is checked than show output in Uk units
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // setting the story text and making it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
