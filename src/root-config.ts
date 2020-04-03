import { start } from "single-spa";
import "./register-shared-deps";
import { registerAllCoreApplications } from "@openmrs/esm-root-config";
import { registerAmpathApplications } from "./ampath-root-config";
import { provide } from "@openmrs/esm-module-config";
//@ts-ignore
import ampathLoginConfig from "./configs/login.config.json";
import ampathPatientChartConfig from "./configs/patient-chart.config.json";
import ampathPatientChartWidgetsConfig from "./configs/patient-chart-widgets.config.json";

provide(ampathLoginConfig);
provide(ampathPatientChartConfig);
provide(ampathPatientChartWidgetsConfig);
registerAllCoreApplications();
registerAmpathApplications();

start();
