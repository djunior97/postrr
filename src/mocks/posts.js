/**
 * id
 * content
 * isrepost
 * user_id
 * origin_user_id
 * quotepostcontent
 */

export const posts = [
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget',
    isRepost: false,
    user_id: 1,
    origin_user_id: null,
    quotePostContent: null,
  },
  {
    id: 2,
    content: null,
    isRepost: true,
    user_id: 1,
    origin_user_id: 3,
    origin_post_id: 4,
    quotePostContent: null,
  },
  {
    id: 3,
    content: 'Such a nice guy!',
    isRepost: false,
    isQuotePost: true,
    user_id: 1,
    origin_user_id: 3,
    origin_post_id: 5,
  },
  {
    id: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget',
    isRepost: false,
    user_id: 3,
  },
  {
    id: 5,
    content: 'Hello this is Jim Halpert',
    isRepost: false,
    user_id: 3,
  },
]
