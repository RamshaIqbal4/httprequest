import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FetchDemoComponent } from "./fetch-demo/fetch-demo.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UpdatePostDialogComponent } from "./update-post-dialog/update-post-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { PostByidComponent } from "./post-byid/post-byid.component";
@NgModule({
  declarations: [
    AppComponent,
    FetchDemoComponent,
    UpdatePostDialogComponent,
    PostByidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: "posts/:id", component: PostByidComponent },
      { path: "posts/**", component: FetchDemoComponent },
      { path: "", component: FetchDemoComponent },
      { path: "**", component: FetchDemoComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
