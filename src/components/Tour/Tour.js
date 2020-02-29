import React, { Component } from 'react'
import "./Tour.scss";


export default class Tour extends Component {
    state = {
        showInfo:false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        const {id,city,img,name,info} = this.props.tour; // id for the delete method
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    {/* <img src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/> */}
                    <img src={img}/>
                    <span className="close-btn" onClick={()=> {removeTour(id)}}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "}<span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </div>

            </article>
        )
    }
}
