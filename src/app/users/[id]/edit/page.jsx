import { getUserByID } from "@/app/lib/data";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const EditPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserByID(id);

  return (
    <div>
      <p>Editing user: {user.name}</p>
      <div className="mt-4">
        <Form className="w-full max-w-96">
          <Fieldset>
            <FieldGroup>
              <TextField isRequired name="name">
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
              <TextField isRequired name="bio">
                <Label>Age</Label>
                <TextArea placeholder="Tell us about yourself..." />
                <Description>Minimum 10 characters</Description>
                <FieldError />
              </TextField>
              <TextField isRequired name="bio">
                <Label>Role</Label>
                <TextArea placeholder="Tell us about yourself..." />
                <Description>Minimum 10 characters</Description>
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                Edit
              </Button>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default EditPage;
