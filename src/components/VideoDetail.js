import React from 'react';

class VideoDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            video : this.props,
            key: ""
        };
    }

    componentDidMount() {
        const {video} = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${video.id}/videos?api_key=209402caaff287b05211145603cb9851&language=pl`)
            .then(res => res.json())
            .then(
                (item) => {
                    if (item.results[0]===undefined)
                    {
                        this.setState({
                            key: "dQw4w9WgXcQ"
                        });
                    }
                    else{
                        this.setState({
                            key: item.results[0].key
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
    const { video } = this.props;
    if (!video) {
        return <div > Loading... </div>;
    } else return(
    <div>
        <div className = "ui embed" >
            <iframe title = "video player"
            src = {`https://www.youtube.com/embed/${this.state.key}`}
            />
        </div> 
    </div>
    );
    }
};



export default VideoDetail;