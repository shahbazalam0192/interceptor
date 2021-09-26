import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BasicInterceptorComponent } from './basic-interceptor/basic-interceptor.component';
import { paths } from './const';
import { LoaderComponent } from './loader/loader.component';
import { ConvertComponent } from './convert/convert.component';
import { HeaderComponent } from './header/header.component';
import { NotifyComponent } from './notify/notify.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { ErrorComponent } from './error/error.component';
import { FakeComponent } from './fake/fake.component';
import { CacheComponent } from './cache/cache.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: paths.auth, component: AuthComponent },
  { path: paths.cache, component: CacheComponent },
  { path: paths.convert, component: ConvertComponent },
  { path: paths.error, component: ErrorComponent },
  { path: paths.fake, component: FakeComponent },
  { path: paths.header, component: HeaderComponent },
  { path: paths.https, component: BasicInterceptorComponent },
  { path: paths.loader, component: LoaderComponent },
  { path: paths.profiler, component: ProfilingComponent },
  { path: paths.notify, component: NotifyComponent },
];

@NgModule({
  declarations: [
    BasicInterceptorComponent,
    AuthComponent,
    CacheComponent,
    ConvertComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    LoaderComponent,
    NotifyComponent,
    ProfilingComponent,
  ],
  imports: [CommonModule, MatButtonModule, RouterModule.forRoot(routes)],
  exports: [
    BasicInterceptorComponent,
    AuthComponent,
    CacheComponent,
    ConvertComponent,
    ErrorComponent,
    FakeComponent,
    HeaderComponent,
    LoaderComponent,
    NotifyComponent,
    ProfilingComponent,
    RouterModule,
  ],
})
export class AppRoutingModule {}
