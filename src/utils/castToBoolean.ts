export const castToBoolean = (
  toCast: boolean | string | number | null | undefined,
) => {
  try {
    return JSON.parse(`${toCast}`);
  } catch {
    return false;
  }
};
