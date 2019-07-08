import React, { Component } from 'react'
import '../stylesheets/genre.css'

class Genre extends Component {
    render(){
        return(
            <div className="genre">
                <select onClick={this.props.genre_box} className="selectButton"> 
                    { this.props.genres.map((element,id) => 
                        <option key={element.id} className="options">
                            { element.name }
                        </option>    
                    )}
                </select>
            </div>
        )
    }
}

export default Genre;