import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; // Import the CSS file

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="/images/robot1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Tisséo Display</h5>
          <p>
            Tisséo Display
            The device retrieves information from the network in real time through the Tisséo API and displays it on the screen.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="/images/robot2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Experimental rocket ignition system</h5>
          <p>
            Experimental rocket ignition system
            This device allows a set of 4 powder engines to be started independently
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="/images/robot3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
