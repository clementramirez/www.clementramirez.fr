import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Services.css';
import { Link } from 'react-router-dom';

const StatusDot = ({ status }) => (
  <div className={`status-dot-${status}`}></div>
);

const ServiceCard = ({ logoSrc, title, subtitle, link}) => (
  <Card className="col-3 m-3 card-hover-container" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={logoSrc} />
    <Card.ImgOverlay className='d-flex justify-content-end'>
      <StatusDot status='ok'/>
    </Card.ImgOverlay>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>{subtitle}</Card.Subtitle>
    </Card.Body>
    <a href={link} target='_blank' className="hover-link">
      <i className="bi bi-box-arrow-up-right link-icon">Visit Website</i>
    </a>
  </Card>
);

const Services = () => {
  const cardsData = [
    { logoSrc: 'images/jellyfin_logo.png', title: 'Jellyfin', subtitle:"Open-source media server", link: 'https://clementramirez.fr/jellyfin' },
    { logoSrc: 'images/jellyseer_logo.png', title: 'Jellyseer', subtitle: "Movies and TV Shows Wishlist", link: 'https://clementramirez.fr/wishlist' },
    { logoSrc: 'images/immich_logo.png', title: 'Immich', subtitle:"Google Photos Like App", link: 'https://immich.clementramirez.fr'},
    { logoSrc: 'images/wizarr_logo.png', title: 'Wizarr', subtitle:"Jellyfin Invations Manager", link: 'https://wizarr.clementramirez.fr'}
  ];

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center row">Services</h1>
      <div style={{ height: '100px' }}></div>
      <div className="row">
        {cardsData.map((card, index) => (
          <ServiceCard key={index} logoSrc={card.logoSrc} title={card.title} subtitle={card.subtitle} link={card.link}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
