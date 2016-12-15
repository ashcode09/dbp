DB Proposed Homepage Design
===========================

Introduction
------------

I have been given a design from our UX team to develop, which was initially done using HTML5, CSS3 (SASS), and
vanilla javascript, with a colleague later including Bootstrap and JQuery libraries to help with the design of
the 'anwendungen' page. A mobile design was also included, so both page is therefore responsive.

For both desktop and mobile views, the footer is an image, as the HTML for the footer was meant to be provided by DB
but wasn't in the end.

Screenshots
-----------

![Image](https://bytebucket.org/ashleighmaundcode/db-homepage/raw/869d46d6ed9a7428f5206e8add37fa78ce5e8dca/src/screenshots/db-home-view.PNG)

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

It will say where it's available, just go to that in the browser.