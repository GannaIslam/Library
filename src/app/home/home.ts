import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Book {

  id: number;

  title: string;

  author: string;

  readingTime: string;

  readingHours: number;

  tags: string[];

  mood: string;

  coverLines: string[];

  coverClass: string;

  bookImage: string;

}


@Component({

  selector: 'app-home',

  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
],

  templateUrl: './home.html',

  styleUrl: './home.css',

})


export class Home implements

  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {


  // ================= HERO DATA =================

  smallTitle = "THE CURATOR'S SELECTION";

  mainTitle = "Chronicles of the Forgotten Realms";

  description =
    "A meticulously curated anthology of lost histories and arcane knowledge, unearthed from the deepest vaults of Aethelgard.";

  bookImage =
    "il_fullxfull.6859625089_eztm.jpg";


  // ================= SEARCH =================

  searchText = "";


  // ================= ALL BOOKS =================

  allBooks: Book[] = [

    {
      id: 1,
      title: 'Chronicles of the Spire',
      author: 'Archmaester Valen',
      readingTime: '12+ HOURS',
      readingHours: 12,
      tags: ['HISTORY', 'FICTION'],
      mood: 'adventure',
      coverLines: ['CHRONICLES', 'OF THE', 'SPIRE'],
      coverClass: 'cover-one',
      bookImage: 'Image_pyjddtpyjddtpyjd.jfif'
    },

    {
      id: 2,
      title: 'Whispers of the Fey',
      author: 'Elara Moonwhisper',
      readingTime: '4 HOURS',
      readingHours: 4,
      tags: ['MYTHOLOGY', 'FICTION'],
      mood: 'calm',
      coverLines: ['WHISPERS', 'OF THE', 'FEY'],
      coverClass: 'cover-two',
      bookImage: 'Image_ubipglubipglubip.jfif'
    },

    {
      id: 3,
      title: 'Cartography of the Unseen',
      author: 'Captain A. Vance',
      readingTime: '6 HOURS',
      readingHours: 6,
      tags: ['LORE', 'HOPEFUL'],
      mood: 'calm',
      coverLines: ['CARTOGRAPHY', 'OF THE', 'UNSEEN'],
      coverClass: 'cover-three',
      bookImage: 'Image_qtj83jqtj83jqtj8.jfif'
    },

    {
      id: 4,
      title: "The Keeper's Ledger",
      author: 'Unknown',
      readingTime: '3 HOURS',
      readingHours: 3,
      tags: ['HISTORY', 'FICTION'],
      mood: 'dark',
      coverLines: ['THE', "KEEPER'S", 'LEDGER'],
      coverClass: 'cover-four',
      bookImage: 'Image_oo660voo660voo66.jfif'
    },

    {
      id: 5,
      title: "The Alchemist's Paradox",
      author: 'Silas Thorne',
      readingTime: '8 HOURS',
      readingHours: 8,
      tags: ['ALCHEMY', 'DARK'],
      mood: 'dark',
      coverLines: ['THE', "ALCHEMIST'S", 'PARADOX'],
      coverClass: 'cover-one',
      bookImage: 'Image_28y9rk28y9rk28y9.jfif'
    },

    {
      id: 6,
      title: 'Runes of Power Vol. I',
      author: 'Master Kaelen',
      readingTime: '15+ HOURS',
      readingHours: 15,
      tags: ['ARCANE', 'HISTORY'],
      mood: 'dark',
      coverLines: ['RUNES', 'OF POWER', 'VOL. I'],
      coverClass: 'cover-two',
      bookImage: 'Image_pyjddtpyjddtpyjd.jfif'
    },

    {
      id: 7,
      title: 'The Moonlit Archives',
      author: 'Lyra Evermere',
      readingTime: '7 HOURS',
      readingHours: 7,
      tags: ['MYSTERY', 'LORE'],
      mood: 'calm',
      coverLines: ['THE', 'MOONLIT', 'ARCHIVES'],
      coverClass: 'cover-three',
      bookImage: 'images.jfif'
    },

    {
      id: 8,
      title: 'Crown of Forgotten Stars',
      author: 'Orion Blackwood',
      readingTime: '10+ HOURS',
      readingHours: 10,
      tags: ['FANTASY', 'HISTORY'],
      mood: 'adventure',
      coverLines: ['CROWN OF', 'FORGOTTEN', 'STARS'],
      coverClass: 'cover-four',
      bookImage: 'images.jfif'
    },

    {
      id: 9,
      title: 'The Silent Kingdom',
      author: 'Arin Vale',
      readingTime: '9 HOURS',
      readingHours: 9,
      tags: ['DARK', 'HISTORY'],
      mood: 'dark',
      coverLines: ['THE', 'SILENT', 'KINGDOM'],
      coverClass: 'cover-one',
      bookImage: 'images.jfif'
    },

    {
      id: 10,
      title: 'Echoes of the Ancient Sea',
      author: 'Mira Solenne',
      readingTime: '5 HOURS',
      readingHours: 5,
      tags: ['ADVENTURE', 'HISTORY'],
      mood: 'adventure',
      coverLines: ['ECHOES', 'OF THE', 'ANCIENT SEA'],
      coverClass: 'cover-two',
      bookImage: 'images.jfif'
    },

    {
      id: 11,
      title: "The Dragon's Last Oath",
      author: 'Kael Stormborn',
      readingTime: '14 HOURS',
      readingHours: 14,
      tags: ['EPIC', 'ARCANA'],
      mood: 'dark',
      coverLines: ['THE', "DRAGON'S", 'LAST OATH'],
      coverClass: 'cover-three',
      bookImage: 'images.jfif'
    },

    {
      id: 12,
      title: 'Library of Lost Souls',
      author: 'Eveline Crow',
      readingTime: '6 HOURS',
      readingHours: 6,
      tags: ['MYSTERY', 'ARCANA'],
      mood: 'dark',
      coverLines: ['LIBRARY', 'OF LOST', 'SOULS'],
      coverClass: 'cover-four',
      bookImage: 'images.jfif'
    },

    {
      id: 13,
      title: 'The Crimson Throne',
      author: 'Rowan Ashford',
      readingTime: '11 HOURS',
      readingHours: 11,
      tags: ['ARCANA', 'HISTORY'],
      mood: 'adventure',
      coverLines: ['THE', 'CRIMSON', 'THRONE'],
      coverClass: 'cover-one',
      bookImage: 'images.jfif'
    },

    {
      id: 14,
      title: 'Secrets of Eldoria',
      author: 'Thalia Wyn',
      readingTime: '8 HOURS',
      readingHours: 8,
      tags: ['LORE', 'HOPEFUL'],
      mood: 'calm',
      coverLines: ['SECRETS', 'OF', 'ELDORIA'],
      coverClass: 'cover-two',
      bookImage: 'images.jfif'
    },

    {
      id: 15,
      title: 'Ashes of the First Empire',
      author: 'Dorian Vex',
      readingTime: '13+ HOURS',
      readingHours: 13,
      tags: ['HISTORY', 'DARK'],
      mood: 'dark',
      coverLines: ['ASHES', 'OF THE', 'FIRST EMPIRE'],
      coverClass: 'cover-three',
      bookImage: 'images.jfif'
    },

    {
      id: 16,
      title: 'The Astral Wanderer',
      author: 'Celeste Maren',
      readingTime: '7 HOURS',
      readingHours: 7,
      tags: ['ARCANE', 'ADVENTURE'],
      mood: 'adventure',
      coverLines: ['THE', 'ASTRAL', 'WANDERER'],
      coverClass: 'cover-four',
      bookImage: 'images.jfif'
    },

    {
      id: 17,
      title: 'Song of the Silver Forest',
      author: 'Elowen Faye',
      readingTime: '4 HOURS',
      readingHours: 4,
      tags: ['WHIMSICAL', 'MYTHOLOGY'],
      mood: 'calm',
      coverLines: ['SONG OF', 'THE SILVER', 'FOREST'],
      coverClass: 'cover-one',
      bookImage: 'images.jfif'
    },

    {
      id: 18,
      title: 'The Forgotten Mage',
      author: 'Lucian Grey',
      readingTime: '9 HOURS',
      readingHours: 9,
      tags: ['MAGIC', 'MYSTERY'],
      mood: 'dark',
      coverLines: ['THE', 'FORGOTTEN', 'MAGE'],
      coverClass: 'cover-two',
      bookImage: 'images.jfif'
    },

    {
      id: 19,
      title: 'Beyond the Obsidian Gate',
      author: 'Nyx Ravenwood',
      readingTime: '12 HOURS',
      readingHours: 12,
      tags: ['DARK', 'EPIC'],
      mood: 'dark',
      coverLines: ['BEYOND THE', 'OBSIDIAN', 'GATE'],
      coverClass: 'cover-three',
      bookImage: 'images.jfif'
    },

    {
      id: 20,
      title: 'The Last Tome of Aethelgard',
      author: 'High Scholar Edrin',
      readingTime: '20+ HOURS',
      readingHours: 20,
      tags: ['LEGEND', 'ARCANE'],
      mood: 'calm',
      coverLines: ['THE LAST', 'TOME OF', 'AETHELGARD'],
      coverClass: 'cover-four',
      bookImage: 'images.jfif'
    }

  ];


  // ================= PAGINATION =================

  visibleCount = 6;


  filteredAllBooks: Book[] = [...this.allBooks];


  filteredBooks: Book[] =
    this.allBooks.slice(0, 6);


  // ================= SEARCH FUNCTION =================

  updateVisibleBooks(): void {

    this.filteredBooks =this.filteredAllBooks.slice(0,this.visibleCount);

  }

  filterBooks(): void {

    const search =
      this.searchText.toLowerCase().trim();


    if (search === '') {

      this.filteredAllBooks =[...this.allBooks];

    } 
    else {
    this.filteredAllBooks = this.allBooks.filter(book =>
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }
    this.visibleCount = 6;

    this.updateVisibleBooks();
  }


  // ================= LOAD MORE =================

  loadMore(): void {

    this.visibleCount = Math.min(this.visibleCount + 3);

    this.updateVisibleBooks();

  }




  get canLoadMore(){

    return (

      this.visibleCount <

      this.filteredAllBooks.length

    );

  }


  // ================= CONSTRUCTOR =================

  constructor() {

    console.log("Home constructor");

  }


  // ================= LIFECYCLE =================

  ngOnChanges(changes: SimpleChanges) {

    console.log("Home ngOnChanges");

  }


  ngOnInit() {

    console.log("Home ngOnInit");

  }


  ngDoCheck() {

    console.log("Home ngDoCheck");

  }


  ngAfterContentInit() {

    console.log("Home ngAfterContentInit");

  }


  ngAfterContentChecked() {

    console.log("Home ngAfterContentChecked");

  }


  ngAfterViewChecked() {

    console.log("Home ngAfterViewChecked");

  }


  ngOnDestroy() {

    console.log("Home ngOnDestroy");

  }

}