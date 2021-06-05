import React, { Component } from "react";
import {Link } from "react-router-dom";

import {View,TextInput,StyleSheet } from 'react-native'

export default class Metinden_Goruntuye_Ceviri extends Component {

  
  constructor(props)
  {
    super(props);
    this.state={metin:'/baslangıc.png',imge:'/baslangıc.png'};
  }
  Show=(event)=>
  {

    event.preventDefault();
    var N1='/'+this.state.metin+'.gif';
    N1=N1.toLowerCase();
    this.setState({imge:N1});
  }
  render(){

    var x =this.state.imge;
    console.log(x);
    return ( 
      
      <View>
      <div className="Table_M">
        
          <Link to="/"><img  src={require('./images/Logo.png').default} alt="logo" /> </Link>
          <h1 style={{color:"white",textAlign:"center"}}>Metinden Görüntüye Çeviri</h1>
          <table    className="Table_m">
           <thead >
           <tr>
             <th className="th_gif"><img  src={process.env.PUBLIC_URL +x} alt="gif" /></th>
           </tr>
           <tr>
             <th>  
                 <form>
                   <label>
                   <TextInput style = {styles.button}type="text" onChange={e=>this.setState({metin:e.target.value})}  />
                   </label>
                   <button className="btn-3" type="submit" onClick={this.Show}>Çevir</button>
                   </form> 
   
               </th>
           </tr>
          </thead>
       </table>
   
          </div>
      </View>   
        );
  }
    
 }
 const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c09060',
    color: 'black',
    borderRadius: 16,
    padding: 10,
    margin:20,
    fontSize:30
  },
})