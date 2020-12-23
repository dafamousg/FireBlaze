
 
    var urlAccountInfo = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCdl8T8PPHJf141WYCXJK1Lg'+key;
    var urlVideos = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=UUdl8T8PPHJf141WYCXJK1Lg'+key;
    var urlVideoDetail = 'https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=';

    var videoId;
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
        VideoList = data[1].items;
        for (const i of accountCall) {
            artistName = i.snippet.title;
            artistDescription = i.snippet.description;       
            artistImg = `<img src="${i.snippet.thumbnails.medium.url}" width="200" height="200">`;
        }
        for (const video of VideoList) {
            videoId = video.contentDetails.videoId
            fetch(urlVideoDetail+videoId+key)
            .then(response => response.json())
            .then(data => {
                for (const videoDetail of data.items) {
                    var duration = videoDetail.contentDetails.duration;
                    var published = video.snippet.publishedAt;
                    var durr = new Date (published);
                    console.log(durr);
                    htmlVideoListContent += `
                        <div class="video">
                            <div class="img">
                            <img src="${video.snippet.thumbnails.default.url}" width="${video.snippet.thumbnails.default.width}" height="${video.snippet.thumbnails.default.height}">
                            </div>
                            <div class="title">
                            <span>${video.snippet.publishedAt}</span><br>
                            <span>${video.snippet.title}</span><br>
                            <span>Time: ${duration}</span><br>
                            <span>Views: ${videoDetail.statistics.viewCount}</span>
                            </div>
                            <div>
                            </div>
                        </div>
                    `
                }
                
                document.getElementById('img').innerHTML = artistImg;
                document.getElementById('artistName').innerHTML = artistName;
                document.getElementById('videoList').innerHTML = htmlVideoListContent;
                document.getElementById('artistDesc').innerHTML = artistDescription;
            })
        }
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });
    
function getVideoDetails(id, key = this.key){
    
}