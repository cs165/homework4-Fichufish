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
    this.loadSongs();
  }

  loadSongs() {
    const JSON_PATH = 'https://fullstackccu.github.io/homeworks/hw4/songs.json';
    const onJsonReady = (json) => {
      this.songInfo = json;
      console.log(this.songInfo);
      this._createSongs(this.songInfo);
    };
    fetch(JSON_PATH)
      .then(reponse => reponse.json())
      .then(onJsonReady);
  }
  _createSongs(songInfo) {
    const songSelector = document.querySelector('select#song-selector');
    const SONGS = Object.values(songInfo);
    for(let i=0; i<SONGS.length; i++) {
      songSelector.options.add(new Option(SONGS[i].title, SONGS[i].songUrl));
    }
  }
  
  
  
}
