import React from "react";

export default class App extends React.Component{
  state = {
    loading: true,
    user: null
  }
  async componentDidMount(){
    const url = `https://api.randomuser.me`;
    try{
      const response = await fetch(url);
      const data = await response.json()
      this.setState({
        user: data.results[0],
        loading: false
      })
    }catch(err){
      console.error(err)
    }
  }
  render(){
    return (
      <div className='container'>
       {this.state.loading ? 'loading....' : 
       <div className='user'>
          <img src={this.state.user.picture.large} alt='user--img' className='user--img' />
          <div className='user--info'>
            <h3 className='user--name'> 
              {`${this.state.user.name.first}  ${this.state.user.name.last}`} 
            </h3>
            <hr></hr>
            <p className='user--email'>EMAIL: {this.state.user.email} </p>
            <hr></hr>
            <p className='user--location'>RESIDENCE: {`${this.state.user.location.city}, ${this.state.user.location.country}`} </p>
          </div>
        </div>
       }
      </div>
  );
  }
}
