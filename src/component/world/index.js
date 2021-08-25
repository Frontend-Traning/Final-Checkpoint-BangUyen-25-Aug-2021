import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Provider, ReactReduxContext, useDispatch } from 'react-redux';
import BoxScene from '../scene360';
import { fetchData } from '../../service/fetchData';
import SceneTitle from '../sceneTitle/SceneTitle';
import { setDataScene } from '../../store/actions/sceneAction';
import SideBar from '../sideBar/SideBar';
import EditPopup from '../editPopup';
import handleSceneState from '../../helper/handleSceneState.js';
import './style.scss';

const World = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchData = async () => {
      const dataRes = await fetchData(
        process.env.REACT_APP_SAMPLE_API_URL,
        'GET'
      );
      const { sceneId, textures, sceneTitles } = handleSceneState(dataRes);
      dispatch(setDataScene({ sceneId, textures, sceneTitles }));
      setData(dataRes);
    };
    handleFetchData();
  }, [dispatch]);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) =>
        Boolean(data.length) && (
          <div className='world'>
            <Canvas resize>
              <Provider store={store}>
                <OrbitControls maxDistance={40} />
                <ambientLight />
                <Suspense fallback={null}>
                  <BoxScene />
                </Suspense>
              </Provider>
            </Canvas>
            <SideBar />
            <EditPopup />
            <SceneTitle />
          </div>
        )
      }
    </ReactReduxContext.Consumer>
  );
};
export default World;
