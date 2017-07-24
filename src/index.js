'use strict'

import React, {
  PropTypes
} from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

import Svg, {
  Circle,
  Rect,
  Path
} from 'react-native-svg'

import * as Android from 'android'
import * as iOS from 'ios'

const Glyph = (props) => {
  let {
    type,
    side,
    fill,
    style,
  } = props

  let pack = this[props.pack],
    path = pack[type],
    height = props.height || style.height || side || pack.side,
    width = props.width || style.width || side || pack.side,
    scale = props.scale || 1,
    borderRadius = 0

  switch (type) {
    case "rounded":
      borderRadius = props.corner || pack.corner
    break

    case "circle":
      side = (height !== width) ? Math.round((height + width) / 2) : height
      width = side
      borderRadius = Math.floor(side / 2)
    break
  }

  let wrapper = StyleSheet.create(Object.assign({},
    style, 
    {
      borderRadius,
      height,
      width
    })
  )

  return (
    <View style={wrapper}>
      <Svg width={side} height={side}>
        <Path scale={scale} fill={fill} d={path} />
      </Svg>
    </View>
  )  
}

Glyph.propTypes = {
  pack: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  side: PropTypes.number,
  corner: PropTypes.number,
  fill: PropTypes.color,
  style: PropTypes.style,
}

export default Glyph