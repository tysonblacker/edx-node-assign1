# Edx DEV283x Introduction to NodeJS

## Assignment 1 - CSV to JSON converter

### Requirement

To convert a CSV file with headers to JSON

I have interpreted this to mean that we can use local static files that can be loaded synchronously.

### Walkthrough

1) Import all the required libraries
2) Setup constants for filenames
3) Read the csv file and convert to JSON
4) Write json object to file. JSON.stringyfy to conver the object to a string.
5) Manage any issues exceptions
6) If successful write a nice message

### Testing

The sample solution was encrypted differently the programs output. To test I converted both files using dos2unix (I am using a Mac) and then compared them with diff.

### Problems

I got the it to work, but it took a while to findout we needed to run JSON.stringify.

I also wondered if we should be running an async program and pull it down from the link.




