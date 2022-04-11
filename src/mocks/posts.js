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
      'Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information.',
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
      'So I am about to do something very bold at this job that Ive never done before. Try.',
    isRepost: false,
    user_id: 3,
  },
  {
    id: 5,
    content: 'Hello this is Jim Halpert',
    isRepost: false,
    user_id: 3,
  },
  {
    id: 6,
    content: 'Beets!',
    isRepost: false,
    user_id: 2,
  },
  {
    id: 8,
    content: 'Oh, come on!',
    isRepost: false,
    isQuotePost: true,
    user_id: 2,
    origin_user_id: 6,
    origin_post_id: 8,
  },
  {
    id: 7,
    content: 'R.I.P Sprinkles 😭',
    isRepost: false,
    user_id: 6,
  },
  {
    id: 9,
    content: 'I DONT CARE WHAT THEY SAY ABOUT ME. I JUST WANT TO EAT.',
    isRepost: false,
    user_id: 11,
  },
  {
    id: 10,
    content: `${'WHEN YOURE A KID, YOU ASSUME YOUR PARENTS ARE SOUL MATES.'.toLowerCase()} My kid are gonna be right about that`,
    isRepost: false,
    user_id: 11,
  },
  {
    id: 11,
    content: null,
    isRepost: true,
    user_id: 3,
    origin_user_id: 11,
    origin_post_id: 10,
    quotePostContent: null,
  },
  {
    id: 12,
    content: `I love you Ryan 🥰`,
    isRepost: false,
    user_id: 9,
  },
  {
    id: 13,
    content: 'Dunder Mifflin this is Erin! 🤪',
    isRepost: false,
    user_id: 10,
  },
  {
    id: 14,
    content: 'Call me The Nard Dog!',
    isRepost: false,
    user_id: 8,
  },
  {
    id: 15,
    content: 'Hey tuna!',
    isQuotePost: true,
    isRepost: false,
    user_id: 8,
    origin_user_id: 3,
    origin_post_id: 5,
  },
]
