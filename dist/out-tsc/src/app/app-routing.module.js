import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';
//const routes: Routes = [];
const routes = [
    {
        path: 'cases',
        component: CasesComponent,
        data: { title: 'List of Cases' }
    },
    {
        path: 'cases-details/:id',
        component: CasesDetailsComponent,
        data: { title: 'Cases Details' }
    },
    {
        path: 'cases-stat',
        component: CasesStatComponent,
        data: { title: 'Cases Statistic' }
    },
    {
        path: 'add-cases',
        component: AddCasesComponent,
        data: { title: 'Add Cases' }
    },
    {
        path: 'edit-cases/:id',
        component: EditCasesComponent,
        data: { title: 'Edit Cases' }
    },
    { path: '',
        redirectTo: '/cases',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map