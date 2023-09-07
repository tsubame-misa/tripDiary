<template>
  <div>
    <div>
      <!-- <svg :viewBox="`{0 0 ${len} ${len}}`"> -->
      <svg viewBox="0 0 1000 1000">
        <g v-if="japanJson">
          <g v-for="f in japanJson.features.values()">
            {{ path(f) }}
            <path
              :d="path(f)"
              fill="white"
              stroke="black"
              strokeWidth="1"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { geoMercator, geoPath } from "d3-geo";
import japanJson from "../assets/japan.geo.json";

const len = 1000;
const projection = geoMercator().fitExtent(
  [
    [0, 0],
    [len, len],
  ],
  japanJson
);

const path = geoPath().projection(projection);
</script>

<style scoped></style>
