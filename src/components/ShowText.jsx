const ShowText = ({ switchText, text}) => {
  return (
    <>
      {
        switchText ? 
        <div className="w-full text-gray-500">{text}</div>
        :
        <div className="w-full line-through text-gray-400">{text}</div>
      }
    </>
  )
}

export default ShowText
