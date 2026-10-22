import { View, type ViewProps } from 'react-native'; // view: container for all screens, automatically applies background color based on theme
                                                      // ViewProps: type for the props that can be passed to the View component

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
};

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();  //useTheme retrieves the current theme (light or dark) and returns the corresponding color values

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}
