//XML ekta format, data type/format popular in the past
//Now we use JSON
//MS XMLHTTP (XHR)
//AJAX
//GET,POST,PUT,DELETE,OPTION,HEAD

const getButton = document.getElementById('get-button')
const sendButton = document.getElementById('send-button')

const sendRequest = function (method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'json'
        xhr.open(method, url)
        xhr.send(data)

        xhr.onload = function () {
            resolve(xhr.response)
        }
    })
    return promise
}

const getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1').then(
        (responseData) => {
            console.log(responseData)
        }
    )
}

const sendData = function () {
    sendRequest(
        'GET',
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    ).then((responseData) => {
        console.log(responseData)
    })
}

getButton.addEventListener('click', getData)
sendButton.addEventListener('click', sendData)
