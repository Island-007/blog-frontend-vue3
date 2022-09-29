export interface IMenuItem {
  id: string;
  father_id: string;
  name: string;
  children?: IMenuItem[]
}

const menuList: IMenuItem[] = [
  {
    id: '1',
    father_id: '0',
    name: '生命科学竞赛',
    children: [
      {
        id: '2',
        father_id: '1',
        name: '野外实习类',
        children: [{ id: '3', father_id: '2', name: '植物学' }],
      },
      {
        id: '7',
        father_id: '1',
        name: '科学研究类',
        children: [
          { id: '8', father_id: '7', name: '植物学与植物生理学' },
          { id: '9', father_id: '7', name: '动物学与动物生理学' },
          { id: '10', father_id: '7', name: '微生物学' },
          { id: '11', father_id: '7', name: '生态学' },
        ],
      },
      { id: '71', father_id: '1', name: '添加' },
    ],
  },
  {
    id: '56',
    father_id: '0',
    name: '考研相关',
    children: [
      { id: '57', father_id: '56', name: '政治' },
      { id: '58', father_id: '56', name: '外国语' },
    ],
  },
]
export default menuList