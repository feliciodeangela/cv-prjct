import React from "react"
import "../App.css"

export default function General(){
    return(
        <>
            <fieldset className="Container">
                <h1>General Information</h1>
                <label>First Name: </label>Felicio
                <label>Last Name: </label> Avelino
                <p><label>Birth Date: </label>23/08/1998 <label>Address: </label>Mozmbique, Maputo, Machava-Bunhica Block 59 House 14</p>
                <p><label>Mobile Number: </label>+258849354921<label>E-Mail: </label>feliciodeangela@gmail.com</p>
            </fieldset>
        </>
    );
}