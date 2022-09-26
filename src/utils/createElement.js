const createElement = (tagname, appendTo, cb) => {
  const element = document.createElement(tagname);
  if (appendTo) appendTo.appendChild(element);
  if (cb) cb(element);
};

export default createElement;
