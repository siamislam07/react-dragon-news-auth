import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full normal-case text-lg">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full normal-case text-lg">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-2xl mb-4 font-semibold">Find Us ON</h2>
                <a href="" className='flex items-center text-lg p-3 border rounded-t-lg'>
                    <FaFacebook className='mr-3 text-xl' />
                    <span>Facebook</span>
                </a>
                <a href="" className='flex items-center text-lg p-3 border-x '>
                    <FaTwitter className='mr-3 text-xl' />
                    <span>Twitter</span>
                </a>
                <a href="" className='flex items-center text-lg p-3 border rounded-b-lg'>
                    <FaInstagram className='mr-3 text-xl' />
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6 bg-[#F3F3F3] rounded-lg'>
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;