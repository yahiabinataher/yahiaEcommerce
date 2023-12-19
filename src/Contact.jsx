import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58321.91524250851!2d91.10305045!3d23.991549749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375405bd30bb4f23%3A0x1b3b2e1fce26f623!2sBrahmanbaria%2C%20Bangladesh!5e0!3m2!1sen!2ssa!4v1702719257579!5m2!1sen!2ssa" width="100%" height="400" style={{border:0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form className="contact-inputs" action="" method="POST">
          <input type="text" placeholder="User Name " name="username" required autoComplete="off" />
          <input type="email" placeholder="Email " name="email" required autoComplete="off" />
          <textarea name="message" placeholder="Inter your message" required autoComplete="off" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;
