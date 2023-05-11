class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numberOfItems = collection.length;
    this.numberOfPages = Math.ceil(this.numberOfItems / itemsPerPage);
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.numberOfItems;
  }
  pageCount() {
    // returns the number of pages
    return this.numberOfPages;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= 0) {
      if (pageIndex < this.numberOfPages) {
        if (pageIndex === this.numberOfPages - 1) {
          const lastPageCount = this.numberOfItems % this.itemsPerPage;
          return lastPageCount === 0 ? this.itemsPerPage : lastPageCount;
        } else {
          return this.itemsPerPage;
        }
      } else {
        return -1;
      }
    }
    return -1;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex < this.numberOfItems && itemIndex >= 0) {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
    return -1;
  }
}
