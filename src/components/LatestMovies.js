import React from 'react';
import './flexcard.css';
import PopUp from './PopUp';
import ModalModalExample from './ModalModalExample';

class LatestMovies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isOpen: false,
            item: null
        };
    }

    handleShowDialog = (e, item) => {
        this.handleItemState(item)
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isModal
        });
    };

    handleItemState = (item) => {
        this.setState({
            item: item
        });
    };

    

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/list/102621?api_key=209402caaff287b05211145603cb9851&language=pl")
            .then(res => res.json())
            .then(
                (item) => {
                    this.setState({
                        isLoaded: true,
                        items: item.items
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
        const { error, isLoaded, items, isOpen, isModal } = this.state;
        if (error) {
            return <div> Error: { error.message} </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else if (!isOpen && !isModal) {
            return (
                <div className = "flexcard">
                {
                    items.map(item => (
                    <div className = "ui card" key = {item.key} style = {{backgroundColor: 'black'}}>
                <p className = "image">
                    <img src = {
                        `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    }
                    onClick = {
                        e => this.handleShowDialog(e, item)
                    }
                    key = {
                        item.title
                    }
                    alt = "poster" />
                        </p> 
                <div className = "content" style = {{ backgroundColor: 'black'}} >
                    <p className = "header" style = {{color: 'white'}} href = "#" key = { item.title }> { item.title} </p> 
                </div>
            </div>
            ))} 
            </div>
            )
        } else if(!isOpen && isModal) {
            return ( 
        <div className = "latest-movies" >
            <div className = "flexcard" > {items.map(item => (
                <div className = "ui card" key = {item.key} style = {{backgroundColor: 'black'}} >
                    <p className = "image" >
                        <img 
                        src = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        onClick = {e => this.handleShowDialog(e, item)}
                        key = {item.title}
                        alt = "poster" />
                    </p>  
                        <div className = "content" style = {{backgroundColor: 'black'}} >
                            <p className = "header"
                                style = {{color: 'white'}}
                                href = "#"
                                key = {item.title} > {item.title} 
                            </p> 
                        </div> 
                </div>
                    ))
                } 
            </div>
        </div>
            )
        }
        else {
            return(
            <div>
                <PopUp item = {this.state.item}/>
            </div>
            )
        }
    }
}

export default LatestMovies;