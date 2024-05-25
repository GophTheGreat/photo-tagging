import { useState } from "react";
import TagDropdown from "./TagDropdown";

function Play() {

  const pictureXDimension = '500px';
  const pictureYDimension = '500px';

  const [clickPosition, setClickPosition] = useState<{x: number, y: number} | null>(null);

  function handleClickInArea(e: React.MouseEvent<HTMLElement>) {
    console.log(`Mouse x: ${e.pageX}, Mouse y: ${e.pageY}`)
    setClickPosition({x: e.pageX, y: e.pageY});
    console.log("INSIDE")
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const xPos = e.pageX - rect.left;
    const yPos = e.pageY - rect.top;
    console.log(`In rect: ${xPos}, ${yPos}`);

    e.stopPropagation()
  }

  function handleClickOutOfArea() {
    setClickPosition(null)
    console.log("OUTSIDE")
  }
  

  return(
    <div className="playArea" onClick={handleClickOutOfArea}>
      <div className="picture" 
        style={{
          height: pictureXDimension,
          width: pictureYDimension
        }} 
        onClick={handleClickInArea}
      >
        {clickPosition && (
          <>
            <div className="targetingBox" style={{
              position: 'absolute',
              top: clickPosition.y - 10,
              bottom: clickPosition.y + 10,
              left: clickPosition.x - 10,
              right: clickPosition.x + 10,
              width: '20px',
              height: '20px',
              border: '3px solid yellow'
            }}/>
            <TagDropdown x={clickPosition.x} y={clickPosition.y}/>
          </>

        )}
      </div>
    </div>
  )
}

export default Play;