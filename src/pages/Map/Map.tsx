import React, { useEffect, useRef } from 'react'
import { styled, Typography } from '@mui/material'
import { Base } from '../base/base'
import { ROUTES } from '../routes'
import { Content } from '../base/content'
import mapboxgl from 'mapbox-gl'
import locations from '../../assets/tripLocations.json'

interface TripLocation {
  latitudeE7: number
  longitudeE7: number
  timestamp: string
}

export const MAP_SETTINGS = {
  default: {
    lat: 39.8282,
    lon: -98.5795,
    zoom: 3.5
  }
}

const MapWrapper = styled('div')(({ theme }) => ({
  height: '500px',
  overflow: 'hidden'
}))

export const Map = () => {
  const mapContainer = useRef<any>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current != null) return // initialize map only once
    console.log('initializing map')
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [MAP_SETTINGS.default.lon, MAP_SETTINGS.default.lat],
      zoom: MAP_SETTINGS.default.zoom
    })

    const historicalCoords = (locations as TripLocation[]).filter(({ latitudeE7, longitudeE7 }) => Math.abs(latitudeE7) >= 100 && Math.abs(longitudeE7) >= 100).map(({ latitudeE7, longitudeE7 }) => ([longitudeE7 * 0.0000001, latitudeE7 * 0.0000001]))
    const source = map.current.getSource('historicalRoute')
    if (!source) {
      map.current.on('load', () => {
        if (map?.current) {
          map.current.addSource('historicalRoute', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: historicalCoords
              }
            }
          })
          console.log('adding source!')
          map.current.addLayer({
            id: 'historicalRoute',
            type: 'line',
            source: 'historicalRoute',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#FF0000',
              'line-width': 2
            }
          })
        }
      })
    }
  }, [])

  return (
        <Base isProtected={ROUTES.home.isProtected}>
            <Content>
              <Typography variant="h1">Map</Typography>
              <MapWrapper ref={mapContainer} />
            </Content>
        </Base>
  )
}
