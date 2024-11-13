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
                <img className='image1' src={img1} alt='happyperson' loading='lazy'/>
            </div>
        </div>
        </div>
        </>
    )
 }