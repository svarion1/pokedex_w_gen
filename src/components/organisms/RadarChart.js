import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup, VictoryPolarAxis, VictoryLabel, VictoryArea } from "victory-native";

const RadarChart = ({stats}) => {
    
    var data;
    var maxima;

    const getStats = () => {
        data = stats.map((stat) => {
            return (stat.base_stat)
        })
        return data;
        
    }
const test = getStats();


    const characterData = [
        { SpDef: test[4], HP: test[0], Attack: test[1], Defense: test[2], Speed: test[5], SpAtk: test[3]},
        
      ];

      function getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
          memo[key] = data.map((d) => d[key]);
          return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
          memo[key] = Math.max(...groupedData[key]);
          return memo;
        }, {});
      };

      function processData(data) {
        const maxByGroup = getMaxima(data);
        const makeDataArray = (d) => {
          return Object.keys(d).map((key) => {
            return { x: key, y: d[key] / maxByGroup[key] };
          });
        };
        return data.map((datum) => makeDataArray(datum));
      }

      data= processData(characterData);
     maxima = getMaxima(characterData)

  return (
    <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup colorScale={["gold", "orange", "tomato"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {data.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />

      </VictoryChart>
  )
}

export default RadarChart