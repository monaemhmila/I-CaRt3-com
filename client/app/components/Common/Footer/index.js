import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Shipping', to: '/shipping' },
    { id: 2, name: 'Privacy Policy', to: 'https://icart.tn/Privacy.html', external: true },
    { id: 3, name: 'Terms and Conditions', to: 'https://icart.tn/TERMSAND-CONDITIONS.HTML', external: true }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Détails du compte</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Ordres</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      {item.external ? (
        <a href={item.to} target='_blank' rel='noopener noreferrer'>
          {item.name}
        </a>
      ) : (
        <Link to={item.to}>
          {item.name}
        </Link>
      )}
    </li>
  ));

  return (
    <footer
      className='footer'
      style={{
        backgroundImage: 'url(https://lyne-nfc.fr/wp-content/uploads/2023/03/3d-BG-01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff' // Ensure text color contrasts with the background
      }}
    >
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>SERVICE CLIENT</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Links</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Newsletter</h3>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} ICart </span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
              <span className='pinterest-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
