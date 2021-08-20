export const fetchData = async (url = "", method = "") => {
  let res = {};
  try {
    res = await fetch(url, {
      method: method,
    });
    return res.json();
  } catch (error) {
    console.log("--err", error);
  }
};
