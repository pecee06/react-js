const container = document.querySelector("#root");

// Trying to replicate -> <a href="https://www.google.com" target="_blank">Click here for Google.com</a>
const reactObj = {
    tag: "a",
    props: {
        href: "https://www.google.com",
        targer: "_blank"
        // There can be more or less properties as well
    },
    content: "Click here for Google.com"
}

function render(where,what) {
    const elem = document.createElement(what.tag);
    elem.innerText = what.content;

    for (const prop in what.props) {
        elem.setAttribute(prop,what.props[prop]);
    }

    where.append(elem);
}

render(container,reactObj);