import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { LoadArticleActions, LoadArticlesErrors, LoadArticleActionTypes, LoadArticles, LoadArticleAction } from '../actions/article-list.actions';
import { Article } from '../shared/model/article.model';
import { environment } from 'src/environments/environment';

export interface ArticleState {
    articles: Article[] | null;
    error: string | null;
};

const initialArticleState: ArticleState = {
    articles: null,
    error: null
};

export interface AppState {
    articles: ArticleState;
}

export function articleReducer(state: ArticleState = initialArticleState, action: LoadArticleAction): ArticleState {
    switch (action.type) {
        case LoadArticleActionTypes.LoadArticles:
            return {
                articles: action.payload.articles,
                error: null
            };

        case LoadArticleActionTypes.LoadArticlesErrors:
            return {
                articles: null,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export const reducers: ActionReducerMap<AppState> = {
    articles: articleReducer
};


export const selectArticle = (state: AppState) => state.articles.articles;

export const selectError = (state: AppState) => state.articles.error;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
