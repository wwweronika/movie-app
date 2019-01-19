import React from 'react';
import { Modal } from 'semantic-ui-react';
import VideoDetail from './VideoDetail';
import LatestMovies from './LatestMovies';
import './PopUp.css';

class PopUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpened: true,
            desc: "",
            budget: 0,
            runtime: 0,
            grade: 0.0,
            popularity: 0,
            adult: " w każdym wieku",
            producer: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
            modalOpened: !prevState.modalOpened
        }));
    }

    componentDidMount() {
        const {item} = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=209402caaff287b05211145603cb9851&language=pl`)
            .then(res => res.json())
            .then(
                (item) => {
                    if (item.production_companies[0]===undefined){
                    this.setState({
                        desc: item.genres[0].name,
                        budget: item.budget,
                        runtime: item.runtime,
                        grade: item.vote_average,
                        popularity: item.popularity,
                        producer: "Not yet well-known company"
                    });
                    }
                    else if(item.adult===1){
                        this.setState({
                            desc: item.genres[0].name,
                            budget: item.budget,
                            runtime: item.runtime,
                            grade: item.vote_average,
                            popularity: item.popularity,
                            adult: "dorosłych",
                            producer: item.production_companies[0].name
                        });
                    }
                    else{
                        this.setState({
                            desc: item.genres[0].name,
                            budget: item.budget,
                            runtime: item.runtime,
                            grade: item.vote_average,
                            popularity: item.popularity,
                            producer: item.production_companies[0].name
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { item } = this.props;
        if(this.state.modalOpened) {
        return ( 
        <div lassName = "popup">
            <div className = "ui segment" >
                <div className = "ui very relaxed two column grid" >
                    <div class = "column" >
                        <VideoDetail video = {item} />
                    </div> 
                    <div className = "column" >
                        <h4 className = "header"style = {{fontSize: 26, fontFamily: "'Comic Sans MS',cursive,sans-serif"}} > {item.title } </h4>
                        <div className = "aa"></div>
                        <div className = "meta" >
                            <span className = "infos" > 
                                <i aria hidden = "true" className = "calendar alternate outline icon" > </i> Data premiery: {item.release_date}
                                <p></p>
                                <i aria hidden = "true" className = "film icon" > </i> Gatunek filmu: {this.state.desc}
                                <p className = "aaa"></p>
                                <i aria hidden = "true" className = "child icon" > </i> Film dla widzów {this.state.adult} 
                                <p className = "aaa" > </p>
                                <i aria hidden = "true" className = "hourglass outline icon" > </i> Czas trwania: {this.state.runtime} (min)
                                <p className = "aaa" > </p>
                                <i aria hidden = "true" className = "hand peace outline icon" > </i> Ocena filmu: {this.state.grade} 
                                <p className = "aaa" > </p>
                                <i aria hidden = "true" className = "chart line icon" > </i> Popularność filmu: {this.state.popularity} 
                                <div className = "aa" >  </div>
                            </span>
                        </div>  
                        <div className = "description" > 
                            <span className = "description2" style = {{ textAlign: "justify" }}> {item.overview} </span>
                            <div className = "aa"> </div>
                        </div>
                        <div className="extra">
                            <button className = "ui primary right floated button " > Make a reservation <i aria-hidden = "true" class = "right chevron icon " > </i></button>
                        </div>
                        <div className = "ui label" >
                            <i aria-hidden = "true" className = "globe icon" > </i> {this.state.producer} 
                        </div> 
                        <div className = "ui label" >
                            <i className = "dollar icon" > </i> {this.state.budget}
                        </div>
                    </div>
                </div>
            </div>
             <div className = "button-segment" >
                <button className = "butt ui negative button" onClick = {this.toggleModal} style = {{ marginLeft: "87.15%" }}> Go back to film list <i aria-hidden = "true" class = "right chevron icon " > </i></button>
            </div>
        </div>
        );
        }
        else return (
            <LatestMovies />
        );
    }
}

export default PopUp;