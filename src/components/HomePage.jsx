 import '../styles/Homepage.css'
 import img1 from '../images/happypeople.jpg'
 
 

 export default function HomePage(){
    return(
        <>
       
        <div className="homepage">
        <div className="container">
            <div className="leftside">
                <h1 className='header-txt'>Lets  carry your shopping</h1>
                <p1 className='para1'>Come one come All</p1>
                <p2 className='para2'>
                    We have been in existence for many years and we are greatly interested in making shopping easier for you
                </p2>
            </div>
            <div className="rightside">
                <img className='image1' src={img1} alt='happyperson' loading='lazy'
                srcSet={`${img1} 400vw ,${img1} 800vw ,${img1} 1200vw`}
                 sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
                />
            </div>
        </div>
        </div>
        </>
    )
 }