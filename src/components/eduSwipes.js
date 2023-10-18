import React from "react";
import '../style.css';

import { Animate } from 'react-move';

const eduSwipes = () => {
    // Define an array of components you want to animate
    const componentsToAnimate = [
      <div key={1}>Card 1</div>,
      <div key={2}>Card 2</div>,
      <div key={3}>Card 3</div>,
    ];
  
    return (
      <div>
        <Animate
          start={{ left: -100 }} // Define the initial position
          enter={[
            // Define the enter animation for each component
            {
              left: [100], // Define the final position
              timing: { duration: 1000 }, // Define animation duration
            },
            {
              left: [200],
              timing: { duration: 1000 },
            },
            {
              left: [300],
              timing: { duration: 1000 },
            },
          ]}
        >
          {(state) => (
            <div>
              {componentsToAnimate.map((component, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: `${state.left}px`,
                  }}
                >
                  {component}
                </div>
              ))}
            </div>
          )}
        </Animate>
      </div>
    );
  };
  
  export default App;