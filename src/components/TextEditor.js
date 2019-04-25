import React from "react";


class TextEditor extends React.Component{
 constructor(){
     super()
 }
 render(){
     return(
         <div className="form-group App Container" >
         <label ><h1>Text Area</h1></label>
             <textarea id="editor" className="form-control rounded-0" rows="7" cols="20" value={this.props.value} onChange={this.props.handleChange} ></textarea>
         </div>
     )
 }
}
export default TextEditor