import { createContext, useContext, ParentComponent } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { Map } from '../MapGL'

export const MapContext = createContext()

export const useMapContext = () => useContext(MapContext)

export const MapProvider: ParentComponent<{
  map?: Map
}> = (props) => {
  const [state, setState] = createStore({ map: null })

  props.map && setState('map', props.map)

  return (
    <MapContext.Provider value={[state]}>{props.children}</MapContext.Provider>
  )
}
