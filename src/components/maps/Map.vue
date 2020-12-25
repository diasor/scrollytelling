<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 400px"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-feature>
        <vl-geom-multi-point :coordinates="[[24.0, 55.0],[25.3, 54.7]]"></vl-geom-multi-point>
      </vl-feature>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}
      <br />
      Center: {{ center }}
      <br />
      Rotation: {{ rotation }}
      <br />
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // zoom: 2,
      center: [0, 0],
      // rotation: 0,
      zoom: 2,
      // center: [46.71109, 1.7191036],
      rotation: 0,
      geolocPosition: [46.71109, 1.7191036]
    };
  }
};
</script>
