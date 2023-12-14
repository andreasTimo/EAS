<template>
  <div>
    <h1>Check Registration Status</h1>
    <form @submit.prevent="checkStatus">
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required />
      <button type="submit">Check Status</button>
    </form>

    <div v-if="status !== null">
      <h2>Registration Status</h2>
      <p>Email: {{ email }}</p>
      <p>Status: {{ status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      status: null,
    };
  },
  methods: {
    async checkStatus() {
      try {
        const response = await this.$axios.get(`http://localhost:3002/api/participants?email=${this.email}`);
        
        if (response.data.docs && response.data.docs.length > 0) {
          // Get the status from the first document
          this.status = response.data.docs[0].Status || 'Not Found';
        } else {
          this.status = 'Not Found';
        }
      } catch (error) {
        console.error('Error checking status:', error);
        this.status = 'Error';
      }
    },
  },
};
</script>
