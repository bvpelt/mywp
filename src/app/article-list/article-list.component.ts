import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/model/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article> = null;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

}
