/**
 *https://codepen.io/arivndrukmaji/pen/eYpjBBR?editors=1111
 */

function OurApp() {
    return ( <
        >
        <h1 className="special">Our Amazing App Header</h1> <
        p > The current time is { new Date().toLocaleString() } < /p> <
        small > Copyright text here. < /small> <
        />
    )
}

setInterval(() => ReactDOM.render(<OurApp/>, document.querySelector('#app')), 1000)