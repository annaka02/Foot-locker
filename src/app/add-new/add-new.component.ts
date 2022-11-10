import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddShoe } from '../Model/model';
import { AddShoeService } from '../Service/service.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  addshoe : AddShoe = new AddShoe();
  constructor(private as : AddShoeService, private router : Router) { }

  ngOnInit(): void {
  }
  public saveShoe(){
    this.as.addShoe(this.addshoe).subscribe((Response) => {
      alert("Saved Successfully");
      this.router.navigate(['/new']);
      console.log(Response);
    })
  }

}
