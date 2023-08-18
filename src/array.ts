export const arrayHelper = {
  removeByIndex: (index: number, arr: Array<any>, amountToRemove = 1) => {
    if (arr.length <= 1) {
      return;
    }
    return arr.splice(index, amountToRemove);
  },
};
