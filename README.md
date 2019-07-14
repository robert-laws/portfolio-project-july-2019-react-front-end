# Portfolio Project - React+Redux - Summer Reading

## Description

This portfolio project is for website for a summer reading program. The application allows users to view a list of existing books from the database and add any number of them into their reading list. Users are able to view details about each book. Users can use a web form to add new books to the database of books, and then add those to their reading list too. Users can also remove books from their reading list and remove books from the database entirely. Finally, the reading list displays some basic statistics about the user’s list.

Additional features include the incorporation of the [Semantic-UI](https://semantic-ui.com/) front-end CSS library.

## Installation

To install the application, follow these steps:

1. Fork and/or clone the [repository](https://github.com/robert-laws/portfolio-project-july-2019-react-front-end.git) for the app and the [respistory for the back-end api](https://github.com/robert-laws/portfolio-project-july-2019-rails-back-end-api)

1. From the root of the front-end application folder, run ``npm install``

1. From the root of the back-end application folder, run ``bundle install``

1. Migrate the database using the command ``bundle exec rake db:migrate``

1. Seed the database with sample data using the command ``bundle exec rake db:seed``

1. Run the server for the rails api on port 3001 using the command ``rails s -p 3001``

1. Run ``npm start`` in the front-end app to startup the local server and navigate to localhost:3000 to view the running application

## Contributing

Please refer to each project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
1. Clone the project to your own machine
1. Commit changes to your own branch
1. Push your work back up to your fork
1. Submit a Pull request so that your changes can be reviewed
