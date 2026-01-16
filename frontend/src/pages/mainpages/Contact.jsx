import { Button } from "react-bootstrap";

const scrolltoup = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

const Contact = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="mb-5">
        <h3>Retailer Inquiries</h3>
        <p className="fs-5">This form is for retailer inquiries only. For all other customer or shopper support requests, please visit the links below this form.</p>
      </div>
      <div>
        {/* line 1 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="mb-2">
              First Name<span className="text-danger"> *</span>
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter Your First Name"
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="mb-2">
              Last Name<span className="text-danger"> *</span>
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              required
              className="form-control"
            />
          </div>
        </div>
        {/* line 2 */}
        <div className="mb-3">
          <label htmlFor="company" className="mb-2">
            Company<span className="text-danger"> *</span>
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your Company"
            required
            className="form-control"
          />
        </div>
        {/* line 3 */}
        <div className="mb-3">
          <label htmlFor="title" className="mb-2">
            Title<span className="text-danger"> *</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="Your Title"
            required
            className="form-control"
          />
        </div>
        {/* line 4 */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="mb-2">
              Email<span className="text-danger"> *</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="mb-2">
              Phone<span className="text-danger"> *</span>
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Enter Your Phone"
              required
              className="form-control"
            />
          </div>
        </div>
        {/* line 5 */}
        <div className="mb-3">
          <label htmlFor="textarea" className="mb-2">Textarea</label>
          <textarea
            id="textarea"
            placeholder="Additional Comments"
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>
        {/* line 6 */}
        <div className="m-3 text-center">
          <Button variant="outline-success" onClick={scrolltoup}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
