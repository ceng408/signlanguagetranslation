import React, { Component } from "react";
import {Link } from "react-router-dom";

import {View,TextInput,StyleSheet } from 'react-native'


export default class Metinden_Goruntuye_Ceviri extends Component {

  
  constructor(props)
  {
    super(props);
    this.state={metin:'/images/baslangıc.png',imge:'/images/baslangıc.png'};
  }
  Show=(event)=>
  {

    event.preventDefault();
    var N1="/images/"+this.state.metin+".gif";

    this.setState({imge:N1});

   //return N1;
  }
  render(){

    var x =this.state.imge;
    console.log(x);
    return ( 
      
      <View>
      <div style={{ backgroundColor:"black",height:705,width:1500 }}>
          <Link to="/"><img  src="/images/Logo.png" alt="logo" /> </Link>
          <h1 style={{color:"white",textAlign:"center"}}>Metinden Görüntüye Çeviri</h1>
          <table className="Table_M" >
           <thead >
           <tr>
             <th className="th_gif"><img  src={x} alt="gif" /></th>
           </tr>
           <tr>
             <th>  
                 <form>
                   <label>
                   <TextInput style = {styles.button}type="text" onChange={e=>this.setState({metin:e.target.value})}  />
                   </label>
                   <button className="btn-1" type="submit" onClick={this.Show}>Çevir</button>
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