import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <table datatable class="row-border hover">
          <thead>
          <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td>Foo</td>
              <td>Bar</td>
          </tr>
          <tr>
              <td>123</td>
              <td>Someone</td>
              <td>Youknow</td>
          </tr>
          <tr>
              <td>987</td>
              <td>Iamout</td>
              <td>Ofinspiration</td>
          </tr>
          </tbody>
      </table>
    `
})
export class AppComponent { }
