export const isVersionHigher = (current: string, minimum: string): boolean => {
  const currentParts = current.split('.').map(Number);
  const minParts = minimum.split('.').map(Number);

  // Find the length of the longest version string to ensure full comparison
  const maxLength = Math.max(currentParts.length, minParts.length);

  for (let i = 0; i < maxLength; i++) {
    // Use 0 as a default if one version has fewer segments than the other
    const currentSegment = currentParts[i] || 0;
    const minSegment = minParts[i] || 0;

    if (currentSegment > minSegment) return true;
    if (currentSegment < minSegment) return false;

    // If they are equal, continue to the next segment
  }

  // If the loop finishes, the versions are identical
  return false;
}
