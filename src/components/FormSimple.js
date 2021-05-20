import React from 'react'

import './Form.css'

export default ({
  name = 'Contact',
  subject = 'Contact Form Submission', // optional subject of the notification email
  action = '/submit/'
}) => (
  <form
    className="Form"
    name={name}
    action={action}
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="_gotcha"
  >
    <div className="Form--Group">
      <label className="Form--Label">
        <input
          className="Form--Input Form--InputText"
          type="text"
          placeholder="Firstname"
          name="firstname"
          required
        />
        <span>Firstname</span>
      </label>
      <label className="Form--Label">
        <input
          className="Form--Input Form--InputText"
          type="text"
          placeholder="Lastname"
          name="lastname"
          required
        />
        <span>Lastname</span>
      </label>
    </div>
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <span>Email</span>
    </label>

    <label className="Form--Label has-arrow">
      <select
        className="Form--Input Form--Select"
        name="type"
        defaultValue="Type of Enquiry"
        required
      >
        <option disabled hidden>
          Type of Request
        </option>
        <option>Looking to buy</option>
        <option>Looking to restore</option>
        <option>Looking to sell</option>
        <option>Other</option>
      </select>
    </label>
    <label className="Form--Label">
      <textarea
        className="Form--Input Form--Textarea"
        placeholder="Message"
        name="message"
        rows="10"
        required
      />
    </label>
    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="form-name" value={name} />
    <input className="Button Form--SubmitButton" type="submit" value="Submit" />
  </form>
)
