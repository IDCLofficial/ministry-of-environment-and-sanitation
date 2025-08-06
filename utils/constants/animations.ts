// Animation presets for different content types
export const ANIMATION_PRESETS = {
  // Card animations
  CARD_FADE_UP: {
    animation: 'fadeUp' as const,
    duration: 600,
    threshold: 0.1
  },
  
  CARD_SCALE_UP: {
    animation: 'scaleUp' as const,
    duration: 500,
    threshold: 0.15
  },

  // Section animations
  SECTION_FADE_IN: {
    animation: 'fadeIn' as const,
    duration: 800,
    threshold: 0.1
  },

  SECTION_SLIDE_UP: {
    animation: 'slideUp' as const,
    duration: 700,
    threshold: 0.1
  },

  // Text animations
  TITLE_FADE_DOWN: {
    animation: 'fadeDown' as const,
    duration: 600,
    threshold: 0.2
  },

  TEXT_FADE_LEFT: {
    animation: 'fadeLeft' as const,
    duration: 500,
    threshold: 0.15
  },

  TEXT_FADE_RIGHT: {
    animation: 'fadeRight' as const,
    duration: 500,
    threshold: 0.15
  },

  // Image animations
  IMAGE_ZOOM_IN: {
    animation: 'zoomIn' as const,
    duration: 700,
    threshold: 0.2
  },

  IMAGE_FADE_UP: {
    animation: 'fadeUp' as const,
    duration: 600,
    threshold: 0.1
  },

  // Statistics animations
  STATS_BOUNCE_IN: {
    animation: 'bounceIn' as const,
    duration: 600,
    threshold: 0.2
  },

  // Button animations
  BUTTON_SCALE_UP: {
    animation: 'scaleUp' as const,
    duration: 400,
    threshold: 0.3
  }
} as const;

// Staggered animation delays for multiple items
export const STAGGER_DELAYS = {
  FAST: [0, 100, 200, 300, 400, 500],
  MEDIUM: [0, 150, 300, 450, 600, 750],
  SLOW: [0, 200, 400, 600, 800, 1000]
} as const;
