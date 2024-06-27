const BtnOk = ({text , onClick}) => {
  return(
      <>
          <button onClick={onClick} className="p-2 px-6 py-2 right-0 bg-gray-800 rounded text-white border-gray-800 hover:bg-gray-700 active:bg-gray-900  border-none text-sm  font-semibold focus:outline-0">
              {text}
          </button>
      </>
  )
}
export default BtnOk
