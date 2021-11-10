import { Modal } from 'react-responsive-modal'
import { Carousel } from "react-responsive-carousel"
import "./carouselModal.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-responsive-modal/styles.css';

export default function CarouselModal(props) {

    const closeLightbox = () => {
        props.setCurrentImage(0);
        props.setViewerIsOpen(false);
    };

    return (
        <Modal open={props.viewerIsOpen} onClose={closeLightbox} center>
            <div>
                <div className={`closeButton`} onClick={closeLightbox}>X</div>
                <Carousel
                    statusFormatter={(current, total) => `${current}/${total}`}
                    autoPlay={true}
                    showIndicators={false}
                    interval={3000}
                    thumbWidth={150}
                    stopOnHover={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                >
                    {props.images.map((image, index) => {
                        return (<div key={`image-${index}`}>
                            <img src={image.url} alt={`img-alojamiento-${index}`} />
                        </div>)
                    })}

                </Carousel>
            </div>
        </Modal>
    )
}

