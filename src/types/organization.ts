/**************************************************************************
 * TYPES > ORGANIZATION
 **************************************************************************/

export default interface Organization {
  name: string;
  description: string;
  logo: File | null;
  admins: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
  entities: {
    name: string;
    description: string;
    logo: File | null;
    admins: string[];
  }[];
}
