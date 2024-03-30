# Open Innovation AI - Frontend Assignment

## FRED Data Visualization App: Explore Economic Trends Interactively

This React application fulfills the requirements of the Open Innovation AI assignment, allowing users to explore economic data trends through a user-friendly interface. It leverages the Federal Reserve Economic Data (FRED) API to fetch and visualize economic data series.

**A big thanks to the assignment creators for providing this opportunity to delve into data visualization and explore the FRED API!**

**Key Features Aligned with Assignment Requirements:**

- **Predefined Series:** Users can easily visualize economic indicators, through readily available data options.
- **Interactive Data Visualization:** **_Recharts_** components transform retrieved data into clear and interactive charts, fulfilling the visualization requirement.
- **Local-First Caching Strategy:** The application implements a local-first caching approach to optimize performance and potentially reduce API calls for a smoother user, as suggested in the assignment.

**Technical Implementation Beyond Requirements:**

- **Robust Testing Suite:** The application goes beyond the basic requirements by incorporating a comprehensive testing suite using Vitest, React Testing Library, and Cypress.

- **Scalable Architecture:** While this implementation focuses on the `fred/series/observations` endpoint as per the assignment, the underlying architecture is flexible and can be extended to support a more dynamic data source selection mechanism in the future.

**Looking Ahead: Potential Enhancements**

- **Search Functionality for Data Series:** Implementing a search bar would empower users to find specific data series by name or keyword, exceeding the initial assignment scope and improving discoverability.
- **Integration with Additional Data Sources:** Expanding beyond the FRED API to integrate with other economic data sources would offer users even greater flexibility in exploring economic trends.
- **Advanced Chart Interactions:** Adding features like zooming, panning would further enhance user engagement and allow for deeper data exploration.

## **Running the Application:**

### **Prerequisites:**

Ensure you have Node.js and npm (or yarn) installed on your system.

### **Clone the Repository:**

Clone this repository using Git or download the zip archive.

### **Install Dependencies:**

```bash
# Move to the cloned folder
cd <cloned_repo_folder>

# Install dependencies
npm install
```

### **Start the Development Server:**

```bash
npm run dev
```

This will start the application on a local development server, typically accessible at http://localhost:5173 by default (you might need to adjust the port number if it's already in use).

### **Run tests:**

#### Unit Tests

```bash
npm run test:unit
```

#### E2E Tests

```bash
# Run Cypress with GUI
npm run cypress:open

# Run Cypress with no GUI
npm run cypress:no-gui
```
