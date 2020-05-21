import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // 导入路由依赖包

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component'; // 导入HeroesComponent，指导路由器要去的地方
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 路由配置
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes', // 用来匹配浏览器地址栏中URL的字符串
    component: HeroesComponent // 导航到该路由时，路由器应该创建的组件
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
