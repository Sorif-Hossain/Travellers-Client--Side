import image from '../../media/images/about-us.png'
function AboutUs() {
    return (
        <div className='custom-margin'>
            <article className ='container d-lg-flex'>
                <div className='custom-width'>
                <img src={image} className='img-fluid rounded-circle mt-4' alt="aboutus" />
                </div>
                <div className='mt-5 custom-width'>
                <h2 className='fw-bold mt-5'>About us</h2>
                <p className='text-muted lh-lg mt-3'>A travel magazine for passionate travellers with plenty of practical tips for fun travel. Need some travel tips and tricks to help you have an awesome adventure? We can help you. Cheap and Fun Travel. Sustainable Tourism. Travel Information.</p>
                <p className='text-muted lh-lg'>      
                your platform for booking, safety, reporting, policy, and expenses. Make bookings in 5 minutes and access millions of travel options tailored to you and your travel policy.

Intuitive user experience.
Insightful reporting - analyse your programme and make the right calls. 
Access the best-negotiated rates, worldwide.
Chat to a travel expert with one tap.
Stay in the know about anything and everything travel.
Melon is powered by real people supporting your every need. Chat with travel experts, access safety features, and manage budgets, all anytime, anywhere on any device..
                </p>
                </div>
            </article>
        </div>
    )
}

export default AboutUs;
