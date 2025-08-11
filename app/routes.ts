import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("subsystems/eps", "routes/subsystems/eps.tsx"),
  route("subsystems/obc", "routes/subsystems/obc.tsx"),
  route("subsystems/ttc", "routes/subsystems/ttc.tsx"),
  route("subsystems/adcs", "routes/subsystems/adcs.tsx"),
  route("subsystems/sts", "routes/subsystems/sts.tsx"),
  route("subsystems/payload", "routes/subsystems/payload.tsx"),
  route("teams/adcs", "routes/teams/adcs.tsx"),
  route("teams/eps", "routes/teams/eps.tsx"),
  route("teams/obc", "routes/teams/obc.tsx"),
  route("teams/payload", "routes/teams/payload.tsx"),
  route("teams/sts", "routes/teams/sts.tsx"),
  route("teams/ttc", "routes/teams/ttc.tsx"),
] satisfies RouteConfig;
