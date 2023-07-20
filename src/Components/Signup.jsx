'use client'
import React from 'react';
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";

const Signup = () => {
  return (
    <div>
      <form className="space-y-5 p-10" action="">
        <div className="flex flex-col md:flex-row md:gap-5 space-y-5 md:space-y-0">
          <Input variant="standard" label="Standard" />
          <Input variant="standard" label="Standard" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 space-y-5 md:space-y-0">
          <Input variant="standard" label="Standard" />
          <Input variant="standard" label="Standard" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 space-y-5 md:space-y-0">
          <Input variant="standard" label="Standard" />
          <Input variant="standard" label="Standard" />
        </div>

        <div>
          {/* File Input */}
          <Input
            className='border'
            type="file"
            // onChange={handleFileChange}
            inputProps={{
              accept: "image/*", // Set the accepted file types here (e.g., image/* for images)
            }}
            style={{ display: "none" }}
            id="file-input" // Provide an id to associate with the label
          />
          {/* <label htmlFor="file-input">
            <Button variant="contained" component="span">
              Upload File
            </Button>
          </label> */}
        </div>
        
        <div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
        </div>
        <input
          type="submit"
          className="bg-gray text-white rounded-lg px-4 py-2 "
        />
      </form>
    </div>
  );
};

export default Signup;