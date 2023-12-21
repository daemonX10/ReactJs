import PropTypes from 'prop-types';

const ToDo = ({text,isFinished}) => {
  return (
    <div className='m-2'>
        <input type="checkbox" checked={isFinished} />
        <span>{text}</span>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" >Edit</button>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" >Delete</button>
        
    </div>
  )
}

ToDo.propTypes = {
  text: PropTypes.string,
  isFinished: PropTypes.bool
};

export default ToDo