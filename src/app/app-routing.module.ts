import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  //{ path: 'home', component: AppComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
