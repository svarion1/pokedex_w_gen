import { Dimensions } from 'react-native';

// Get screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Screen size categories
export const isSmallScreen = SCREEN_WIDTH < 375;
export const isMediumScreen = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;
export const isLargeScreen = SCREEN_WIDTH >= 414;

// Responsive font sizes
export const responsiveFontSize = (small, medium, large) => {
  if (isSmallScreen) return small;
  if (isMediumScreen) return medium;
  return large;
};

// Responsive spacing
export const responsiveSpacing = (small, medium, large) => {
  if (isSmallScreen) return small;
  if (isMediumScreen) return medium;
  return large;
};

// Percentage-based width
export const wp = (percentage) => {
  return (percentage * SCREEN_WIDTH) / 100;
};

// Percentage-based height
export const hp = (percentage) => {
  return (percentage * SCREEN_HEIGHT) / 100;
};

// Constants for common responsive values
export const RESPONSIVE_SCREEN = {
  WIDTH: SCREEN_WIDTH,
  HEIGHT: SCREEN_HEIGHT,
  
  // Common font sizes
  FONT_SIZES: {
    SMALL: responsiveFontSize(12, 14, 16),
    MEDIUM: responsiveFontSize(16, 18, 20),
    LARGE: responsiveFontSize(20, 24, 28),
    XLARGE: responsiveFontSize(28, 32, 36),
  },
  
  // Common spacing
  SPACING: {
    XS: responsiveSpacing(4, 6, 8),
    SM: responsiveSpacing(8, 10, 12),
    MD: responsiveSpacing(12, 16, 20),
    LG: responsiveSpacing(20, 24, 28),
    XL: responsiveSpacing(24, 32, 40),
  },
  
  // Common paddings
  PADDING: {
    SCREEN_HORIZONTAL: wp(5), // 5% of screen width
    CONTAINER: wp(4), // 4% of screen width
  }
};
