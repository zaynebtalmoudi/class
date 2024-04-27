
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Button, Card, Container } from 'react-bootstrap';
import './person.css';

export class Person extends Component {
    interval // instance field  Or class property
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Andrea Collins",
            bio: 'With over a decade in the software industry, Tadej has helped startups launch their first product, assisted FTSE 100 enterprises with digital transformation, been a part of the fintech boom, and helped particle accelerators cool down.',
            imgSrc: 'woman.webp',
            profession: 'Software Developer',
            show: false,
            button: 'Show Profile',
            count: 0,
        }
    }

    changeButton = () => {
        if (this.state.show === false) {
            this.setState({
                show: true,
                button: 'Hide Profile',
            })
        } else {
            this.setState({
                show: false,
                button: 'Show Profile',
            })
        }
    }


    componentDidMount() {
        this.interval = setInterval(
            () => this.setState(prevState => ({ count: prevState.count + 1 })), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }



    render() {

        return (
            <div className='page'>
                <div className="card">

                    {this.state.show && <div>
                        <div>
                            <img variant="top" className='image' style={{ filter: this.state.show ? 'blur(0px)' : 'blur(2px)' }} src={require(`./${this.state.imgSrc}`)} alt='profileImage' />
                        </div>
                        <div className='title'> {this.state.fullName} </div>
                        <div className='details'  >
                            <div className='hor-divider'></div>
                            <div><span>Profession :</span> {this.state.profession} </div>
                            <div> <span>Bio :</span> {this.state.bio} </div>
                        </div>
                    </div>
                    }

                    <button onClick={this.changeButton} >{this.state.button}</button>
                </div>
                <div className='timer'> <span style={{ fontWeight: 'bold' }}>Timer :</span> {this.state.count} seconds</div>
            </div>
        )
    }
}

export default Person
