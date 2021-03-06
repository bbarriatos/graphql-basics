const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.commentposts.filter((post) => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@email.com',
    };
  },
  post() {
    return {
      id: '092',
      title: 'GraphQL 101',
      body: '',
      published: false,
    };
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
};

export { Query as default };
