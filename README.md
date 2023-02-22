# Walk through of the Project

This is a fully responsive and functional Landing Page which deals with the free seminar for the education training purposes.

## Code Splitting

Code Splitting is done at Routes

## React Component Type

Functional Component with various hooks like useState(), useEffect(), useRef() and useContext() along with some custom hooks such as useIntersectionObserver().

## State Management

Used ContextAPI for State Management.

## Styling

Vanilla CSS

## Best Practices

1. Files are well-organised.

2. Components, Context, images, styles are in separate folders making app structure clear to understand and scalable in nature.

3. Beautifully applied Code Splitting which boosts the performance of the app and shows the minified content to the users initially and only loads other contents if the user is interested to have a glance at them.

4. Dynamically rendered all the images, which implies images are optimised by webpack.

5. Used .env.development and .env.production files for the Code Reusablility and environment determination.

6. Handle the 404 error when refreshing page on gh-pages
