import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  ngOnInit(): void {
    this.FetchDataFromMedium();
   }
  httpClient = inject(HttpClient);
  blogData:any;
  FetchDataFromMedium = () =>{
    this.httpClient.get('https://v1.nocodeapi.com/arpita/medium/lDpkExdsptxWGvqO').subscribe((data:any)=>{
      // console.log(data);
      this.blogData = data;
      // console.log(this.blogData);
      // console.log(this.blogData);
      
    })
  }
}
