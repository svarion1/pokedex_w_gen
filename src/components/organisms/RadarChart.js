import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup, VictoryPolarAxis, VictoryLabel, VictoryArea } from "victory-native";

const RadarChart = ({stats}) => {
    const [pokeStats, setPokeStats] = React.useState([]);

    var data;
    var maxima;

    const getStats = () => {
        var test = stats.map((stat) => {
            return (stat.base_stat)
        })
        return test;
        
    }

    React.useEffect(() => {
        setPokeStats(getStats());
    }, []);
  
    const characterData = [
        { SpDef: 24, HP: 22, Attack:33, Defense: 67, Speed: 33, SpAtk: 33},
        
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
     maxima = getMaxima(characterData);

     const sampleData= [
      {
        x: 1,
        y: 2,
      },
      {
        x: 2,
        y: 3,
      },
      {
        x: 3,
        y: 5,
      },
      {
        x: 4,
        y: 4,
      },
      {
        x: 5,
        y: 7,
      },
    ];

  return (
    <VictoryChart polar
       theme={VictoryTheme.material}
      >
        <VictoryPolarAxis dependentAxis
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => null}
        />
        <VictoryPolarAxis/>
        <VictoryArea
          data={sampleData}
          style={{
            data: { fill: "#c43a31" },
          }}
        />
    </VictoryChart>
  )
}

export default RadarChart