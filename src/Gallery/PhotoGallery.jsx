 
import Gallery from 'react-photo-gallery';
import { photos } from './Photos';

const PhotoGallery = () => {
        return (
                <div>
                       <h1 className='text-3xl text-center text-gray-500 font-bold mb-6 mt-16'>Toy Gallery</h1>
                  <Gallery photos={photos}   />   
                </div>
        );
};

export default PhotoGallery;