export const ampathApps = {
  "@ampath/poc": isPocActive,
  "@ampath/esm-angular-form-entry": shouldShowPatientChartFormEntry
};
// Read more about "activity functions" at https://single-spa.js.org/docs/configuration.html#activity-function
function isPocActive(location: Location): boolean {
  // To start out, POC will always be mounted. This will change as more applications
  // are added.
  return !location.pathname.includes("login") && !shouldNotLoadPOC(location);
}

function shouldShowPatientChartFormEntry(location: Location): boolean {
  return (
    !location.pathname.includes("login") &&
    location.pathname.includes("/chart/formentry")
  );
}

function shouldNotLoadPOC(location: Location): boolean {
  return (
    location.pathname.includes("/spa/patient") ||
    location.pathname.includes("/spa/home") ||
    location.pathname.includes("/chart/formentry")
  );
}
