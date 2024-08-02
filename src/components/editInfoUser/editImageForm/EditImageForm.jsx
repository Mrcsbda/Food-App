import React from "react";
import { useForm } from "react-hook-form";
import uploadFile from "../../../services/uploadFile";
import { editInfoUser } from "../../../services/firebase/users";
import { updateInfoUserFromStorage } from "../../../services/storage";
import { updateInfoUser } from "../../../store/slides/user/user";
import { setAlerts } from "../../../services/alerts";
import { useDispatch } from "react-redux";

const EditImageForm = ({
  propsToEditImageForm: { setIsEditing, setLoading, id, setError },
}) => {
  const { register, handleSubmit, reset } = useForm();
  const distpatch = useDispatch();
  const saveImage = async (data) => {
    if (data.avatar.length > 0) {
      setLoading(true);
      setError(false);
      const avatar = await uploadFile(data.avatar[0]);
      const formData = { avatar };
      const resp = await editInfoUser({ formData, id });
      setLoading(false);
      if (resp) {
        reset();
        setIsEditing(false);
        updateInfoUserFromStorage(formData);
        distpatch(updateInfoUser(formData));
        setAlerts("edit");
      } else {
        setError(true);
      }
    }
  };
  
  return (
    <form
      className="edit-user-profile__form-update-image"
      onSubmit={handleSubmit(saveImage)}
    >
      <input
        className="edit-user-profile__input-file"
        type="file"
        {...register("avatar")}
      />
      <button type="submit" className="edit-user-profile__update-image-btn">
        Update image
      </button>
    </form>
  );
};

export default EditImageForm;
