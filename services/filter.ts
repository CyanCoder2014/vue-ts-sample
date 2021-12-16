import {Filter} from "~/types/filter";


export class FilterService {

  constructor () {
  }

  log () {
  }

  // @ts-ignore
  public filterItems<T>(items:T[], filters:Filter[]):T[]{

    let itemsCopy:T[] = [...items]


    filters.sort((a, b) => {
          let modifier = 1;
          let AObject: Object = {}
          let BObject: Object = {}
          // @ts-ignore
          AObject = a['operator'] ?? {}
          // @ts-ignore
          BObject = b['operator'] ?? {}
          if (AObject > BObject) {
            return modifier
          }
          if (AObject < BObject) {
            return -1 * modifier
          }
          return 0
        })


    for (let i = 0; i < filters.length; i++)
        {
          let result = this.checkCondition(itemsCopy, filters, i)
          if (filters[i].operator == 'AND')
            itemsCopy =  result
          else
            return result
        }

    return itemsCopy

  }


  // @ts-ignore
  private checkCondition <T> (items:T[], filters:Filter[], i:number):T[]{

    let filterField:string  = 'default'
    let filterValue:any = null
    filterField = filters[i].field??'default'
    filterValue = filters[i].value??null

    switch (filters[i].condition){
      case '>=':
          return items.filter((item:T) =>
            // @ts-ignore
            (item[filterField] >= filterValue))

      case '<=':
          return items.filter((item:T) =>
            // @ts-ignore
            (item[filterField] <= filterValue))

      case '==':
          return items.filter((item:T) =>
            // @ts-ignore
            (item[filterField] == filterValue))

      case '!=':
          return items.filter((item:T) =>
            // @ts-ignore
            (item[filterField] != filterValue))

      case 'contain':
          return items.filter((item:T) =>
            // @ts-ignore
            (filterValue.toLowerCase().split(' ').every((x: string) => String(item[filterField]).toLowerCase().includes(x))))

      default:
        return items
    }

  }






  // public sortItems<T>(items:T[], sortBy:keyof T):T[] {
  //
  //   if (items.length) {
  //     items.sort((a, b) => {
  //       let modifier = -1;
  //       let AObject: Object = {}
  //       let BObject: Object = {}
  //       AObject = a[sortBy] ?? {}
  //       BObject = a[sortBy] ?? {}
  //       if (AObject > BObject) {
  //         return modifier
  //       }
  //       if (AObject < BObject) {
  //         return -1 * modifier
  //       }
  //       return 0
  //     })
  //   }
  //   return items
  // }




}
