//XML ekta format, data type/format popular in the past
//Now we use JSON
//MS XMLHTTP (XHR)
//AJAX
//GET,POST,PUT,DELETE,OPTION,HEAD

const getButton = document.getElementById('get-button')
const sendButton = document.getElementById('send-button')

const sendRequest = function () {}

const getData = function () {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    xhr.send()
    xhr.onload = function () {
        const result = xhr.response
        console.log(JSON.parse(result))
    }
}

const sendData = function () {}

getButton.addEventListener('click', getData)
sendButton.addEventListener('click', sendData)
