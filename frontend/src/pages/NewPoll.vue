<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="title"
        label="Title of the poll *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="organization"
        label="Your organization"
      />

      <q-input
        filled
        type="date"
        v-model="date"
        hint="End date of the poll"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type the end date of the poll'
        ]"
      />

      <q-input
        filled
        v-model="choice0"
        label="1st choice *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="choice1"
        label="2nd choice *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="choice2"
        label="3rd choice"
      />

      <q-input
        filled
        v-model="choice3"
        label="4th choice"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: null,
      organization: null,
      date: null
    }
  },
  methods: {
    onSubmit () {
      // Do something
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    },
    onReset () {
      this.title = null
      this.organization = null
      this.date = null
    }
  }
}
</script>

<style scoped>

</style>
