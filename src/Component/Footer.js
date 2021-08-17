import React from 'react';


function Footer({}){
    let FooterStyles = {
     position: 'absolute',
     top:"auto",
     width:"100%",
     textAlign:"center",
    //  background-color:"limegreen",
//    @media (min-width:30%){
//        position: 'absolute',

//    }
    }
    return  (
        <div className="bg-dark text-light py-2"   style={FooterStyles}>
        <p> 
            Copyright &copy; My React Project. All rights reserved.
        </p>
        </div>
    )
}

export default  Footer