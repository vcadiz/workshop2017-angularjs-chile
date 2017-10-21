export class ApiService {
    //url = 'http://localhost:5000';
    url = 'http://93735c5a.ngrok.io';

    constructor($http){
        this.http = $http;
        
        this.mockBands = [];
        this.mockBands.push({"_id": 0, "docType":"BAND","genres":"alternative rock, garage rock, indie rock, permanent wave, rock, sheffield indie","name":"Arctic Monkeys","url":"https://i.scdn.co/image/c488bf987b2f716a539a768a102855450345113d","popularity":83});
        
        this.mockBands.push({"_id": 1, "docType":"BAND","genres":"alternative rock, east coast hip hop, funk rock, gangster rap, hardcore hip hop, hip hop, nu metal, old school hip hop, pop rap, rap, rap rock, rock","name":"Beastie Boys","url":"https://i.scdn.co/image/705bcd56dc5dbf9ebc578a3ba8094e6d622862c2","popularity":70});
    }

    getBands(){
        return this.http.get(`${this.url}/bands`).then(response => response.data);
        //return this.mockBands;
    }

    getBand(bandId){
       var band = [{"docType":"BAND","genres":"alternative rock, east coast hip hop, funk rock, gangster rap, hardcore hip hop, hip hop, nu metal, old school hip hop, pop rap, rap, rap rock, rock","name":"Beastie Boys","url":"https://i.scdn.co/image/705bcd56dc5dbf9ebc578a3ba8094e6d622862c2","popularity":70}];
       return band;
    }

    getArtists(bandId){
        console.log('band id: ' + bandId);
        return this.http.get(`${this.url}/artists`).then(response => response.data);
        
    }

     getAlbums(bandId){
         return this.http.get(`${this.url}/albums`).then(response => response.data);
     }

    // getAlbum(albumId)

    // getTrack(trackId)

    // getCommentsForTrack(trackId)

    // postCommentForTrack(postData)

}
