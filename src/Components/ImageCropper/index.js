import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { getOrientation } from "get-orientation/browser";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import { styles } from "./styles";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import CustomImageInput from "../Forms/Components/CustomImageInput/index";
import "./index.css";

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

const Demo = ({ classes, croppedImageCallback }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = useCallback(() => setModal(!modal), [setModal, modal]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  /* useEffect(() => {}, [imageSrc]); */

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
        imageName,
      );
      croppedImageCallback(croppedImage);
      toggle();
      setImageSrc(null);
      setZoom(1);
      setRotation(0);
    } catch (e) {
      console.error(e);
    }
  }, [
    imageSrc,
    croppedAreaPixels,
    rotation,
    setZoom,
    setRotation,
    setImageSrc,
    toggle,
    croppedImageCallback,
    imageName,
  ]);

  const onFileChange = async (file) => {
    console.log("imagem nova no upload");
    if (file !== undefined && file !== null) {
      /* const file = e.target.files[0]; */
      let imageDataUrl = await readFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }

      setImageSrc(imageDataUrl);
      setImageName(file.name)
      toggle();
    }
  };

  return (
    <>
      {imageSrc && (
        <>
          <Modal
            isOpen={modal}
            toggle={() => {
              toggle();
              setImageSrc(null);
              console.log("img", " mudou");
            }}
            style={{ padding: "0.5rem 0.5rem 0 0.5rem" }}
          >
            <ModalHeader
              style={{
                display: "flex",
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Ajuste da imagem
            </ModalHeader>
            <ModalBody>
              <div className={classes.cropContainer}>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={3 / 3}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  style={{ padding: "1rem" }}
                />
              </div>
              <div className="zoom-container">
                <h6>Zoom</h6>
                <div className="zoom-wrapper">
                  <Slider
                    style={{ width: "90%" }}
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter style={{ justifyContent: "center" }}>
              <div className="crop-modal-buttons-wrapper">
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      if (rotation === 360) {
                        setRotation(0);
                      } else {
                        setRotation(rotation + 90);
                      }
                    }}
                  >
                    Girar imagem
                  </Button>
                </div>
                <div>
                  <Button
                    size="small"
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.cropButton }}
                  >
                    Cortar imagem
                  </Button>
                </div>
              </div>
            </ModalFooter>
            {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
          </Modal>
        </>
      )}
      <CustomImageInput imageCallback={onFileChange} />
    </>
  );
};

const ImageCropper = withStyles(styles)(Demo);

export default ImageCropper;
