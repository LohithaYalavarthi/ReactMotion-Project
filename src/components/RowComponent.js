import React,{PureComponent} from 'react';
import {Motion, spring} from 'react-motion';

export default class RowComponent extends PureComponent{
  render(){
    console.log("RowNo",this.props.RowNo);
    console.log("ColNo", this.props.ColNo)
      if(this.props.RowNo){
        return(
          <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {style => <div>
          <table style={{x:spring(10)}}>
          <tbody>
          {this.BoxCreate()}
          </tbody>    
          </table>
          </div>}
          </Motion>
          
     );
      }

  }
 
  BoxCreate (){
    let table = []
    if(this.props.ColNo && this.props.RowNo){
        for(let i=0; i< this.props.RowNo; i++){
        let Cols = [] ;
        let ColLength =this.props.ColNo.charAt(i);
        if(ColLength){
         for (let j = 0; j< ColLength; j++) { 
          Cols.push(<td  key={i+j}>100px Height</td>)
        }
      }
    table.push(<tr key={i} >{Cols}</tr>) 
    }
    return table
  }
    }
   
  }
 
  




