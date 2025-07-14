import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("subsystems/eps", "routes/subsystems/eps.tsx"),
  route("subsystems/obc", "routes/subsystems/obc.tsx"),
  route("subsystems/ttc", "routes/subsystems/ttc.tsx"),
  route("subsystems/adcs", "routes/subsystems/adcs.tsx"),
  route("subsystems/sts", "routes/subsystems/sts.tsx"),
  route("subsystems/payload", "routes/subsystems/payload.tsx"),
] satisfies RouteConfig;
