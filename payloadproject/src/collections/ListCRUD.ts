// src/collections/ListCRUD.ts

import { CollectionConfig } from 'payload/types'

const ListCRUD: CollectionConfig = {
  slug: 'list_crud',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true, // Define your create access control here
    read: () => true,   // Define your read access control here
    update: () => true, // Define your update access control here
    delete: () => true, // Define your delete access control here
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    // Add other fields as needed
  ],
};

export default ListCRUD;

