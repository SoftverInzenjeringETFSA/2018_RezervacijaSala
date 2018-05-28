import config from '../../configuration.json';

const connnection_string = config.server_protocol + "://" + config.server_ip + ":" + config.server_port + "/api";

export default function apiHelper(route, method, body){
  switch (method) {
    case "GET":
      return fetch(connnection_string + route);
      break;
    case "POST":
      return fetch(connnection_string + route, {
        method: "POST",
        headers: {
            Accept: 'application/json',
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      break;
    default:
      return null;
  }
    return true;
};
