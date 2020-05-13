import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createRental } from "../../actions/rentalActions";

const rentalOptions = ["apartment", "condo", "house"];

const RentalForm = ({ createRental }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ title, city, street, category, image, numOfRooms, description, dailyPrice, shared }) => {
    numOfRooms = parseInt(numOfRooms);
    dailyPrice = parseFloat(dailyPrice);

    const rental = {
      title,
      city,
      street,
      category,
      image,
      numOfRooms,
      description,
      dailyPrice,
      shared
    };

    createRental(rental);
  };

  return (
    <div className="column is-4 ">
      <section className="section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" ref={register({ required: true })} />
              {errors.title && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.title.type === "required" && "Title is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input className="input" type="text" name="city" ref={register({ required: true })} />
              {errors.city && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.city.type === "required" && "City is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Street</label>
            <div className="control">
              <input className="input" type="text" name="street" ref={register({ required: true })} />
              {errors.street && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.street.type === "required" && "Street is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select ref={register} name="category" id="category">
                  {rentalOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input className="input" type="text" name="image" ref={register({ required: true })} />
              {errors.image && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.image.type === "required" && "Image is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Number of Rooms</label>
            <div className="control">
              <input className="input" type="number" name="numOfRooms" ref={register({ required: true })} />
              {errors.numOfRooms && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.numOfRooms.type === "required" && "Number of rooms is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" type="text" name="description" ref={register({ required: true })}></textarea>
              {errors.description && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.description.type === "required" && "Description is required."}
                </span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Price per night</label>
            <div className="control">
              <input className="input" type="number" name="dailyPrice" ref={register({ required: true })} />
              {errors.dailyPrice && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.dailyPrice.type === "required" && "Price is required."}
                </span>
              )}
            </div>
          </div>

          <div className="checkbox">
            <label className="label">Shared</label>
            <input ref={register} name="shared" type="checkbox" className="checkbox" id="shared" />
          </div>

          <div className="has-text-centered">
            <button className="button is-vcentered is-primary">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

RentalForm.propTypes = {
  createRental: PropTypes.func.isRequired
};

export default connect(null, { createRental })(RentalForm);
