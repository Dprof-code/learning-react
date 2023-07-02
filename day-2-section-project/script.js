function cardBody() {
    return (
        <div class="card-body">
            <img src="./react-icon.svg.png" alt="react-logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

console.log(cardBody());

ReactDOM.render(
    cardBody(),
    document.getElementById("root")
);