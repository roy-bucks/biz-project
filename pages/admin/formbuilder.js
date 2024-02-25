import { React, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Admin from "layouts/Admin.js";
import FormBlock from "components/Form/Block";

export default function Formbuilder() {
  const [blockCount, setBlockCount] = useState([1]);

  const form = [
    {
      id :  "", 
      type: "", //type of input form
      label: "", //label of the input
      opt: "", //array of the option | null value if thr form is not supported
    },
  ];

  const inputSelection = (value, key) => {
    console.log("key => ", value);

    //search the key and replace the type value
  };


  const labelChange = (value, key) => {
    console.log("value => ", value); 

    //search the key and replace the label value
  }


  const addBlock = () =>{

    const lastIndexValue = blockCount[blockCount.length - 1];
    blockCount.push(lastIndexValue + 1); 
    setBlockCount(blockCount);
    
  }



  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  mb-12 px-4 flex pt-4 justify-center items-center ">
          {/* <CardLineChart /> */}
          <div className="relative flex flex-col  min-w-0 break-words w-full my-6 shadow-lg rounded-lg border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6	">
              <div>
                <h6 className="text-blueGray-700  font-bold">
                  Lorem ipsum dolor sit amet.
                </h6>
                <p>
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.{" "}
                </p>
              </div>
              {blockCount.map((val, index) => {
                  return (
                      <FormBlock  key={val} inputSelection={inputSelection} labelChange = {labelChange} />
                  );
              })}


              <button
                className="bg-blueGray-700 mt-10  active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none  focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center align-middle"
                type="button"
                onClick = {()=> addBlock()}
              >
                ADD
                <PlusOutlined className="ml-2 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Formbuilder.layout = Admin;
