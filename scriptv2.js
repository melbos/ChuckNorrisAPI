const refreshJoke = async (textElement) => {
    const data = await getData();
    textElement.innerText = data.value;
};
// drugi način
// const refreshJoke = (textElement) => {
// getData().then((res) => (textElement.innerText = res.value));
// };

const getData = async () => {
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    const response = await data.json();
    return response;
};

const displayJoke = (str) => {
    const container = document.createElement('div');
    container.className = 'flex-center';
    document.body.appendChild(container);

    const image = document.createElement('img');
    image.src =
        'https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png';
    image.className = 'imgClass';
    container.appendChild(image);

    const paragraf = document.createElement('p');
    paragraf.innerText = str;
    paragraf.className = 'pClass';
    container.appendChild(paragraf);

    const btn = document.createElement('button');
    btn.innerText = 'Get new joke!';
    btn.className = 'buttonClass';
    btn.onclick = () => refreshJoke(paragraf);
    container.appendChild(btn);
};

(function getJoke() {
    let chucknorris;

    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            chucknorris = data;
            displayJoke(chucknorris.value);
        });
})();

//(function getJoke() {
 //   getData().then((data) => displayJoke(data.value));
 //}

getData();
