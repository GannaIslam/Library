import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  showEditProfile = false;
  showSettings = false;

  name = localStorage.getItem('profileName') || 'Eleanor Vance';
  title = 'Master Archivist & Literary Explorer';
  role = 'MEMORIAL AUTHOR';

profileImage = localStorage.getItem('profileImage') || '';
  selectedImage = '';

  emailNotifications = true;
  readingReminders = true;

  volumesRead = Number(localStorage.getItem('volumesRead')) || 342;
  activeLoans = 12;
  reviewsWritten = 89;

  currentBook = {
    title: 'The Decline and Fall of the Roman Empire, Vol I.',
    author: 'Edward Gibbon',
    progress: 64,
    quote: 'A true retrospective journey through history, revealing the rise and fall of civilizations.',
    bookImage: 'images.jfif',
  };

  books = [
    {
      id: 1,
      title: 'Chronicles of the Spire',
      author: 'Archmaester Valen',
      bookImage: 'Image_pyjddtpyjddtpyjd.jfif',
    },
    {
      id: 2,
      title: 'Whispers of the Fey',
      author: 'Elara Moonwhisper',
      bookImage: 'Image_ubipglubipglubip.jfif',
    },
    {
      id: 3,
      title: 'Cartography of the Unseen',
      author: 'Captain A. Vance',
      bookImage: 'Image_qtj83jqtj83jqtj8.jfif',
    },
    {
      id: 4,
      title: "The Keeper's Ledger",
      author: 'Unknown',
      bookImage: 'Image_oo660voo660voo66.jfif',
    },
    {
      id: 5,
      title: "The Alchemist's Paradox",
      author: 'Silas Thorne',
      bookImage: 'Image_28y9rk28y9rk28y9.jfif',
    },
    {
      id: 6,
      title: 'Runes of Power Vol. I',
      author: 'Master Kaelen',
      bookImage: 'Image_pyjddtpyjddtpyjd.jfif',
    },
    {
      id: 7,
      title: 'The Moonlit Archives',
      author: 'Lyra Evermere',
      bookImage: 'images.jfif',
    },
    {
      id: 8,
      title: 'Crown of Forgotten Stars',
      author: 'Orion Blackwood',
      bookImage: 'images.jfif',
    },
    {
      id: 9,
      title: 'The Silent Kingdom',
      author: 'Arin Vale',
      bookImage: 'images.jfif',
    },
    {
      id: 10,
      title: 'Echoes of the Ancient Sea',
      author: 'Mira Solenne',
      bookImage: 'images.jfif',
    },
    {
      id: 11,
      title: "The Dragon's Last Oath",
      author: 'Kael Stormborn',
      bookImage: 'images.jfif',
    },
    {
      id: 12,
      title: 'Library of Lost Souls',
      author: 'Eveline Crow',
      bookImage: 'images.jfif',
    },
    {
      id: 13,
      title: 'The Crimson Throne',
      author: 'Rowan Ashford',
      bookImage: 'images.jfif',
    },
    {
      id: 14,
      title: 'Secrets of Eldoria',
      author: 'Thalia Wyn',
      bookImage: 'images.jfif',
    },
    {
      id: 15,
      title: 'Ashes of the First Empire',
      author: 'Dorian Vex',
      bookImage: 'images.jfif',
    },
    {
      id: 16,
      title: 'The Astral Wanderer',
      author: 'Celeste Maren',
      bookImage: 'images.jfif',
    },
    {
      id: 17,
      title: 'Song of the Silver Forest',
      author: 'Elowen Faye',
      bookImage: 'images.jfif',
    },
    {
      id: 18,
      title: 'The Forgotten Mage',
      author: 'Lucian Grey',
      bookImage: 'images.jfif',
    },
    {
      id: 19,
      title: 'Beyond the Obsidian Gate',
      author: 'Nyx Ravenwood',
      bookImage: 'images.jfif',
    },
    {
      id: 20,
      title: 'The Last Tome of Aethelgard',
      author: 'High Scholar Edrin',
      bookImage: 'images.jfif',
    }
  ];

  activities = [
    {
      date: 'SEP 08, 2026',
      badge: 'RETURNED',
      title: 'Returned The Odyssey by Homer',
      description: 'Completed the loan period and returned the volume.',
      type: 'returned',
    },
    {
      date: 'SEP 05, 2026',
      badge: 'REVIEW ADDED',
      title: 'Reviewed Middlemarch by George Eliot',
      description: 'Added a thoughtful review to the literary classic.',
      type: 'review',
      quote: 'A true retrospective journey through character, society, and human nature.',
    },
    {
      date: 'SEP 02, 2026',
      badge: 'RESERVED',
      title: 'Placed reservation for Dune by Frank Herbert',
      description: 'Added this acclaimed science-fiction title to the reservation list.',
      type: 'reserved',
    },
  ];

  ngOnInit(): void {
    this.volumesRead = Number(localStorage.getItem('volumesRead')) || 342;

    const lastViewedBookId = localStorage.getItem('lastViewedBookId');

    if (lastViewedBookId) {
      const bookId = Number(lastViewedBookId);

      const book = this.books.find(book => book.id === bookId);

      if (book) {
        this.currentBook = {
          title: book.title,
          author: book.author,
          progress: 64,
          quote: 'A true retrospective journey through history, revealing the rise and fall of civilizations.',
          bookImage: book.bookImage,
        };
      }
    }
  }

  openEditProfile(): void {
    this.showEditProfile = true;
    this.selectedImage = this.profileImage;
  }

  closeEditProfile(): void {
    this.showEditProfile = false;
    this.selectedImage = this.profileImage;
  }

  openSettings(): void {
    this.showSettings = true;
  }

  closeSettings(): void {
    this.showSettings = false;
  }

submitProfile(): void {
  this.profileImage = this.selectedImage;

  localStorage.setItem('profileName', this.name);
  localStorage.setItem('profileTitle', this.title);
  localStorage.setItem('profileRole', this.role);
  localStorage.setItem('profileImage', this.profileImage);

  this.showEditProfile = false;
}
  changePhoto(): void {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = () => {
      const file = input.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.selectedImage = reader.result as string;
        };

        reader.readAsDataURL(file);
      }
    };

    input.click();
  }

  toggleEmailNotifications(): void {
    this.emailNotifications = !this.emailNotifications;
  }

  toggleReadingReminders(): void {
    this.readingReminders = !this.readingReminders;
  }

deleteAccount(): void {
  const confirmed = confirm(
    'Are you sure you want to delete your account?'
  );

  if (confirmed) {
    localStorage.removeItem('profileName');
    localStorage.removeItem('profileTitle');
    localStorage.removeItem('profileRole');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('lastViewedBookId');

    this.name = 'Eleanor Vance';
    this.title = 'Master Archivist & Literary Explorer';
    this.role = 'MEMORIAL AUTHOR';
    this.profileImage = '';
    this.selectedImage = '';

    alert('Account deleted successfully.');
    this.closeSettings();
  }
}}