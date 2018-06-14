import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Label, Rating, Button, Icon, Dimmer } from 'semantic-ui-react';

export default class ProductItem extends React.Component {
    state = {};
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render(){
        const { active } = this.state;
        const content = (
            <div>
                <Link to={`/store/${this.props.id}`}>
                    <Button basic inverted>V i e w</Button>
                </Link>
            </div>
        );

        return (
            <div className="card">
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size='huge'
                    src={this.props.images[0].url}
                />
                <div className="card-container">
                    <div className='card-name_price'>
                        <div>
                            <h4>Jane Doe</h4>
                        </div>
                        <div>
                            <Label tag><h4>${this.props.price}</h4></Label>
                        </div>
                    </div>
                    <div className='card-rating'>
                        <div>
                            <div><p>Interior Designer</p></div>
                            <div><Rating maxRating={5} defaultRating={3} icon='star' size='small' /></div>
                        </div>
                        <div className='card-heart'>
                            <Rating icon='heart' size='massive'/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

