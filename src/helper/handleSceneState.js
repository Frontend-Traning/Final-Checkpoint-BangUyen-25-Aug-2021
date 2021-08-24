import PropTypes from 'prop-types';
const handleSceneState = (data) => {
  let textures = {};
  let sceneTitles = {};
  const sceneId = data[0].id;
  for (let value of data) {
    textures = {
      ...textures,
      [value.id]: value.cubeMapImages.size1024,
    };
    sceneTitles = {
      ...sceneTitles,
      [value.id]: value.title,
    };
  }
  return { sceneId, textures, sceneTitles };
};

handleSceneState.propTypes = {
  data: PropTypes.array,
};
handleSceneState.defaultProps = {
  data: [],
};
export default handleSceneState;
