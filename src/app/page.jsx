"use client";
import { Alert, Button } from "@heroui/react";
import { Spinner } from "@heroui/react";
import { Envelope, Gear, Globe, Plus, TrashBin } from "@gravity-ui/icons";
import { LoadingState } from "@/components/Home/LoadingState";
export default function Home() {
  return (
    <div>
      <main>
        <Button>Click Here</Button>
        <Button variant="secondary">Click Here</Button>
        <Button variant="tertiary">Click Here</Button>
        <Button variant="danger">Click Here</Button>
        <Button variant="danger">
          <TrashBin />
          Delete
        </Button>
        <Button isIconOnly variant="secondary">
          <Gear />
        </Button>
        <Button isPending>
          {({ isPending }) => (
            <>
              {isPending ? <Spinner color="current" size="sm" /> : null}
              Uploading...
            </>
          )}
        </Button>
        <LoadingState />
        {/* Custom indicator - Loading state */}
        <Alert status="accent">
          <Alert.Indicator>
            <Spinner size="sm" />
          </Alert.Indicator>
          <Alert.Content>
            <Alert.Title>Processing your request</Alert.Title>
            <Alert.Description>
              Please wait while we sync your data. This may take a few moments.
            </Alert.Description>
          </Alert.Content>
        </Alert>
      </main>
    </div>
  );
}
