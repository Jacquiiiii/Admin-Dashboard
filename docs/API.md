## API

The API logic is organized following the Model-View-Controller (MVC) pattern, with an additional Service layer for better separation of concerns. Each layer has a specific role:

- **Model**: The Model layer represents the data structure of the application. The logic for this layer is found in the DB folder. It interacts directly with the database, performing various operations such as fetching, updating, and deleting data.

- **View**: The View layer is responsible for the presentation logic of the application. It presents the Model's data to the user and also updates when the data changes. In this application the View is considered the pages and components.

- **Controller**: The Controller layer acts as an intermediary between the Model and the View. It processes all incoming HTTP requests, interacts with the Model to fetch or manipulate data, and returns the appropriate HTTP response. The logic for this layer is found in the Controller API files.

- **Service**: The Service layer is an additional layer that handles the business logic of the application. It provides a bridge between the Controller and Model layers. The Service layer is responsible for processing data, applying business rules, and ensuring data consistency. The logic for this layer is found in the Service API files.

This structure helps to keep the codebase organized and maintainable, with each layer having its own distinct responsibilities.