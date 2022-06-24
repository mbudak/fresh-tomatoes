# Plan

## Stack

Wep App:

- Server: Node, Express,
- Client: Handlebars, JavaScript, HTML, CSS, Bootstrap
- Database: MongoDB (non-relational) (relational postres is optional)
- API: Restful, CRUD

# User Stories

Reviews user stories

- Users can view all reviews (index)
- Users can create a review (new/create)
- Users can view one review (show)
- Users can delete a review (destroy)
- Users can edit a review (edit/update)

When reviews are ready

Comments user stories

- Users can comment on reviews (commnets#create)
- Users can delete comments (comment#destroy)

## Routes/Resources

A Resource is an abstract object that we use to organize data, code, and the features of our app. For example, a User resource we can keep track of logging in and out, email and passwords, and people's birthdays. In a blog, we might have an Article or Post resource where we would track the titles and bodies of articles and keep track of the code for publishing and sharing them.
Resources can also be related to each other. For example, articles may have comments; a building resource might have floors, and the floors may have units; a user might have friends (like in Facebook).

Review Resource Table (we will use it frequently throughout our development)

```js
URL                     HTTP        ACTION      DESC
/reviews                GET         index       Show all reviews
/reviews/new            GET         new         See a new review form
/reviews                POST        create      Create a new review
/reviews/:id            GET         show        See single review
/reviews/:id/edit       GET         edit        See an edit review form
/reviews/:id            PATCH/PUT   update      Update a review
/reviews/:id            DELETE      destroy     Delete a review
```

| URL      | HTTP | ACTION | DESC |
| ----------- | ----------- | ----------- | ----------- |
| /reviews            |    GET        | index     |  Show all reviews           |
| /reviews/new        |    GET        | new       |  See a new review form      |
| /reviews            |    POST       | create    |  Create a new review        |
| /reviews/:id        |    GET        | show      |  See single review          |
| /reviews/:id/edit   |    GET        | edit      |  See an edit review form    |
| /reviews/:id        |    PATCH/PUT  | update    |  Update a review            |
| /reviews/:id        |    DELETE     | destroy   |  Delete a review            |