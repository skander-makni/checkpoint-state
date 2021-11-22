import React from 'react'
import { Component } from 'react'
import image from "../Bild.jpg"
class Person extends Component {
   
      state = {
            user : {

                fullName: "Makni Skander",
                profession:"etudiant",
                Bio:"jeune diplomé",
            }
              }

    render(){
    return (
        <div>
        
        {/* <button onClick ={()=> this.changePerson()}> change profil</button> */}
    
        <div style={{display: "flex", flexDirection:"column" }}>
        <span >FullName:{this.state.user.fullName}</span>
         <span> profession:{this.state.user.profession}</span> Bio:{this.state.user.Bio}
         <img  style={{marginBottom:200,marginLeft:600,width:150}}src= {image} alt="Image" />
        
        </div>
        </div>
    )
}}

export default Person;
