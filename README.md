DB Proposed Homepage Design
===========================

Introduction
------------

I have been given a design from our UX team to develop, which was initially done using HTML5, CSS3 (SASS), and
vanilla javascript, with a colleague later including Bootstrap and JQuery libraries to help with the design of
the 'anwendungen' page. A mobile design was also included, so both views are therefore responsive.

For both desktop and mobile views, the footer is an image, as the HTML for the footer was meant to be provided by DB
but wasn't in the end. Some of the 'videos' (on the 'anwendungen' page) are just images as the videos were not available at the time of development.

Set Up Locally
--------------

In the terminal, navigate to the directory you want to save this project to.

Clone the project:

```
$ git clone https://ashleighmaund@bitbucket.org/ashleighmaundcode/db-homepage.git
```

**Currently the most up-to-date branch is develop, so:**

```
$ git fetch
$ git checkout develop
```

Install the dependencies:

```
$ npm install
```

Build the .js and .css files:

```
$ grunt
```

To run a local server and view the app:

```
$ node_modules/http-server/bin/http-server
```

It will say where it's available, so just direct to it in the browser and you will see the home page view.

Home Page
---------

![Image](https://bytebucket.org/ashleighmaundcode/db-homepage/raw/869d46d6ed9a7428f5206e8add37fa78ce5e8dca/src/screenshots/db-home-view.PNG)

Anwendungen Page
----------------

![Image](https://bytebucket.org/ashleighmaundcode/db-homepage/raw/9a9715319f0dd1f4afe4341031153c2881b6b558/src/screenshots/db-anwendungen-view.png)