import ampathPatientChartConfig from "./patient-chart.config.json";
import programsConfig from "./programs.config.json";

export default function getPatientChartConfig() {
  ampathPatientChartConfig["@openmrs/esm-patient-chart"].widgetsConfigs[
    "programs"
  ] = programsConfig;
  return ampathPatientChartConfig;
}
