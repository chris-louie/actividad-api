const inputDate = document.getElementById("imgDate");

window.addEventListener('load', function() {

    inputDate.addEventListener('change', function() {
        console.log(this.value);
        const api_key = '36TIoSyldPNO92ukfqBxH5TeKdyatgJoml9JYZA9';
        const endpoint = 'https://api.nasa.gov/planetary/apod?date=' + this.value + '&api_key=' + api_key ;
        fetch(endpoint).then(resp => resp.json())
                        .then(resp => showData(resp));

        function showData(resp)
        {
            console.log(endpoint);
            console.log(resp);
            document.getElementById('title').innerHTML = resp.title;
            document.getElementById('date').innerHTML = resp.date;
            document.getElementById('explanation').innerHTML = resp.explanation;
            document.getElementById('url').src = resp.url;
        }
    })
})

function getData(){
    
}

