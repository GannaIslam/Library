import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface FocusArea {

  id: number;

  label: string;

}

@Component({

  selector: 'app-registration',

  imports: [FormsModule, RouterLink],

  templateUrl: './registration.html',

  styleUrl: './registration.css',

})

export class Registration implements OnInit {

  fullName = '';

  email = '';

  password = '';

  confirmPassword = '';

  agreeTerms = false;

  sendNotices = true;


  focusAreas: FocusArea[] = [

    { id: 1, label: 'Archival Research' },

    { id: 2, label: 'Rare Volumes' },

    { id: 3, label: 'General Reader' },

  ];


  selectedFocus = this.focusAreas[0].id;


  ngOnInit(): void {

    console.log('Registration component initialized');

  }


  selectFocus(id: number): void {

    this.selectedFocus = id;

  }


  get passwordsMatch(): boolean {

    return this.password === this.confirmPassword;

  }


  completeEnrollment(): void {

    if (!this.fullName || !this.email || !this.password) {

      console.log('Please fill all required fields');

      return;

    }


    if (!this.passwordsMatch) {

      console.log('Passwords do not match');

      return;

    }


    console.log('Enrollment complete for', this.fullName);

    this.router.navigate(['/home']);

  }


  constructor(private router: Router) {}

}