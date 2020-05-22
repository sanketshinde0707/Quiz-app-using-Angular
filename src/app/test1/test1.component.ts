import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private quizService: QuizService,private route: Router) { }

  ngOnInit(): void {
  }


  RightAnswer2() {
    this.quizService.scores=2;
    this.route.navigate(['/test2']);

  }


}
