import { Routes } from '@angular/router';
import { AnswerForm } from './components/answer-form/answer-form';
import { QuestionForm } from './components/question-form/question-form';
import { QuestionGroup } from './components/question-group/question-group';


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
    }
];
