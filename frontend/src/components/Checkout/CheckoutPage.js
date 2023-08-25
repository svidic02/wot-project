import React from "react";
import classes from "./checkoutPage.module.css";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createOrder } from "../../services/orderService";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import OrderItemsList from "../OrderItemsList/OrderItemsList";

export default function CheckoutPage() {
  const { user } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    // if (!order.address) {
    //   toast.warning("Please select your location on map!");
    //   return;
    // }

    await createOrder({ ...order, name: data.name, address: data.address });
    navigate("/payment");
  };

  // console.log("User Data:", user);

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.containter}>
        <div className={classes.content}>
          <Title title="Order form" fontSize={"1.6rem"} />
          <div className={classes.inputs}>
            <Input
              defaultValue={user.name}
              label="Name"
              {...register("name")}
              error={errors.name}
            />
            <Input
              defaultValue={user.address}
              label="Address"
              {...register("address")}
              error={errors.address}
            />
          </div>
          <OrderItemsList order={order} />
        </div>
        {/* <div>
          <Title title="Choose Your Location" fontSize="1.6rem" />
          <Map
            location={order.addressLatLng}
            onChange={(latlng) => {
              console.log(latlng);
              setOrder({ ...order, addressLatLng: latlng });
            }}
          />
        </div> */}

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <Button
              type="submit"
              text="Go To Payment"
              width="100%"
              height="3rem"
            />
          </div>
        </div>
      </form>
    </>
  );
}
