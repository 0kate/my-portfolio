function getCurrentDate(): string {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  const todayDateString: string = yyyy + '-' + mm + '-' + dd
  return todayDateString
}

export const TIMELINES = [
  {
    date: '1999-03-17',
    description: 'I was born in Hiroshima',
  },
  {
    date: '2017-04-01',
    description: 'I entered Hiroshima Information vocational college',
  },
  {
    date: '2019-03-23',
    description: 'I started working at JTP',
  },
  {
    date: getCurrentDate(),
    description: 'today',
  },
]
