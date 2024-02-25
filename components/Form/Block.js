import { Input, Tooltip, Select, Form } from "antd"; 
import {
    InfoCircleOutlined,
    TagOutlined,
    FileTextOutlined,
    NumberOutlined, 
    CheckSquareOutlined, 
    DownCircleOutlined, 
    CalendarOutlined, 
    ClockCircleOutlined
  } from "@ant-design/icons";



const FormBlock =  ({key, inputSelection, labelChange } ) =>  {


    const supportedInputType = [
        {
          value: "text",
          label: (
            <>
              <FileTextOutlined className="mr-2" /> 
              Text
             </>
          )
        },
        {
          value: "number",
          label: (
            <>
              <NumberOutlined className="mr-2" />
              Number
            </>
          )
        }, 
        {
          value: "checkbox",
          label: (
            <>
              <CheckSquareOutlined  className="mr-2" />
              Checkbox
            </>
          )
        }, 
        {
          value: "drop-down",
          label: (
            <>
            <DownCircleOutlined  className="mr-2" />
            Drop-down
            </>

          )
        },
        {
          value: "date",
          label: (
            <>
            <CalendarOutlined  className="mr-2" />
            Date
            </>

          )
        }, 
        {
          value: "time",
          label: (
            <>
            <ClockCircleOutlined  className="mr-2" />
            Time
            </>

          )
        },
      ]


    return (
        <>
        <div className="mt-5 flex flex-row align-middle text-center">
        <Input
          onChange = {(event) => labelChange(event.target.value, key)}
          className="mr-2 w-6/12"
          placeholder="Label"
          prefix={<TagOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Section Label">
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
        />

        <Select
          defaultValue="text"
          className = "w-6/12"
          allowClear
          options={supportedInputType}
          onChange = {(event)=> inputSelection(event, key) }
        />
      </div>


      <div class="mt-8">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
      </div> 
    </>

    )
}




export default FormBlock;