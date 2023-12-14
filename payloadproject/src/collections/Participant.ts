// registration.ts

import { CollectionConfig } from 'payload/types';

const Participant: CollectionConfig = {
  slug: 'participants', // Updated slug to 'participants'
  admin: {
    useAsTitle: 'Nama',
  },
  access: {
    create: () => true, // Define your create access control here
    read: () => true,   // Define your read access control here
    update: () => true, // Define your update access control here
    delete: () => true, // Define your delete access control here
  },
  fields: [
    {
      name: 'Nama',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'Email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'Asal_Sekolah',
      label: 'Asal Sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'Status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'Waiting' },
        { label: 'Rejected', value: 'Rejected' },
        { label: 'Accepted', value: 'Accepted' },
      ],
      defaultValue: 'Waiting',
      required: true,
    },
    {
      name: 'Tanggal_Pendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
    },
    // Additional fields as needed
  ],
};

export default Participant;
