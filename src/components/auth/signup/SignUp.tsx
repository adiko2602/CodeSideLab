import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import SignUpForm from "./SignUpForm";
import PageContent from "@/components/PageContent";

function SignUp() {
  return (
    <PageContent>
      <div className="flex justify-center">
        <Card className="rounded-none border-0 shadow-xl min-h-full w-full max-w-sm">
          <CardHeader>
            <CardTitle>
              <div className="flex w-full justify-center p-4">
                Zarejestruj się
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </PageContent>
  );
}

export default SignUp;
