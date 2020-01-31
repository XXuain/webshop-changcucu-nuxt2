import axios from "axios";
import MockAdapter from "axios-mock-adapter";
// import testData from "~/mock/testData";

let mock = new MockAdapter(axios);

// mockAdapter.onGet("/testApi", { params: { listText: "jay" } }).reply(config => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([200, { data: testData }]), 0);
//   });
// });

mock.onGet("/testApi").reply(200, {
  users: [{ id: 1, name: "John Smith" }]
});
