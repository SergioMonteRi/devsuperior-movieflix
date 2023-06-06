import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { MovieReview } from "types/types";

import GenericButton from "components/GenericButton";

import { saveReviewBackend } from "util/requests/ReviewRequest/reviewRequest";

import "./styles.css";

type SaveReviewData = {
  text: string;
  movieId: number;
};

type FormData = {
  text: string;
};

type ReviewFormProps = {
  onSubmitReview: (review: MovieReview) => void;
  movieId: string;
};

const ReviewForm = ({ onSubmitReview, movieId }: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmitForm = (formData: FormData) => {
    const saveReviewData: SaveReviewData = {
      text: formData.text,
      movieId: Number(movieId),
    };

    saveReviewBackend(saveReviewData)
      .then((response) => {
        setValue("text", "");
        onSubmitReview(response.data);
        toast.success("Review enviado com sucesso");
      })
      .catch((error) => {
        toast.error("Falha ao enviar review");
      });
  };
  return (
    <form
      className="p-3 p-xl-4 bg-secondary rounded mt-3"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <input
        {...register("text", {
          required: "Campo obrigatório",
        })}
        type="text"
        className={`form-control base-input ${errors.text ? "is-invalid" : ""}`}
        placeholder="Deixe sua avaliação aqui"
        name="text"
      />

      <div className="review-form-btn-container">
        <div>
          <GenericButton text="SALVAR AVALIAÇÃO" />
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
