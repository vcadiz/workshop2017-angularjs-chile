export class ApiService {
    url = 'http://localhost:5000';
    //url = 'http://93735c5a.ngrok.io';
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
        var artists = [{
            _id:1,
            url : "https://pbs.twimg.com/profile_images/378800000340701665/89bb248b3cdaa001df31e20a7e82d21c_400x400.jpeg",
            birthdate: "1986-01-06T00:00:00-0300",
            instrument: "voice - guitar",
            firstName: "Alex",
            lastName: "Turner",
            docType : "ARTIST"
        },{
            _id:2,
            url : "http://data.whicdn.com/images/129835913/original.jpg",
            birthdate: "1986-05-07T00:00:00-0300",
            instrument: "drums",
            firstName: "Matt",
            lastName: "Helders",
            docType : "ARTIST"
        }, {
            _id:3,
            url : "https://s-media-cache-ak0.pinimg.com/originals/d3/d1/5e/d3d15e69daee90f0f41658db12843c49.jpg",
            birthdate: "1985-07-08T00:00:00-0300",
            instrument: "guitar",
            firstName: "Jamie",
            lastName: "Cook",
            docType : "ARTIST"
        }, {
            _id:4,
            url : "https://s-media-cache-ak0.pinimg.com/originals/73/90/94/7390940bb6207354d0fc2a9ade526a77.jpg",
            firstName: "Nick",
            lastName: "O'Malley",
            docType : "ARTIST",
            birthdate: "1985-07-05T00:00:00-0300",
            instrument: "bass"
        }];
        return artists;
    }

     getAlbums(bandId){
         var albumns = [{_id:1,docType:"ALBUM",name:"AM",url:"https://i.scdn.co/image/8f10ce83d93c11d4db4f7fc15e2c86d768223001",releaseDate:"2013-01-01"},
             {_id:2, docType:"ALBUM",name:"AM",url:"https://i.scdn.co/image/3c3a2e689d4da7fde8643c8042e888c9dd50cdd3",releaseDate:"2013-09-10"},
             {_id:3, docType:"ALBUM",name:"AM",url:"https://i.scdn.co/image/486391b05384f2299a4c01b7bd8d5b855f20def9",releaseDate:"2013-09-09"},];
         return albumns;
     }

    // getAlbum(albumId)

    // getTrack(trackId)

    // getCommentsForTrack(trackId)

    // postCommentForTrack(postData)

}
