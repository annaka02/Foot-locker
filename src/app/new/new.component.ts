import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddShoe } from '../Model/model';
import { AddShoeService } from '../Service/service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
   addshoe : AddShoe[] = [];
   name! : string;
  constructor(private as : AddShoeService, private router : Router) { }

  ngOnInit(): void {
    this.as.getAll().subscribe(Response => {
      this.addshoe = Response;
      console.log(Response);
      
    })
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.addshoe = this.addshoe.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }

  }
  updateShoe(id : number){
    this.router.navigate(['/add', id]);
  }
  reload(){
    window.location.reload();
  }

  public deleteShoe(id : number){
    this.as.deleteShoe(id).subscribe((Response) => {
      alert("Deleted Successfully");
      console.log(Response);
      this.reload();
      
    })
  }

}
