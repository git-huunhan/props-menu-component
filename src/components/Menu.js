import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component{
  render(){
    const { logoHome } = this.props;
    const { logoUrl } = this.props;
    
    return(
      <div className="Menu">
        <div>
          <div className="Icon">
              <img src={logoUrl}></img> 
          </div>
          <div className="Text">
            <p>
              {this.props.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;