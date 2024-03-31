import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Artist {
  id: number | null;
  artistId: string;
  name: string;
  DOB: string;
  gender: string;
  artworkType: string;
  contactInfo: string;
  exhibitionDate: string;
  specialNotes: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  artists: Artist[] = [
    {
      "id": 0,
      "artistId": '001',
      "name": 'Artist1',
      "DOB": "2001-03-12",
      "gender": "Male",
      "artworkType": "Painting",
      "contactInfo": "artist1@example.com",
      "exhibitionDate": "2001-03-12",
      "specialNotes": "This artist deals with high quality museum painting"
    },
    {
      "id": 1,
      "artistId": '002',
      "name": 'Artist2',
      "DOB": "2017-09-4",
      "gender": "Female",
      "artworkType": "Painting",
      "contactInfo": "artist2@example.com",
      "exhibitionDate": "2012-03-12",
      "specialNotes": "This artist deals with high quality museum painting"
    },
    {
      "id": 2,
      "artistId": '003',
      "name": 'Artist3',
      "DOB": "2004-05-12",
      "gender": "Female",
      "artworkType": "Painting",
      "contactInfo": "artist3@example.com",
      "exhibitionDate": "2012-06-12",
      "specialNotes": "This artist deals with high quality museum painting"
    }
  ];

  artist: Artist = this.newArtist();
  isEdit: boolean = false;

  searchString: string = '';
  searchedArtist: Artist = this.newArtist();

  ngOnInit() {
  }

  newArtist() {
    return {
      id: null,
      artistId: '',
      name: '',
      DOB: '',
      gender: 'Male',
      artworkType: 'Painting',
      contactInfo: '',
      exhibitionDate: '',
      specialNotes: ''
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      if (!this.isEdit) {
        let artist: any = this.artist;
        artist.id = this.artists[this.artists.length - 1].id! + 1;
        this.artists.push({ ...artist });
        alert('Added Successfully');
      }
      else {
        let idx = this.artists.findIndex(artist => artist.id === this.artist.id);
        this.artists.splice(idx, 1, { ...this.artist });
        this.isEdit = false;
        alert('updated Successfully');
      }
      this.artist = this.newArtist();
    }
  }

  deleteArtist(id: number) {
    this.artists = this.artists.filter(artist => artist.id !== id);
  }
  
  editArtist(artist: Artist) {
    this.isEdit = true;
    this.artist = { ...artist };
  }
  
  formatDate(date: string) {
    if (date) return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    else return '';
  }

  onSearchBtnClick() {
    if (this.searchString) {
      if (this.artists.find(artist => artist.artistId.toLocaleLowerCase() === this.searchString.toLocaleLowerCase())) {      
        this.searchedArtist =  this.artists.find(artist => artist.artistId.toLocaleLowerCase() === this.searchString.toLocaleLowerCase())!;
      }
      else {
        this.searchedArtist = this.newArtist();
        alert('Not Fount');
      }
    }
    else {
      this.searchedArtist = this.newArtist();  
    }
  }

}

