import Section from './Section'
import { User } from 'lucide-react';
const AboutMe = () => {
  return (
      <div>
        <Section icon={<User/>} sectionTitle="About Me">
        <p>
        I'm a passionate full stack developer with 5 years of experience in
        building web applications. I love creating efficient, scalable, and
        user-friendly solutions to complex problems.
        </p>
        </Section>
      </div>
  );
};
export default AboutMe;