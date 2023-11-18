function customRender(reactElement,container){
    // const  domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('children',reactElement.props.children);

    // container.appendChild(domElement);
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for ( const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'h1',
    props: {
        href: 'https://reactjs.org/',
        target: '_blank',

    },
    children: 'Hello World'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);