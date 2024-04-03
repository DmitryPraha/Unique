import { useAppData } from '@/ssr/useAppData';

const useFeatures = (feature: string, defaultValue = false) => {
    return useAppData().features[feature] || defaultValue;
};

export { useFeatures };
