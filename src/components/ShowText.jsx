const ShowText = ({ switchText, text}) => {
  return (
    <>
      {
        switchText ? 
        <div className="w-full text-grey-darkest">{text}</div>
        :
        <div className="w-full line-through text-green">{text}</div>
      }
    </>
  )
}

export default ShowText
