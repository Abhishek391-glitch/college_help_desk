---
name: Academic Concierge
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
  on-surface-variant: '#42474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#532800'
  on-tertiary: '#ffffff'
  tertiary-container: '#743b00'
  on-tertiary-container: '#f9a767'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  section-gap: 120px
  container-max-width: 1120px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built to bridge the gap between institutional authority and student-centric accessibility. The brand personality is **Knowledgeable, Reliable, and Approachable**. It avoids the stuffiness of traditional academic portals in favor of a **Corporate Modern** aesthetic that feels efficient and high-tech yet welcoming.

The target audience includes prospective students, current undergraduates, and faculty members who require immediate, clear answers. The UI evokes a sense of "calm clarity"—reducing the anxiety often associated with administrative tasks through heavy whitespace and a logical, single-page scroll flow. Visual elements are refined and balanced, utilizing subtle depth and soft geometry to guide the user’s eye toward key information nodes like Admissions and Placements.

## Colors

The palette is anchored by a **Trustworthy Blue** (Classic Navy) that signals stability and institutional expertise. This is paired with a **Crisp White** and a very light grey neutral for background layering, ensuring the interface feels airy and "clean."

To humanize the experience, a **Soft Teal** is utilized as the functional accent. This color is reserved specifically for the chatbot bubble and interactive "Help" states, distinguishing the automated support features from the static academic content. High-contrast text colors are used to ensure WCAG AA accessibility standards are met for all student demographics.

## Typography

This design system utilizes **Inter** for its entire type scale. Inter was chosen for its exceptional legibility on digital screens and its neutral, systematic character which fits a professional help desk environment.

The hierarchy is strictly enforced to manage the information-heavy sections of the single-page layout. Large, bold displays are used for section headers (e.g., "Placements") to act as visual anchors during scrolling. Body text maintains a generous line height (1.5x) to prevent "wall of text" fatigue, making course descriptions and admission requirements easy to parse.

## Layout & Spacing

This design system employs a **Fixed Grid** layout centered on the screen to maintain focus and readability. A 12-column grid is used for desktop, with a maximum container width of 1120px to prevent line lengths from becoming too wide for comfortable reading.

The spacing rhythm is intentional and "generous." Large vertical gaps (120px) separate major content blocks (Admissions vs. Courses) to provide a mental reset for the user as they scroll. Internal component spacing follows an 8px base unit, ensuring consistent alignment and a structured, professional feel.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Tonal Layers** and **Ambient Shadows**. The background uses a flat, neutral-light grey, while primary content cards sit on a pure white surface with a very subtle, diffused shadow (Level 1) to indicate interactability.

The **Floating Chat Bubble** is the only element that uses a high-elevation shadow (Level 3). This "soft glow" shadow uses a tint of the Teal accent color to make the bubble appear to float significantly above the content, ensuring it remains accessible at all times without obscuring critical text.

## Shapes

The shape language is defined by **Rounded** geometry. A standard radius of 0.5rem (8px) is applied to buttons, input fields, and small cards. Larger containers and sections use a 1rem (16px) radius to soften the overall interface. 

The chatbot bubble utilizes a "Partial Pill" shape—fully rounded on three corners with a distinct sharp corner at the bottom right—to mimic a speech tail, reinforcing its function as a conversational tool.

## Components

### Buttons
Primary buttons use the Trustworthy Blue with white text and a subtle 8px corner radius. Secondary buttons use a "Ghost" style with a blue outline.

### Floating Chat Bubble
The signature component. It is a circular or pill-shaped element in Soft Teal (#2DD4BF) with a white icon. It features a deep, diffused shadow to signify its priority.

### Information Cards
Used for Courses and Placements. These cards feature a white background, a 1px soft-grey border, and generous internal padding (32px). They should include a clear "Category Label" in the **label-bold** type style.

### Input Fields & Search
Help desk search bars are oversized with a 24px internal padding and a soft shadow on focus. This encourages students to start their journey with a query.

### Accordions
Used specifically for FAQs within the Admissions section. These use a clean, borderless style with a subtle background color change on hover to guide the user through dense information.