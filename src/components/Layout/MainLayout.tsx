import React from "react";
import {
  Stack,
  Panel,
} from "@fluentui/react";

type MainLayoutProps ={
    children: React.ReactNode;
}


export const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <Stack className="app-container">
      <Stack.Item>
        
        {/* Replace with Fluent UI Header Component */}
        
      </Stack.Item>
      <Stack.Item grow>
        
        {/* Main area for content */}
        <Stack horizontal>
          <Panel>
            {" "}
            {/* Sidebar with folders/tags navigation */}
            
          </Panel>
          {children}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};


