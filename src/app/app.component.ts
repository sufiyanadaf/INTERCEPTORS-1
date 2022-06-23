import { Component } from '@angular/core';
import { ApisharedService } from './apishared/apishared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor';
  variable= 'one';
  array =[{ name: "rajesh", age: 26, gender: "male" },
  { name: "suresh", age: 32, gender: "male" },
  { name: "vinoth", age: 40, gender: "male" },
  { name: "rita", age: 14, gender: "female" },
  { name: "sushma", age: 23, gender: "female" },
  { name: "sunith", age: 17, gender: "female" },
  { name: "john", age: 32, gender: "male" }]

  constructor(private api : ApisharedService){}
  ngOnInit(){
    this.recieveInformation()

  //   for(var i=0; i<this.array.length; i++){
  //     if(this.array[i].age>=18 && this.array[i].age<=30){
  // console.log(this.array[i].age)
  //     }
    }

  
  recieveInformation(){
    this.api.getInfromation().subscribe((Response:any)=>{
      // console.log(Response)
    })

    // for(var i=0; i<this.array.length; i++){
    //   if(this.array[i].age>10 && this.array[i].age<30){
    //     console.log("Age", this.array[i].age)
    //   }
    // }
  }
// for(var i=0; i< 100; i++){
  
//   if(i%2==1){
//     console.log(i)
//   }
// }
// for(var i=0; i< 100; i++){
//   if(i%2==0){
//     console.log(i)
//   }
// }
addStyle(){
  return{
    'font-size':'25px',
    'font-style':'italic',
     'color':'red'
  }
}
addClass(){
  return{
     'btn-bold':false,
     'btn-italic':true,
     'btn-green':true
  }
}
  }
 


