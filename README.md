# TODO-List
In this project, I will be creating a TODO list with a "minimalistic" approach. I will be incorporating technologies such as HTML, CSS, and Javascript, and webpack. 

Each Javascript file represents each page in the website. I broke it down to many files so that it is easier to read and code, rather than stuffing almost 1000 lines into one file.

I was able to use the localStorage API to save the data entered even when the browser is closed.
The one problem that I encountered while learning about localStorage is that it only accepts strings, so I did some research and used JSON.stringify and JSON.parse to get what I wanted. The retrieved value is an object, (rather than a string) so I just transfer the result object into a valid Database object. (see database.js)