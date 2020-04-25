import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createRental } from "../../actions/rentalActions";

const RentalForm = ({ createRental }) => {
  const [rentalTitle, setRentalTitle] = useState("");
  const [rentalCity, setRentalCity] = useState("");
  const [rentalCategory, setRentalCategory] = useState("");
  const [rentalImage, setRentalImage] = useState("");
  const [rentalNumberOfRooms, setRentalNumberOfRooms] = useState(0);
  const [rentalDescription, setRentalDescription] = useState("");
  // const [rentalShared, setRentalShared] = useState(true);
  const [rentalPrice, setRentalPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (rentalTitle === "" || rentalCity === "") {
      console.log("empty");
    } else {
      const newRental = {
        title: rentalTitle,
        city: rentalCity,
        category: rentalCategory,
        image: rentalImage,
        numOfRooms: rentalNumberOfRooms,
        // shared: rentalShared,
        description: rentalDescription,
        dailyPrice: rentalPrice,
      };
      createRental(newRental);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title input"
            onChange={(e) => setRentalTitle(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">City</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="City input"
            onChange={(e) => setRentalCity(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <div className="select">
            <select
              name="rentalCategory"
              value={rentalCategory}
              className="browser-default"
              onChange={(e) => setRentalCategory(e.target.value)}
              required
            >
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
          <input
            className="input"
            type="url"
            placeholder="Image URL"
            onChange={(e) => setRentalImage(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Number of rooms</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Number of rooms"
            onChange={(e) => setRentalNumberOfRooms(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Description"
            onChange={(e) => setRentalDescription(e.target.value)}
            required
          ></textarea>
        </div>
      </div>

      {/* <div className="field">
        <label className="label">Shared</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="yes" /> Yes
          </label>
          <label className="radio">
            <input type="radio" name="no" /> No
          </label>
        </div>
      </div> */}

      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Price"
            onChange={(e) => setRentalPrice(e.target.value)}
            required
          />
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
  );
};

RentalForm.propTypes = {
  addRental: PropTypes.func.isRequired,
};

export default connect(null, { createRental })(RentalForm);
