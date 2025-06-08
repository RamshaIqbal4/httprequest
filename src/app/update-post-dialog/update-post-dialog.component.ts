import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-post-dialog',
  templateUrl: './update-post-dialog.component.html',
  styleUrls: ['./update-post-dialog.component.css']
})
export class UpdatePostDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdatePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; body: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.dialogRef.close(this.data); // Return updated data
  }
}