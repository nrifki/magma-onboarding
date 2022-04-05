# Magma Onboarding

## Installation

To download the project.

```bash
git https://github.com/nrifki/magma-onboarding.git
cd magma-onboarding
```

To run the project.

```bash
npm install
npm run serve
```

You should be able to access the project at [http://localhost:8080](http://localhost:8080).

## Inpiration

To craft the onboarding, I spent some time on Dribbble. I drew the process on paper and started coding when things made sense. The interface has been designed with mobile-first in mind. I wanted to do something easy-to-understand without too many components to ensure the targeted audience was not lost.

## About the app

- The project is using Vue 3, TypeScript, and TailwindCSS. It also uses the `vue-property-decorator` package to get the decorator like `@Prop` etc.

- To generate the form elements, I chose to use [FormKit](https://formkit.com/) to avoid reinventing the wheel. The package is attractive. It comes with built-in validation and offers most of the essential components people need to start a project. It also comes with a premium version for the more advanced component.

- Animations have been built using `vue2-animate`. Despite the name, this package is compatible with Vue 3.

- Vue Meta has been set up.

## Conventions I follow

- Common components are prefixed with `Base`.

- If you look at each component, I take great care in making sure everything is sorted and divided. In the long run, it is a huge time saver because we do not have to think about where to put things.

- If you are using VSCode, the Tailwind's utility classes are automatically sorted on saving thanks to the `prettier-plugin-tailwindcss` plugin.

- I did not touch the eslint configuration and directly used the one with Vue-CLI.

- I also follow the angular convention when I write the message for my commits.

## To go further.

- End-to-end tests have been set up using Cypress. I can implement them. This will make sure the onboarding is never broken.

- Unit tests have been set up using Jest. They are helpful when we want to make sure methods or computed properties provide the correct output when given a specific input.
