import React from 'react';
import { connect } from 'react-redux';
import { selectSeat } from '../actions';

class SeatList extends React.Component {
constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
}

handleClick(event) {
    const {seats} = event.target;
    console.log(seats);
}


    render() {
        console.log(this.props);
        
            return (
        
        <div className = "ui two column centered grid container" >

            <div className = "six wide column  left" >
                <div className = "ui seven column  grid " >
                    <div className = "column seat" id="a1"> 1 </div>
                    <div className = "column seat" id="a2"> 2 </div> 
                    <div className = "column seat" id="a3"> 3 </div> 
                    <div className = "column seat" id="a4"> 4 </div> 
                    <div className = "column seat" id="a5"> 5 </div> 
                    <div className = "column seat" od="a6"> 6 </div> 
                </div> 
                 <div className = "ui seven column grid " >
                    <div className = "column seat" id="b1"> 1 </div>  
                    <div className = "column seat" id="b2"> 2 </div>  
                    <div className = "column seat" id="b3"> 3 </div>  
                    <div className = "column seat" id="b4"> 4 </div>  
                    <div className = "column seat" id="b5"> 5 </div>  
                    <div className = "column seat" id="b6"> 6 </div>  
                </div> 
                 <div className = "ui seven column grid  " >
                    <div className = "column seat" id="c1"> 1 </div>   
                    <div className = "column seat" id="c2"> 2 </div> 
                    <div className = "column seat" id="c3"> 3 </div>   
                    <div className = "column seat" id="c4"> 4 </div>   
                    <div className = "column seat" id="c5"> 5 </div>   
                    <div className = "column seat" id="c6"> 6 </div>   
                </div> 
                <div className = "ui seven column grid " >
                    <div className = "column seat" id="d1"> 1 </div>   
                    <div className = "column seat" id="d2"> 2 </div> 
                    <div className = "column seat" id="d3"> 3 </div>  
                    <div className = "column seat" id="d4"> 4 </div>  
                    <div className = "column seat" id="d5"> 5 </div>   
                    <div className = "column seat" id="d6"> 6 </div>   
                </div> 
                <div className = "ui seven column grid " >
                    <div className = "column seat" id="e1"> 1 </div>   
                    <div className = "column seat" id="e2"> 2 </div>  
                    <div className = "column seat" id="e3"> 3 </div>   
                    <div className = "column seat" id="e4"> 4 </div>   
                    <div className = "column seat" id="e5"> 5 </div>   
                    <div className = "column seat" id="e6"> 6 </div> 
                </div> 
                <div className = "ui seven column grid " >
                    <div className = "column seat" id="f1"> 1 </div>    
                    <div className = "column seat" id="f2"> 2 </div>    
                    <div className = "column seat" id="f3"> 3 </div>    
                    <div className = "column seat" id="f4"> 4 </div>    
                    <div className = "column seat" id="f5"> 5 </div>    
                    <div className = "column seat" id="f6"> 6 </div> 
                </div> 
                <div className = "ui seven column grid " >
                    <div className = "column seat" id="g1"> 1 </div>   
                    <div className = "column seat" id="g2"> 2 </div>   
                    <div className = "column seat" id="g3"> 3 </div>    
                    <div className = "column seat" id="g4"> 4 </div>   
                    <div className = "column seat" id="g5"> 5 </div>   
                    <div className = "column seat" id="g6"> 6 </div>  
                </div>
            </div>    

            <div className = "six wide column right" >
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="a"> 7 </div>  
                    <div className = "column seat" id="a8"> 8 </div> 
                    <div className = "column seat" id="a9"> 9 </div> 
                    <div className = "column seat" id="a10"> 10 </div> 
                    <div className = "column seat" id="a11"> 11 </div>  
                    <div className = "column seat" id="a12"> 12 </div>  
                </div>  
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="b7"> 7 </div>   
                    <div className = "column seat" id="b8"> 8 </div>   
                    <div className = "column seat" id="b9"> 9 </div>   
                    <div className = "column seat" id="b10"> 10 </div>   
                    <div className = "column seat" id="b11"> 11 </div>   
                    <div className = "column seat" id="b12"> 12 </div>  
                </div>  
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="c7"> 7 </div>    
                    <div className = "column seat" id="c8"> 8 </div>   
                    <div className = "column seat" id="c9"> 9 </div>    
                    <div className = "column seat" id="c10"> 10 </div>   
                    <div className = "column seat" id="c11"> 11 </div>    
                    <div className = "column seat" id="c12"> 12 </div>    
                </div>  
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="d7"> 7 </div>    
                    <div className = "column seat" id="d8"> 8 </div>  
                    <div className = "column seat" id="d9" > 9 </div>   
                    <div className = "column seat" id="d10"> 10 </div>   
                    <div className = "column seat" id="d11"> 11 </div>    
                    <div className = "column seat" id="d12"> 12 </div>   
                </div> 
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="e7"> 7 </div>    
                    <div className = "column seat" id="e8"> 8 </div>   
                    <div className = "column seat" id="d9"> 9 </div>    
                    <div className = "column seat" id="e10"> 10 </div>    
                    <div className = "column seat" id="e11"> 11 </div>    
                    <div className = "column seat" id="12"> 12 </div>  
                </div> 
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="f7"> 7 </div>     
                    <div className = "column seat" id='f8'> 8 </div>    
                    <div className = "column seat" id="f9"> 9 </div>     
                    <div className = "column seat" id="f10"> 10 </div>     
                    <div className = "column seat" id="f11"> 11 </div>     
                    <div className = "column seat" id="f12"> 12 </div>   
                </div> 
                <div className = "ui seven column grid" >
                    <div className = "column seat" id="g7"> 7 </div>     
                    <div className = "column seat" id="g8"> 8 </div>     
                    <div className = "column seat" id="g9"> 9 </div>     
                    <div className = "column seat" id="g10"> 10 </div>     
                    <div className = "column seat" id="g11"> 11 </div>     
                    <div className = "column seat" id="g12"> 12 </div>   
                </div> 
                </div> 
                <div className = "ui fifteen wide column equal width grid " >
                    <div className = "column seat" id="h1"> 1 </div> 
                    <div className = "column seat" id="h2"> 2 </div> 
                    <div className = "column seat" id="h3"> 3 </div> 
                    <div className = "column seat" id="h4"> 4 </div> 
                    <div className = "column seat" id="h5"> 5 </div> 
                    <div className = "column seat" id="h6"> 6 </div> 
                    <div className = "column seat" id="h7"> 7 </div> 
                    <div className = "column seat" id="h8"> 8 </div> 
                    <div className = "column seat" id="h9"> 9 </div> 
                    <div className = "column seat" id="h10"> 10 </div> 
                    <div className = "column seat" id="h11"> 11 </div> 
                    <div className = "column seat" id="12"> 12 </div> 
                    <div className = "column seat" id="h13"> 13 </div> 
                    <div className = "column seat" id="14"> 14 </div> 
                    <div className = "column seat" id="15"> 15 </div>

                </div> 

            </div>
        )
    }
     
    

}

const mapStateToProps = (state) => {
    console.log(state);
    return { seats: state.seats };
};

export default connect(mapStateToProps, {
    selectSeat: selectSeat
})(SeatList);