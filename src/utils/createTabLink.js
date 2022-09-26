import createElement from "./createElement";

function createTabLink(dataArray, appendTo) {
  const data = [{}];

  const Links = dataArray.map((v) => {
    createElement("a", appendTo, (a) => {
      a.setAttribute("class", "link");
      a.innerHTML = "Link " + v;
    });
  });
  return Links;
}

export default createTabLink;
