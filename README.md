## More example in main.ts

```javascript
import { TEST_ENDPOINTS } from '@/core/api/endpoints';
import { $http } from '@/core/api/http';

const { getSomeTestEndpoint, removeSomeTestEndpoint, editSomeTestEndpoint } = TEST_ENDPOINTS;
export async function exempleGetRequest() {
  const res = await $http.get(getSomeTestEndpoint);
  if (res.success) {
    return {
      data: res.data,
    };
  }
  console.log('some error handler');
}

export async function exemplePostRequest(data) {
  const res = await $http.post(getSomeTestEndpoint, data);
  if (res.success) {
    return {
      data: res.data,
    };
  }
  console.log('some error handler');
}

export async function exempleRemoveRequest(id) {
  const res = await $http.remove(removeSomeTest(id));
  if (res.success) {
    return {
      data: res.data,
    };
  }
  console.log('some error handler');
}

export async function exempleRemoveRequest(id, data) {
  const res = await $http.edit(editSomeTestEndpoint(id), data);
  if (res.success) {
    return {
      data: res.data,
    };
  }
  console.log('some error handler');
}
```
