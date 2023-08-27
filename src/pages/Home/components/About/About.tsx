import { styles } from './styles';
const About = () => {
  return (
    <styles.Container>
      <styles.rightContainer>
        <styles.LLaboutImage
          src="https://elbasoft.com/manufacturing/LJN/welcome-image.jpg"
          alt="welcome Image"
        />
      </styles.rightContainer>
      <styles.leftContainer>
        <styles.aboutContainer>
          <styles.secondaryTitle variant="overline">
            A FAMILY OWNED BUSINESS
          </styles.secondaryTitle>
          <styles.primaryTitle variant="h5">
            We love sharing our passion for jewelry and invite you to become
            part of our extended family
          </styles.primaryTitle>
          <styles.descriptionContainer>
            <styles.description variant="body1">
              We’re so happy you’re here! Our family has been part of the
              jewelry community for more than 60 years.
            </styles.description>
            <styles.description variant="body1">
              Now, we’re excited to bring the same passion we hold for jewelry
              to you! Tune into our LIVES to learn about gemstones, find the
              best prices in the industry, and join a fun, jewelry-loving
              community!
            </styles.description>
            <styles.welcomeMessage variant="body1">
              Welcome to the{' '}
              <styles.lgnText>Luxury Jewelry Network.</styles.lgnText>
            </styles.welcomeMessage>
          </styles.descriptionContainer>
        </styles.aboutContainer>
      </styles.leftContainer>
    </styles.Container>
  );
};

export default About;
