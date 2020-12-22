
    
    var urlVideos = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=UUdl8T8PPHJf141WYCXJK1Lg'+key;
    var urlAccountInfo = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCdl8T8PPHJf141WYCXJK1Lg'+key;

    var htmlVideoListContent = '';
    var artistImg;
    var artistDescription;
    var artistName;

    Promise.all([
        fetch(urlAccountInfo),
        fetch(urlVideos)
    ]).then(responses => {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(response => {
            return response.json();
        }));
    }).then(data => {
        accountCall = data[0].items;
        VideoCall = data[1].items;
        for (const i of accountCall) {
            artistName = i.snippet.title;
            artistDescription = i.snippet.description;       
            artistImg = `<img src="${i.snippet.thumbnails.medium.url}" width="200" height="200">`;
        }
        for (const i of VideoCall) {
            htmlVideoListContent += `
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

        document.getElementById('img').innerHTML = artistImg;
        document.getElementById('artistName').innerHTML = artistName;
        document.getElementById('videoList').innerHTML = htmlVideoListContent;
        document.getElementById('artistDesc').innerHTML = artistDescription;
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });
    

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