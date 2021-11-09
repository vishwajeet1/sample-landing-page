import Axios from "axios";

export default async function list(req: any, res: any) {
  const url = process.env.BACKEND_URL;
  var encodedPath = "";
  const queryObj = req.query;
  const parentKeys = Object.keys(queryObj);

  if (queryObj["path"]) {
    encodedPath += queryObj["path"];
    if (parentKeys.length > 1) {
      delete queryObj["path"];
      const keys = Object.keys(queryObj);

      encodedPath += "?";

      for (var i = 0; i < keys.length; i++) {
        if (i != 0) {
          encodedPath += "&";
        }
        encodedPath += keys[i] + "=" + encodeURIComponent(queryObj[keys[i]]);
      }
    }
  }
  try {
    const config = {
      method: req.method,
      data: req.data,
      url: `${url}/${encodedPath}`,
    };
    if (req.method === "POST" || req.method === "PATCH") {
      config.data = req.body;
    }
    return await Axios(config)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          res.json({
            success: false,
            message: "You are not authorized to take this action",
          });
        } else {
          throw err;
        }
      });
  } catch (error) {
    //@ts-ignore
    res.status(error.response.status).end(error.response.data.message);
  }
}
