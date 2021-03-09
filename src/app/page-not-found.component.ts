import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div class="row align-items-center text-center">
        <div class="col">
          <h1 class="my-5">Ohnoes this is not the page you were looking for!</h1>
          <a [routerLink]="['/welcome']">Back to home</a>
        </div>
      </div>
    </div>
    `
})
export class PageNotFoundComponent { }
