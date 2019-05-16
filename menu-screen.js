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
    const JSON_PATH = 'https://fullstackccu.github.io/homeworks/hw4/songs.json';
    fetch(JSON_PATH)
      .then(this._onResponse)
      .then(this._onJsonReady);

    //this._onJsonReady = this._onJsonReady.bind(this);
  }

  _onJsonReady(json) {
    //this.songInfo = json.songs;
    console.log(json);
  }

  _onResponse(response) {
    return response.json();
  }

}
