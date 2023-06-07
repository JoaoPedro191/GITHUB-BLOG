import { PostContainer, ContentPost } from "./style";

const Post = () => {
  return (
    <PostContainer>
      <ContentPost>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </ContentPost>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostContainer>
  );
};

export { Post };
