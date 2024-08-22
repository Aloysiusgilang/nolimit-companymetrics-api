# Dataset Elastic

## Introduction (To ensure the smooth execution of the bulk process, I recommend using Elasticsearch version 6.8.0.)
This repository contains instructions and a sample dataset for loading data into your Elasticsearch cluster.

## Instructions

### Step 1: Download cURL
Ensure that you have cURL installed. If you're using Linux, cURL is typically pre-installed.

### Step 2: Download and Extract Data Files
Download the data files provided and extract them to your local machine.

### Step 3: Load Data into Elasticsearch
Run the following commands to create an index with the correct mapping and load the data into Elasticsearch. The process may take some time.

```bash
curl -XPUT 'http://127.0.0.1:9200/companydatabase?pretty' \
-H 'Content-Type: application/json' \
-d '{
    "mappings" : {
        "employees" : {
            "properties" : {
                "FirstName" : { "type" : "text" },
                "LastName" : { "type" : "text" },
                "Designation" : { "type" : "text" },
                "Salary" : { "type" : "integer" },
                "DateOfJoining" : { "type" : "date", "format": "yyyy-MM-dd" },
                "Address" : { "type" : "text" },
                "Gender" : { "type" : "text" },
                "Age" : { "type" : "integer" },
                "MaritalStatus" : { "type" : "text" },
                "Interests" : { "type" : "text" }
            }
        }
    }
}'

curl -XPOST "http://127.0.0.1:9200/companydatabase/_bulk" --header "Content-Type: applicatio
n/json" --data-binary "@C:\\Employees50K.json


### Step 4:Verify Data
Access the URL http://127.0.0.1:9200/companydatabase/_count?pretty=1 to check if the data has been successfully loaded into Elasticsearch.
{
  "count" : 50000,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "failed" : 0
  }
}

###  Strep 5 Sample Data Format
The data is in JSON format and follows this structure:

{
    "FirstName": "JOYE",
    "LastName": "WIATR",
    "Designation": "CEO",
    "Salary": 144000,
    "DateOfJoining":"2009-05-25",
    "Address": "9068 SW. Grove St. Waynesboro, PA 17268",
    "Gender": "Female",
    "Age": 58,
    "MaritalStatus": "Unmarried",
    "Interests": "Renting movies, Scuba Diving, Snowboarding, Butterfly Watching, Dumpster Diving, Badminton, Church/church activities"
}
