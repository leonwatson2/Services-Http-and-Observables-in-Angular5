#TC

1. 
2. [HttpClient](##./script.md#HttpClient)

## The Subject Observables
#### //title.service.ts

1. There's more than one way to make this cycle of data happen using observables.
2. Currently we have to create to variables a Observable and Observer. One to create the observable that is subscribed to and one to send next events to that observable.
3. Well the good news is this can be done with just one variable that is a sub class of the Observable called the subject.
4. You can subscribe to a subject just like you can an Observable but on the subject you can also call next.
5. So here in the title.service.ts file we can make all the changing of the title happen in one line of code.
6. We'll first need to import `Subject` from `rxjs`
```
import { Subject } from 'rxjs/Subject'
```
7. Then we don't need these imports from rxjs anymore.
#### //app.component.ts
8. Inside our app.component.ts file nothing will change there since all the `app.component` is subscribe to that title in the title service.
#### //change-title.component.ts
9. Then inside our `change-title.component.ts` we need to change the variable that we call next on to the title variable in the `TitleService` 
```
this.titleService.title.next(newTitle)
```
10. then if we go back to the application you'll see that now we have the same functionality with a lot less code.

## HttpClient
1. There will be times in your creating of your application that you'll want to get data from a database and you'll most likely use an API or backend of some kind that you query to.
2. In Angular this can be done using the HttpClientModule which allows us to send request and recieve responses to and from Web Services. 
3. We're going to be using the [JsonPlaceHolder](https://jsonplaceholder.typicode.com/) to learn how to use the HttpClient in Angular to send and recieve request.
#### app.module.ts
4. First Thing we'll need to do is add the `httpClientModule` to the imports array of the module we'll be using it in. So that'll be our app.module. 
    - So we'll import it at the top, from `@angular/common/http`
    ```
    import { HttpClientModule } from '@angular/common/http'
    ```
    - then add it to our imports array of our module
    - now we can go ahead and use it in any of the components or services provided in this module.


#### app.component.ts
5. So let's go ahead to our `app.component.ts` file and import HttpClient at the top.
```
import { HttpClient } from '@angular/common/http'
```
6. Then we'll inject it into our app component like we did out service.
    - This tells angular I want to use the HttpClient inside of my app component
```
constructor(private titleService:TitleService, private http:HttpClient){}

```
8. So down in our ngOnInit method we'll go ahead and send a get request to the json placeholder api.
    - We'll do that by using an http client method called `get` which takes two parameters, the url and am optional options object for now we'll just go ahead and just give the url `https://jsonplaceholder.typicode.com/posts`
    ```
    this.http.get('https://jsonplaceholder.typicode.com/posts')
                .subscribe((res)=>{
                  console.log(res)
                })
    ```
    - Now the thing that the method get returns is actually an observable so alone this will not do anything.
    - So We'll have to subscribe to it to make this request. 
    - So we subscribe and get the response back and even though Observables can emit more than one value HttpClient     will only respond with one value. For now we'll just console.log that.
9. Then you'll see that it's an array of 100 items that have an `id, userId, title, and a body`
10. Say we want to manipulate the data after the request and change it to only console.log just the titles.
11. Well if we try to map over the response you'll see that we get an error and that's because map is not a function on variable of type Object.
12. All this really means is that the http get method expects returns an Observable of type object.
13. Well we can set what type of data we want from the get request by putting in brackets right here.
```
this.http.get<{ id:number, userId:number, title:string, body:string }[]>('https://jsonplaceholder.typicode.com/posts')
                .subscribe((response)=>{
                  console.log(response)
                })
```
14. But as you can see this is getting a little long and what id our posts had more than these four properties?
15. What we can do instead in typescript is make a class or an interface with these properties and use that as the type instead. 
16. So right here at the top we'll go ahead and create an interface called post with these properties.
```
export interface Post{
    id:number
    userId:number
    title:string
    body:string
}
```
17. Then we'll use that instead of this literal object type and now we can map over them to just get the title.
```
this.http.get<{ id:number, userId:number, title:string, body:string }[]>('https://jsonplaceholder.typicode.com/posts')
                .subscribe((response)=>{
                  console.log(response.map(post=>post.title))
                })
```


18. So now we're going to go ahead and make a variable in our component called posts. And that'll be an array of posts.
```
posts:Post[] = []
```
19. Then we'll loop over this in our template using the ngFor directive.
    - Add we'll show all the data from each post.
```html
 <div class="row">
    <div *ngFor="let post of posts" class="col s12 m6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
          <span class="card-title">{{post.title}} - {{post.id}}</span>
          <p>{{ post.body }}</p>
          <p class="right-align">{{post.userId}}</p>
        </div>
      </div>
    </div>
  </div>  
```
20. Then in our subscription we'll set the posts to the response of the get request.
```
.subscribe((response)=>{
    this.posts = response
})
```
21. Then we'll see in our application that we have our list of 100 posts.

