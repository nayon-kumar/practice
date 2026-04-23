"use client";
import { addNewTask } from "@/lib/actions";
import { Modal } from "@gravity-ui/uikit";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Button,
} from "@heroui/react";
import React from "react";

const NewTasksPage = () => {
  return (
    <div className="max-w-200 mx-auto mt-10">
      <h3>Add a new task: </h3>
      <form action={addNewTask} className="flex flex-col gap-4">
        <TextField className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your task description" />
        </TextField>
        <Select name="status" className="w-[256px]" placeholder="Select one">
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
        </Select>
        <Select name="priority" className="w-[256px]" placeholder="Select one">
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
        </Select>
        <TextField className="w-full" name="category">
          <Label>Category</Label>
          <Input placeholder="Enter category" />
        </TextField>
        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close" type="submit">
          Submit Task
        </Button>
      </form>
    </div>
  );
};

export default NewTasksPage;
