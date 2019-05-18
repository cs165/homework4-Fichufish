// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.selectContainer = containerElement.querySelector('#song-selector');
    const songs = new Song(this.selectContainer);
    this.randomTheme();
  }
  // TODO(you): Add methods as necessary.
  randomTheme() {
    const THEME = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const index = Math.floor(Math.random() * THEME.length);
    const inputContainer = document.querySelector('input#query-input');
    inputContainer.value = THEME[index];
  }
}

class Song {
  constructor(containerElement) {
    this.songInfo = {};

    this._loadSongs(containerElement);
  }

  _loadSongs(containerElement) {
    const JSON_PATH = 'https://fullstackccu.github.io/homeworks/hw4/songs.json';
    const onJsonReady = (json) => {
      this.songInfo = json;
      this._createSongs(containerElement);
    };
    fetch(JSON_PATH)
      .then(reponse => reponse.json())
      .then(onJsonReady);
  }

  _createSongs(containerElement) {
    console.log(containerElement);
    const SONGS = Object.values(this.songInfo);
    for(let i=0; i<SONGS.length; i++) {
      const title = SONGS[i].artist + ': ' + SONGS[i].title;
      containerElement.options.add(new Option(title, SONGS[i].songUrl));
    }
  }
}
