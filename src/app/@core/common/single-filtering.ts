export function SingleFiltering(items: Array<any>, searchTerm: string, selectedItems: Array<any>, normalizeString: (str: string) => string): Array<any> {
    const searchedItem = normalizeString(searchTerm);
    if (!searchedItem.trim()) {
      return [
        ...selectedItems,
        ...items.filter(item => !selectedItems.includes(item))
      ];
    } else {
      const filteredItems = items.filter(item =>
        normalizeString(item.Name).includes(searchedItem) &&
        !selectedItems.includes(item)
      );
      return [...selectedItems, ...filteredItems];
    }
  }