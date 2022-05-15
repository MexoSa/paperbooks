type createPageType = (pageArray: number[], currentPage: number, totalPage: number) => void

const createPage:createPageType = (pageArray, currentPage, totalPage) => {
   if (totalPage > 10) {
      if (currentPage > 5) {
         for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pageArray.push(i)
            if (i === totalPage) break
         }
      }
      else {
         for (let i = 1; i <= 10; i++) {
            pageArray.push(i)
            if (i === totalPage) break
         }
      }
   } else {
      for (let i = 1; i <= totalPage; i++) {
         pageArray.push(i);
      }
   }
}

export default createPage