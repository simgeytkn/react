import React, { Component } from 'react';
import Result from './Components/Result';
import Genre from './Components/Genre';
import axios from 'axios';
import '../src/stylesheets/app.css'

class App extends Component {    
    constructor(){
    super()
    this.state = {
        results: [],
        page_no: 1,
        genres: [],
        genre_ids: [],
        secilen_id: null,
        movie_id: 301528
    }
    this.url_page = "https://api.themoviedb.org/3/discover/movie?api_key=b51011c56fd95a57b8ac1fcd78fffc3b&page="
    this.url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=b51011c56fd95a57b8ac1fcd78fffc3b"
    this.url_images = "https://api.themoviedb.org/3/movie/301528/images?api_key=b51011c56fd95a57b8ac1fcd78fffc3b"
  }

  componentDidMount(){

     axios.get(this.url_page).then( res => {
        this.setState({
            results: res.data.results,
            movie_id: res.data.results.id
        })
    })

    axios.get(this.url_genres).then( res => {
        this.setState({
            genres: res.data.genres,
            genre_ids: res.data.genres.map(el => el.id),
        })
    })
  }

  genre_box = event => {
    console.log(this.state.genres)
    const select_id =  event.target.options.selectedIndex
    axios.get(this.url_genres).then(res => {
        this.setState({
            secilen_id: res.data.genres[select_id].id
        })
        const url_genre_ids = "http://api.themoviedb.org/3/genre/"+this.state.secilen_id+"/movies?api_key=b51011c56fd95a57b8ac1fcd78fffc3b"
        axios.get(url_genre_ids).then(res => {
            this.setState({
                results: res.data.results,
                movie_id: res.data.results.map(el => el.id)
            })
            console.log(this.state.movie_id)
        })
    })


  }

  render() {
    return (
      <div className="App">
        <Result results={this.state.results} url_images={this.state.url_images}/>
        <Genre genre_box={this.genre_box} genres={this.state.genres}/>
      </div>
    );
  }
}

export default App;
