import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private quizService: QuizService,private route: Router) { }

  ngOnInit(): void {
  }

  RightAnswer3() {
    this.quizService.scores=3;
    this.route.navigate(['//test3']);

  }

}
