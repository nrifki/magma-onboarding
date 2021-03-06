<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div>
    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutLeft"
      mode="out-in"
    >
      <!-- STEP 1 : ORGANIZATION -->

      <base-box v-if="view === 'organization'" key="organization">
        <p class="mb-5 text-center text-sm font-bold uppercase">
          Let's setup your dashboard! 👩‍💻
        </p>

        <FormKit type="form" @submit="onSubmitOrganization">
          <FormKit
            v-model="organization.name"
            label="Your organization name*"
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
            label="Your organization description*"
            placeholder="Harvard University is a private Ivy League research university in Cambridge, Massachusetts."
            type="textarea"
            validation="required|length:0,120"
          />

          <FormKit
            v-model="organization.logo"
            accept=".png,.jpg,.svg"
            help="Your logo should be in the PNG, JPG or SVG format"
            label="Your organization logo*"
            type="file"
            validation="required"
          />
        </FormKit>
      </base-box>

      <!-- STEP 2 : ADMINS -->

      <base-box v-else-if="view === 'admins'" key="admins">
        <p class="mb-5 text-center text-sm font-bold uppercase">
          Add admins to your organization 🏢
        </p>

        <FormKit type="form" @submit="onSubmitAdmins">
          <transition-group enter-active-class="fadeIn" tag="div">
            <div v-for="(admin, adminIndex) in admins" :key="adminIndex">
              <base-divider v-if="adminIndex !== 0" class="mt-6 mb-5" />

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

              <FormKit
                v-model="admin.email"
                label="Email address"
                placeholder="neil.degrasse@harvard.edu"
                type="email"
                validation="required|email"
              />

              <BaseButton
                v-if="adminIndex !== 0"
                class="mb-4"
                color="red"
                @click="onRemoveAdmin(adminIndex)"
              >
                Remove admin
              </BaseButton>
            </div>
          </transition-group>

          <BaseButton class="mb-4 self-end" @click="onAddAdmin">
            Add another admin
          </BaseButton>
        </FormKit>
      </base-box>

      <!-- STEP 3 : ENTITIES -->

      <base-box v-else-if="view === 'entities'" key="entities">
        <p class="text-center text-sm font-bold uppercase">
          Are there different entities in your organization? 🏫
        </p>
        <p class="mb-5 text-center text-sm">
          <span>Each entity gets its own personnalized dashboard.</span>
        </p>

        <div v-if="!entities.length">
          <BaseButton class="mb-3" color="grey" options @click="onCreateEntity">
            Yes, create an entity
          </BaseButton>

          <BaseButton color="grey" options @click="onShowDashboard">
            No, take me to the dashboard
          </BaseButton>
        </div>

        <FormKit v-else type="form" @submit="onSubmitEntities">
          <transition-group enter-active-class="fadeIn" tag="div">
            <div v-for="(entity, entityIndex) in entities" :key="entityIndex">
              <base-divider v-if="entityIndex !== 0" class="mt-6 mb-5" />

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
                help="Your logo should be in the PNG, JPG or SVG format"
                label="The entity's logo"
                name="logo"
                type="file"
              />

              <FormKit
                :options="adminsList"
                v-model="entity.admins"
                type="checkbox"
                label="The entity's admins"
                validation="required"
              />

              <BaseButton
                v-if="entityIndex !== 0"
                class="mb-4"
                color="red"
                @click="onRemoveEntity(entityIndex)"
              >
                Remove entity
              </BaseButton>
            </div>
          </transition-group>

          <BaseButton @click="onAddEntity" class="mb-4">
            Create more entities
          </BaseButton>
        </FormKit>
      </base-box>

      <!-- STEP 4 : FINAL -->

      <base-box v-else-if="view === 'final'" key="final">
        <p class="mb-5 text-center text-sm font-bold uppercase">
          You have made it! 🎉
        </p>

        <div class="mx-auto w-10">
          <ConfettiExplosion
            :duration="3000"
            :force="0.3"
            :particleCount="200"
          />
        </div>

        <pre
          class="shadow-inside w-full rounded-xl border bg-gray-100 p-4"
          wrap
          >{{ payload }}</pre
        >
      </base-box>
    </transition>

    <OnboardingProgression
      :current="view"
      :views="['organization', 'admins', 'entities', 'final']"
    />
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script lang="ts">
// NPM
import { Options, Vue } from "vue-class-component";

// Components
import BaseBox from "@/components/base/BaseBox.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseDivider from "@/components/base/BaseDivider.vue";
import ConfettiExplosion from "vue-confetti-explosion";
import OnboardingProgression from "@/components/onboarding/OnboardingProgression.vue";

// Types
import Admin from "@/types/admin";
import Entity from "@/types/entity";
import Organization from "@/types/organization";

@Options({
  components: {
    BaseBox,
    BaseButton,
    BaseDivider,
    ConfettiExplosion,
    OnboardingProgression,
  },
})
export default class OnboardingForm extends Vue {
  // --> DATA <--

  admins: Admin[] = [];

  entities: Entity[] = [];

  organization: Organization = {
    description: "",
    logo: null,
    name: "",
  };

  view = "organization";

  // --> COMPUTED <--

  get payload(): {
    admins: Admin[];
    entities: Entity[];
    organization: Organization;
  } {
    return {
      admins: this.admins,
      entities: this.entities,
      organization: this.organization,
    };
  }

  get adminsList(): string[] {
    return this.admins.map((admin) => admin.firstName + " " + admin.lastName);
  }

  // --> METHODS : HELPERS <--

  generateAdmin(): void {
    this.admins.push({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  generateEntity(): Entity {
    const entity: Entity = {
      description: "",
      logo: null,
      name: "",
      admins: [],
    };

    this.entities.push(entity);

    return entity;
  }

  // --> METHODS : EVENT LISTENERS <--

  onAddAdmin(): void {
    this.generateAdmin();
  }

  onAddEntity(): void {
    this.generateEntity();
  }

  onCreateEntity(): void {
    this.generateEntity();
  }

  onRemoveAdmin(adminIndex: number): void {
    this.admins.splice(adminIndex, 1);
  }

  onRemoveEntity(entityIndex: number): void {
    this.entities.splice(entityIndex, 1);
  }

  onShowDashboard(): void {
    const entity = this.generateEntity();

    entity.name = this.organization.name;
    entity.description = this.organization.description;
    entity.logo = this.organization.logo;
    entity.admins = this.adminsList;

    this.view = "final";
  }

  onSubmitAdmins(): void {
    this.view = "entities";
  }

  onSubmitOrganization(): void {
    // Generate first admin
    this.generateAdmin();

    this.view = "admins";
  }

  onSubmitEntities(): void {
    for (const entity of this.entities) {
      if (!entity.description) {
        entity.description = this.organization.description;
      }

      if (!entity.logo) {
        entity.logo = this.organization.logo;
      }
    }

    this.view = "final";
  }
}
</script>
