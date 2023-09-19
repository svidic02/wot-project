import React from "react";
import Title from "../Title/Title";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { addMeal } from "../../services/foodService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MealAdd() {
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    await addMeal(data);
    toast.success("Food edited successfully!");
    navigate("/meals");
  };

  return (
    <div>
      <Title title="Add meal" />
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          label="Name"
          {...register("name", {
            required: true,
          })}
          error={errors.name}
        />
        <Input
          type="text"
          label="Price in $"
          {...register("price", {
            required: true,
          })}
          error={errors.price}
        />
        <Input
          type="text"
          label="Tags"
          {...register("tags", {
            required: true,
          })}
          error={errors.tags}
        />
        <Input
          type="text"
          label="Cook time in minutes"
          {...register("cookTime", {
            required: true,
          })}
          error={errors.cookTime}
        />
        <Button text="Add" type="submit" />
      </form>
    </div>
  );
}
