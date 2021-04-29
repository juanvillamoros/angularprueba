import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post, Comment, Album, User, Photos } from './../interfaces/task';
import { TemplateLiteralElement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private api = 'https://jsonplaceholder.typicode.com';

  getAllPost() { 
    const post = `$(this.api)/posts`;
    return this.http.get<Post[]>(post);
  }

  getPost(userIdByPost:string, idPost:string, tittle:string, body:string){
    const post = `$(this.api)/posts/${idPost}`;
    return this.http.get<Post[]>(post);   
  }

  getAllComments(){
    const comments = `$(this.api)/comments`;
    return this.http.get<Comment[]>(comments);
  }
  
  getComment(postIdByComment:string, idComment:string, name:string, email:string, body:string){
    const comments = `$(this.api)/comments/${idComment}`;
    return this.http.get<Comment[]>(comments);
  }

  getAllAlbums(){
    const albums = `$(this.api)/albums`;
    return this.http.get<Album[]>(albums);
  }

  getAlbum(userIdByAlbum:string, idAlbum:string, tittle:string){
    const albums = `$(this.api)/albums/${idAlbum}`;
    return this.http.get<Album[]>(albums);
  }


  getAllUsers(){
    const users = `$(this.api)/users`;
    return this.http.get<User[]>(users);
  }

  getUser( id: string, name: string, username: string, email: string, address:string){
    const users = `$(this.api)/users/${id}`;   
    return this.http.get<User[]>(users);
  }

  getAllPhotos(){
    const photos = `$(this.api)/photos`;
    return this.http.get<Photos[]>(photos);
  }

  getPhoto(albumIdByPhotos:string, idPhoto:string, tittle:string, url:string, thumbnailUrl:string){
    const photos = `$(this.api)/photos/${idPhoto}`;
    return this.http.get<Photos[]>(photos);
  }
}
