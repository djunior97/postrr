# Posterr

## Set up the project locally

### `yarn`
Install the project dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Planning

## Questions for the project Manager

### Will the user be able to write replies using GIF's or images?

### Is there a limit of replies a post can have?

## How I would solve this

We would need to have a separate API endpoint for this posts and their replies and 
a new database relation to associate posts with its replies. I would 
create kind of a 'navbar' inside the user's profile to toggle between seeing all 
posts and only posts with replies. I would also need to create a different design 
for the posts with replies feed and make something that highlights the main post
but also connects it with its replies. 

# Critique

## Improvements

If I had more time I would certainly improve the UI design. For this assessment
I focused on the functionality of the app. For this reason I decided to use
Material UI's components to be able to focus more on the functionality but still
have a decent UI and mobile handling. I can't think of much to improve for this
version of the app since it's kind of a MVP. Also would be nice to turn the app
into a PWA and have notifications whenever a user repost / quotes your posts and 
add a functionality to be able to send another user a post you like and wants 
him to see. Hability to like posts would also be nice and maybe a feed of liked posts would
be a goot fit too.

## Scaling
As the project and its users grow, would be nice to have a performance monitoring
platform (E.g. Datadog, Dynatrace, New Relic One) and program alerts whenever 
we have an error or performance drop. To store the code repository I would like 
to use GitLab because I think it fits better for a closed and big project and 
also has CI/CD integrated, which is good. It would need to have a firm Git workflow
assuming we would have a bigger team of developers to have steady releases and 
to avoid a work from one developer conflicting with other ones. Also, unit, integration
and end to end tests would be a must to ensure the code quality.


