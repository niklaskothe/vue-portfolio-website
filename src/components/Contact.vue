<script setup>
    import { ref } from 'vue'

    const name = ref('')
    const email = ref('')
    const message = ref('')
    const privacyAgreement = ref(false)

    function submitForm() {
        if (privacyAgreement.value) {
        // TODO: Logik um Formular abzuschicken ?!
        console.log('Formular abgeschickt:', { name: name.value, email: email.value, message: message.value })
 
        name.value = ''
        email.value = ''
        message.value = ''
        privacyAgreement.value = false
    } else {
        alert('Bitte bestätigen Sie die Datenschutzerklärung.')
  }
}
</script>


<template>
    <div class="contact-form">
      <h2>Kontaktformular</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Nachricht:</label>
          <textarea id="message" v-model="message" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="privacyAgreement" required>
            Ich bestätige die Datenschutzerklärung.
          </label>
        </div>
        <button type="submit" :disabled="!privacyAgreement">Absenden</button>
      </form>
    </div>
</template>


<style>
.contact-form {
  margin-top: 40px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>