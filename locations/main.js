import fs from 'fs'
import { chain } from 'stream-chain'
import { parser } from 'stream-json'
import { streamObject } from 'stream-json/streamers/StreamObject'

const FILE_PATH = './locations/records.json'
const TRIP_START = new Date('2022-06-01')
const TRIP_END = new Date('2023-01-15')

function readData (filepath) {
  console.log('[INFO] Reading data...')

  return new Promise((resolve, reject) => {
    const pipeline = chain([
      fs.createReadStream(filepath),
      parser(),
      streamObject()
    ])

    pipeline.on('data', data => {
      console.log('[INFO] Data processed...')
      resolve(data.value)
    })
  })
}

function dateRangeFilterRecords (locations, start, end) {
  console.log('[INFO] Filtering data by date range...')
  return locations.filter(({ timestamp }) => {
    const date = new Date(timestamp)
    // filter this dates by startDate and endDate
    return date >= start && date <= end
  })
}

function cleanRecords (data) {
  console.log(data)
  console.log('type', typeof data)
  console.log('[INFO] Removing nonimportant data...')
  return data.map(({ latitudeE7, longitudeE7, timestamp }) => ({
    latitudeE7,
    longitudeE7,
    timestamp
  }))
}

async function main () {
  const data = await readData(FILE_PATH)
  const cleaned = cleanRecords(data)
  const dataInDateRange = dateRangeFilterRecords(cleaned, TRIP_START, TRIP_END)
  // save to file
  const json = JSON.stringify(dataInDateRange)
  console.log('[INFO] Saving data...')
  fs.writeFile('./locations/tripLocations.json', json, 'utf8', () => {
    console.log('File successfully processed')
  })
}

main()
