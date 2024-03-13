// const heading= React.createElement('h1',{},"I am an H1 tag!");
const parent=React.createElement('div',{id:'parent'},React.createElement('h1',{},"I am an H1 tag!"))

const root=ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);

root.render(parent);