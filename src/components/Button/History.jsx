
const History = ({ switchText, setSwitchText }) => {
  const handleHistory = () => {
    setSwitchText(!switchText);
  };

  return (
    <>
      <div className="mb-4 flex mt-4 border-b-4 border-slate-400 py-4">
        <button
        onClick={handleHistory}
        ><div> {
          switchText ? 
          <div className="text-teal-400 p-2 border-2 border-teal-200 rounded flex-no-shrink hover:text-white hover:bg-teal">now</div> : 
          <div className="text-pink-400 p-2 border-2 border-pink-200 rounded flex-no-shrink hover:text-white hover:bg-teal">past</div>
          }
          </div>
        </button>
      </div>
    </>
  )
}

export default History
