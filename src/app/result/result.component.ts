import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit(): void {
  }
  
  get Score():number {
    return this.quizService.scores ;
  }
   
  get Participant():string {
    return this.quizService.participantName ;
  }
  
  set Participant(value :string) {
    this.quizService.participantName = value;
  }
  restart() {
    this.route.navigate(['/quiz']);
  }
}
