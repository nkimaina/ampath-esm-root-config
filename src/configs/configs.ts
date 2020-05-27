//@ts-ignore
import ampathLoginConfig from "./login.config.json";
import getPatientChartConfig from "./patient-chart-config-builder";
import { provide } from "@openmrs/esm-module-config";

provide(ampathLoginConfig);
provide(getPatientChartConfig());
