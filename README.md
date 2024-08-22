## Project setup

```bash
$ npm install
```

## Elasticsearch setup

- make sure you have elasticsearch installed v6.8.0 in your system
- start the elasticsearch server at localhost:9200
- load Employee data into elasticsearch, run the following command

```bash
$ curl -XPUT 'http://127.0.0.1:9200/companydatabase?pretty' \
-H 'Content-Type: application/json' \
-d '{
    "mappings" : {
        "employees" : {
            "properties" : {
                "FirstName" : { "type" : "text" },
                "LastName" : { "type" : "text" },
                "Designation" : { "type" : "keyword" },
                "Salary" : { "type" : "integer" },
                "DateOfJoining" : { "type" : "date", "format": "yyyy-MM-dd" },
                "Address" : { "type" : "text" },
                "Gender" : { "type" : "keyword" },
                "Age" : { "type" : "integer" },
                "MaritalStatus" : { "type" : "keyword" },
                "Interests" : { "type" : "keyword" }
            }
        }
    }
}'

curl -XPOST "http://127.0.0.1:9200/companydatabase/_bulk" --header "Content-Type: applicatio
n/json" --data-binary "@C:\\path\to\Employees50K.json

```

- note that we made some changes to the index mapping
- we change the type of Designation, Gender, Interests, and MaritalStatus to keyword to avoid setting fielddata=true on these fields

## Compile and run the project

```bash
$ npm run start
```

## API Documentation

- The postman collection can be found in the `postman` folder
