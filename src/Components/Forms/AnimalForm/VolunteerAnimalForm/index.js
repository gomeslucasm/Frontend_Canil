import React, { /* useEffect, */ useState/* , useCallback  */} from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../../Components/SelectInput/index";
import CustomTextInput from "../../Components/CustomTextInput/index";
import FormRegister from "../../Components/FormRegister/index";
import CustomDateInput from "../../Components/CustomDateInput";
import CustomCheckBox from "../../Components/CustomCheckBox/index";
import { Button } from "reactstrap";
import "./index.css";
/* import { useSelector } from "react-redux"; */
/* import UserService from "../../../../Service/UserService"; */
import ImageCropper from "../../../ImageCropper/index";
import PreviewCroppedImages from "../../Components/PreviewCroppedImages/index";

/* const userService = new UserService(); */

const VolunteerAnimalForm = () => {
  const { register, handleSubmit, /* watch, */ errors } = useForm();
  const [formData, setFormData] = useState({images:[],});
  /* const { userId } = useSelector((state) => state.user); */
  const [currentVolunteer, setCurrentVolunteer] = useState(null);
  const [volunteers/* , setVolunteers */] = useState({});
  const [showImageError, setShowImageError] = useState(false);

  /* const getVolunteers = useCallback(async () => {
    setCurrentVolunteer(false);
    const volunteers_response = await userService.get_users();
    var volunteersDict = {};
    await volunteers_response.map((volunteer) => {
      volunteersDict = {
        ...volunteersDict,
        [volunteer.first_name + " " + volunteer.last_name]: volunteer.id,
      };
    });
    setVolunteers(volunteersDict)
  }, []); */

 /*  useEffect(() => {
    if (currentVolunteer) {
      setFormData({ ["responsible_volunteer"]: userId });
    }
  }, [currentVolunteer]); */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteImage = (index) => {
    const images = formData.images;
    images.splice(index, 1);
    setFormData({
      ...formData,
      images: images,
    });
  };

  const onSubmit = () => {
    if (formData.images.length > 0) {
    } else {
      setShowImageError(true);
    }
  };

  const today = new Date();
  const actualDay = today.toISOString().substr(0, 10);

  console.log("dia", today.toISOString().substr(0, 10));

  if (currentVolunteer === null) {
    return (
      <>
        <div className="animal-form-volunteer-button-wrapper">
          <Button
            color="success"
            onClick={() => {
            }}
            style={{ marginBottom: "5vh" }}
          >
            O animal está comigo
          </Button>
          <Button
            color="success"
            onClick={() => {
              setCurrentVolunteer(false);
            }}
          >
            O animal está com outro voluntário
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <FormRegister onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <SelectInput
          label={"Tipo do animal"}
          name="type"
          options={{
            Cachorro: "D",
            Gato: "C",
          }}
          onChange={handleChange}
          required={true}
        />

        <SelectInput
          label={"Sexo do animal"}
          name="type"
          options={{
            Macho: "M",
            Fêmea: "F",
          }}
          onChange={handleChange}
          required={true}
        />
        <CustomTextInput
          label={"Código"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
        />
        <CustomDateInput
          label={"Data de nascimento"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        <CustomDateInput
          label={"Data de entrada do animal"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        <CustomCheckBox
          label={"Animal castrado"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        <CustomCheckBox
          label={"Mostrar animal no site"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        {currentVolunteer === false && (
          <SelectInput
            label={"Sexo do animal"}
            name="responsible_volunteer"
            options={volunteers}
            onChange={handleChange}
            required={true}
          />
        )}
        <ImageCropper
          croppedImageCallback={(img) => {
            setFormData({ ...formData, images: [...formData.images, img] });
          }}
        />
        {(showImageError && formData.images.length===0)&& (
          <div
            style={{ textAlign: "center", width: "100%", marginTop: "0.1rem" }}
          >
            <p style={{ color: "red" }}>Adicione as fotos do animal</p>
          </div>
        )}
        {formData.images.length > 0 && (
          <div className="show-uploaded-image-wrapper">
            <PreviewCroppedImages
              images={formData.images}
              deleteCallback={deleteImage}
            />
          </div>
        )}
      </FormRegister>
    </>
  );
};

export default VolunteerAnimalForm;
