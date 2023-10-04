import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
            Match Highlights: Redwan vs His Wife — as it happened   !   Match Highlights: Redwan vs His wife as...
            <Link to="/" className="mr-5">Match Highlights: Redan vs His wife — as it happened   !   Match Highlights: Redan vs His wife as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;