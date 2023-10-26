let myDiv = document.querySelector('#ApiResults');


const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=2b0ad5ff43914f7ebd3b1cd6b59f7653';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a3ed46aa82msh4279d5f36473c8fp1300f2jsn2612b7b8ae0e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};
async function apiFun(url) {



    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        result.articles.forEach(element => {
            const myImg = document.createElement('img');
            const myTitle = document.createElement('h2');


            myImg.src = element.urlToImage;
            myDiv.appendChild(myImg);


        })
    } catch (error) {
        console.error(error);
    }

}
apiFun(url)