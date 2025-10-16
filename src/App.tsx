// React Component
const divStyle = {};
export function App() {
  const pageTitle: string = "Home Page Title";
  const htmlText: string = `<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A autem corrupti odio, enim iste maiores accusantium sint, praesentium temporibus sunt nam ab saepe, reiciendis necessitatibus mollitia molestias voluptas deserunt vero. </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore expedita voluptates dolores rerum! Iusto culpa esse earum quibusdam excepturi quidem nostrum nemo architecto autem illo molestiae eum, recusandae magnam facere!</p>`;

  return (
    <div className="max-w-7xl mx-auto">
      <div style={divStyle} className="flex flex-col gap-5 bg-gray-10 mt-20 p-20">
        <h1 className="text-3xl font-semibold text-center">{pageTitle}</h1>
        <div
          className="flex flex-col gap-2"
          dangerouslySetInnerHTML={{ __html: htmlText }}
        ></div>
      </div>
    </div>
  );
}
