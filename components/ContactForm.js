import { Component, useState } from "react";
import { sendContactMail } from "../helpers/mail-api";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { motion, AnimateSharedLayout } from "framer-motion";
import { i18n, Link, withTranslation } from "../i18n";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const MsgBox = tw.div`p-6 mb-6 rounded-lg`;
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const ContactForm = ({ t }) => {
  const [data, setData] = useState({
    name: "",
    mail: "",
    formContent: "",
    errorMsg: "Error occured",
    responseMsg: "Message has been successfully sent",
  });
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);

  const submitContactForm = async (e) => {
    e.preventDefault();
    const recipientMail = "kontakt@tanie-logo.pl";

    const res = await sendContactMail(
      recipientMail,
      data.name,
      data.mail,
      data.formContent
    );
    if (res.status < 300) {
      console.log("all good / sent");
      setResponse(true);
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Content>
        <AnimateSharedLayout type='crossfade'>
          {error || response ? (
            <motion.div layout initial={{ y: 80 }} animate={{ y: 0 }}>
              <MsgBox
                className={`${error && "bg-red-400 text-red-600"} ${
                  response && "bg-green-400 text-green-700"
                }`}
              >
                {error && data.errorMsg}
                {response && data.responseMsg}
              </MsgBox>
            </motion.div>
          ) : null}
          <motion.div layout animate>
            <FormContainer>
              <div tw='mx-auto max-w-4xl'>
                <h2> {t("title")}</h2>

                <form action='#'>
                  <TwoColumn>
                    <Column>
                      <InputContainer>
                        <Label htmlFor='name-input'>{t("nameLabel")}</Label>
                        <Input
                          id='name-input'
                          type='text'
                          placeholder={t("namePlaceholder")}
                          value={data.name}
                          name='fname'
                          onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                          }
                        />
                      </InputContainer>
                      <InputContainer>
                        <Label htmlFor='email-input'>{t("emailLabel")}</Label>
                        <Input
                          id='email-input'
                          type='email'
                          placeholder={t("emailPlaceholder")}
                          value={data.mail}
                          name='email'
                          placeholder={t("emailPlaceholder")}
                          onChange={(e) =>
                            setData({ ...data, mail: e.target.value })
                          }
                        />
                      </InputContainer>
                    </Column>
                    <Column>
                      <InputContainer tw='flex-1'>
                        <Label htmlFor='message-input'>{t("msgLabel")}</Label>
                        <TextArea
                          id='message-input'
                          name='text'
                          placeholder='Message'
                          value={data.formContent}
                          placeholder={t("msgPlaceholder")}
                          onChange={(e) =>
                            setData({ ...data, formContent: e.target.value })
                          }
                        />
                      </InputContainer>
                    </Column>
                  </TwoColumn>

                  <SubmitButton
                    type='submit'
                    value='Submit'
                    onClick={submitContactForm}
                  >
                    Submit
                  </SubmitButton>
                </form>
              </div>
            </FormContainer>
          </motion.div>
        </AnimateSharedLayout>
      </Content>
    </Container>
  );
};

export default withTranslation("contactForm")(ContactForm);
