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
let AddCasesComponent = class AddCasesComponent {
    constructor(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
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
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addCases(this.casesForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/cases-details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    ngOnInit() {
        this.casesForm = this.formBuilder.group({
            name: [null, Validators.required],
            gender: [null, Validators.required],
            age: [null, Validators.required],
            address: [null, Validators.required],
            city: [null, Validators.required],
            country: [null, Validators.required],
            status: [null, Validators.required],
        });
    }
};
AddCasesComponent = __decorate([
    Component({
        selector: 'app-add-cases',
        templateUrl: './add-cases.component.html',
        styleUrls: ['./add-cases.component.css']
    })
], AddCasesComponent);
export { AddCasesComponent };
//# sourceMappingURL=add-cases.component.js.map