import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button as AntButton } from "antd";
import "./index.css";
import { Col} from "reactstrap";

const PreviewCroppedImages = ({ images, deleteCallback = () => {} }) => {

  return (
    <>
      <div className ='img-row'>
        {images.map((image, index) => {
            console.log('indice',1)
          return (
            <Col lg = '4' md = '4' sm = '6' xs = '12'>
              <div className="image-wapper">
                <div
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    position: "absolute",
                  }}
                >
                  <AntButton
                    type="default"
                    shape="circle"
                    onClick={() => {
                      deleteCallback(index);
                    }}
                    icon={<DeleteForeverIcon />}
                  ></AntButton>
                </div>
                <img
                  src={URL.createObjectURL(image)}
                  key={"image " + String(index)}
                  style={{ width: "100%", height: "100%" }}
                  alt = ' '
                />
              </div>
            </Col>
          );
        })}
      </div>
    </>
  );
};

export default PreviewCroppedImages;
