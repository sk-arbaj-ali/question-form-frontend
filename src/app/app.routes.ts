import { Routes } from '@angular/router';
import { AnswerForm } from './components/answer-form/answer-form';
import { QuestionForm } from './components/question-form/question-form';
import { QuestionGroup } from './components/question-group/question-group';
import { Login } from './components/authentication/login/login';
import { Signup } from './components/authentication/signup/signup';
import { AnswerSheet } from './components/answer-sheet/answer-sheet';


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
        path:"login-to-platform",
        component: Login
    },
    {
        path:"sign-up-to-platform",
        component: Signup
    },
    {
        path:"show-answer-sheets-for-student",
        component: AnswerSheet
    }
];
