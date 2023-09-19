import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { getUserById } from "../../services/userService";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { toast } from "react-toastify";

export default function UserInput() {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectData = await getUserById(id);
        setSubject(subjectData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const submit = async (data) => {
    try {
      await auth.edit(data);
      toast.success(`User edited successfully!`);
      navigate("/users");
    } catch (error) {
      console.error(error);
      toast.error("Error editing user.");
    }
  };

  return user && subject && (
    <div>
      <Title title="Edit user" />
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="text"
          defaultValue={subject.name}
          label="Name"
          {...register("name", {
            required: true,
            minLength: 5,
          })}
          error={errors.name}
        />
        <Input
          type="text"
          defaultValue={subject.id}
          label="Id:"
          {...register("id", {
            defaultValue: id,
          })}
          error={errors.id}
          readOnly
        />
        <Input
          type="text"
          defaultValue={subject.address}
          label="Address"
          {...register("address", {
            required: true,
          })}
          error={errors.address}
        />
        <Input
          type="email"
          defaultValue={subject.email}
          label="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
              message: "Email Is Not Valid",
            },
          })}
          error={errors.email}
        />
        <div>
          <Input
            type="password"
            defaultValue={subject.password}
            label="Password"
            {...register("password", {
              required: true,
              minLength: 5,
            })}
            error={errors.password}
          />
        </div>
        <Input
          type="checkbox"
          defaultChecked={subject.isAdmin}
          label="Admin"
          {...register("isAdmin", {
            required: false,
          })}
          error={errors.admin}
        />
        <Button text="Update" type="submit" />
      </form>
    </div>
  );
}
