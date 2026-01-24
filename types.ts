// Fix: Correctly augment JSX.IntrinsicElements to include the 'ion-icon' custom element.
// This avoids overwriting default React element types.
// Fix: Switched to a full `import React from 'react'` to ensure TypeScript correctly processes
// the global JSX namespace augmentation for custom elements like `ion-icon`.
import React from 'react';

export enum Page {
  Home,
  About,
  Programs,
  Donate,
  GetInvolved,
  Contact,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Fix: Using `React.HTMLAttributes<HTMLElement>` to provide base attributes for the custom element,
      // which resolves the "Property 'div' does not exist" error by not depending on an indexed access type.
      'ion-icon': React.HTMLAttributes<HTMLElement> & {
        name: string;
        // The `class` attribute is used by the ion-icon web component instead of `className`.
        class?: string;
      };
    }
  }
}
