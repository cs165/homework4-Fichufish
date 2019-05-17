// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const song = new Song();
  }
  // TODO(you): Add methods as necessary.
}

class Song {
  constructor() {
    this.songInfo = {};
    
    //this._loadSongs = this._loadSongs.bind(this);

    this._loadSongs();
  }

  _loadSongs() {
    const JSON_PATH = 'https://fullstackccu.github.io/homeworks/hw4/songs.json';
    const onJsonReady = (json) => {
      this.songInfo = json;
      this._createSongs();
    };
    fetch(JSON_PATH)
      .then(reponse => reponse.json())
      .then(onJsonReady);
  }

  _createSongs() {
    console.log(this.songInfo);
    const songSelector = document.querySelector('select#song-selector');
    const SONGS = Object.values(this.songInfo);
    for(let i=0; i<SONGS.length; i++) {
      songSelector.options.add(new Option(SONGS[i].title, SONGS[i].songUrl));
    }
  }
}
