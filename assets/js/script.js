//Json placeholder : https://jsonplaceholder.typicode.com/

    // Return the Json post
    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await res.json();
    }

    function getDataProm() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
            data.json().then((json) => {
                return json
            })
        })
    }

    const tableDoc = document.getElementById('posts-content');
    var commentDoc = document.getElementById('comment');

    // Get Ddata and through all in the Web page
    getData().then((contents) => {
        for (let content of contents) {
            tableDoc.innerHTML +=   `<tr class="tableContent">
                                        <td id=${content.id}>${content.id}</td>
                                        <td id=${content.id}>${content.title}</td>
                                        <td id=${content.id}>${content.body}</td>
                                        <td id=${content.id}><button onclick="commentButton(${content.id})" id="commentButton">comment</button></td>
                                    </tr>`
        }
    });

    // Executed when clicking on the button
    function commentButton(id) {
        changeElementColor(id);
        initCommentTab();
        getDataComment(id).then((contents) => {
            for (let content of contents) {
                commentDoc.innerHTML += `<tr class="tableContent">
                                            <td>${content.email}</td>
                                            <td>${content.body}</td>
                                        </tr>`
            }
        });
    }

    // Return the comment of specific post
    async function getDataComment(endpoint) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${endpoint}/comments`);
        return await res.json();
    }

    function changeElementColor(elementId) {
        var elements = document.querySelectorAll(`[id='${elementId}']`);
        for (let element of elements) {
            element.style.background = 'grey';
            element.style.color = 'white';
        }
    }

    function initCommentTab() {
        commentDoc.innerHTML = '';
        commentDoc.parentNode.style.visibility = 'visible';
    }