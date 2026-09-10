import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,Input
} from '@angular/core';

import { ActivatedRoute, RouterLink,Router } from '@angular/router';
import { CartService } from '../cart-services/cart-services';

interface BookDetailsData {
  id: number;
  bookImage: string;
  title: string;
  author: string;
  status: string;
  isAvailable: boolean;
  price?: number;
  tags: string[];
  bookInfo: {
    title: string;
    value: string;
  }[];
  description: {
    first: string;
    second: string;
  };
  curatorNote: string;
}

@Component({
  selector: 'app-bookdetails',
  imports: [RouterLink],
  templateUrl: './bookdetails.html',
  styleUrl: './bookdetails.css',
})
export class Bookdetails {
  @Input() book: any;
  
  

  bookImage = 'il_fullxfull.6859625089_eztm.jpg';
  title = "Chronicles of the Forgotten Realms";
  author = 'Archmaester Hamdy AbdelKader';
  status = 'Available in the Rare Books Annex';
  isAvailable = false;
  tags = [
    "ASTROPHYSICS",
    "ARCANA",
    "1ST EDITION"
  ];

  bookInfo = [
    {
      title: "PUBLICATION DATE",
      value: "14th of Hearth, 1892"
    },
    {
      title: "PUBLISHER",
      value: "The Obsidian Press"
    },
    {
      title: "LANGUAGE",
      value: "High Valerian (Translated)"
    },
    {
      title: "FORMAT",
      value: "842, Vellum"
    }
  ];

  description = {
    first: 'Chronicles of the Spire is an epic historical record documenting the rise and fall of ancient kingdoms surrounding the legendary Spire.',
    second: 'Through forgotten manuscripts and accounts from travelers, the book reveals battles, alliances, and secrets that shaped the world for generations.'
  };

  curatorNote = 'A remarkable historical record containing details that cannot be found in modern archives. Its accounts of the Spire remain some of the most fascinating records in our collection.';

  books: BookDetailsData[] = [

    {
      id: 1,
      bookImage: "Image_pyjddtpyjddtpyjd.jfif",
      title: "Chronicles of the Spire",
      author: "Archmaester Valen",
      status: "Available in the Rare Books Annex",
      isAvailable: true,
      tags: ["HISTORY", "EPIC"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "7th of Frost, 1878"
        },
        {
          title: "PUBLISHER",
          value: "The Royal Archive Press"
        },
        {
          title: "LANGUAGE",
          value: "High Valerian (Translated)"
        },
        {
          title: "FORMAT",
          value: "612, Vellum"
        }
      ],
      description: {
        first:
          "Chronicles of the Spire is an epic historical record documenting the rise and fall of ancient kingdoms surrounding the legendary Spire.",
        second:
          "Through forgotten manuscripts and accounts from travelers, the book reveals battles, alliances, and secrets that shaped the world for generations."
      },
      curatorNote:
        "A remarkable historical record containing details that cannot be found in modern archives. Its accounts of the Spire remain some of the most fascinating records in our collection."
    },

    {
      id: 2,
      bookImage: "Image_ubipglubipglubip.jfif",
      title: "Whispers of the Fey",
      author: "Elara Moonwhisper",
      status: "Available in the Enchanted Collection",
      isAvailable: true,
      tags: ["MYTHOLOGY", "WHIMSICAL"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "12th of Bloom, 1901"
        },
        {
          title: "PUBLISHER",
          value: "Moonlit Press"
        },
        {
          title: "LANGUAGE",
          value: "Old Elven (Translated)"
        },
        {
          title: "FORMAT",
          value: "284, Handmade Paper"
        }
      ],
      description: {
        first:
          "Whispers of the Fey is a whimsical journey into an enchanted realm inhabited by mysterious creatures, ancient spirits, and forgotten magic.",
        second:
          "Elara Moonwhisper combines folklore and fantasy to tell a story about curiosity, friendship, and the hidden wonders of the natural world."
      },
      curatorNote:
        "A charming volume filled with folklore and delicate illustrations. Readers often describe its pages as feeling almost alive."
    },

    {
      id: 3,
      bookImage: "Image_qtj83jqtj83jqtj8.jfif",
      title: "Cartography of the Unseen",
      author: "Captain A. Vance",
      status: "Available in the Exploration Archive",
      isAvailable: true,
      tags: ["LORE", "HOPEFUL"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "22nd of Harvest, 1889"
        },
        {
          title: "PUBLISHER",
          value: "The Wanderer's Press"
        },
        {
          title: "LANGUAGE",
          value: "Common Tongue"
        },
        {
          title: "FORMAT",
          value: "391, Leather Bound"
        }
      ],
      description: {
        first:
          "Cartography of the Unseen explores mysterious places that exist beyond ordinary maps and the explorers who devoted their lives to finding them.",
        second:
          "Captain A. Vance records strange landscapes, hidden passages, and forgotten civilizations discovered during his journeys across unknown territories."
      },
      curatorNote:
        "One of the archive's most unusual travel records. Several locations mentioned in the book have never been found on any modern map."
    },

    {
      id: 4,
      bookImage: "Image_oo660voo660voo66.jfif",
      title: "The Keeper's Ledger",
      author: "Unknown",
      status: "Available in the Restricted Archive",
      isAvailable: true,
      tags: ["HISTORY", "MELANCHOLIC"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "Unknown"
        },
        {
          title: "PUBLISHER",
          value: "Unknown"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Common"
        },
        {
          title: "FORMAT",
          value: "176, Worn Leather"
        }
      ],
      description: {
        first:
          "The Keeper's Ledger contains the personal records of a mysterious guardian who spent decades protecting secrets buried beneath the ancient library.",
        second:
          "Each entry reveals another fragment of forgotten history, creating a melancholic portrait of a keeper burdened by knowledge that could never be revealed."
      },
      curatorNote:
        "The identity of the original keeper remains unknown. Several pages appear to have been intentionally removed from the manuscript."
    },

    {
      id: 5,
      bookImage: "Image_28y9rk28y9rk28y9.jfif",
      title: "The Alchemist's Paradox",
      author: "Silas Thorne",
      status: "Available in the Arcane Collection",
      isAvailable: true,
      tags: ["ALCHEMY", "DARK"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "3rd of Ash, 1910"
        },
        {
          title: "PUBLISHER",
          value: "The Obsidian Press"
        },
        {
          title: "LANGUAGE",
          value: "High Valerian"
        },
        {
          title: "FORMAT",
          value: "438, Vellum"
        }
      ],
      description: {
        first:
          "The Alchemist's Paradox follows Silas Thorne as he investigates an impossible experiment that challenges the fundamental laws of alchemy.",
        second:
          "The manuscript combines forbidden formulas, mysterious experiments, and philosophical questions about the price of discovering knowledge that was never meant to be found."
      },
      curatorNote:
        "A dangerous but fascinating manuscript. The final pages contain formulas that remain impossible to reproduce."
    },

    {
      id: 6,
      bookImage: "Image_pyjddtpyjddtpyjd.jfif",
      title: "Runes of Power Vol. I",
      author: "Master Kaelen",
      status: "Available in the Arcane Collection",
      isAvailable: true,
      tags: ["ARCANE", "DARK"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "18th of Ember, 1864"
        },
        {
          title: "PUBLISHER",
          value: "The Arcane Press"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Valerian"
        },
        {
          title: "FORMAT",
          value: "720, Rune-Inscribed Vellum"
        }
      ],
      description: {
        first:
          "Runes of Power Vol. I is an ancient study of magical symbols believed to contain the ability to manipulate forces beyond the physical world.",
        second:
          "Master Kaelen documents the origins of the runes and the dangerous consequences faced by those who attempt to unlock their full potential."
      },
      curatorNote:
        "Researchers consider this volume one of the most important surviving studies of arcane symbols."
    },

    {
      id: 7,
      bookImage: "images.jfif",
      title: "The Moonlit Archives",
      author: "Lyra Evermere",
      status: "Available in the Mystery Collection",
      isAvailable: true,
      tags: ["MYSTERY", "LORE"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "9th of Nightfall, 1922"
        },
        {
          title: "PUBLISHER",
          value: "Evermere House"
        },
        {
          title: "LANGUAGE",
          value: "Common Tongue"
        },
        {
          title: "FORMAT",
          value: "350, Bound Manuscript"
        }
      ],
      description: {
        first:
          "The Moonlit Archives is a collection of mysterious records discovered inside an abandoned archive that only becomes accessible under moonlight.",
        second:
          "Lyra Evermere follows clues hidden within the manuscripts to uncover a forgotten history connecting several lost civilizations."
      },
      curatorNote:
        "The manuscript contains strange symbols that appear different depending on the light under which they are viewed."
    },

    {
      id: 8,
      bookImage: "images.jfif",
      title: "Crown of Forgotten Stars",
      author: "Orion Blackwood",
      status: "Available in the Royal Collection",
      isAvailable: true,
      tags: ["FANTASY", "EPIC"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "27th of Harvest, 1897"
        },
        {
          title: "PUBLISHER",
          value: "Blackwood Press"
        },
        {
          title: "LANGUAGE",
          value: "High Valerian"
        },
        {
          title: "FORMAT",
          value: "510, Royal Binding"
        }
      ],
      description: {
        first:
          "Crown of Forgotten Stars tells the story of a vanished royal dynasty whose greatest secrets were hidden among the stars.",
        second:
          "Orion Blackwood combines ancient legends and political intrigue in a journey to uncover the truth behind the forgotten crown."
      },
      curatorNote:
        "An extraordinary mixture of royal history and celestial mythology."
    },

    {
      id: 9,
      bookImage: "images.jfif",
      title: "The Silent Kingdom",
      author: "Arin Vale",
      status: "Available in the Historical Archive",
      isAvailable: true,
      tags: ["DARK", "HISTORY"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "14th of Frost, 1856"
        },
        {
          title: "PUBLISHER",
          value: "The Silent Press"
        },
        {
          title: "LANGUAGE",
          value: "Old Common"
        },
        {
          title: "FORMAT",
          value: "490, Dark Leather"
        }
      ],
      description: {
        first:
          "The Silent Kingdom describes a kingdom that disappeared without leaving behind any clear explanation or surviving witnesses.",
        second:
          "Arin Vale reconstructs its final days through fragments of historical records and mysterious artifacts recovered from the ruins."
      },
      curatorNote:
        "A haunting historical account of a civilization that vanished almost without a trace."
    },

    {
      id: 10,
      bookImage: "images.jfif",
      title: "Echoes of the Ancient Sea",
      author: "Mira Solenne",
      status: "Available in the Maritime Collection",
      isAvailable: true,
      tags: ["ADVENTURE", "MYTHOLOGY"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "2nd of Tide, 1904"
        },
        {
          title: "PUBLISHER",
          value: "The Seafarer's Press"
        },
        {
          title: "LANGUAGE",
          value: "Common Tongue"
        },
        {
          title: "FORMAT",
          value: "320, Water Resistant Binding"
        }
      ],
      description: {
        first:
          "Echoes of the Ancient Sea follows explorers searching for traces of a civilization believed to have disappeared beneath the waves.",
        second:
          "Mira Solenne combines mythology, adventure, and forgotten maritime legends to reveal what may have happened to the ancient kingdom."
      },
      curatorNote:
        "A favorite among explorers and historians for its detailed descriptions of ancient maritime legends."
    },

    {
      id: 11,
      bookImage: "images.jfif",
      title: "The Dragon's Last Oath",
      author: "Kael Stormborn",
      status: "Available in the Legendary Collection",
      isAvailable: true,
      tags: ["EPIC", "DARK"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "16th of Fire, 1881"
        },
        {
          title: "PUBLISHER",
          value: "Stormborn House"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Common"
        },
        {
          title: "FORMAT",
          value: "605, Dragonhide Binding"
        }
      ],
      description: {
        first:
          "The Dragon's Last Oath chronicles the final days of an ancient dragon and the warrior who promised to protect its last secret.",
        second:
          "The story explores loyalty, sacrifice, and the consequences of an oath that survives long after kingdoms and heroes have disappeared."
      },
      curatorNote:
        "Few manuscripts combine history and legend so convincingly. The origin of the final oath remains disputed."
    },

    {
      id: 12,
      bookImage: "images.jfif",
      title: "Library of Lost Souls",
      author: "Eveline Crow",
      status: "Available in the Forbidden Archive",
      isAvailable: true,
      tags: ["MYSTERY", "MELANCHOLIC"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "Unknown"
        },
        {
          title: "PUBLISHER",
          value: "Crow Publishing House"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Common"
        },
        {
          title: "FORMAT",
          value: "410, Black Leather"
        }
      ],
      description: {
        first:
          "Library of Lost Souls tells the story of a mysterious library where every forgotten life is recorded within a single impossible collection.",
        second:
          "Eveline Crow discovers that some of the books contain memories that should have disappeared forever."
      },
      curatorNote:
        "This volume has become one of the most requested books among scholars of forgotten civilizations."
    },

    {
      id: 13,
      bookImage: "images.jfif",
      title: "The Crimson Throne",
      author: "Rowan Ashford",
      status: "Available in the Royal Archive",
      isAvailable: true,
      tags: ["FANTASY", "HISTORY"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "21st of Harvest, 1872"
        },
        {
          title: "PUBLISHER",
          value: "Ashford Press"
        },
        {
          title: "LANGUAGE",
          value: "High Valerian"
        },
        {
          title: "FORMAT",
          value: "530, Royal Leather"
        }
      ],
      description: {
        first:
          "The Crimson Throne follows the struggle for power between rival families during one of the most violent periods in the history of the realm.",
        second:
          "Rowan Ashford explores the ambition, betrayal, and sacrifices behind a throne that changed the course of an entire kingdom."
      },
      curatorNote:
        "A detailed political history filled with accounts of royal intrigue and betrayal."
    },

    {
      id: 14,
      bookImage: "images.jfif",
      title: "Secrets of Eldoria",
      author: "Thalia Wyn",
      status: "Available in the Lore Collection",
      isAvailable: true,
      tags: ["LORE", "HOPEFUL"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "11th of Spring, 1915"
        },
        {
          title: "PUBLISHER",
          value: "Eldorian Press"
        },
        {
          title: "LANGUAGE",
          value: "Eldorian"
        },
        {
          title: "FORMAT",
          value: "375, Illustrated Vellum"
        }
      ],
      description: {
        first:
          "Secrets of Eldoria explores the hidden history of a legendary land believed to have vanished centuries ago.",
        second:
          "Thalia Wyn follows ancient clues that reveal forgotten traditions, magical artifacts, and a secret capable of changing everything known about Eldoria."
      },
      curatorNote:
        "An optimistic exploration of one of the library's greatest unsolved historical mysteries."
    },

    {
      id: 15,
      bookImage: "images.jfif",
      title: "Ashes of the First Empire",
      author: "Dorian Vex",
      status: "Available in the Historical Archive",
      isAvailable: true,
      tags: ["HISTORY", "DARK"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "5th of Ash, 1849"
        },
        {
          title: "PUBLISHER",
          value: "Vex Historical Press"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Valerian"
        },
        {
          title: "FORMAT",
          value: "680, Charred Vellum"
        }
      ],
      description: {
        first:
          "Ashes of the First Empire examines the ruins left behind after the collapse of the oldest known civilization.",
        second:
          "Dorian Vex reconstructs the final years of the empire through surviving records, forgotten monuments, and stories passed down through generations."
      },
      curatorNote:
        "Several pages still carry traces of ash from the ruins where the manuscript was discovered."
    },

    {
      id: 16,
      bookImage: "images.jfif",
      title: "The Astral Wanderer",
      author: "Celeste Maren",
      status: "Available in the Celestial Collection",
      isAvailable: true,
      tags: ["ARCANE", "ADVENTURE"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "19th of Stars, 1930"
        },
        {
          title: "PUBLISHER",
          value: "Maren Observatory Press"
        },
        {
          title: "LANGUAGE",
          value: "Common Tongue"
        },
        {
          title: "FORMAT",
          value: "450, Illustrated Binding"
        }
      ],
      description: {
        first:
          "The Astral Wanderer follows Celeste Maren on a journey through strange celestial realms beyond the known boundaries of the world.",
        second:
          "Her observations reveal mysterious connections between distant stars, ancient magic, and the origins of forgotten civilizations."
      },
      curatorNote:
        "The astronomical observations contained within this book were considered impossible when first published."
    },

    {
      id: 17,
      bookImage: "images.jfif",
      title: "Song of the Silver Forest",
      author: "Elowen Faye",
      status: "Available in the Whimsical Collection",
      isAvailable: true,
      tags: ["WHIMSICAL", "MYTHOLOGY"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "8th of Bloom, 1928"
        },
        {
          title: "PUBLISHER",
          value: "Silverleaf Press"
        },
        {
          title: "LANGUAGE",
          value: "Elven (Translated)"
        },
        {
          title: "FORMAT",
          value: "295, Silver Thread Binding"
        }
      ],
      description: {
        first:
          "Song of the Silver Forest is a gentle tale about an enchanted forest where music is said to preserve the memories of those who enter it.",
        second:
          "Elowen Faye tells a story of friendship, magic, and the importance of remembering the past before it disappears forever."
      },
      curatorNote:
        "A beautifully preserved story often recommended to readers looking for a peaceful escape."
    },

    {
      id: 18,
      bookImage: "images.jfif",
      title: "The Forgotten Mage",
      author: "Lucian Grey",
      status: "Available in the Forbidden Magic Collection",
      isAvailable: true,
      tags: ["MAGIC", "MYSTERY"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "13th of Nightfall, 1870"
        },
        {
          title: "PUBLISHER",
          value: "Grey Manuscripts"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Valerian"
        },
        {
          title: "FORMAT",
          value: "390, Dark Vellum"
        }
      ],
      description: {
        first:
          "The Forgotten Mage follows the traces of a powerful magician whose name was deliberately erased from historical records.",
        second:
          "Lucian Grey investigates the remaining evidence and discovers that the mage may have been protecting the world from a much greater threat."
      },
      curatorNote:
        "A mysterious manuscript whose author appears to have deliberately hidden his identity."
    },

    {
      id: 19,
      bookImage: "images.jfif",
      title: "Beyond the Obsidian Gate",
      author: "Nyx Ravenwood",
      status: "Available in the Forbidden Collection",
      isAvailable: true,
      tags: ["DARK", "EPIC"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "24th of Shadow, 1907"
        },
        {
          title: "PUBLISHER",
          value: "Ravenwood Press"
        },
        {
          title: "LANGUAGE",
          value: "High Valerian"
        },
        {
          title: "FORMAT",
          value: "520, Obsidian Leather"
        }
      ],
      description: {
        first:
          "Beyond the Obsidian Gate tells of an ancient gateway believed to lead to a world hidden beyond ordinary reality.",
        second:
          "Nyx Ravenwood documents the expedition of those who dared to cross the gate and the mysterious consequences that followed."
      },
      curatorNote:
        "This manuscript is kept under restricted access because of the unusual claims made within its final chapters."
    },

    {
      id: 20,
      bookImage: "images.jfif",
      title: "The Last Tome of Aethelgard",
      author: "High Scholar Edrin",
      status: "Available in the Grand Archive",
      isAvailable: true,
      tags: ["LEGEND", "ARCANE"],
      bookInfo: [
        {
          title: "PUBLICATION DATE",
          value: "1st of Hearth, 1798"
        },
        {
          title: "PUBLISHER",
          value: "The Grand Archive Press"
        },
        {
          title: "LANGUAGE",
          value: "Ancient Aethelgardian"
        },
        {
          title: "FORMAT",
          value: "842, Vellum"
        }
      ],
      description: {
        first:
          "The Last Tome of Aethelgard is considered one of the most important surviving manuscripts from the ancient magical civilization of Aethelgard.",
        second:
          "High Scholar Edrin spent decades studying its pages, believing that the final chapters contain knowledge capable of reshaping the future."
      },
      curatorNote:
        "The final surviving volume of an ancient collection. Scholars continue to debate the meaning of its final pages."
    }

  ];

  currentBook: BookDetailsData = this.books[0];

  sameShelfBooks = [
    {
      image: "Image_ubipglubipglubip.jfif",
      title: "Whispers of the Void",
      author: "Silas Morcant"
    },
    {
      image: "Image_oo660voo660voo66.jfif",
      title: "Botanica Obscura",
      author: "Lady Helis"
    },
    {
      image: "Image_qtj83jqtj83jqtj8.jfif",
      title: "The Perfect Circle",
      author: "Unknown"
    },
    {
      image: "Image_28y9rk28y9rk28y9.jfif",
      title: "Ironclad Truths",
      author: "General Kael"
    }
  ];

  constructor(private route: ActivatedRoute,
    private CartService:CartService
  ) {
    console.log("Bookdetails constructor");
  }
 RequestFromStacks(): void {
  const selectedBook = this.book || this.currentBook;

  if (selectedBook) {
    this.CartService.addToCart({
      id: selectedBook.id,
      title: selectedBook.title,
      author: selectedBook.author,
      bookImage: selectedBook.bookImage,
      tags: selectedBook.tags,
      reference: `REF:BK-${selectedBook.id}`,
      description: selectedBook.description.first,
      price: selectedBook.price,
      quantity: selectedBook.quantity
    });
  }
}

  ngOnChanges(changes: SimpleChanges) {
    console.log("Bookdetails ngOnChanges");
  }

  ngOnInit() {

    let volumesRead =
      Number(localStorage.getItem('volumesRead')) || 342;

    volumesRead++;

    localStorage.setItem(
      'volumesRead',
      volumesRead.toString()
    );

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const book = this.books.find(
      book => book.id === id
    );

    if (book) {
      this.currentBook = book;

      localStorage.setItem(
        'lastViewedBookId',
        book.id.toString()
      );

      this.bookImage = book.bookImage;
      this.title = book.title;
      this.author = book.author;
      this.status = book.status;
      this.isAvailable = book.isAvailable;
      this.tags = book.tags;
      this.bookInfo = book.bookInfo;
      this.description = book.description;
      this.curatorNote = book.curatorNote;
    }

    console.log("Bookdetails ngOnInit");
  }

  ngDoCheck() {
    console.log("Bookdetails ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("Bookdetails ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Bookdetails ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("Bookdetails ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Bookdetails ngOnDestroy");
  }

}