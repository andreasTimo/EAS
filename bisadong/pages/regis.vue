<template>
  <div>
    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm">
      <label for="Nama">Nama:</label>
      <input v-model="formData.Nama" type="text" id="Nama" required />

      <label for="Email">Email:</label>
      <input v-model="formData.Email" type="email" id="Email" required />

      <label for="Asal_Sekolah">Asal Sekolah:</label>
      <input v-model="formData.Asal_Sekolah" type="text" id="Asal_Sekolah" required />

      <!-- Add other form fields as needed -->

      <button type="submit">Submit</button>
    </form>

    <div v-if="registrationError" class="error-message">
      Registration failed: {{ registrationError }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        Nama: '',
        Email: '',
        Asal_Sekolah: '',
        // ... other fields
      },
      registrationError: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        // Set the registration date to the current date and time
        this.formData.Tanggal_Pendaftaran = new Date().toISOString();

        // Assuming you have Axios installed and configured in your Vue app
        const response = await this.$axios.post('http://localhost:3002/api/participants', this.formData);
        console.log('Registration successful:', response.data);
        // Optionally, you can redirect to a success page or perform other actions upon successful registration.
      } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        this.registrationError = error.response ? error.response.data.errors[0] : 'Unknown error';
        // Handle registration failure, show error messages, etc.
      }
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
