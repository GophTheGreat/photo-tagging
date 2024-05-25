//Menu that pops up when you click to target something
//Depends on tags from backend. Backend reference passed as prop?
//Just gonna predefine them for now
function TagDropdown(props: {x: number, y: number}){
  
  const {x, y} = props

  return(
    <div style={{
      position: 'absolute',
      top: y + 20,
      bottom: y + 50,
      left: x + 50,
      right: x + 90,
      width: '80px',
      height: '80px',
      backgroundColor: 'purple'
    }}>
      <p>DROPDOWN MENU</p>
      <ul>
        <div className="tagOption">1</div>
        <div className="tagOption">2</div>
        <div className="tagOption">3</div>
      </ul>
    </div>
  )
}

export default TagDropdown;