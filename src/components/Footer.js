import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';


const Footer = () => (
    <footer className='footer-bg'>
        <Container>
            <div className='footer-content'>
                <div className='footer-info'>
                    <h5>Contact Infos</h5>
                    <div>
                        <div><Icon name='mail' /> alexfd89@gmail.com</div>
                        <div><Icon name='phone' /> 0547613747</div>
                    </div>
                </div>
                <div className='footer-social'>
                    <Icon name='github' size='big' />
                    <Icon name='facebook' size='big' />
                    <Icon name='linkedin square' size='big' />
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;