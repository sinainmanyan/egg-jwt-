<template>
  <div>
    <button @click="btn">删除</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.axios
      .post("/login", { username: "yanpeng", password: "2019" })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      });
  },
  methods: {
    btn() {
      console.log(1111111111111);
      this.axios
        .post(
          "/del",
          { id: 1 },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(res => {
          // if (res.status === 400) {
          //   console.log(res);
          // }
        })
        .catch(error => {
          // console.log(error);
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          if(error.response.status===401)
          {
            console.log("登录已过期")
          }

        });
    },
  },
};
</script>

<style></style>
