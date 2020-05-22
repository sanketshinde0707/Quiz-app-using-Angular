import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

const routes: Routes = [
    {path:'register',component: RegisterComponent},
    {path:'quiz',component: QuizComponent},
    {path:'result',component: ResultComponent,},
    {path:'test1',component: Test1Component},
    {path:'test2',component: Test2Component},
    {path:'test3',component: Test3Component},
    {path:'',redirectTo:'/register', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
