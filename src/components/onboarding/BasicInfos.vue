<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div class="mt-6">
    <div v-if="view === 'organization'">
      <Input
        v-model="organization.name"
        label="Your organization name"
        name="name"
      />
      <TextField
        v-model="organization.description"
        label="Your organization description"
        name="description"
      />
      <File
        v-model="organization.logo"
        label="Your organization logo"
        name="logo"
      />
      <Button class="max-w-none" label="Submit" @click="onCreateOrganization" />
    </div>

    <div v-if="view === 'admins'" class="BasicInfos__admins">
      <FormKit type="list">
        <template
          v-for="(admin, adminIndex) in organization.admins"
          :key="adminIndex"
        >
          <Input
            v-model="admin.firstName"
            label="First name"
            name="firstName"
          />
          <Input v-model="admin.lastName" label="Last name" name="lastName" />
          <Email v-model="admin.email" label="Email" name="email" />
        </template>
        <Button label="Add more admins" @click="onAddAdmin" />
        <Button label="Submit" @click="onListAdmins" />
      </FormKit>
    </div>

    <div v-if="view === 'entities'" cclass="BasicInfos__entities">
      <Button
        help="Are there different entities in your organization?"
        label="Create entities"
        @click="onCreateEntity"
      />
      <Button
        help="Your organization does not have different entities?"
        label="Configure and access your dashboard"
      />
      <FormKit v-if="organization.entities.length" type="list">
        <template
          v-for="(entity, entityIndex) in organization.entities"
          :key="entityIndex"
        >
          <Input v-model="entity.name" label="The entity's name" name="name" />
          <TextField
            v-model="entity.description"
            label="The entity's description"
            name="description"
          />
          <File v-model="entity.logo" label="The entity's logo" name="logo" />
        </template>
        <Button label="Create more entities" @click="onAddEntity" />
        <Button label="Submit" @click="onCreateEntities" />
      </FormKit>
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Organization from "@/types/organization";

import Button from "@/components/shell/Button.vue";
import Email from "@/components/form/Email.vue";
import File from "@/components/form/File.vue";
import Input from "@/components/form/Input.vue";
import TextField from "@/components/form/TextField.vue";

@Options({
  components: {
    Button,
    Email,
    File,
    Input,
    TextField,
  },
})
export default class BasicInfos extends Vue {
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
