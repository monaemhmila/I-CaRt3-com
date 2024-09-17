import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Collapse, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Homepage.css'; // Import the custom CSS file
import actions from '../../actions';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <Button color="transparent" onClick={toggle} className="faq-button">
        <div className="faq-question">
          <FaQuestionCircle className="faq-icon" />
          <h4>{question}</h4>
        </div>
        {isOpen ? <FaChevronUp className="faq-toggle-icon" /> : <FaChevronDown className="faq-toggle-icon" />}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <p>{answer}</p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

const Homepage = ({ products, filterProducts, match }) => {
  useEffect(() => {
    const slug = match.params.slug;
    filterProducts(slug);
  }, [filterProducts, match.params.slug]);

  return (
    <div className='homepage'>
      <div className='hero-section'>
        <Container className='text-center mt-2'>
          <h1 className='font-weight-bold'>Innovez votre réseau avec la technologie NFC</h1>
        </Container>
      </div>

      <Container className='text-center mt-2'>
        <img src='/images/qr-code.png' alt='QR Code' className='qr-code-img' />
        <p>Scannez le code QR pour découvrir nos services</p>
      </Container>

     
      
      {/* Other sections remain unchanged */}
      <Container className='text-center mt-4'>
        <Row className='info-section'>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/connexion-rapide-icon.png' alt='Connexion Rapide' className='info-icon' />
              <h4>Connexion Rapide</h4>
              <p>Avec ICart, l'avenir des échanges professionnels est là.</p>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/fabrication-francaise-icon.png' alt='Fabrication Française' className='info-icon' />
              <h4>Fabrication Tunisienne</h4>
              <p>Fabriqués avec précision et passion en Tunisie.</p>
            </div>
          </Col>
          <Col xs='12' md='4'>
            <div className='info-item'>
              <img src='/images/support-icon.png' alt='24/7 Support' className='info-icon' />
              <h4>24/7 Support</h4>
              <p>Notre équipe est à votre service 24h/24, 7j/7.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-4'>
        <Row>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/digital-cards-icon.png' alt='Cartes Digitales NFC' className='service-icon' />
              <h4>Cartes Digitales ICart</h4>
              <p>Nous sommes fiers d'offrir des solutions novatrices et accessibles pour soutenir la croissance des entreprises dans un monde de plus en plus numérique. Découvrez nos cartes de visite NFC premium et nos cartes d'avis Google NFC.</p>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/nfc-plaques-icon.png' alt='Plaques NFC' className='service-icon' />
              <h4>Plaques ICart</h4>
              <p>Découvrez nos plaques ICart polyvalentes, conçues pour générer des avis positifs sur Google et renforcer votre présence sur Facebook, YouTube, Instagram, TikTok, Snapchat, Doctolib, Planity, et bien plus encore.</p>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/nfc-stickers-icon.png' alt='Stickers NFC' className='service-icon' />
              <h4>Menu Avanceés</h4>
              <p>Découvrez nos Menu ICart de haute qualité, conçus pour les restaurants. Scannez simplement un QR code sur la table pour accéder au menu et passer commande directement depuis votre smartphone.</p>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className='service-item'>
              <img src='/images/custom-nfc-products-icon.png' alt='Vos Produits NFC Personnalisés' className='service-icon' />
              <h4>Vos Produits ICart Personnalisés</h4>
              <p>Nous proposons un service de personnalisation pour aider les entreprises à créer des cartes de visite NFC, des Menu et des Plaques NFC en accord avec leur charte graphique, et ce à des prix avantageux.</p>
            </div>
          </Col>
        </Row>
      </Container>

       {/* New Delivery Section */}
       <Container className='mt-4' style={{ backgroundColor: '#ddeedf' }}>
        <div className='delivery-section'>
          <h2  className='font-weight-bold'>Service Livraison</h2>
          <p><strong>Expédition de vos produits dans un délai de 3 à 5 jours ouvrés.</strong></p>
          <p>Parce que chez ICart, nous ne faisons pas que livrer des produits, nous apportons une touche d’efficacité à chaque commande, mettant votre satisfaction au cœur de notre engagement. Faites l’expérience d’une livraison qui transforme l’attente en anticipation et confirmez pourquoi choisir ICart, c’est choisir l’excellence à chaque étape.</p>
        </div>
      </Container>


      <Container className='mt-5'>
  <h1 className='text-center mb-5'>Questions Fréquentes</h1>
  <Row>
    <Col xs='12' md='6'>
      <img src='images/celleci.png' alt='FAQ Image' className='img-fluid rounded faq-image' />
    </Col>
    <Col xs='12' md='6'>
      <div className='faq-section'>
        <FAQItem 
          question="Comment fonctionne la carte intelligente ?" 
          answer="Elle permet de partager vos informations personnelles en un instant avec un simple geste. Plus besoin de papiers, tout est digital et accessible en quelques secondes." />
        <FAQItem 
          question="Quelles informations puis-je y ajouter ?" 
          answer="Vos coordonnées, liens vers vos réseaux sociaux, site web, portfolio ou toute autre information essentielle pour vos contacts. Tout est personnalisable." />
        <FAQItem 
          question="Comment mes contacts accèdent-ils à mes informations ?" 
          answer="Il leur suffit d’approcher leur smartphone de la carte pour voir apparaître vos informations sur leur écran. C’est aussi simple que ça." />
        <FAQItem 
          question="Est-ce sécurisé ?" 
          answer="Absolument. Seules les informations que vous souhaitez partager sont visibles et vous avez toujours le contrôle sur ce que vous diffusez." />
        <FAQItem 
          question="Puis-je modifier les informations après création ?" 
          answer="Oui, vous pouvez mettre à jour vos informations à tout moment via une interface dédiée. Cela permet de toujours garder vos coordonnées à jour sans avoir à remplacer la carte." />
      </div>
    </Col>
  </Row>
</Container>


      <Container className='testimonials'>
  <h2 className='text-center mb-5'>Témoignages</h2>
  <Row>
    <Col xs='12' md='4'>
      <div className='testimonial-card'>
        <p className='testimonial-text'>
          "La carte NFC iCart est à la fois pratique et moderne, simplifiant l'accès à mes coordonnées pour mes patients. Elle favorise une communication fluide. Merci beaucoup pour ce produit qui m'a permis de me connecter plus facilement avec mes clients. Un service vraiment exceptionnel !"
        </p>
        <div className='d-flex align-items-center'>
          <img src='/images/testimonial/testemonial.png' alt='User 1' className='testimonial-img' />
          <div className='ml-3'>
            <p className='name'>Dr. Sophie Martin</p>
            <p className='title'>Médecin généraliste</p>
            <div className='rating'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <div className='card-phone-image'>
          <img src='/images/testimonial/testemonial4.png' alt='iCart and phone' />
        </div>
      </div>
    </Col>

    <Col xs='12' md='4'>
      <div className='testimonial-card'>
        <p className='testimonial-text'>
          "Grâce à iCart, mes échanges professionnels sont devenus beaucoup plus simples et rapides. La carte permet de partager mes informations en un seul geste, sans tracas. Je recommande vivement ce produit innovant."
        </p>
        <div className='d-flex align-items-center'>
          <img src='/images/testimonial/testemonial1.png' alt='User 2' className='testimonial-img' />
          <div className='ml-3'>
            <p className='name'>Pierre Dubois</p>
            <p className='title'>Consultant en stratégie</p>
            <div className='rating'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <div className='card-phone-image'>
          <img src='/images/testimonial/testemonial3.png' alt='iCart and phone' />
        </div>
      </div>
    </Col>

    <Col xs='12' md='4'>
      <div className='testimonial-card'>
        <p className='testimonial-text'>
          "iCart a complètement transformé ma manière de réseauter. Non seulement elle est pratique, mais elle m'a aussi permis de gagner en efficacité dans la gestion de mes contacts. Un véritable atout pour mon activité !"
        </p>
        <div className='d-flex align-items-center'>
          <img src='/images/testimonial/testemonial2.png' alt='User 3' className='testimonial-img' />
          <div className='ml-3'>
            <p className='name'>Julie Moreau</p>
            <p className='title'>Directrice de marketing</p>
            <div className='rating'>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <div className='card-phone-image'>
          <img src='/images/testimonial/testemonial5.png' alt='iCart and phone' />
        </div>
      </div>
    </Col>
  </Row>
  
</Container>

    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, actions)(Homepage);
