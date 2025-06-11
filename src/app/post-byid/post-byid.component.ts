import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-post-byid",
  templateUrl: "./post-byid.component.html",
  styleUrls: ["./post-byid.component.css"],
})
export class PostByidComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.apiService.getPostById(id).subscribe({
      next: (data: any) => {
        this.post = data;
      },
      error: (error) => {
        // if( id.)
        if (error.status === 404) {
          this.router.navigate(["/"]);
        } else {
          console.error("Error fetching post:", error);
        }
      },
    });
  }
}
