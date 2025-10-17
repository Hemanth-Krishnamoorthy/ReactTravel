import "./BookingPage.css";

function BookingPage() {
  function handleSubmit(event) {
    event.preventDefault();

    // Get form field values
    var name = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var travelers = document.getElementById("travelers").value;
    var date = document.getElementById("date").value;

    // Simple validation
    if (name === "" || contact === "" || travelers === "" || date === "") {
      alert("Please fill all fields before submitting!");
    } else {
      alert("Booking submitted successfully!");
    }
  }

  return (
    <>
      <div className="booking-container">
        <h2>Travel Booking Form</h2>
        <form >
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" id="fullname" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Contact Number:</label>
            <input type="number" id="contact" placeholder="Enter your contact number" />
          </div>

          <div className="form-group">
            <label>Number of Travelers:</label>
            <input type="number" id="travelers" placeholder="Enter number of travelers" />
          </div>

          <div className="form-group">
            <label>Travel Date:</label>
            <input type="date" id="date" />
          </div>

          <button type="submit" className="book-btn" onClick={handleSubmit}>Submit Booking</button>
        </form>
      </div>
    </>
  );
}

export default BookingPage;
