import React from "react";
import { useForm } from "react-hook-form";
import PageTitle from "../../components/common/PageTitle";

export default function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions here with the form data
  };

  return (
    <>
      <PageTitle title={"Contact Us"} />
      <div className="contact-form container">
        <div className="address">
          <h1>Phone or Email</h1>
          <div className="phoneNo">
            <span>Mobile:</span>
            <span>7007561331</span>
          </div>
          <div className="emailAdd">
            <span>Email:</span>
            <span>inof@gmail.com</span>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-name">
            <div className="first-name">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter Text"
                {...register("first-name", {
                  required: "First Name is required",
                })}
              />
              {errors["first-name"] && (
                <p className="error-msg">{errors["first-name"].message}</p>
              )}
            </div>

            <div className="last-name">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter Text"
                {...register("last-name", {
                  required: "Last Name is required",
                })}
              />
              {errors["last-name"] && (
                <p className="error-msg">{errors["last-name"].message}</p>
              )}
            </div>
          </div>

          <div className="contact-details">
            <div className="phone">
              <label htmlFor="phone">Phone No</label>
              <input
                type="text"
                placeholder="Enter Text"
                {...register("phone", {
                  required: "Phone No is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="error-msg">{errors.phone.message}</p>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <select
              name="occasion"
              className="occassion"
              {...register("occasion", { required: true })}
            >
              <option value="">Please Select</option>
              <option value="Corporate">Corporate</option>
              <option value="Special Event">Special Event</option>
              <option value="Wedding Event">Wedding Event</option>
              <option value="Funeral Event">Funeral Event</option>
              <option value="Other">Other</option>
            </select>
            {errors.occasion && (
              <p className="error-msg">Please select an occasion</p>
            )}
          </div>

          <div className="msg-area">
            <label for="w3review">Enter Message: (optional)</label>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Enter message"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="btn btn-lg text">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
