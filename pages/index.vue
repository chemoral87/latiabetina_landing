<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <!-- <NuxtLogo />
        <VuetifyLogo /> -->
        <img src="laTiaBetinaPegatina2.png" width="50%" />
      </v-card>
      <v-card>
        <v-card-title class="headline"> La Tia Betina </v-card-title>
        <v-card-text>
          <p>Sabor</p>
          <p>Pan Japones</p>
          <p>Pay de queso</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="pink" nuxt to="/inspire"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
