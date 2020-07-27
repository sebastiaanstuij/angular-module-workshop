# Angular Module Workshop
This workshop is meant to make you more familiar with Angular Modules and best practices. 
We will not work with a boring 'Todo' list app, but with a more relevant topic: we'll be making a Covid19 statistics 'Dashboarding' app making use of https://covid19api.com/.

For more info on Angular Modules see the PDF slides in this repo.

*For each part of the workshop you can check out a separate branch with a corresponding starting point, or you can continue with your own branch.*
*The master branch contains the finished app*
*General advice: make use of the Angular CLI https://angular.io/cli/generate*

This workshop consists of the following exercises:
1. get the app to run (fix X module/DI related problems)
2. improve the structure of the app (tip: https://angular.io/guide/styleguide#overall-structural-guidelines):
    * refactor the shared module (which modules will be shared accross different feature modules, also see assignment 3) and place it in it's own directory with other relevant files
    * add a core directory and module (for now) which houses the 'core' services
    * add a layout module which houses the header and footer
    * refactor the appmodule so that it hardly contains any modules (directly, besides what's needed), just an appComponent and a bootstrap property
3. add a detail view component & module in which we can display data for an individual country (the service and routing has already been created)
4. optimize the app:
    * make the app 'tree-shakeable' (tip: see what happens to the bundle size before and after this step (use 'ng build --prod=true'))
    * make the detail view 'lazy-loadable' (tip: see https://angular.io/guide/lazy-loading-ngmodules and use https://augury.rangle.io/ to inspect the app and it's routes for example)
    * After making the app 'lazy-loadable' check your browsers developer tools network tab to see what happens when loading the app and when visiting a lazy route. Also have a look at when the country-data service is loaded.
    * Finally enable the Ivy renderer for some final optimization (https://angular.io/guide/ivy)
5. bonus:
    * create a better header/(sticky)footer and better navigation (I had no time for this :P)
    * create a graph on the detail page visualizing the data using something like https://www.chartjs.org/ or (more complex) https://d3js.org/
