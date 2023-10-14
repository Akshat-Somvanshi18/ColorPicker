import React , {useState} from "react";

const Task3 = ({colors}) => {

    const [isColorListVisible, setColorListVisibility] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    console.log(colors);
  
    const toggleColorList = () => {
      setSelectedColor("white");
      setColorListVisibility(true);
      console.log(isColorListVisible);
    };
  
    const handleColorSelection = (color) => {
      setSelectedColor(color);
      setColorListVisibility(false);
    };

  return (
    <>
      <div className="color-picker d-flex flex-column align-items-center mt-5">
      <button onClick={toggleColorList} className="btn btn-outline-success">Pick a color</button>
      <div className="d-flex align-items-center" style={{height:"200px"}}>
      {isColorListVisible && (
        <div className="color-list d-flex justify-content-center flex-wrap align-items-center">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color border mx-3 mt-2" 
              style={{ backgroundColor: color ,width:"50px" , height:"50px" }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      )}
      </div>

      <div className="w-75 border shadow" style = {{height:"200px" , backgroundColor:selectedColor}}></div>
      {selectedColor && selectedColor!="white" && <h3 className="mt-3">Selected Color: {selectedColor}</h3>}
    </div>
    </>
  );
};

export default Task3;
