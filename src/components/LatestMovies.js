import React from 'react';
import './flexcard.css';

class LatestMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=209402caaff287b05211145603cb9851&language=pl&page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.results
                    });
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
        const { error, isLoaded, results } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="flexcard">
                {results.map(result => (
            <div className="ui card">
                <p className="image">
                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} key={result.title} alt="poster"/>
                        </p>
                    <div className="content">
                        <p className="header" href="#" key={result.title}> {result.title} </p>
                    </div>
            </div>
            ))}
            </div>
                )
        }
    }
}

export default LatestMovies;