console.log('test this');
let data;
// async/await
async function getData() {
    try {
        // FETCH API
        const foobar = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/apple?key=1289b6b8-ec5e-4e53-8d57-2d90bbbc4cf4`);
        data = await foobar.json();

        // DISPLAY 
        console.log(data);

        // DROPLIST OPTION
        data.forEach(element => {
            const selectElement = document.querySelector('#language');

            selectElement.innerHTML += ` <option value="apple">${element.meta.id}</option>`
            console.log(element);
        });

    } catch (error) {
        console.warn(`Nope: ${error}`);
    }
}
getData();

// INTERACTIVE SUBMIT BUTTON
document.querySelector('.button').addEventListener('click', function () {
    const selectElement = document.querySelector('#language');

    const searchQuery = selectElement.options[selectElement.selectedIndex].text;
    console.log(searchQuery);

    // DEFINITION SECTION SHOW UP 
    data.forEach(element => {
        if (element.meta.id === searchQuery) {
            const meaningElement = document.querySelector('.meaning');
            meaningElement.innerHTML = `<h1>${element.meta.id}</h1>
            <h3>Short definition:</h3>
            <p> ${element.shortdef}</p>
            <h3>Form of word:</h3> <p>${element.fl}</p>`;
            console.log(meaningElement)
        }
    });


});