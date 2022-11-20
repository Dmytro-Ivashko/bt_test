export const findMinDuraction = (obj) => {
  // find min diraction in tiket segments
  return obj.segments.reduce((min, val) => {
    return Math.min(min.duration, val.duration);
  });
};
export const findTransfers = (obj) => {
  // find transfer count in tiket segments
  return obj.segments.reduce((transfers, segment) => {
    return [...transfers, segment.stops.length];
  }, []);
};
