
const Avatar = (props) => {
  return (
    <>
        <div>
            <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
        </div>
    </>
  )
}

export default Avatar