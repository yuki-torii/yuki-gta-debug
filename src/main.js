import Gta from 'yuki-gta/dist/yuki-gta'

const gta = new Gta({
  google: 'UA-54675108-19',
  baidu: '417fa9fc2be153b1bec6de7b39208722'
})

gta.event({
  page: 'page',
  action: 'action',
  label: 'label',
  value: 1
})

gta.event({
  page: 'page',
  action: 'action',
  label: 'label',
  value: 2
})

gta.pageview('page1')
gta.pageview('page2')
gta.pageview('page3')
