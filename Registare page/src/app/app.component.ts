import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'y';

  
  stulist:any=[];


  name: string="";
  email:string= "";
  number:string="";

  doj:String="";
  gender:String="";

  btnregister(){
    this.stulist.push({"name": this.name,"email":this.email, "number":this.number ,"doj":this.doj, "gender":this.gender});  
    
  //  +++++++ clear +++++++++
   
    this.name = "";
    this.email = "";
    this.number = "";
    this.doj = "";
    this.gender = "";
  }


  // +++++++ for delete data ++++++

  deleteStudent(objstulist: any) {
    const index = this.stulist.indexOf(objstulist);
    if (index !== -1) {
      this.stulist.splice(index, 1);
    }
  }

  // +++++++ ++++++++++

}
