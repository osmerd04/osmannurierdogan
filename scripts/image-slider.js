
const background = document.body.style.backgroundImage;
const totalBackgrounds = 21;
let randomImage; 

const changeBackgroundImage = () => {
    console.log('OSMAN NURI ERDOGAN');
    randomImage = Math.floor(Math.random() * totalBackgrounds) + 1;
    document.getElementsByTagName('body')[0].background = "../Images/" + randomImage + ".jpg";
}
setInterval(changeBackgroundImage, 2000);
