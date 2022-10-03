# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


## How to test it

Make an API call to this endpoint: '/api/:date?' replacing date with a date format that can be successfully parsed by new Date(date_string) e.g. "2015-12-25" or "1451001600000" the response would be Json object with keys unix and utc and the date in unixStamp format and UTC date format, so something like this:

```
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

if an empty date parameter is given the response would be current date and time, e.g. :

```
{
  "unix": 1664768128726,
  "utc": "Mon, 03 Oct 2022 03:35:28 GMT"
}
```

if "date" is not a valid date format, this would be the result:

```
{
  "error": "Invalid Date"
}
```

