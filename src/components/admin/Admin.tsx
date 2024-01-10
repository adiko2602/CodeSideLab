"use client";

import React from "react";
import PageContent from "../PageContent";
import { useSession } from "next-auth/react";

function Admin() {
  const { data: session } = useSession();
  return (
    <PageContent>
      <div>
        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </div>
    </PageContent>
  );
}

export default Admin;
