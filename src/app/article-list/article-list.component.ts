import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/model/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() categorieId: number = 0;

  articles$: Observable<Article[]> = null;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    console.log('Articlelist - catagorieId: ', this.categorieId);
    this.articles$ = this.articleService.getArticles(this.categorieId);
  }

}
