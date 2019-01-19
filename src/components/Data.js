import React from 'react';


//formularz z danymi: imię, nazwisko, adres e-mail

class Data extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      
      fetch("/path/to/server", {
        method:"POST"
      , body:new URLSearchParams("username=PodajImię&usersurname=PodajNazwisko&email=PodajEmail")
      })
      
      document.forms[0].onsubmit = async(e) => {
        e.preventDefault();
        const params = new URLSearchParams([...new FormData(e.target).entries()]);
        // fetch("/path/to/server", {method:"POST", body:params})
        const response = await new Response(params).text();
        console.log(response)
      }
    }
  
          
    render() {
      return (
        <div className="ui segment" style={{backgroundColor:"#CC9999"}}>

            <form onSubmit={this.handleSubmit} className="ui form" >

                <label htmlFor="username" style={{fontSize:"20px"}}>Podaj imię</label>
                <input id="username" name="username" type="text" />

                <label htmlFor="usersurname" style={{fontSize:"20px"}}>Podaj nazwisko</label>
                <input id="usersurname" name="usersurname"  type="text"  />
  
                <label htmlFor="email" style={{fontSize:"20px"}}>Podaj e-mail</label>
                <input id="email" name="email"  type="email" />
                
                <div style={{textAlign:'center'}}>
                    <button type="submit" style={{backgroundColor:'#CC6666', width:'40%', height:'50px', fontSize:"30px"}}>REZERWUJ!</button>
                </div>

             </form>
        </div>
      );
    }
  }

  export default Data;