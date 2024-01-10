import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import SignInForm from "./SignInForm";
import PageContent from "@/components/PageContent";

function SignIn() {
  return (
    <PageContent>
      <div className="flex justify-center">
        <Card className="rounded-none border-0 shadow-xl min-h-full w-full max-w-sm">
          <CardHeader>
            <CardTitle>
              <div className="flex w-full justify-center p-4">Zaloguj się</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </PageContent>
  );
}

export default SignIn;
