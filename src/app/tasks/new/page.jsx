"use client";
import { addNewTask } from "@/lib/actions";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
  Form,
  FieldError,
} from "@heroui/react";
import React from "react";
import { useFormStatus } from "react-dom";

const NewTasksPage = () => {
  const { pending } = useFormStatus();
  console.log("Status: ", pending);
  return (
    <div className="max-w-200 mx-auto mt-10">
      <h3>Add a new task: </h3>
      <Form action={addNewTask} className="flex flex-col gap-4">
        <TextField
          isRequired
          minLength={8}
          className="w-full"
          name="title"
          type="text"
        >
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
          <FieldError />
        </TextField>
        <TextField isRequired className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your task description" />
          <FieldError />
        </TextField>
        <Select
          isRequired
          name="status"
          className="w-[256px]"
          placeholder="Select one"
        >
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="in-progress" textValue="In Progress">
                In Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
          <FieldError />
        </Select>
        <Select
          isRequired
          name="priority"
          className="w-[256px]"
          placeholder="Select one"
        >
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
          <FieldError />
        </Select>
        <TextField isRequired className="w-full" name="category">
          <Label>Category</Label>
          <Input placeholder="Enter category" />
          <FieldError />
        </TextField>
        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close" type="submit">
          {pending ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default NewTasksPage;
