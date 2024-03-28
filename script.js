searchinput = document.querySelector("#searchinput");
searchbtn = document.querySelector("#searchbtn");

const dictionary = async (word) => {
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df453b24d4msh2eae2e27eb52855p1aee46jsn29102d3812c5',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        wordheading.innerText = "Here is the meaning of: " + result.word;
        worddefinition.innerText = result.definition;
    } catch (error) {
        console.error(error);
    }
}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value);
})
