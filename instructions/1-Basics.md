# React Tutorial - Part 1: Basics

## Prerequisites

Install NodeJS on your machine: https://nodejs.org/en/

## Application description

The main purpose the application should serve is to provide the developer's dashboard. The dashboard should consists display
basic services connected with the application that the developer is responsible for. If we consider sample application like mft
we can think of multiple services connected with them that facilitates both development and delivery processes including
Stash Repo, Jenkins, Kibana, Grafana, AWS containers, Wiki spaces etc. Dashboard will present those services divided per 
application.

## Main application page

Main application page will consist of two parts:

- Header - that should provide below-mentioned functionalities:
  
  - Brand Logo - redirects to the main page
  - Search Input - that will filter applications and services
  - User Description
  - Logout Button
  
- Content - displays all applications registered for logged-in user

## Start new React project

The best idea to start new React project is to use **create-react-app** that automatically generates project's structure with all required packages. In order to do so type below-mentioned commands into the Terminal window:

```$
npx create-react-app <react_app_name>
```

Having the project structure created validate it by running sample application:

```$
cd <react_app_name>
npm start
```

## Instructions

1. Create Application class with following properties (application/model.js):
    - name: String
    - description: String
    - deploymentUrl: String
    - tags: String[]
    - stages: Stage[]
2. Create Stage class with following properties (stages/model.js):
    - name: String (this property will have predefined values, check point 3)
    - description: String
    - services: Service[]
3. Create enum-like class in JS that will represent following stages (stages/type.js):
    - LOCAL/BRANCH
    - TEST
    - DEV
    - PROD
4. Create Service class with following properties (services/model.js):
    - name: String
    - type: String (predefined value, check point 5)
    - url: String
    - tags: String[]
5. Create enum-like class with following constants (services/type.js):
    - STASH
    - WIKI
    - JENKINS
    - AWS
    - KIBANA
    - GRAFANA
6. Create Header component (header/component.jsx):
    - Start with the functional component
    - Import React (remember that JSX is compiled to React.createElement)
    - Header component should be a simple div with 'Header' string as a child
7. Create Dashboard component (dashboard/component.jsx):
    - Start with the functional component
    - Import react
    - Content: div with 'Dashboard' string as a child
8. Create DashboardPage component (dashboard/page.jsx)
    - Start with the functional component
    - Import react
    - Display Header and Dashboard components within a div
9. Create common layout component - LayoutWithHeader (common/layouts/withHeader.jsx):
    - Functional component
    - Renders:
        - Header
        - All children that are passed to the component
    - Refactor DashboardPage component which should use LayoutWithHeader
10. Install Material-UI npm package:

    ```bash
    npm install --save @material-ui/core
    npm install --save @material-ui/icons
    ```

11. Add links to fonts and icons in the public/index.html:

    ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    ```

12. Refactor Header component:
    - Remove everything from the render()
    - Add **AppBar** component with static position as the property
    - Pass following AppBar children:
        - Typography:
            - variant - title
            - color - inherit
            - style - { flex: 1 }
        - Two IconButton(s) with inherited color:
            - First button should be passed AccountCircle as the single child
            - Second button should be passed ExitToApp as the single child

## Additional Task 1: Immutability

1. Install 'immutable' npm package
2. Check how Record works: https://facebook.github.io/immutable-js/docs/#/Record/Record
3. Change all models to Records
4. Change all array properties to Lists: https://facebook.github.io/immutable-js/docs/#/List


