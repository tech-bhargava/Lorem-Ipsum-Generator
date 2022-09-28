let text = [
  "Austin vinyl occupy bitters put a bird on it chicharrones. You probably haven't heard of them cliche keytar chia before they sold out lo-fi banjo. Yuccie distillery normcore gastropub pok pok tumblr kickstarter chia. Semiotics praxis yuccie shaman. Hammock yuccie bruh lo-fi, plaid raw denim echo park bodega boys JOMO.",
  'Listicle next level hexagon salvia butcher tote bag photo booth stumptown sus before they sold out drinking vinegar franzen flexitarian. Selfies bushwick microdosing, 3 wolf moon tumblr dreamcatcher unicorn mixtape wolf taxidermy. Praxis banh mi shaman adaptogen, man braid sriracha dreamcatcher letterpress four loko edison bulb gastropub PBR&B ethical. Beard neutra irony tbh, lo-fi raw denim woke meh migas bicycle rights fingerstache fit hella keytar shabby chic. Keffiyeh gatekeep kickstarter man braid mixtape kogi.',
  "Polaroid flexitarian hexagon before they sold out thundercats single-origin coffee vape jean shorts readymade af seitan banjo semiotics everyday carry keytar. Hammock affogato pabst mixtape ugh palo santo salvia you probably haven't heard of them sus gastropub celiac. Thundercats kinfolk lyft aesthetic enamel pin venmo tattooed chicharrones prism cloud bread everyday carry williamsburg etsy banjo. Enamel pin distillery ramps aesthetic, jianbing vaporware activated charcoal shoreditch 8-bit flannel scenester.",
  'YOLO neutra Brooklyn, chambray yes plz mumblecore art party. Kogi single-origin coffee pitchfork tumeric hashtag cornhole wolf tousled shaman vegan etsy venmo. Umami health goth lyft, bruh before they sold out prism distillery. Before they sold out sus next level praxis. Mustache mukbang freegan subway tile.',
  "I'm baby microdosing craft beer +1, flannel hashtag portland kickstarter 90's hot chicken irony swag typewriter migas. Kinfolk pop-up kickstarter JOMO, man bun woke helvetica vice cold-pressed pinterest celiac. Green juice activated charcoal beard viral photo booth normcore lumbersexual. Biodiesel mumblecore farm-to-table gastropub vexillologist shabby chic readymade organic salvia yr lumbersexual chia 90's thundercats pabst. Beard cliche bicycle rights venmo biodiesel chartreuse. Roof party offal truffaut, mustache sustainable brunch leggings lo-fi 3 wolf moon. Health goth stumptown banh mi leggings schlitz flannel.",
];
let form = document.querySelector('.user_action');
let numberInputElement = document.getElementById('number');
let rangeInputElement = document.getElementById('range');
let result = document.querySelector('.lorem_text');

function paraNumbers(e) {
  let value = e.target.value;
  numberInputElement.value = value;
  rangeInputElement.value = value;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseInt(numberInputElement.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map((item) => `<p class="result">${item}</p>`).join('');
  result.innerHTML = tempText;
});

numberInputElement.addEventListener('input', paraNumbers);
rangeInputElement.addEventListener('input', paraNumbers);
