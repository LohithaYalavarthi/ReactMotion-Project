import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RowComponent from './components/RowComponent'
import * as serviceWorker from './serviceWorker';

class App extends PureComponent{
  constructor(props){
        super(props);
        this.state={
          RowNo : "",
          ColNo : "",
          SpacesRow : "",
          SpacesBox : ""
        }
    this.RenderInput = this.RenderInput.bind(this);
  }
  RenderInput(name,event){
    console.log("name", name);
   this.setState({[name]: event.target.value })
  }
  render(){

    let Variables= this.state;
    console.log("Uparent"+ this.state.RowNo);
    var rowNo =this.state.RowNo;
    var ColNo = this.state.ColNo;
    console.log("RowNo"+ rowNo ,"ColNo"+ ColNo);
    return(
      <div>
        <input name ="RowNo" type="number" placeholder ="No of Row:"
         value= {this.state.RowNo} onChange={this.RenderInput.bind(this,"RowNo")}/>
        <input type="number" placeholder ="Columns String" value={this.state.ColNo} onChange={this.RenderInput.bind(this,"ColNo")} />
        <input type="number" name="SpacesRow" value={this.state.SpacesRow} placeholder ="Space between Rows" onChange={this.RenderInput.bind(this,"SpacesRow")}/>
        <input type="number" name="SpacesBox" placeholder ="Space between boxes" value={this.state.SpacesBox} onChange={this.RenderInput.bind(this,"SpacesBox")} />  
        { rowNo ?
                  <RowComponent {...Variables}/> 
              : null
            }
       
      </div>
     )
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
