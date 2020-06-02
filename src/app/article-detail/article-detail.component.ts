import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/model/article.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = null;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((route: ParamMap) => {
        console.log('Route: ', route);
        this.id = parseInt(route.get('id'));
        if ((this.id != null) && (this.id > 0)) {
          this.articleService.getArticle(this.id)
            .subscribe(
              (res: Article) => {
                console.log('Received article ', res);
                // get new list
                this.article = res;
              },
              err => {
                console.error('Error during get article: ', this.id, ': ', err);
                this.article = null;
              },
              () => {
                console.log('getArticle ready');
              }
            )
        }
      });
  }

}
