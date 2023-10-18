import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Slider = () => {
const AutoplaySlider = withAutoplay(AwesomeSlider);
return(
    <>
         <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={2000}
            organicArrows={false}
            bullets={false}
        >
            <div>  
                <img
                  src="/images/carousel1.svg"
                  className="block w-full"
                  alt="Wild Landscape" />
            </div>
            <div>  <img
                  src="/images/carousel2.svg"
                  className="block w-full"
                  alt="Wild Landscape" /></div>
            <div>  <img
                  src="/images/carousel3.svg"
                  className="block w-full"
                  alt="Wild Landscape" /></div>
        </AutoplaySlider>
    </>
)
}

export default Slider