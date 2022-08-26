import { ImageData } from "../Data/ImageData"
import { useState } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import "./imageslider.css"
import tree from "../images/tree.png"

const ImageSlider = () => {



    const length = ImageData.length

    const [current, setCurrent] = useState(0)

    //prevSlide and nextSlide functions are used to set the 
    //current slide viewed by the user,
    //according the arrow keys clicked

    const prevSlide = () => {
        setCurrent(current == 0 ? length - 1 : current - 1)

    }

    const nextSlide = () => {
        setCurrent(current == length - 1 ? 0 : current + 1)

    }


    return (

        <>
            <div className="title">
                <h1>God's Own Country</h1>
                <img src={tree} alt="coconut-tree" />
            </div>

            <section className="slider">

                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

                {/* The map method  is used to iterate through the array of images and display them */}

                {ImageData.map((img, index) => {

                    return (


                        <div key={index} >
                            <img src={img.image} alt='kerala tourism' className={index == current ? 'image-active' : 'image'} onClick={() => setCurrent(index)} />
                        </div>


                    )

                })

                }

            </section>
            {/* The current image alone is displayed in the preview section
            using the current value of the active image in thumbnails */}

            <h2>Image Preview</h2>
            <section className="preview">
                <img src={ImageData[current].image} alt="preview-image" className="preview-image" />
            </section>
        </>
    )
}

export default ImageSlider