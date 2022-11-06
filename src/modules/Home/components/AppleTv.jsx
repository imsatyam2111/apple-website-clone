import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react';

export const AppleTv = () => {
  const [value, setValue] = useState(0);

  const slides = Array(11)
    .fill('../../../assets/images/heroes/apple-tv/')
    .map((el, index) => (
      <div
        className={`slide slide-${index + 1}`}
        style={{
          width: 800,
          height: 500,
          margin: '5px 24px',
        }}
      >
        Hey {index + 1}
      </div>
    ));

  const onDotChange = (val) => {
    setValue(val);
  };

  return (
    <>
      <Carousel
        plugins={[
          'autoplay',
          'clickToChange',
          'centered',
          'infinite',
          // 'fastSwipe',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
              interval: 3000,
            },
          },
        ]}
        // draggable={false}
        value={value}
        slides={slides}
        // onChange={onDotChange}
      />
      {/* {slides.map((el) => el)}
      </Carousel> */}
      <Dots value={value} onChange={onDotChange} number={slides.length} />
    </>
  );
};
