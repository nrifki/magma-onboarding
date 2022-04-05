<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div class="mx-auto mt-6 w-96 text-left">
    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutLeft"
      mode="out-in"
    >
      <!-- STEP 1 : ORGANIZATION -->

      <div v-if="view === 'organization'" key="organization">
        <FormKit type="form" @submit="onSubmitOrganization">
          <FormKit
            v-model="organization.name"
            label="Your organization name"
            placeholder="Harvard University"
            type="text"
            validation="required|length:0,80"
          />

          <FormKit
            v-model="organization.description"
            :help="`${organization.description.length} / 120`"
            :validation-messages="{
              length: 'The description cannot be more than 120 characters.',
            }"
            label="Your organization description"
            placeholder="Harvard University is a private Ivy League research university in Cambridge, Massachusetts."
            type="textarea"
            validation="length:0,120"
            validation-visibility="live"
          />

          <FormKit
            v-model="organization.logo"
            accept=".png,.jpg,.svg"
            label="Your organization logo"
            type="file"
          />
        </FormKit>
      </div>

      <!-- STEP 2 : ADMINS -->

      <div v-else-if="view === 'admins'" key="admins">
        <FormKit type="form" @submit="onSubmitAdmins">
          <div v-for="(admin, adminIndex) in admins" :key="adminIndex">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormKit
                v-model="admin.firstName"
                label="First name"
                placeholder="Neil"
                type="text"
                validation="required|length:0,80"
              />

              <FormKit
                v-model="admin.lastName"
                label="Last name"
                placeholder="deGrasse Tyson"
                type="text"
                validation="required|length:0,80"
              />
            </div>

            <FormKit
              v-model="admin.email"
              label="Email address"
              placeholder="neil.degrasse@harvard.edu"
              type="email"
              validation="required|email"
            />
          </div>

          <!-- <FormKit
          help="Click here if you want to add a coworker to your organization."
          label="Add another admin"
          type="button"
          @click="onAddAdmin"
        /> -->
        </FormKit>
      </div>

      <!-- STEP 3 : ENTITIES -->

      <div v-else-if="view === 'entities'" key="entities">
        <FormKit type="form" @submit="onSubmitEntities">
          <div v-if="!entities.length">
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
          </div>

          <template
            v-for="(entity, entityIndex) in entities"
            :key="entityIndex"
          >
            <FormKit
              v-model="entity.name"
              label="The entity's name"
              placeholder="Harvard Medical School"
              type="text"
              validation="required|length:0,80"
            />

            <FormKit
              v-model="entity.description"
              :help="`${entity.description.length} / 120`"
              :validation-messages="{
                length: 'The description cannot be more than 120 characters.',
              }"
              label="The entity's description"
              placeholder="Harvard Medical School (HMS) is the graduate medical school of Harvard University and is located in the Longwood Medical Area of Boston, Massachusetts."
              type="textarea"
              validation="length:0,120"
              validation-visibility="live"
            />

            <FormKit
              v-model="entity.logo"
              accept=".png,.jpg,.svg"
              label="The entity's logo"
              name="logo"
              type="file"
            />
          </template>

          <!-- <FormKit
          label="Create more entities"
          type="button"
          @click="onAddEntity"
        /> -->
        </FormKit>
      </div>
    </transition>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Vue } from "vue-class-component";

// Types
import Admin from "@/types/admin";
import Entity from "@/types/entity";
import Organization from "@/types/organization";

export default class WelcomeForm extends Vue {
  // --> DATA <--

  admins: Admin[] = [];
  entities: Entity[] = [];

  organization: Organization = {
    description: "",
    logo: null,
    name: "",
  };

  view = "organization";

  // --> METHODS : HELPERS <--

  generateAdmin(): void {
    this.admins.push({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  generateEntity(): void {
    this.entities.push({
      description: "",
      logo: null,
      name: "",
      admins: [],
    });
  }

  // --> METHODS : EVENT LISTENERS <--

  onAddAdmin(): void {
    this.generateAdmin();
  }

  onAddEntity(): void {
    this.generateEntity();
  }

  onSubmitAdmins(): void {
    this.view = "entities";
  }

  onCreateEntity(): void {
    this.generateEntity();
  }

  onSubmitOrganization(): void {
    // Generate first admin
    this.generateAdmin();

    this.view = "admins";
  }

  onSubmitEntities(): void {
    this.$emit("completed");
  }
}
</script>
