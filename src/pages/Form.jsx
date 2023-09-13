import React from "react";
import styled from "styled-components";

const BookingSection = styled.section`
  background-color:#f9fbfc;
  padding: 70px 0;
`;

const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BookingTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #101041;
  margin-bottom: 10px;
`;

const BookingDescription = styled.p`
  font-size: 16px;
  color: #949293;
  margin-bottom: 30px;
`;

const BookingFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BookingForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
`;

const InputField = styled.input`
  border-radius: 50px;
  border: 0;
  background:  #ffffff;
  padding: 12px 20px;
  margin-bottom: 16px;
  width: 100%;
`;

const SelectField = styled.select`
  border-radius: 50px;
  border: 0;
  padding: 12px 20px;
  background:  #ffffff;
  background-image: url("img/ic_ad.png");
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
`;

const TextAreaField = styled.textarea`
  border-radius: 16px;
  border: 0;
  background:  #ffffff;
  padding: 12px 20px;
  margin-bottom: 30px;
  width: 100%;
`;

const SubmitButton = styled.button`
  border-radius: 50px;
  border: 0;
  background: #3a38ff;
  color: #ffffff;
  padding: 12px 20px;
  font-size: 16px;
  font-weight:600;
  width: 100%;

  &:hover {
    background:#101041;
  }
`;

const BackgroundImage = styled.img`
  max-width: 100%;
  height: auto;
  padding-right:40px;
`;

const Formulir = () => {
  return (
    <BookingSection>
      <BookingContainer className="container">
        <BookingTitle>Book a Demo</BookingTitle>
        <BookingDescription>
          We will show you how our product is amazing.
        </BookingDescription>
        <BookingFormContainer>
        <BackgroundImage
        src="./images/bawah.svg"
        alt="Background Image"
        className="img-fluid"
      />
          <BookingForm action="">
            <InputField
              placeholder="Complete Name"
              type="text"
              name="name"
              id=""
            />
            <InputField
              placeholder="Email Address"
              type="email"
              name="email_address"
              id=""
            />
            <SelectField aria-label="Default select example" style={{marginBottom:'30px'}}>
              <option selected>Select your purpose</option>
              <option value="payment">Payment Integration</option>
              <option value="dana">Dana</option>
              <option value="shoppepay">Shoppe pay</option>
            </SelectField>
            <TextAreaField
              placeholder="Write your message"
              name=""
              id=""
              cols="30"
              rows="5"
            ></TextAreaField>
            <SubmitButton>Get Started</SubmitButton>
          </BookingForm>
        </BookingFormContainer>
      </BookingContainer>
    </BookingSection>
  );
};

export default Formulir;
