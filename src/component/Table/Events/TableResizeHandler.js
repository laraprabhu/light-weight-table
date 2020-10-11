const getNewWidth = (fixed, index, elementRefs) => {
  const isFixedLeft = fixed === 'left';

  let width = 0;
  for (
    let i = isFixedLeft ? 0 : elementRefs.length - 1;
    isFixedLeft ? (i < index) : (i > index);
    isFixedLeft ? i++ : i--) {
    width += elementRefs[i].clientWidth;
  }

  return width;
};

export default (elementRefs) => () => {
  if (!elementRefs) return;

  elementRefs.forEach((ref) => {
    const { fixed, index } = ref.dataset;
    const updatedWidth = getNewWidth(fixed, index, elementRefs);

    ref.style[fixed] = `${updatedWidth}px`;
  });
};