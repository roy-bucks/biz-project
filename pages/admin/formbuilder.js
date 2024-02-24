import React from "react";
import {
  InfoCircleOutlined,
  TagOutlined,
  PlusOutlined,
  FileTextOutlined,
  NumberOutlined, 
  CheckSquareOutlined, 
  DownCircleOutlined, 
  CalendarOutlined, 
  ClockCircleOutlined
} from "@ant-design/icons";
import { Input, Tooltip, Select } from "antd";
import Admin from "layouts/Admin.js";

export default function Formbuilder() {
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

              <div className="mt-10 flex flex-row align-middle text-center">
                <Input
                  className="mr-2"
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
                  style={{
                    width: 400,
                  }}
                  allowClear
                  options={[
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
                  ]}
                />
              </div>

              <button
                className="bg-blueGray-700 mt-10  active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-4 rounded shadow hover:shadow-md outline-none  focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center align-middle"
                type="button"
              >
                ADD FORM
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
