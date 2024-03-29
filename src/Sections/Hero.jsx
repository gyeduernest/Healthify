import Heroimage from '../assets/images/Heroimage.png'

function Hero () {
  return (
    <>
      <div className='  bg-red-500 Hero flex items-center justify-between px-40' id='Hero'>
        <div className=''>
            <h2 className='text-5xl w-96'>
              Your Wellness, our Priority:Where Health meets CarePriority
            </h2>
            <p className='w-96'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus exercitationem perferendis quod, suscipit architecto blanditiis sequi pariatur! Ipsum vero nesciunt recusandae libero aliquam officiis non ipsa laborum, quas eveniet ad suscipit iusto magni dolorum est blanditiis commodi corporis atque.
            </p>
            <div>
              <button>
                Contact us
              </button>
              <button>
                Explore our services
              </button>
            </div>
        </div>
        <div>
            <img src={Heroimage} alt="" />
        </div>
      </div>
    </>
  );
}
export default Hero