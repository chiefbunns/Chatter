import React, { Component } from 'react';
import axios from 'axios';
import fireIcon from '../svgs/fire-icon.svg';
import fireIconGray from '../svgs/fire-icon-gray.svg';
import iceIcon from '../svgs/ice-icon.svg';
import iceIconGray from '../svgs/ice-icon-gray.svg';

class FireAndIce extends Component {
    state = {
        fireTotal: 0,
        iceTotal: 0,
        fire: false,
        ice: false
    }
    componentDidMount = () => {
        axios.get(`http://localhost:8080/likes_dislikes/${this.props.comment_id}`)
            .then(res => {
                this.setState({
                    fireTotal: res.data[0].likes_count,
                    iceTotal: res.data[0].dislikes_count
                })
            })
    }

    fireOnClick = () => {
        const fireData = {
            likes_count: this.state.fireTotal,
            dislikes_count: this.state.iceTotal
        }
        console.log(this.props.comment_id)
        if (this.state.ice === true) {
            this.setState({
                ice: false,
                iceTotal: this.state.iceTotal - 1,
            })
            axios.put(`http://localhost:8080/likes/${this.props.comment_id}`, fireData)
                .then(res => console.log(res.data))
        }
        if (!this.state.fire) {
            this.setState({
                fireTotal: this.state.fireTotal + 1,
                fire: true
            })
            axios.put(`http://localhost:8080/likes/${this.props.comment_id}`, fireData)
                .then(res => console.log(res.data))
        } else {
            this.setState({
                fireTotal: this.state.fireTotal - 1,
                fire: false
            })
            axios.put(`http://localhost:8080/likes/${this.props.comment_id}`, fireData)
                .then(res => console.log(res.data))
        }
    }
    iceOnClick = () => {
        const iceData = {
            likes_count: this.state.fireTotal,
            dislikes_count: this.state.iceTotal
        }
        if (this.state.fire === true) {
            this.setState({
                fire: false,
                fireTotal: this.state.fireTotal - 1,
            })
            axios.put(`http://localhost:8080/dislikes/${this.props.comment_id}`, iceData)
                .then(res => console.log(res.data))
        }
        if (!this.state.ice) {
            this.setState({
                iceTotal: this.state.iceTotal + 1,
                ice: true
            })
            axios.put(`http://localhost:8080/dislikes/${this.props.comment_id}`, iceData)
                .then(res => console.log(res.data))
        } else {
            this.setState({
                iceTotal: this.state.iceTotal - 1,
                ice: false
            })
            axios.put(`http://localhost:8080/dislikes/${this.props.comment_id}`, iceData)
                .then(res => console.log(res.data))
        }
    }
    render() {
        return (
            <div className="fire-ice-container">
                <button className="fire" onClick={this.fireOnClick}>
                    <img src={this.state.fire === false ? fireIconGray : fireIcon} alt="Fire Icon" />
                </button>
                <div className="text-subtle-2">{this.state.fireTotal}</div>
                <button className="ice" onClick={this.iceOnClick} >
                    <img src={this.state.ice === false ? iceIconGray : iceIcon} alt="Ice Icon" />
                </button>
                <div className="text-subtle-2">{this.state.iceTotal}</div>
            </div>
        )
    }
};

export default FireAndIce;