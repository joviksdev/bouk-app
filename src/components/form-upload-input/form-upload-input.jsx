import React from "react";
import "./form-upload-input.css";
import { ReactComponent as Upload } from "../../assets/backup.svg";
import { GrClose } from "react-icons/gr";

const FormUploadInput = ({ onChange, image, setImage }) => {
  return (
    <>
      <div className="form_upload_input">
        {image ? (
          <div className="image_preview_container">
            <div className="image_preview">
              <div>
                <img src={URL.createObjectURL(image)} alt="uploaded image" />
              </div>
              <p>{image.name}</p>
            </div>
            <GrClose
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => setImage(null)}
            />
          </div>
        ) : (
          <>
            <input type="file" id="file" onChange={onChange} />
            <label htmlFor="file">
              <Upload />
              <span>Click here to upload</span>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default FormUploadInput;
