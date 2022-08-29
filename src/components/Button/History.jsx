
const History = ({ switchText, setSwitchText }) => {
  const handleHistory = () => {
    setSwitchText(!switchText);
  };

  return (
    <>
      <div className="mb-4 flex mt-4 border-b-4 border-slate-500 py-4">
        <button
        onClick={handleHistory}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
        ><div> {
          switchText ? 
          <div>now</div> : 
          <div>past</div>
          }
          </div>
        </button>
      </div>
    </>
  )
}

export default History
