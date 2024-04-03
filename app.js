import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect, useContext } from "react";
const heading = React.createElement("h1", { id: "heading" }, "i don't care");
const root = ReactDOM.createRoot(document.getElementById("root"));
const countries = [
  { India: ["kolkata", "chennai"] },
  { London: ["arsenal", "chelsea"] },
];

const Title = () => <h1>hello i am</h1>;
const HeadingComponent = () => {
  const [listofcities, setlistofcities] = useState([]);
  const Cities = () => {
    if (listofcities.length === 0) {
      return (
        <select>
          <option>default</option>
        </select>
      );
    } else {
      return (
        <select>
          {listofcities.map((element, index) => {
            return <option key={index}>{element}</option>;
          })}
        </select>
      );
    }
  };
  return (
    <div>
      <select
        onChange={function (e) {
          const temp = e.target.value.split(",");
          setlistofcities(temp);
        }}
      >
        {countries.map((element, index) => {
          return (
            <option key={index} value={Object.entries(element)[0][1]}>
              {Object.entries(element)[0][0]}
            </option>
          );
        })}
      </select>
      <Cities />
    </div>
  );
};
const Containercomponent = (props) => {
  console.log(props.color);
  let color = "gray";
  if (props.color) {
    color = props.color;
  }
  return (
    <div
      style={{ width: "200px", height: "100px", backgroundColor: color }}
    ></div>
  );
};

const Childcomponent = () => {
  const [getcolor, setgetcolor] = useState("");

  return (
    <div>
      <Containercomponent color={getcolor} />
      <input
        type="text"
        onChange={(e) => {
          setgetcolor(e.target.value);
        }}
      ></input>
    </div>
  );
};
const ArsenalComponent = () => {
  return (
    <div>
      <p className="text-red-800 font-bold">Arsenal is a good team</p>
    </div>
  );
};

const AccordionComponent = () => {
  const [showpara, setShowPara] = useState(false);

  const handleClick = () => {
    // Toggle the state when the outer div is clicked
    setShowPara(!showpara);
  };

  return (
    <div className="">
      <div className="w-6/12 bg-gray-700 flex justify-between cursor-pointer" onClick={handleClick}>
        <h2>question no 1</h2>
        <p>🔽</p>
      </div>
      <div>
        {showpara && <ArsenalComponent />} 
      </div>
    </div>
  );
};
const ButtonIncrement=()=>{
  const [count,setcount]=useState(0);
  useEffect(()=>{
    console.log("the count is"+count);
  },[])
  const handleClick=()=>{
    setcount(count+1)
  }
  return(<div>
    <button className="bg-slate-600 text-white" onClick={handleClick}>Increment</button>
  </div>)

}
const App = () => {
  return (
    <div>
      <ButtonIncrement/>
    </div>
  );
};

root.render(<App/>)
