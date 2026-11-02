# RentFlow — Rental Property Management System

A responsive, front-end rental property management dashboard built with **HTML, CSS, and vanilla JavaScript**. RentFlow is designed for an individual landlord who wants to keep properties, units, tenants, rent obligations, payments, maintenance, and simple reports in one tidy workspace.

> **Demo only:** this project stores data in the current browser using `localStorage`. It has no authentication, server, encryption, cloud sync, or payment processor. Use fictional data only.

## Features

- **Dashboard:** portfolio overview, occupied units, rent collected, outstanding rent, recent payments, rent status, maintenance items, and lease-expiry alerts.
- **Properties and units:** create and edit properties, add and edit units, see occupancy and monthly rent totals.
- **Tenants:** tenant directory, search, contact details, profile details, and lease history.
- **Leases:** create leases and prevent overlapping lease dates for the same unit.
- **Rent and payments:** create rent obligations, record full or partial payments, calculate remaining balances, view payment history, void an incorrectly recorded payment, and export CSV.
- **Maintenance:** create and update requests, set priority and status, track dates and recorded costs.
- **Reports:** date-filtered rent collection and rent due totals, occupancy by property, maintenance overview, and CSV export.
- **Data portability:** download a JSON backup and restore a valid RentFlow backup.
- **Demo reset:** restore the original fictional data after confirmation.
- **Responsive UI:** desktop sidebar, mobile navigation drawer, compact KPI cards, mobile-friendly property cards, and tables that become stacked cards on narrow screens.
- **Accessibility basics:** semantic landmarks, labeled fields, keyboard focus styles, Escape-to-close dialogs, reduced-motion support, and accessible live toast messages.

## Quick start

No build tools, package installation, or backend are required.

1. Extract `rentflow.zip`.
2. Open the `rentflow` folder.
3. Double-click `index.html`, or serve the folder with a simple local static server if your browser restricts local file behavior.
4. Explore the fictional starter data. Changes are saved in the same browser.

For example, if Python is installed, run this from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
rentflow/
├── index.html
├── README.md
├── assets/
│   └── images/
├── css/
│   ├── styles.css
│   ├── components.css
│   └── responsive.css
└── js/
    ├── app.js
    ├── data.js
    ├── storage.js
    ├── properties.js
    ├── tenants.js
    ├── leases.js
    ├── payments.js
    ├── maintenance.js
    └── reports.js
```

## Using the app

### Properties and units
- Open **Properties** and select **Add property** to create a building/property.
- Use **View units** on a property card to see its units and add a unit from the dialog.
- A unit belongs to one property. Unit numbers must be unique within the same property.

### Tenants and leases
- Add a tenant from **Tenants**.
- Create a lease from the dashboard quick actions or the Rent & Payments page only if the relevant action is added to the interface in a future extension. The lease form is wired into the app's action system; to expose it in the UI, add a button with `data-action="add-lease"` where appropriate.
- A unit cannot have overlapping lease date ranges. Lease history is retained as separate records.

### Rent obligations and payments
- A lease and a rent obligation are separate records. This makes it possible to retain lease history and to decide which rent periods to track.
- Use **Create rent due** to add an obligation for a lease and period.
- Use **Record payment** to record a payment. Partial payments are supported.
- Payment totals exclude voided payments. Overpayments are blocked in V1; advance credits are not implemented.

### Maintenance
- Add a request, connect it to a property and optionally a unit or tenant, and set its priority/status.
- Marking a request completed records the completion date. Completed maintenance costs are used in reports.

### Reports and exports
- The report date range uses payment date for collected rent and obligation due date for rent due.
- Export buttons create CSV files that can be opened in spreadsheet applications.
- **Settings → Download JSON backup** exports the current dataset. Restore replaces current data after confirmation.

## Data and business rules

- Currency is configured for Nigerian naira (NGN); monetary values are stored as whole-naira numbers.
- Dates are stored as `YYYY-MM-DD`.
- Occupancy is based on an active lease covering the current date.
- Outstanding balance is `max(0, amount due − valid payments)`.
- Rent status is paid, partial, overdue, or unpaid based on payments and due date.
- Voided payments remain in history but do not count toward rent collection.
- Demo records are fictional and internally linked by IDs.
- A fresh browser profile or cleared local storage loads the seed demo dataset again.

## Limitations / production considerations

This is a local-only prototype, not a production property-management service. Before using it for real tenancy operations, add:

- A secure backend database, authentication, authorization, and server-side validation.
- Backups, audit logging, data retention controls, and encryption appropriate to the data.
- Multi-user permissions and secure document storage if required.
- Carefully reviewed rent-period generation, lease renewal/move-out workflows, and local legal/accounting requirements.
- Automated tests and broader cross-browser testing.
- A reviewed privacy notice and operational recovery process.

## Design notes

The visual system uses a light canvas, navy sidebar, blue primary actions, restrained status colors, compact cards, and clear typography. The responsive styles target desktop, tablet, and small mobile widths; on phones, the sidebar becomes a drawer, KPI cards use two columns, property cards stack, and data tables become labeled cards.

## Troubleshooting

- **My changes disappeared:** data is stored per browser and origin. Switching browsers, profiles, or file-serving methods can make it appear as though data is missing.
- **Backup restore fails:** restore a JSON file exported by this RentFlow version (`schemaVersion: 1`).
- **No charts/fonts from the internet:** RentFlow's chart is rendered with inline SVG and does not need a chart library. Google Fonts are optional; system fallbacks will be used offline.
- **Storage quota warning:** export a backup and reduce the amount of demo data stored.

---

Made as a clean, responsive vanilla-JavaScript project.
