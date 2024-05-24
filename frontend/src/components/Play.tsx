import Photo from "./Photo";
import { useEffect, useState } from "react";

function Play() {

  const [clickPosition, setClickPosition] = useState<{x: number, y: number} | null>(null);

  //Display a box
  //Put the photo in the box
  //Get the user's click position and put a targeting box around it

  function getClickPosition(e: React.MouseEvent<HTMLElement>) {
    console.log(`Mouse x: ${e.clientX}, Mouse y: ${e.clientY}`)
    setClickPosition({x: e.clientX, y: e.clientY});
    return [e.clientX, e.clientY];
  }

  function checkIfClickInPicture(){

  }

  function placeTargetingBox() {

  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const coordinates: Array<number> = getClickPosition(e);
    
    //Check if click is in the photo zone
    //If it is, remove any targeting boxes and put a new targeting box around the click
    //And put a dropdown

    //If it's not, just remove any
  }
  

  return(
    <div className="playArea" onClick={handleClick}>
      {clickPosition && (
        <div className="targetingBox" style={{
          position: 'absolute',
          top: clickPosition.y - 10,
          bottom: clickPosition.y + 10,
          left: clickPosition.x - 10,
          right: clickPosition.x + 10,
          width: '20px',
          height: '20px',
          border: '3px solid red'
        }}/>
      )}
    </div>
  )
}

export default Play;