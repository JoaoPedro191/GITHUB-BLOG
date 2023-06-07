import {
  HomeContainer,
  ProfileContainer,
  ProfileInformationContainer,
  Wrapper,
  GridContainer,
} from "./style";
import avatarImg from "../../assets/avatar.svg";
import { InfosWithIcon } from "./components/InfosWithIcon";
import { Publications } from "./components/Publications";
import { Post } from "./components/Post";

const posts = [1, 2, 3, 4, 5, 6];

const Home = () => {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={avatarImg} alt="" />
        <ProfileInformationContainer>
          <span>Cameron Williamson</span>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <Wrapper>
            <InfosWithIcon name="cameronwll" />
            <InfosWithIcon name="Rocketseat" />
            <InfosWithIcon name="32 seguidores" />
          </Wrapper>
        </ProfileInformationContainer>
      </ProfileContainer>
      <Publications />
      <GridContainer>
        {posts.map((post) => (
          <Post />
        ))}
      </GridContainer>
    </HomeContainer>
  );
};

export { Home };
