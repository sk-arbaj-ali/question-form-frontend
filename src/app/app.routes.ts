import { Routes } from '@angular/router';
import { AnswerForm } from './components/answer-form/answer-form';
import { QuestionForm } from './components/question-form/question-form';
import { QuestionGroup } from './components/question-group/question-group';
import { Login } from './components/authentication/login/login';
import { Signup } from './components/authentication/signup/signup';
import { Logout } from './components/authentication/logout/logout';
import { AnswerSheetContainer } from './components/answer-sheet-container/answer-sheet-container';


export const routes: Routes = [
    {
        path:"",
        component: AnswerForm
    },
    {
        path:"admin-panel",
        component: QuestionForm,
    },
    {
        path:"question-panel",
        component: QuestionGroup,
    },
    {
        path:"login-to-platform/:role",
        component: Login
    },
    {
        path:"sign-up-to-platform/:role",
        component: Signup
    },
    {
        path:"show-answer-sheets-for-student",
        component: AnswerSheetContainer
    },
    {
        path:"logout",
        component: Logout
    }
];
