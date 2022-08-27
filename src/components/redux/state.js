let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi how are you", likesCount: 12 },
      { id: 2, message: "Its my first post", likesCount: 11 },
      { id: 3, message: "Its my second post", likesCount: 11 },
      { id: 4, message: "Its my third post", likesCount: 11 },
    ],
  },
  dialogsPage: {
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your" },
      { id: 3, message: "Yo" },
    ],
    dialogsData: [
      { id: 1, name: "Serik" },
      { id: 2, name: "Zhanel" },
      { id: 3, name: "Aslan" },
      { id: 4, name: "Nigara" },
    ],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
};
export default state;
