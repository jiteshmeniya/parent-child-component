import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  selectedUser?: any;

  users: any = [
    {id: 1, name: 'Jitesh Meniya', email: 'jiteshmeniya99@gmail.com' },
    {id: 2, name: 'Hardik Savani', email: 'hardiksavani19@gmail.com' },
    {id: 3, name: 'Harsukh Makwana', email: 'harsukh21@gmail.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(user: any) {
    this.selectedUser = user;
  }

}
