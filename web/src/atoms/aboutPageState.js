import {atom} from "recoil";
// import {heroImg} from '../images';

export const aboutPictureState = atom({
  key: "aboutPictureState",
  default: 0,
});

export const aboutPicturesCollection = atom({
  key: "aboutPicturesKey",
  default: [
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/wedding_gallery_3.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/wedding_gallery_4.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/wedding_gallery_5.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/wedding_gallery_6.jpg",
    "https://www.rivercourthotel.com/cmsGallery/photo/5317/resized/800x800/wedding_gallery_7.jpg",
  ],
  // default: [heroImg, heroImg, heroImg, heroImg, heroImg],
});
