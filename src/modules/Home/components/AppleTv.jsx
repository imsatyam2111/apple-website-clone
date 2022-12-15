import Carousel from 'react-elastic-carousel';


export const AppleTv = () => {

  return (
    <>
      <Carousel  itemsToScroll={1} itemsToShow={1} onChange={(currentItem, pageIndex) => {
        console.log(currentItem, pageIndex)
        // setValue(currentItem.index + 2)
      }}>
        {Array(11).fill('../../../assets/images/heroes/apple-tv/').map((el, index) => (
          <div
            key={index}
            // data-slide={index+1}
            className={`slide-${index + 1}`}
            style={{
              width: 1200,
              height: 500,
              margin: '5px 24px',
            }}
          >
          </div>
        ))}
      </Carousel>
    </>
  );
};
