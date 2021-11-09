import "./carouselModal.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Modal } from 'react-responsive-modal'
import { Carousel } from "react-responsive-carousel"
import { Modal, ModalGateway } from "react-images"


export default function CarouselModal( { images, viewerIsOpen, setCurrentImage, setViewerIsOpen } ) {

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <div>
                            <div className={`closeButton`} onClick={closeLightbox}>X</div>
                            <Carousel
                                statusFormatter={(current, total) => `${current}/${total}`}
                                autoPlay={true}
                                showIndicators={false}
                                interval={3000}
                                thumbWidth={148}
                                width="44vw"
                                stopOnHover={true}
                                emulateTouch={true}
                                infiniteLoop={true}
                                useKeyboardArrows={true}
                            >
                                {images.map((image, index) => {
                                    return (<div key={`image-${index}`}>
                                        <img src={image.url} alt={`img-alojamiento-${index}`}/>
                                    </div>)
                                })}

                            </Carousel>
                        </div>
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>

    );
}

