const getNewWidth = (fixed, index, columnWidths) => {
  const isFixedLeft = fixed === 'left';

  let width = 0;
  for (
    let i = isFixedLeft ? 0 : columnWidths.length - 1;
    isFixedLeft ? (i < index) : (i > index);
    isFixedLeft ? i++ : i--) {
    width += columnWidths[i];
  }

  return width;
};

export default (resizeable, columnWidths) => {
  const { fixed, index, ref: element } = resizeable;
  const updatedWidth = getNewWidth(fixed, index, columnWidths);

  element.style[fixed] = `${updatedWidth}px`;
};