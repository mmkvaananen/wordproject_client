const axios = require('axios');
const url = '/api/';

export function getSongId(artistName, songTitle) {
    let artist = artistName.replace(" ", "%20");
    let title = songTitle.replace(" ", "%20");

    let requestUrl = url + "songs/song?artist=" + artist + "&track=" + title;  // e.g. http://localhost:3000/api/songs/song?artist=Skid Row&track=18 and Life
   // console.log("Value of requestUrl in getSongId: ", requestUrl);

    return axios.get(requestUrl)
        .then(response => {
            // console.log("getSongId function's response from rest api: ", response);
            // console.log("statuscode: ", response.status);
            if (response.status === 200) {
                return response.data.track_id;
            }
            if(response.status === 404) {
                console.log("Bad syntax");
            }
            
        })
        .catch(e => {
            // console.log("GetSongId returns an error");
            // console.log(e.response);
            if (e.response.status === 400) {
                //return "Artist name and song title are required fields";
               // return e;
               
            }
            else  {
            // console.log("Getsongid virhe status", e.response.status);   
            return e.response.status(404).json({error: "No tracks found"});
            }   
        })
}

export function getLyricsBySongId(songId) {

    let requestUrl = url + "songs/lyrics?trackId=" +songId;  //e.g. http://localhost:3000/api/songs/lyrics/?trackId=164019359
   // console.log("Value of requestUrl in getLyricsBySongId: ", requestUrl);

    return axios.get(requestUrl)
        .then(response => {
            //console.log("getLyricsBySongId function's response from rest api: ", response);
            return response;
        })
        .catch(e => {
            // console.log("getLyricsBySongId returns an error");
            // console.log(e);
            return e.status(404).e;;
        })
}


export function getWordAssociations(text) {
    let originalText = text.replace(" ", "%20");

    let requestUrl = url + "associations/" + originalText;  //e.g. http://localhost:3000/api/associations/Ricky
    //console.log("Value of requestUrl in getWordAssociations: ", requestUrl);

    return axios.get(requestUrl)
        .then(response => {
           // console.log("getWordAssociations function's response from rest api: ", response);
            return response;
        })
        .catch(e => {
            // console.log("getWordAssociations returns an error.");
            // console.log(e);
            return e;
        })
}