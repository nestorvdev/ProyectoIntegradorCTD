import "./carouselModal.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Modal } from 'react-responsive-modal'
import { Carousel } from "react-responsive-carousel"
import { Modal, ModalGateway } from "react-images"


export default function CarouselModal(props){

    const closeLightbox = () => {
        props.setCurrentImage(0);
        props.setViewerIsOpen(false);
    };

    return ( 
            <div>
            <ModalGateway>
                {props.viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel 
                        autoPlay={true} 
                        showIndicators={false} 
                        interval={3000} 
                        thumbWidth={140}
                        width="44vw" 
                        stopOnHover={true} 
                        emulateTouch={true} 
                        infiniteLoop={true}
                        useKeyboardArrows={true}
                       >
                           {props.images.map((image)=> {
                                return (<div>
                                            <img src={image.url} />
                                        </div>)
                                })}
                            
                        </Carousel>
                    </Modal>
                ) : null}
            </ModalGateway>
            </div>
        
    );
}

