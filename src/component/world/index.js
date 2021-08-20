import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Provider, ReactReduxContext } from "react-redux";
import BoxScene from "../scene360";
import { fetchData } from "../../service/fetchData";
import "./style.scss";

const World = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFetchData = async () => {
      const dataRes = await fetchData(
        process.env.REACT_APP_SAMPLE_API_URL,
        "GET"
      );
      setData(dataRes);
    };
    handleFetchData();
  }, []);
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <div className="world">
          <Canvas resize>
            <Provider store={store}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              {data.length && (
                <Suspense fallback={null}>
                  <BoxScene data={data} />
                </Suspense>
              )}
            </Provider>
          </Canvas>
        </div>
      )}
    </ReactReduxContext.Consumer>
  );
};
export default World;
