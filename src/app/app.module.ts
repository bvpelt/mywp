import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { ArticleService } from './shared/services/article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './shared/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
