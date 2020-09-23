# News App

### Folder Structure

```
|--- public
     |--- favicon.ico
     |--- index.html
     |--- robots.txt
|--- src
     |--- components
          |--- App.js
          |--- Card.js
          |--- Category.js
          |--- Header.js
          |--- NotFound.js
          |--- Pagination.js
          |--- SearchBar.js
     |--- helpers
          |--- constants.js
     |--- styles
          |--- index.css
     |--- index.js
     |--- Routes.js
|--- package.json
|--- README.md
```

### Follow the steps to run on local machine:

1. Clone the repo *https://github.com/saujanyanagpal104/news-app.git*.
2. Navigate to the *code* directory, Install all the dependencies by running **npm install** in the terminal.
3. Run **npm start** in the terminal to launch the app on you local machine.

### Approach

The entry component is the App component which has Header and Category Components. The header component consists of the category tabs which are links created using React Router. Clicking these category tabs in the Header will generate the URL with the category route and using the URL for making articles request for the specific category. 
Each Category has a search bar, pagination, and articles(showing 20 articles in each request)Articles shown in the form of Cards which are clickable(to redirect to the source of the article) and each card has the like and the hide button(storing like and hide states in the local storage to persist it on refresh).

*The api has some issues sometimes it gives 2-3 same articles in the responses which leads to show same key warning.* 


 


> *This app is initialized using create-react-app.
