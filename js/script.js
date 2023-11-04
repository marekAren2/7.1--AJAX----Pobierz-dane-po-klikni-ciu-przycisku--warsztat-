let getDataH = document.querySelector('#get-data')


const getData = () => {
    console.log("w funkcji działa");
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(odp => odp.json())
        // console.log("🚀 ~ file: script.js:8 ~ getData ~ resp.json():", response.json())
        // console.log("🚀 ~ file: script.js:8 ~ getData ~ resp:", respo2)     
    .then(data => {
        
        console.log("🚀 ~ file: script.js:12 ~ getData ~ data:", data);
        let Pid = data.id;
        let PuserId = data.userId;
        let Ptitle = data.title;
        let Pbody = data.body;
        
        let elementDiv = document.createElement('div');
        // let element
        
        elementDiv.innerHTML = `Id: ${Pid} UserId: ${PuserId} <br> Title: ${Ptitle} <br> Body: ${Pbody} <hr>`
        document.body.appendChild(elementDiv)
    })
        // .catch(error => {console.error(error)})

     
}

getDataH.addEventListener('click', getData);






















/* console.log(`AJAX - Warsztat - Pobierz dane po kliknięciu przycisku`);

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

            // console.log(data);
        })
        .catch(error => {
            console.error(error);
        })

    // console.log(`getData()`);
}

btnGetData.addEventListener('click', getData); */