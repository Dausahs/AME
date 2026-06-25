"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Lightweight TopoJSON file containing world country shapes
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
  {
    name: "Penang HQ",
    // Accurate GPS: George Town, Penang
    coordinates: [100.3327, 5.4164] as [number, number],
  },
  {
    name: "Kuala Lumpur",
    // Accurate GPS: KL city centre
    coordinates: [101.6869, 3.149] as [number, number],
  },
];

export default function MalaysiaMap() {
  return (
    // overflow-visible allows marker labels that stick out above/below the SVG
    // boundary to remain visible instead of being clipped
    <div className="w-full h-full flex items-center justify-center overflow-visible">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          // Center shifted south (lat 3.0 instead of 4.2) so Penang (5.4°N)
          // is not right at the top edge — this prevents the label being clipped.
          // Longitude 109 keeps both Peninsular and Borneo in view.
          center: [109, 3.0],
          scale: 2400,
        }}
        // overflow visible so SVG children can render outside the SVG bounds
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name === "Malaysia")
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#FF9100"
                  stroke="#092236"
                  strokeWidth={0.8}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#e68200",
                      outline: "none",
                      transition: "all 250ms",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            {/*
              Coordinate point is at (0, 0).
              Label pill sits above: y=-54 to y=-34.
              Pin tip touches (0, 0).
            */}

            {/* Dark pill background for label */}
            <rect
              x={-44}
              y={-56}
              width={88}
              height={20}
              rx={4}
              ry={4}
              fill="#092236"
              opacity={0.9}
            />

            {/* Label text */}
            <text
              textAnchor="middle"
              y={-41}
              style={{
                fill: "#FFFFFF",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.3px",
              }}
            >
              {name}
            </text>

            {/* Pin icon — bottom tip sits at coordinate (0, 0) */}
            <g transform="translate(-10, -36)">
              <svg
                width="20"
                height="36"
                viewBox="0 0 24 40"
                fill="white"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}
              >
                <path d="M12 0C7.58 0 4 3.58 4 8c0 6.5 8 18 8 18s8-11.5 8-18c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
