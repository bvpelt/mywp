import { Action } from '@ngrx/store';
import { Article } from '../shared/model/article.model';

export enum LoadArticleActionTypes {
    LoadArticles = '[Home Page] Load Articles',
    LoadArticlesErrors = '[Home Page] Load Articles Errors'
}

export class LoadArticleAction implements Action {
    type: string;
    payload: {
        articles: Article[],
        error: string
    };
}

export class LoadArticles implements Action {
    readonly type = LoadArticleActionTypes.LoadArticles;

    constructor(readonly payload: { articles: Article[] }) {

    }
}

export class LoadArticlesErrors implements Action {
    readonly type = LoadArticleActionTypes.LoadArticlesErrors;

    constructor(readonly payload: { error: string }) {

    }
}

export type LoadArticleActions = LoadArticles | LoadArticlesErrors;