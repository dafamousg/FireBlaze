
    var key = '&key=AIzaSyC8S4eoB4ncNKj-aF9FAMzn2xLhsCqfjIA';
    var url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=UUdl8T8PPHJf141WYCXJK1Lg'+key;

    var videoObjectItems = [];
    var htmlContent = '';


    fetch(url)
    .then(response => response.json())
    .then(data => {
        videoObjectItems = data.items;
        for (const i of videoObjectItems) {
            htmlContent += `
                <div class="video">
                    <div class="img">
                    <img src="${i.snippet.thumbnails.default.url}" width="${i.snippet.thumbnails.default.width}" height="${i.snippet.thumbnails.default.height}">
                    </div>
                    <div class="title">
                    <span>${i.snippet.title}
                    </div>
                </div>
            `
        }
        document.getElementById('test').innerHTML = htmlContent;
    })


/*  var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = printContent;

    xmlhttp.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUdl8T8PPHJf141WYCXJK1Lg&key=AIzaSyC8S4eoB4ncNKj-aF9FAMzn2xLhsCqfjIA')
    xmlhttp.send();

function printContent(){
    if(xmlhttp.readyState === 4){
        if(xmlhttp.status == 200){
            var res = xmlhttp.response;
            
        }
        else{
            alert("We fucked up..")
        }
    }
} */