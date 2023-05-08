import React from 'react'

export default function About(props) {

  // const[myStyle, setMyStyle] = useState({
  //       color: 'black',
  //       backgroundColor: 'white'
  //   })

  let myStyle = {
    color: props.mode === 'light' ? '#ced4da' : '#0d6efd',
    backgroundColor: props.mode === 'dark' ? '#212529' : '#0dcaf0'
  }

    
   
  return (
    <div className="container" >
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the first point.</strong> TextWalk is the app which is used to perform different operations on the text. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second point.</strong> In TextWalk, you can convert your text either from Upper case to Lower case or from Lower case to upper case.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third point.</strong> TextWalk is also used to remove all the extra spaces in the whole text. With the help of textwalk, you can also listen the whole text to understand it properly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
        #4
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the Last point.</strong> If you need any function regarding the same , you can tell me. I will definitely add it.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
