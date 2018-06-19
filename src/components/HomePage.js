import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Image, Container } from 'semantic-ui-react';
import Footer from '../components/Footer';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
               <div className='home-bg centered'>
                    <div className='home-main'>
                        <h2>ReactJS e-commerce Web App</h2>
                        <div className='centered'>
                            <Link to='/store'>
                                <Button inverted color='teal' content='View Store' />
                            </Link>
                        </div>
                    </div>
               </div>
               <Container className='home-desc'>
                    <Segment raised>
                        <div className='home-content centered'>
                            <div>
                                <Image avatar src='/images/Avatar.jpg' size='small' />
                            </div>
                            <div className='home-text'>
                                <h4>
                                    Welcome to my React with Redux e-commerce responsive web application project.
                                </h4>
                                <p>This web app was created for study purposes.</p>
                                <span>
                                My name is Alex Fadeev and I'm a practical software engineer. 
                                This project contains my knowledge in React library which I learned independently.
                                <br />The project also contains Firebase Database and Semantic-UI Freamwork.
                                </span>
                            </div>
                            <h5>Check out my projects: </h5>
                            <ul>
                                <li>
                                    <a href="https://warm-shore-23356.herokuapp.com/">
                                        Chat Rooms - Node.js with jQuery.
                                    </a>
                                </li>
                                <li>
                                    <a href='https://expensify-react-applicationn.herokuapp.com/'>
                                        Expensify App - React with Firebase.
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/Alexfd89/node-todo-api'>
                                        Todo Backend - Node.js Restful API with MongoDB.
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/Alexfd89/react-ecommerce'>
                                        Current project GitHub repository.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Segment>
                </Container>
                <Footer />
            </div>
            
        );
    }
}

