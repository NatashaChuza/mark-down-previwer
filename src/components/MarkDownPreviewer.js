import React from "react";
let marked =require("marked")

class MarkDownPreviewer extends React.Component{
constructor(){
    super()
}
render(){
    let markDown = this.props.input
    return(
        <div>
            <label><h1>Mark Down Previewer</h1></label>
        <div dangerouslySetInnerHTML= {{ __html: marked(markDown)}} className="editor-div">
            
        </div>
        </div>
       
        
    )
}
}
export default MarkDownPreviewer