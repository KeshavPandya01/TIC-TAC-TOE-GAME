import { useState } from "react" ;

const Player = ({initialName, symbol, isActive, onChangeName}) => {

   const[playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);
  
   const handleEditClick = ()=>{
    setIsEditing((editing)=> !editing);

   if(isEditing){
      onChangeName(symbol,playerName);
    }
   }

   const handleChange = (event)=>{
    setPlayerName(event.target.value);
   }

   let editableplayerName = <span className="player-name">{playerName}</span>

   if(isEditing){
    editableplayerName = <input type="text" value={playerName} required onChange={handleChange}/>
   }

    return (
    
      <li className={isActive ? 'active' : undefined}>
        <span className="plyer-info">
          {editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
     </li>
    
  )
}

export default Player
