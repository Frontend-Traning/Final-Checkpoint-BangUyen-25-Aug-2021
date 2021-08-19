import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxScene from "../scene360";
import { Provider, ReactReduxContext } from "react-redux";

const World = () => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <div style={{ width: "100vw", height: "100vh" }}>
          <Canvas resize>
            <Provider store={store}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <Suspense fallback={null}>
                <BoxScene />
              </Suspense>
            </Provider>
          </Canvas>
        </div>
      )}
    </ReactReduxContext.Consumer>
  );
};
export default World;
