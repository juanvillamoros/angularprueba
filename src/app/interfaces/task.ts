

export interface Post {
    userIdByPost: string;
    idPost: string;
    title: string;
    body: string;
}

export interface Comment {
    postIdByComment : string;
    id: string;
    name: string;
    email: string;
    body: string;
}



export interface Album {
    userIdAlbum: string;
    id: string;
    title: string;
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo:{
            lat: string;
            lng: string;
        }
    }
}

export interface Photos {
    albumIdByPhotos: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}