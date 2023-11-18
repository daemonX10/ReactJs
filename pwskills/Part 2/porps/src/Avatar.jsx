
const Avatar = (props) => {
  return (
    <>
        <div>
            <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
        </div>
    </>
  )
}

{/* 
const Avatar = ({src, width, height, alt}) => {
    return (
    <>
        <div>
            <img src={src} width={width} height={height} alt={alt} />
        </div>
    </>
    )
}
 */ }

export default Avatar