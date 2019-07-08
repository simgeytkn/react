import React, { Component } from 'react';
import '../stylesheets/result.css'
class Home extends Component {
    render(){
        return (
            <div className="result">
                <ul>
                    { this.props.results.map((element,id) => 
                        <li key={element.id} className="listResults">
                            { element.title }
                        </li>    
                    )}
                </ul>   
            </div>
        )
    }
}

export default Home;