/*Variaveis*/
const persons = document.getElementById("persons");
const starships = document.getElementById("starships");
const planets = document.getElementById("planets");

/*Funções*/

FillCounters();

function FillCounters(){
    Promise.all([
        GetData("people/"),
        GetData("starships/"),
        GetData("planets")
    ])
    .then(data => {
        persons.style.fontSize = "5em";
        starships.style.fontSize = "5em";
        planets.style.fontSize = "5em";

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log("Erro:", err))
};

function GetData(param){
    return fetch("https://swapi.dev/api/"+param)
                    .then(res => res.json())
};

function LoadPhrase(){
    const btn = document.getElementById("btn-phrases");
    const phrase = document.getElementById("phrase");

    return fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
                .then(data => data.json())
                .then(json => {
                    btn.innerHTML = "Ver mais uma frase!";
                    phrase.innerHTML = '"' + json.content + '"';

                    phrase.animate([
                        {transform: "translateY(-70px)"},
                        {transform: "translateY(0px)"},
                    ],
                    {
                       duration:  500
                    })
                })
                .catch(err => console.log("Erro: ", err));
};