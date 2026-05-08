import React, { use } from "react";
import { getUsers } from "../lib/data";
import { Button, Table } from "@heroui/react";
import Link from "next/link";

const UsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <p>Total users: {users.length}</p>

      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Age</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.age}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Show Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <Link href={`/users/${user._id}`}>
                      <Button variant="danger">Delete</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersPage;
