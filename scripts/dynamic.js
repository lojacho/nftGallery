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
    }
]

const speakers = document.querySelector('.speakers');
speakers.innerHTML = '<h3>Featured Speakers</h3><div class=separator></div>';

const div = document.createElement('div');
div.classList.add('mobile');
div.innerHTML = `<div class='photo'><img src=${speakerMobile[0].Photo} alt=${speakerMobile[0].alt}></div><div class='content'><h4>${speakerMobile[0].Artist}</h4><h5>${speakerMobile[0].Position}</h5><div class=separatorGray></div><p>${speakerMobile[0].Resume}</p></div>`;
speakers.appendChild(div);

const div2 = document.createElement('div');
div2.classList.add('mobile');
div2.innerHTML = `<div class='photo'><img src=${speakerMobile[1].Photo} alt=${speakerMobile[1].alt}></div><div class='content'><h4>${speakerMobile[1].Artist}</h4><h5>${speakerMobile[1].Position}</h5><div class=separatorGray></div><p>${speakerMobile[1].Resume}</p></div>`;
speakers.appendChild(div2);

const div3 = document.createElement('div');
div3.classList.add('mobile');
div3.classList.add('arrow');
div3.innerHTML = `<p>MORE&nbsp;&nbsp;&nbsp;&nbsp<span>&#xfe40</span></p>`
speakers.appendChild(div3);