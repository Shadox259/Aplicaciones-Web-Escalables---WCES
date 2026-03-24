import { Routes } from '@angular/router';
import { home } from './vistas/home/home';
import { library } from './vistas/library/library';
import { catalog } from './vistas/catalog/catalog';
import { reader } from './vistas/reader/reader';
import { login } from './vistas/login/login';
import { register } from './vistas/register/register';
import { cart } from './vistas/cart/cart';
import { admin } from './vistas/admin/admin';
import { profile } from './vistas/profile/profile';
export const routes: Routes = [
    {path: '', component: home},
    {path: 'library', component: library},
    {path: 'catalog', component: catalog},
    {path: 'reader', component: reader},
    {path: 'login', component: login},
    {path: 'register', component: register},
    {path: 'cart', component: cart},
    {path: 'admin', component: admin},
    {path: 'profile', component: profile}
];
