users / authors
5f5c8c8f367d1f0b48ce4314
5f5c94724f0cf54298038250
5f5d05b2200d4642a4f825b4

POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea A",
    "description":".....",
    "author":"5f5c8c8f367d1f0b48ce4314"
}
devuelve
{
    "upvotes": [],
    "downvotes": [],
    "comments": [],
    "_id": "5f5e334d040b600648161ce0",
    "idea": "idea A",
    "description": ".....",
    "author": {
        "_id": "5f5c8c8f367d1f0b48ce4314",
        "name": "Marluan",
        "username": "Marluan",
        "__v": 0
    },
    "__v": 0
}

GET
http://localhost:5000/v1/api/idea?pageSize=2&pageNum=1
[
    {
        "upvotes": [],
        "downvotes": [],
        "comments": [],
        "_id": "5f5e334d040b600648161ce0",
        "idea": "idea A",
        "description": ".....",
        "author": {
            "_id": "5f5c8c8f367d1f0b48ce4314",
            "name": "Marluan",
            "username": "Marluan",
            "__v": 0
        },
        "__v": 0
    }
]


POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea B",
    "description":".....",
    "author":"5f5c94724f0cf54298038250"
}

POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea C",
    "description":".....",
    "author":"5f5d05b2200d4642a4f825b4"
}

POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea D",
    "description":".....",
    "author":"5f5c8c8f367d1f0b48ce4314"
}

POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea E",
    "description":".....",
    "author":"5f5c94724f0cf54298038250"
}

POST
http://localhost:5000/v1/api/idea
BODY: raw JSON
{
    "idea":"idea F",
    "description":".....",
    "author":"5f5d05b2200d4642a4f825b4"
}

GET
http://localhost:5000/v1/api/idea?pageSize=5&pageNum=2
[
    {
        "upvotes": [],
        "downvotes": [],
        "comments": [],
        "_id": "5f5e604610aa133ab8143f84",
        "idea": "idea F",
        "description": ".....",
        "author": {
            "_id": "5f5d05b2200d4642a4f825b4",
            "name": "user name 3",
            "username": "user3",
            "__v": 0
        },
        "__v": 0
    }
]