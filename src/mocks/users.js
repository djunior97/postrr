export const users = [
  {
    id: 1,
    name: 'Michael Scott',
    username: 'best_boss',
    following: [3, 11, 5, 8, 10],
    followers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    picture:
      'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'World`s Best Boss | Regional Manager @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365), // generate random date in the past year
      ),
    ),
  },
  {
    id: 2,
    name: 'Dwight K. Shrute',
    username: 'best_boss',
    following: [1, 5, 6, 10, 11],
    followers: [4, 6, 7],
    picture:
      'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/dwight.jpeg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Beet Farmer | Assistant Regional Manager @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 3,
    name: 'Jim Halpert',
    username: 'jhalpert',
    following: [1, 11, 8, 4, 2],
    followers: [1, 2, 5, 6, 7, 8],
    picture:
      'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/jim.gif',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Father of two | Happily married',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 4,
    name: 'Toby Flanderson',
    username: 'tobyflanderson',
    following: [1, 2, 3, 5, 6, 7, 8, 9],
    followers: [2, 3, 5, 6, 7],
    picture:
      'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/toby.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Human Resources @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 5,
    name: 'Ryan Howard',
    username: 'howardryan',
    following: [1, 2, 3, 6, 7, 8],
    followers: [1, 2, 3, 4, 7, 8],
    picture:
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2012/June/120627/434210-120627-ent-bjnovak-vmed.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Temp @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 6,
    name: 'Angela Martin',
    username: 'angelamartin',
    following: [1, 9, 8, 5, 2],
    followers: [10, 9, 7, 3, 2, 1],
    picture:
      'https://br.web.img3.acsta.net/r_1920_1080/newsv7/20/08/20/22/43/37203820.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Accounting @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 7,
    name: 'Meredith Palmer',
    username: 'meredith',
    following: [1, 4, 5, 6, 8],
    followers: [5, 4, 3, 2, 1],
    picture:
      'https://pm1.narvii.com/6410/8b11643ddcc8f5b3b21973e35d120ee3b856dd0b_128.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Supplier @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 8,
    name: 'Andy Bernard',
    username: 'thenarddog',
    following: [1, 3, 4, 7, 9, 10, 11],
    followers: [11, 2, 1, 3, 4, 5],
    picture:
      'https://cdn.meutimao.com.br/_upload/torcida-do-corinthians/2021/10/30/andy-bernard_px0300.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Salesman @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 9,
    name: 'Kelly Kapoor',
    username: 'kapoor',
    following: [1, 5, 6, 7, 3, 2],
    followers: [8, 6, 1, 2, 4],
    picture:
      'https://thetempest.co/wp-content/uploads/2020/06/kapoor-featured-image.png',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Customer Service @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 10,
    name: 'Erin Hannon',
    username: 'erinhannon',
    following: [1, 8, 2, 9, 10],
    followers: [11, 10, 9, 8, 7],
    picture:
      'https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/6/3/3/3/erin-500x500.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Receptionist @DunderMifflinScranton',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
  {
    id: 11,
    name: 'Pam Beesly Halpert',
    username: 'pbhalpert',
    following: [1, 2, 3, 4, 5, 6],
    followers: [1, 2, 3, 4, 5, 6, 7],
    picture:
      'https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/pam.jpg',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png',
    bio: 'Mother of two | Happily married',
    joinedDate: new Date(
      new Date().setDate(
        new Date().getDate() - Math.floor(Math.random() * 365),
      ),
    ),
  },
]
