import React, { useEffect, useRef } from 'react'
import { styled, Typography } from '@mui/material'
import { Base } from '../base/base'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../routes'
import { Content } from '../base/content'
import mapboxgl from 'mapbox-gl'

const params = {
  center: 'center'
}

export const MAP_SETTINGS = {
  default: {
    lat: 47.608013,
    lon: -122.335167,
    zoom: 9
  }
}

const MapWrapper = styled('div')(({ theme }) => ({
  height: '500px',
  overflow: 'hidden'
}))

export const Map = () => {
  const [searchParams] = useSearchParams()
  const centerParam = searchParams.get(params.center)
  const center = ((centerParam?.split(',').map((coord) => parseFloat(coord))) ?? [MAP_SETTINGS.default.lon, MAP_SETTINGS.default.lat]) as [number, number]

  const mapContainer = useRef<any>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current != null) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center,
      zoom: MAP_SETTINGS.default.zoom
    })
    console.log('setting map up')
  }, [])

  return (
        <Base isProtected={ROUTES.map.isProtected}>
            <Content>
              <Typography variant="h1">Map</Typography>
              <MapWrapper ref={mapContainer} />
            </Content>
        </Base>
  )
}
