import type { ImageSourcePropType } from 'react-native';

import type { TrackId } from '@/types/learning';

export const trackIcons: Record<TrackId, ImageSourcePropType> = {
  administrativo: require('../../../assets/images/workers/track-administrativo.png'),
  rh: require('../../../assets/images/workers/track-rh.png'),
  logistica: require('../../../assets/images/workers/track-logistica.png'),
  facilities: require('../../../assets/images/workers/track-facilities.png'),
  ti: require('../../../assets/images/workers/track-ti.png'),
};
