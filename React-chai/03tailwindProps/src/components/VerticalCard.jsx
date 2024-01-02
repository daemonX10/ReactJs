import PropTypes from "prop-types";

const VerticalCard = ({ imgSrc ="https://avatars.githubusercontent.com/u/115637298?v=4" ,message="There is Nothing , but Nothing is Better Than Non-sense ", hashtag = ["#travel","#photography","#winter"]}) => {
    return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                <img className="w-full" src={imgSrc} />
            <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base"> {message}
                    </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashtag[0]}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashtag[1]}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashtag[2]}</span>
            </div>
        </div>
    </>
    )
};


VerticalCard.propTypes = {
    hashtag: PropTypes.arrayOf(PropTypes.string),
    message: PropTypes.string,
    imgSrc: PropTypes.string
};

export default VerticalCard;