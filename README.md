AI-Based Early Warning and Landslide Risk MOnitoring System 

Here is the simple step-by-step breakdown of everything we built and refined in this project:

1. **Project Setup & Base Layout**: 

Created the core React + Vite application shell using modern CSS-in-JS styling, setting up the main dashboard container with a sticky dark sidebar (`#0f172a`) and a clean light workspace.

2. **Navbar & System Metadata**: 

Built the header component with a live green pulse indicator (`LIVE TELEMETRY`), location metadata, last sync timer, and control buttons (`Sync Data` and `Export Report`).

3. **Metrics Grid & Alert Cards**: 

Designed dynamic telemetry cards displaying *Current Risk Level*, *Rainfall Rate*, and *Soil Moisture*, each enhanced with top-accented color borders, threshold badges, and status metrics.

4. **Live GIS Map Integration**:

 Integrated `react-leaflet` with CartoDB tiles to render real-time topographical map views along with active slope-failure markers across critical Himalayan sectors.

5. **Real-Time Alerts Panel**: 

Added a dedicated live alerts feed featuring multi-tier filtering tabs (`All`, `Critical`, `Warning`) to track regional risk updates instantaneously.

6. **Code Sanitation & Unicode Escape Sequences**:

 Replaced all raw emoji characters across the codebase with standardized Unicode escape sequences (e.g., `\u{1F30B}`, `\u{1F4CD}`, `\u{1F4CA}`) to clean up the source files while rendering native icons in the browser interface.

7. **Admin Profile & Footer Card**: 

Built a dark glassmorphism user profile card at the bottom of the sidebar featuring active online status dots, user role credentials (`Disaster Mgmt Admin`), and a styled session termination (`OFF`) trigger.
