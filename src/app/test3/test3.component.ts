import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private route : Router , private quizService : QuizService) { }

  ngOnInit(): void {
  }

  RightAnswer4() {
    this.quizService.scores=4;
    this.route.navigate(['/result']);

  }


}
