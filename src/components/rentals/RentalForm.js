import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { createRental } from "../../actions/rentalActions";

const RentalForm = ({ createRental }) => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    category: "",
    image: "",
    numberOfRooms: null,
    description: "",
    shared: "",
    price: null,
  });

  const { title, city, category, image, numberOfRooms, description, shared, price } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [toHome, setToHome] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || city === "") {
      console.log("empty");
    } else {
      const newRental = {
        title,
        city,
        category,
        image,
        numOfRooms: parseInt(numberOfRooms),
        description,
        shared,
        dailyPrice: parseInt(price),
      };
      createRental(newRental);
      setToHome(true);
    }
  };

  return (
    <>
      {toHome ? <Redirect to="/" /> : null}
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Title input" name="title" onChange={(e) => onChange(e)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">City</label>
          <div className="control">
            <input className="input" type="text" placeholder="City input" name="city" onChange={(e) => onChange(e)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select name="category" value={category} className="browser-default" onChange={(e) => onChange(e)} required>
                <option value="" disabled>
                  Select category
                </option>
                <option value="apartment">apartment</option>
                <option value="condo">condo</option>
                <option value="house">house</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Image URL</label>
          <div className="control">
            <input className="input" type="url" placeholder="Image URL" name="image" onChange={(e) => onChange(e)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Number of rooms</label>
          <div className="control">
            <input className="input" type="number" placeholder="Number of rooms" name="numberOfRooms" onChange={(e) => onChange(e)} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Description" name="description" onChange={(e) => onChange(e)} required></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Shared</label>
          <div className="control">
            <div className="select">
              <select name="shared" value={shared} className="browser-default" onChange={(e) => onChange(e)} required>
                <option value="" disabled>
                  Select category
                </option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" type="number" placeholder="Price" name="price" onChange={(e) => onChange(e)} required />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

RentalForm.propTypes = {
  createRental: PropTypes.func.isRequired,
};

export default connect(null, { createRental })(RentalForm);
