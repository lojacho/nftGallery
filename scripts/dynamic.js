const speakerMobile = [
  {
    Photo: '../images/madara.jpg',
    alt: 'Madara_Uchiha',
    Artist: 'Madara Uchiha',
    Position: 'Legendary leader Uchiha Clan',
    Resume: 'Madara Uchiha is a fictional manga and anime character in the Naruto series created by Masashi Kishimoto.',
  },
  {
    Photo: '../images/muzan.jpeg',
    alt: 'Muzan_Kibutsuji',
    Artist: 'Muzan Kibutsuji',
    Position: 'Father of all Demons',
    Resume: 'Muzan Kibutsuji is a fictional manga and anime character in the Kimetsu no Yaiba series created by Koyoharu Gotoge.',
  },
  {
    Photo: '../images/dante.jpeg',
    alt: 'Dante_Zogratis',
    Artist: 'Dante Zogratis',
    Position:'Member of Dark Triad',
    Resume: 'Dante Zogratis is a fictional manga and anime character in the Black Clover series created by Yuki Tabata.',
  },
  {
    Photo: '../images/sukuna.jpeg',
    alt: 'Ryomen_Sukuna',
    Artist: 'Ryomen Sukuna',
    Position: 'King of Curses',
    Resume: 'Ryomen Sukuna is a fictional manga and anime character in the Jujutsu Kaisen series created by Gege Akutami.',
  },
  {
    Photo: '../images/yagami.jpeg',
    alt: 'Light_Yagami',
    Artist: 'Light Yagami',
    Position: 'Main protagonist',
    Resume: 'Light Yagami is a fictional manga and anime character in the Death Note series created by Tsugumi Ohba and Takeshi Obata.',
  },
  {
    Photo: '../images/yeager.jpeg',
    alt: 'Eren_Yeager',
    Artist: 'Eren Yeager',
    Position: 'Main protagonist',
    Resume: 'Eren Yeager is a fictional manga and anime character in the Shingeki no Kyojin series created by Hajime Isayama.',
  },
];

const speakers = document.querySelector('.speakers');
speakers.innerHTML = '<h3>Featured Speakers</h3><div class=separator></div>';

const divContainer=document.createElement('div');
divContainer.classList.add('containerSpeakers');
speakers.appendChild(divContainer);

const div = document.createElement('div');
div.classList.add('mobile');
div.innerHTML = `<div class='photo'><img src=${speakerMobile[0].Photo} alt=${speakerMobile[0].alt}></div><div class='content'><h4>${speakerMobile[0].Artist}</h4><h5>${speakerMobile[0].Position}</h5><div class=separatorGray></div><p>${speakerMobile[0].Resume}</p></div>`;
divContainer.appendChild(div);

const div2 = document.createElement('div');
div2.classList.add('mobile');
div2.innerHTML = `<div class='photo'><img src=${speakerMobile[1].Photo} alt=${speakerMobile[1].alt}></div><div class='content'><h4>${speakerMobile[1].Artist}</h4><h5>${speakerMobile[1].Position}</h5><div class=separatorGray></div><p>${speakerMobile[1].Resume}</p></div>`;
divContainer.appendChild(div2);

const div3 = document.createElement('div');
div3.classList.add('desktop');
div3.innerHTML = `<div class='photo'><img src=${speakerMobile[2].Photo} alt=${speakerMobile[2].alt}></div><div class='content'><h4>${speakerMobile[2].Artist}</h4><h5>${speakerMobile[2].Position}</h5><div class=separatorGray></div><p>${speakerMobile[2].Resume}</p></div>`;
divContainer.appendChild(div3);

const div4 = document.createElement('div');
div4.classList.add('desktop');
div4.innerHTML = `<div class='photo'><img src=${speakerMobile[3].Photo} alt=${speakerMobile[3].alt}></div><div class='content'><h4>${speakerMobile[3].Artist}</h4><h5>${speakerMobile[3].Position}</h5><div class=separatorGray></div><p>${speakerMobile[3].Resume}</p></div>`;
divContainer.appendChild(div4);

const div5 = document.createElement('div');
div5.classList.add('desktop');
div5.innerHTML = `<div class='photo'><img src=${speakerMobile[4].Photo} alt=${speakerMobile[4].alt}></div><div class='content'><h4>${speakerMobile[4].Artist}</h4><h5>${speakerMobile[4].Position}</h5><div class=separatorGray></div><p>${speakerMobile[4].Resume}</p></div>`;
divContainer.appendChild(div5);

const div6 = document.createElement('div');
div6.classList.add('desktop');
div6.innerHTML = `<div class='photo'><img src=${speakerMobile[5].Photo} alt=${speakerMobile[5].alt}></div><div class='content'><h4>${speakerMobile[5].Artist}</h4><h5>${speakerMobile[5].Position}</h5><div class=separatorGray></div><p>${speakerMobile[5].Resume}</p></div>`;
divContainer.appendChild(div6);

const div7 = document.createElement('div');
div7.classList.add('mobile');
div7.classList.add('arrow');
div7.innerHTML = '<p>MORE&nbsp;&nbsp;&nbsp;&nbsp<span>&#xfe40</span></p>';
speakers.appendChild(div7);