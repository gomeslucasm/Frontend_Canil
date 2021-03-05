import React, { /* useEffect, */ useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
/* import { Button } from "reactstrap"; */
import SelectInput from "../../Components/SelectInput/index";
import CustomTextInput from "../../Components/CustomTextInput/index";
import FormRegister from "../../Components/FormRegister/index";
import CustomDateInput from "../../Components/CustomDateInput";
import CustomCheckBox from "../../Components/CustomCheckBox/index";
import ImageCropper from "../../../ImageCropper/index";
import PreviewCroppedImages from "../../Components/PreviewCroppedImages/index";
import apiPrivateService from "../../../../Service/apiPrivateService";

const privateService = new apiPrivateService();

const CanilAnimalForm = () => {
  const { register, handleSubmit, /* watch, */ errors } = useForm();
  const today = new Date();
  const [formData, setFormData] = useState({
    entry_date: today.toISOString().substr(0, 10),
  });
  const [imgArray, setImgArray] = useState([]);
  const [showImageError, setShowImageError] = useState(false);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    console.log(name, "=", value);
  };

  const deleteImage = useCallback(
    async (index) => {
      const images = [...imgArray];
      images.splice(index, 1);
      setImgArray(images);
    },
    [imgArray, setImgArray]
  );

  const onSubmit = () => {
    if (imgArray.length > 0) {
      const data = new FormData();
      imgArray.map((img, index) => {
        return data.append(`image[${index}]`, img, img.name);
      });
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      privateService.postAnimal(data);
      console.log("formData = ", formData);
    } else {
      setShowImageError(true);
    }
  };

  const actualDay = today.toISOString().substr(0, 10);

  /*  console.log("Dia atual = ", formData); */

  return (
    <>
      <FormRegister onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <SelectInput
          label={"Tipo do animal"}
          name="animal_type"
          options={{
            Cachorro: "D",
            Gato: "C",
            Cavalo: "H",
            Pássaro: "B",
            Outro: "O",
          }}
          onChange={handleChange}
          required={true}
          selectLabel={"Selecione um tipo"}
          inputRef={register({ required: true })}
        />
        <SelectInput
          label={"Tamanho do animal"}
          name="size"
          options={{
            Pequeno: "P",
            Médio: "M",
            Grande: "G",
          }}
          onChange={handleChange}
          required={true}
          selectLabel={"Selecione um tamanho"}
          inputRef={register({ required: true })}
        />

        <SelectInput
          label={"Sexo do animal"}
          name="sex"
          options={{
            Macho: "M",
            Fêmea: "F",
          }}
          onChange={handleChange}
          required={true}
          selectLabel={"Selecione o sexo do animal"}
          inputRef={register({ required: true })}
        />
        <CustomTextInput
          label={"Código"}
          name={"code"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
        />
        <CustomDateInput
          label={"Data de nascimento"}
          comment={"Caso não saiba, informe uma data aproximada."}
          name={"birth_date"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        {/* <CustomDateInput
          label={"Data de entrada do animal"}
          comment={"Caso não saiba, informe uma data aproximada."}
          name={"entry_date"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        /> */}
        <CustomCheckBox
          label={"Animal castrado"}
          name={"is_castrated"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        <CustomCheckBox
          label={"Mostrar animal no site"}
          name={"show"}
          inputRef={register({ required: true })}
          errors={errors.code}
          required={true}
          onChange={handleChange}
          defaultValue={actualDay}
        />
        <ImageCropper
          croppedImageCallback={(img) => {
            /*setFormData({ ...formData, images: [...formData.images, img] });*/
            setImgArray([...imgArray, img]);
          }}
        />
        {showImageError && imgArray.length === 0 && (
          <div
            style={{ textAlign: "center", width: "100%", marginTop: "0.1rem" }}
          >
            <p style={{ color: "red" }}>Adicione as fotos do animal</p>
          </div>
        )}
        {imgArray.length > 0 && (
          <div className="show-uploaded-image-wrapper">
            <PreviewCroppedImages
              images={imgArray}
              deleteCallback={(index) => {
                deleteImage(index);
              }}
            />
          </div>
        )}
      </FormRegister>
    </>
  );
};

export default CanilAnimalForm;
