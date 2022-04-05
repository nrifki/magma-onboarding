<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div class="mt-6 text-left">
    <!-- STEP 1 : ORGANIZATION -->

    <div v-if="view === 'organization'">
      <FormKit
        v-model="organization.name"
        label="Your organization name"
        name="name"
        placeholder="Harvard University"
        type="text"
        validation="required"
      />

      <FormKit
        v-model="organization.description"
        label="Your organization description"
        name="description"
        type="text"
      />

      <FormKit
        v-model="organization.logo"
        accept=".png,.jpg,.svg"
        label="Your organization logo"
        name="logo"
        type="file"
      />

      <FormKit type="button" label="Submit" @click="onCreateOrganization" />
    </div>

    <!-- STEP 1 : ADMINS -->

    <div v-if="view === 'admins'">
      <FormKit type="list">
        <template
          v-for="(admin, adminIndex) in organization.admins"
          :key="adminIndex"
        >
          <FormKit
            v-model="admin.firstName"
            label="First name"
            name="firstName"
            type="text"
          />

          <FormKit
            v-model="admin.lastName"
            label="Last name"
            name="lastName"
            type="text"
          />

          <FormKit
            v-model="admin.email"
            label="Email"
            name="email"
            type="email"
            validation="required|email"
          />
        </template>

        <FormKit label="Add more admins" type="button" @click="onAddAdmin" />

        <FormKit label="Submit" type="button" @click="onListAdmins" />
      </FormKit>
    </div>

    <!-- STEP 3 : ENTITIES -->

    <div v-if="view === 'entities'">
      <FormKit
        help="Are there different entities in your organization?"
        label="Create entities"
        type="button"
        @click="onCreateEntity"
      />

      <FormKit
        help="Your organization does not have different entities?"
        label="Configure and access your dashboard"
        type="button"
      />

      <FormKit v-if="organization.entities.length" type="list">
        <template
          v-for="(entity, entityIndex) in organization.entities"
          :key="entityIndex"
        >
          <FormKit
            v-model="entity.name"
            label="The entity's name"
            name="name"
            type="text"
          />

          <FormKit
            v-model="entity.description"
            label="The entity's description"
            name="description"
            type="text"
          />

          <FormKit
            v-model="entity.logo"
            accept=".png,.jpg,.svg"
            label="The entity's logo"
            name="logo"
            type="file"
          />
        </template>

        <FormKit
          label="Create more entities"
          type="button"
          @click="onAddEntity"
        />

        <FormKit label="Submit" type="button" @click="onCreateEntities" />
      </FormKit>
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";

// Types
import Organization from "@/types/organization";

export default class WelcomeForm extends Vue {
  // --> DATA <--

  organization: Organization = {
    name: "",
    description: "",
    logo: null,
    admins: [
      {
        firstName: "",
        lastName: "",
        email: "",
      },
    ],
    entities: [
      {
        name: "",
        description: "",
        logo: null,
        admins: [],
      },
    ],
  };

  view = "organization";

  // --> LIFECYCLE HOOKS <--

  created(): void {
    this.generateAdmin();
  }

  // --> METHODS <--

  generateAdmin(): void {
    this.organization.admins.push({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  generateEntity(): void {
    this.organization.entities.push({
      name: "",
      description: "",
      logo: null,
      admins: [],
    });
  }

  onAddAdmin(): void {
    this.generateAdmin();
  }

  onAddEntity(): void {
    this.generateEntity();
  }

  onCreateEntity(): void {
    this.generateEntity();
  }

  onCreateOrganization(): void {
    this.view = "admins";
  }

  onListAdmins(): void {
    this.view = "entities";
  }

  onCreateEntities(): void {
    this.$emit("closeModal");
  }
}
</script>
