const pages = [
  {
    id: "1",
    title: "Getting Started",
    body:
      "Welcome to torch\n\nHere are the basics:\n* Create pages to build out your wiki\n* Write content using Markdown\n* No frills, no distractions",
  },
  {
    id: "2",
    title: "This Is A Document With A Very Long Name",
    body: `<h1>Long Document</h1>`,
  },
];

export const getPageById = async function (id) {
  await sleep(1300);
  return pages.find((page) => page.id === id);
};

export const getPages = async function () {
  await sleep(800);
  return pages.map((page) => ({ id: page.id, title: page.title }));
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
