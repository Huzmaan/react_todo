import React from 'react';


function Footer({}){
    let FooterStyles = {
   margintop: '1rem',
   padding:"1rem",
   position:'relative',
   bottom:'0',
   left:'0',
   width:'100%',
   textAlign:'center',
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