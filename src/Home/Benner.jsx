 import benner from '../../public/benner.webp'
 import { Link } from 'react-router-dom';

const Benner = () => {
        return (
                <div className="hero h-96" style={{ backgroundImage: `url(${benner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">PIC THE BEST TOY FOR YOUR KID</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in.  </p>
                    <Link to = '/alltoy'>
                    <button className="btn btn-primary">Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>
        );
};

export default Benner;