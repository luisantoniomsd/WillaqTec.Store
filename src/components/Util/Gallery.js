import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class Gallery extends Component {

    constructor() {
        super(...arguments);
        this.state = { galleryOpened: true };
        this.toggleGallery = this.toggleGallery.bind(this);
    }

    toggleGallery() {
        this.setState(prevState => ({
        galleryOpened: !prevState.galleryOpened
        }));
    }

    render () {
        return (
            <ImageGallery items={images} />
        )
    }

}
