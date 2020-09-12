1.-)
POST
http://localhost:5000/v1/api/auth/signup
body raw JSON
{
    "name":"user name 3",
    "username":"user3",
    "password":"StrongPassword!!!"
}
devuelve
{
    "_id": "5f5d05b2200d4642a4f825b4",
    "name": "user name 3",
    "username": "user3",
    "__v": 0
}

2.-)
POST
http://localhost:5000/v1/api/auth/signin
BODY: raw JSON
{
    "username":"Marluan2",
    "password":"MyStrongPassword!!!"
}
devuelve
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiTWFybHVhbjIiLCJpZCI6IjVmNWM5NDcyNGYwY2Y1NDI5ODAzODI1MCJ9LCJpYXQiOjE1OTk5MzAwNzYsImV4cCI6MTU5OTk0NDQ3Nn0.7Vm6tLBAnQusuoPkR_w-Gnmf1oNc_lX7-rzG9LjEf14",
    "user": {
        "_id": "5f5c94724f0cf54298038250",
        "name": "marluan",
        "username": "Marluan2",
        "__v": 0
    }
}

3.-)
GET
BODY: none
http://localhost:5000/v1/api/user/
[
    {
        "_id": "5f5c8c8f367d1f0b48ce4314",
        "name": "Marluan",
        "username": "Marluan",
        "__v": 0
    },
    {
        "_id": "5f5c94724f0cf54298038250",
        "name": "marluan",
        "username": "Marluan2",
        "__v": 0
    },
    {
        "_id": "5f5d05b2200d4642a4f825b4",
        "name": "user name 3",
        "username": "user3",
        "__v": 0
    }
]

3.-)
después de agregarle el middleware const { AuthMiddleware } = require("../middlewares"); 
GET
BODY: none
http://localhost:5000/v1/api/user/
{
    "status": 500,
    "message": "token is not defined"
}

4.-)
token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiTWFybHVhbjIiLCJpZCI6IjVmNWM5NDcyNGYwY2Y1NDI5ODAzODI1MCJ9LCJpYXQiOjE1OTk5MzMwOTcsImV4cCI6MTU5OTk0NzQ5N30.a-0Q5vc84DeyZ54ie_5JNLrkqEoPK69wouhrbtMSUeg
Header: Authorization
incluso con el token de un usuario pude acceder a la info de otro usuario 
http://localhost:5000/v1/api/user/5f5c94724f0cf54298038250
{
    "_id": "5f5c94724f0cf54298038250",
    "name": "marluan",
    "username": "Marluan2",
    "__v": 0
}
pero si quieres ver todos los usuarios enviando el token, no se puede.
http://localhost:5000/v1/api/user

