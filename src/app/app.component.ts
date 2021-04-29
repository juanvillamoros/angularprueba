import { Album } from './interfaces/task';
import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  constructor(
    private taskService: TaskService,
  ){}

  getAllPost() { 
    this.taskService.getAllPost()
    .subscribe(posts => {
      console.log(posts);
    })
  }

  getPost(){
    this.taskService.getPost('1','1','sunt aut facere repellat provident occaecati excepturi optio reprehenderit','quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
    .subscribe(post =>{
      console.log(post)
    });
  }


  getAllComment() { 
    this.taskService.getAllComments()
    .subscribe(comments => {
      console.log(comments);
    });
  }

  getComment(){
    this.taskService.getComment('1','1','id labore ex et quam laborum','Eliseo@gardner.biz','laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')
    .subscribe(comment  =>{
      console.log(comment);
    });
  }

  getAllAlbum() { 
    this.taskService.getAllAlbums()
    .subscribe(albums => {
      console.log(albums);
    })
  }

  getAlbum(){
    this.taskService.getAlbum('1','1','quidem molestiae enim')
    .subscribe(albums => {
      console.log(albums);
    })
  }

  getAllUser() { 
    this.taskService.getAllUsers()
    .subscribe(users => {
      console.log(users);
    })
  }

  getUser() {
    this.taskService.getUser('1','Leanne Graham','Bret','Kulas Light','Apt. 556')
    .subscribe(user => {
      console.log(user);
    })
  }
  getAllPhotos() { 
    this.taskService.getAllPhotos()
    .subscribe(photos => {
      console.log(photos);
    })
  }

  getPhoto(){
    this.taskService.getPhoto('1','1','accusamus beatae ad facilis cum similique qui sunt','https://via.placeholder.com/600/92c952','https://via.placeholder.com/150/92c952')
    .subscribe(photos => {
      console.log(photos);
    })
  }




}
