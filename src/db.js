const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27,
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
  },
];

const posts = [
  {
    id: '1',
    title: 'Andrew',
    body: 'andrew@example.com',
    published: true,
    author: '1',
  },
  {
    id: '2',
    title: 'Sarah',
    body: 'sarah@example.com',
    published: true,
    author: '2',
  },
  {
    id: '3',
    title: 'Mike',
    body: 'mike@example.com',
    published: true,
    author: '2',
  },
];

const comments = [
  {
    id: '1',
    text: 'lorem',
    author: '1',
    post: '2',
  },
  {
    id: '2',
    text: 'lorem ipsum',
    author: '1',
    post: '2',
  },
  {
    id: '3',
    text: 'lorem ipsum sit amet dolor',
    author: '1',
    post: '1',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
