import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let EditCasesComponent = class EditCasesComponent {
    constructor(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this._id = '';
        this.name = '';
        this.gender = '';
        this.age = null;
        this.address = '';
        this.city = '';
        this.country = '';
        this.status = '';
        this.statusList = ['Positive', 'Dead', 'Recovered'];
        this.genderList = ['Male', 'Female'];
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    getCasesById(id) {
        this.api.getCasesById(id).subscribe((data) => {
            this._id = data._id;
            this.casesForm.setValue({
                name: data.name,
                gender: data.gender,
                age: data.age,
                address: data.address,
                city: data.city,
                country: data.country,
                status: data.status
            });
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.updateCases(this._id, this.casesForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/cases-details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    casesDetails() {
        this.router.navigate(['/cases-details', this._id]);
    }
    ngOnInit() {
        this.getCasesById(this.route.snapshot.params.id);
        this.casesForm = this.formBuilder.group({
            name: [null, Validators.required],
            gender: [null, Validators.required],
            age: [null, Validators.required],
            address: [null, Validators.required],
            city: [null, Validators.required],
            country: [null, Validators.required],
            status: [null, Validators.required]
        });
    }
};
EditCasesComponent = __decorate([
    Component({
        selector: 'app-edit-cases',
        templateUrl: './edit-cases.component.html',
        styleUrls: ['./edit-cases.component.css']
    })
], EditCasesComponent);
export { EditCasesComponent };
//# sourceMappingURL=edit-cases.component.js.map