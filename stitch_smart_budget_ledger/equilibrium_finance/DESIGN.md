---
name: Equilibrium Finance
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#b61722'
  on-secondary: '#ffffff'
  secondary-container: '#da3437'
  on-secondary-container: '#fffbff'
  tertiary: '#00311f'
  on-tertiary: '#ffffff'
  tertiary-container: '#004a31'
  on-tertiary-container: '#27c38a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  numeric-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built on the pillars of **clarity, trust, and fiscal mindfulness**. Designed for household financial management, it avoids the coldness of traditional banking apps in favor of an approachable, organized, and encouraging interface.

The visual style is **Soft Minimalism**. It utilizes a card-based architecture to compartmentalize financial data, making complex information digestible. The aesthetic prioritizes legibility and generous whitespace to reduce the "cognitive load" often associated with budgeting. Subtle transitions and high-quality typography create a professional environment that feels secure yet welcoming.

The UI should evoke a sense of being "in control" and "forward-looking," transforming the chore of bookkeeping into a rewarding habit.

## Colors

The palette is functional and semantic, using color to communicate the status of funds immediately:

*   **Primary (Deep Blue):** Represents income, stability, and the core structural elements of the UI. It is the color of "trust."
*   **Secondary (Soft Red):** Reserved strictly for expenses, over-budget alerts, and critical actions. It is used sparingly to maintain its impact.
*   **Tertiary (Teal/Green):** Symbolizes growth, savings, and remaining budget. This is the "positive reinforcement" color.
*   **Neutral (Slate/Light Grey):** Used for backgrounds, borders, and secondary text to ensure the canvas remains clean and high-contrast.

Surface colors should use `#FFFFFF` (White) for cards to pop against the `#F8FAFC` (Off-white) background, creating clear containment without heavy borders.

## Typography

The design system utilizes **Inter** for its exceptional legibility and neutral, professional tone. Financial figures are the most critical data points; therefore, the system includes a `numeric-display` role designed for high-visibility balances.

**Hierarchical Rules:**
- **Headlines:** Use Bold weights with tight letter-spacing for a modern, grounded feel.
- **Body:** Standard weights with generous line-height ensure long lists of transactions remain readable.
- **Labels:** Uppercase labels with slight tracking are used for metadata and table headers to distinguish them from interactive data.
- **Numbers:** Tabular figures should be enabled (`tnum`) in CSS to ensure that columns of numbers align vertically for easy comparison.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a fixed maximum width for desktop to prevent line lengths from becoming unreadable.

*   **Desktop:** 12-column grid. Most dashboard widgets should span 4 or 6 columns. Transaction lists span the full 12.
*   **Tablet:** 8-column grid. Sidebars collapse into a bottom navigation or a hamburger menu.
*   **Mobile:** Single column with 16px side margins. Cards occupy the full width of the viewport minus margins.

The spacing rhythm is based on an **8px base unit**. Component internals (like the space between an icon and text) use 8px, while the space between cards and sections uses 24px or 32px to maintain a feeling of openness.

## Elevation & Depth

To maintain the minimalist aesthetic, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

1.  **Background:** The base layer is a very light grey/blue tint.
2.  **Cards (Surface):** Pure white with a 1px border of `#E2E8F0`. 
3.  **Elevation (Floating):** Only used for modals or active dropdowns. These use a "Soft Ambient Shadow": `0px 10px 15px -3px rgba(0, 0, 0, 0.05)`.
4.  **Active State:** When a card is hovered or selected, the border color shifts to the Primary Blue, and a subtle inner glow is applied.

This approach creates "flat depth," where hierarchy is established through containment and color rather than physical simulation.

## Shapes

The shape language is **Soft and Friendly**. 

*   **Standard Cards & Inputs:** 0.5rem (8px) corner radius. This provides a professional look that is less "sharp" than a grid-heavy financial tool.
*   **Large Containers:** 1rem (16px) radius for major dashboard sections to create a distinct visual "nest."
*   **Buttons:** 0.5rem (8px) for standard buttons, though interactive "Pill" tags (Chips) use a fully rounded radius to differentiate them from actionable buttons.

## Components

**Buttons**
- **Primary:** Solid Deep Blue with white text. High emphasis for "Add Transaction."
- **Secondary:** White background with Deep Blue border and text.
- **Ghost:** No border or background, used for "Cancel" or less frequent actions.

**Cards (The Core Component)**
- Cards should have a consistent 24px internal padding. 
- Header areas within cards should use a `label-md` for titles.

**Input Fields**
- Inputs use a 1px border (`#CBD5E1`). On focus, the border thickens to 2px Primary Blue with a subtle light-blue outer glow.
- Labels sit above the field in `label-sm`.

**Chips / Badges**
- Used for categories (e.g., "Groceries," "Rent").
- Use a background-tint approach: A very light version of the category color with high-contrast text.

**Transaction List Items**
- A horizontal layout with an icon on the left, name/category in the middle, and amount on the far right.
- Amounts use color logic: Primary Blue (or Green) for positive, Soft Red for negative.

**Progress Bars**
- Used for budget tracking. The bar background is a light neutral, and the "fill" uses the Tertiary Green, turning Red only if the limit is exceeded.