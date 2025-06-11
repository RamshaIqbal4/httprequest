import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { MatDialog } from "@angular/material/dialog";
import { UpdatePostDialogComponent } from "../update-post-dialog/update-post-dialog.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-fetch-demo",
  templateUrl: "./fetch-demo.component.html",
  styleUrls: ["./fetch-demo.component.css"],
})
export class FetchDemoComponent implements OnInit {
  posts: any[] = [];
  newPost = { title: "", body: "" };

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost(): void {
    this.apiService.createPost(this.newPost).subscribe((post) => {
      this.posts.push(post);
      this.newPost = { title: "", body: "" };
    });
  }

  getPostDetails(postId: number): void {
    this.apiService.getPostById(postId).subscribe((data) => {
      this.router.navigate(["/posts", postId]);
      console.log(data);
    });
  }

  updatePost(post: any): void {
    console.log();
    const dialogRef = this.dialog.open(UpdatePostDialogComponent, {
      width: "250px",
      data: { title: post.title, body: post.body },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(post.id);
        this.apiService.updatePost(post.id, result).subscribe(
          () => {
            this.fetchPosts(); // Refresh the list after updating
          },
          (error) => {
            console.error("Error updating post:", error);
          }
        );
      }
    });
  }

  deletePost(postId: number): void {
    this.apiService.deletePost(postId).subscribe(() => {
      // this.fetchPosts();
      const filteredArray = this.posts.filter(({ id }) => {
        return postId !== id;
      });
      this.posts = filteredArray;
    });
  }
}
