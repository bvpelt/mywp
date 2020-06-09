import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/model/article.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadArticles, LoadArticlesErrors } from '../actions/article-list.actions';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() categorieId: number = 0;

  articles$: Observable<Article[]> = null;
  arts: Article[] = null;

  //  constructor(private articleService: ArticleService) { }
  constructor(private articleService: ArticleService,
    private store: Store<{ articles: Article[] }>) { }

  ngOnInit(): void {
    console.log('Articlelist - catagorieId: ', this.categorieId);
    //this.articles$ = this.articleService.getArticles(this.categorieId);
    this.load();
  }

  load() {
    this.articles$ = this.articleService.getArticles(this.categorieId);
    this.articles$.subscribe(
      (res: Article[]) => {
        this.arts = res;
        this.store.dispatch(new LoadArticles({ articles: this.arts }));
      },
      (error) => {
        console.log('Error occured: ', error),
        this.store.dispatch(new LoadArticlesErrors({ error: error }));
      },
      () => { console.log('Ready') }
    )

  }
}
