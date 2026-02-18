# Planning Guide

A Diablo 2 rune tracking application that helps players manage their rune inventory and identify which runewords they can craft with their current stash.

**Experience Qualities**:
1. **Efficient** - Players should quickly scan their inventory and identify craftable runewords without manual calculation
2. **Organized** - Runes and runewords should be systematically categorized and easy to navigate
3. **Informative** - Clear presentation of runeword recipes, stats, and requirements at a glance

**Complexity Level**: Light Application (multiple features with basic state)
  - The app manages rune inventory state and filters runewords based on availability, with straightforward CRUD operations and visual filtering

## Essential Features

**Rune Inventory Management**
- Functionality: Track quantity of each rune (El through Zod) in player's stash
- Purpose: Maintain accurate count of available crafting materials
- Trigger: Player clicks +/- buttons or directly inputs quantities
- Progression: View rune grid → Click adjust button → Quantity updates → Craftable runewords refresh
- Success criteria: Quantities persist between sessions and accurately reflect in craftable calculations

**Rune Upgrade Calculator**
- Functionality: Show which higher-tier runes can be created by combining 3 lower runes + gem in Horadric Cube
- Purpose: Help players plan rune upgrades and optimize their inventory for desired runewords
- Trigger: Automatic calculation when rune quantities change
- Progression: Add runes to inventory → View available upgrades → Select upgrade amount → Click upgrade button → Inventory updates with new rune
- Success criteria: Accurately calculates possible upgrades based on Diablo 2 cube recipes, updates inventory correctly

**Runeword Database Display**
- Functionality: Show all Diablo 2 runewords with recipes, level requirements, item types, and stats
- Purpose: Comprehensive reference for all available runewords
- Trigger: App loads with full runeword list visible
- Progression: View runeword list → See recipe, requirements, and properties → Filter or search as needed
- Success criteria: All major runewords displayed with accurate game data

**Craftable Highlighting**
- Functionality: Visually distinguish runewords that can be crafted with current inventory
- Purpose: Instantly identify what the player can make right now
- Trigger: Automatic when rune quantities change
- Progression: Update rune count → Algorithm checks all runewords → Craftable ones highlighted → Non-craftable dimmed
- Success criteria: Visual distinction is immediate and unmistakable

**Search and Filter**
- Functionality: Filter runewords by name, rune composition, or item type
- Purpose: Quickly find specific runewords in the extensive list
- Trigger: Player types in search field or selects filter options
- Progression: Enter search term → Results filter in real-time → Clear to reset
- Success criteria: Filtering is instant and intuitive

## Edge Case Handling

- **Empty Inventory**: Show message encouraging player to add runes to see craftable runewords
- **No Upgrades Available**: Display helpful message when player doesn't have 3 of any rune for upgrading
- **All Craftable**: Celebrate with subtle visual indicator when player has materials for many runewords
- **Invalid Input**: Prevent negative numbers or non-numeric input in rune quantities
- **Upgrade Overflow**: Limit upgrade quantity input to available upgrades based on rune count
- **Missing Data**: Gracefully handle if runeword data structure is incomplete

## Design Direction

The design should evoke the dark, medieval fantasy aesthetic of Diablo 2 - gritty, powerful, and mysterious. Think ancient tomes, gothic architecture, and the contrast between darkness and magical energy.

## Color Selection

A dark fantasy palette inspired by Diablo 2's atmosphere with glowing magical accents.

- **Primary Color**: Deep crimson red `oklch(0.35 0.15 25)` - communicates danger, power, and the demonic theme
- **Secondary Colors**: Dark charcoal `oklch(0.15 0.01 270)` for backgrounds, stone gray `oklch(0.35 0.02 270)` for cards
- **Accent Color**: Glowing amber/gold `oklch(0.75 0.15 75)` - represents magical runes and craftable states, draws attention to actionable items
- **Foreground/Background Pairings**:
  - Background (Dark Charcoal `oklch(0.15 0.01 270)`): Light gray text `oklch(0.90 0.02 270)` - Ratio 11.2:1 ✓
  - Card (Stone Gray `oklch(0.35 0.02 270)`): White text `oklch(0.95 0.01 270)` - Ratio 6.8:1 ✓
  - Primary (Crimson `oklch(0.35 0.15 25)`): White text `oklch(0.98 0 0)` - Ratio 5.1:1 ✓
  - Accent (Amber `oklch(0.75 0.15 75)`): Dark text `oklch(0.20 0.02 270)` - Ratio 8.9:1 ✓

## Font Selection

Typography should feel medieval and game-like, evoking ancient manuscripts and runic inscriptions while maintaining readability for game data.

- **Typographic Hierarchy**:
  - H1 (App Title): Cinzel Bold/32px/tight letter-spacing - medieval, authoritative
  - H2 (Section Headers): Cinzel SemiBold/24px/normal letter-spacing
  - H3 (Runeword Names): Cinzel Medium/18px/wide letter-spacing - gives importance to each runeword
  - Body (Stats & Descriptions): Inter Regular/14px/relaxed line-height - modern readability for game data
  - Labels (Rune Names): Inter Medium/12px/uppercase/wide letter-spacing - clean and scannable

## Animations

Animations should feel mystical and responsive, like magical energy reacting to player actions. Subtle pulsing glows on craftable items, smooth transitions when filtering, and satisfying micro-interactions when adjusting rune counts. Avoid excessive motion - keep it dark and focused.

## Component Selection

- **Components**:
  - Card: Display individual runewords with recipes and stats, using elevated shadow for craftable ones; also used for rune upgrade calculator section
  - Badge: Show rune requirements inline within runeword cards with color coding
  - Input: Numeric input for direct quantity entry and upgrade amounts with custom styling
  - Button: +/- controls for rune quantities, upgrade buttons with accent color, styled as small icon buttons
  - Tabs: Organize runewords by category (Weapon, Armor, Helm, etc.)
  - ScrollArea: Handle long lists of runewords and upgrade options smoothly
  - Dialog: Show detailed runeword information on click
  - Separator: Divide sections with subtle medieval-style dividers
  
- **Customizations**:
  - Custom rune grid component with visual rune symbols/icons
  - Craftable glow effect using box-shadow and subtle animation
  - Medieval-inspired card borders with darker edges
  - Rune upgrade list with arrow indicators showing transformation
  
- **States**:
  - Buttons: Hover shows subtle red glow, active state with pressed effect, disabled state is very dim
  - Upgrade button: Accent color background with hover brightness increase
  - Cards: Craftable cards have amber border glow and slightly elevated, non-craftable are muted with reduced opacity
  - Inputs: Focus state with amber ring, validation feedback for invalid numbers
  
- **Icon Selection**:
  - Plus/Minus (phosphor-icons) for quantity adjustments
  - MagnifyingGlass for search
  - Funnel for filters
  - ArrowRight for showing rune upgrade transformations
  - Sparkle for upgrade calculator header
  - X for clear/reset actions
  
- **Spacing**:
  - Container padding: p-6 on desktop, p-4 on mobile
  - Card gaps: gap-4 in grid layouts
  - Internal card padding: p-4
  - Section margins: mb-8 between major sections
  
- **Mobile**:
  - Rune grid switches from 4-column to 2-column layout
  - Runeword cards stack vertically instead of grid
  - Tabs become scrollable horizontally
  - Sticky header with search/filter collapses into drawer
