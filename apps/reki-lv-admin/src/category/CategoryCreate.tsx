import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ListingTitle } from "../listing/ListingTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="listings"
          reference="Listing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ListingTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
