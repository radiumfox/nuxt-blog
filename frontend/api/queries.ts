
export const GET_POSTS = gql`
  query Query {
    posts {
      id
      date
      content
      images
    }
  }
`;

export const GET_POST = gql`
  query Query {
    post(id: $postId) {
        id
        date
        content
        images
    }
  }
`;

export const CREATE_POST = gql`
  mutation Create($date: String, $content: String, $images: String) {
    create(date: $date, content: $content, images: $images) {
      images
      id
      date
      content
    }
  }
`;

export const UPDATE_POST = gql`
  mutation Mutation($images: String, $content: String, $date: String, $updateId: ID) {
    update(images: $images, content: $content, date: $date, id: $updateId) {
      images
      id
      date
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation Delete($deleteId: ID) {
    delete(id: $deleteId) {
      id
    }
  }
`;