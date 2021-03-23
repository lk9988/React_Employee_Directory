import axios from "axios";
// const BASEURL = "https://randomuser.me/api/";
// const API = {
// 	getUsers: function (numberUsers) {
// 		return axios.get(BASEURL + `?results=${numberUsers}`);
// 	},
// };
const API = {
	getUsers: function () {
		return axios.get(
			"https://randomuser.me/api/?results=150&nat=us&inc=name,email,phone,picture"
		);
	},
};

export default API;
