import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService:QuizService,private route : Router) { }

  ngOnInit(): void {
  }

  RightAnswer1() {
   
    this.quizService.scores = 1;
    this.route.navigate(['/test1']);
  }

}
