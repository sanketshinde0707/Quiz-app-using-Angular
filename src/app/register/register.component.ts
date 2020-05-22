import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private quizService: QuizService,private route : Router) { }
 
  get Participant():string {
    return this.quizService.participantName ;
  }
  
  set Participant(value :string) {
    this.quizService.participantName = value;
  }

  ngOnInit(): void {
  }


  OnSubmit(){
    this.route.navigate(['/quiz']);  
  }


}
