import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContatMeComponent } from '../material/Dilogs/contat-me/contat-me.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent {
  [x: string]: any;

  constructor(private dialog: MatDialog,private http: HttpClient) { }
  contactMe() {
    this.dialog.open(ContatMeComponent);
  }
  
  downloadPDF(): void {
    const pdfUrl = '../../assets/cv/Arpita_Sahoo_portfolio.pdf'; // Replace with your PDF URL

    // Make a GET request to fetch the PDF file
    this.http.get(pdfUrl, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        // Create a blob object from the response
        const blob = new Blob([response], { type: 'application/pdf' });

        // Create a link element, set its href and download attributes, and simulate a click
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Arpita-cv.pdf'; // Set the filename for download
        link.click();
      }, error => {
        // Handle error, if any
        console.error('Error downloading the PDF:', error);
      });
  }
}
