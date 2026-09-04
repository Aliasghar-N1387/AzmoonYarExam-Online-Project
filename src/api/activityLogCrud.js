const API_URL = import.meta.env.VITE_API_URL;

const getActivityLogs = async ({ search = "", activityType = "" } = {}) => {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.append("SearchPhase", search.trim());
  }

  if (activityType) {
    params.append("EntityType", activityType);
  }

  return await fetch(`${API_URL}v1/activity-log?${params.toString()}`, {
    method: "GET",
  });
};

export default {
  getActivityLogs,
};
