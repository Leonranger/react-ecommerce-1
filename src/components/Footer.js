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
                    <a href="https://github.com/Alexfd89" ><Icon name='github' size='big' /> </a>
                    <a href="https://www.facebook.com/alex.fadeev1" ><Icon name='facebook' size='big' /></a>
                    <a href="https://www.linkedin.com/in/alex-fadeev-380252160/" ><Icon name='linkedin square' size='big' /></a>
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;