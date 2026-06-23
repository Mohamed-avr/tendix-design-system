# Tendix — React Native / Expo

React Native Paper adapters for the Tendix design system.
Same tokens, same API surface as the web components — just swap JSX for RN StyleSheet.

## Requirements

```bash
npx expo install react-native-paper expo-font @expo/vector-icons
# or:
npm install react-native-paper
```

## 1. Load fonts (expo-font)

Tendix uses **Urbanist** (brand / UI) and **Inter** (data). Load them in your root layout:

```tsx
// app/_layout.tsx  (Expo Router) or App.tsx
import { useFonts } from 'expo-font';
import { Urbanist_400Regular, Urbanist_600SemiBold, Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Urbanist: Urbanist_400Regular,
    'Urbanist-SemiBold': Urbanist_600SemiBold,
    'Urbanist-Bold': Urbanist_700Bold,
    Inter: Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;
  return <Layout />;
}
```

## 2. Wrap your app with PaperProvider

```tsx
import { PaperProvider } from 'react-native-paper';
import { studentTheme } from './react-native/theme'; // or profsTheme / adminTheme

export default function App() {
  return (
    <PaperProvider theme={studentTheme}>
      <YourApp />
    </PaperProvider>
  );
}
```

## 3. Use the components

```tsx
import { TxButton, TxInput, TxCard, TxBadge, TxStatusBadge, TxBottomNav } from './react-native';

export function ClassScreen() {
  return (
    <TxCard>
      <TxStatusBadge status="attended" />
      <TxInput label="Student ID" placeholder="22-0001" />
      <TxBadge color="accent">L3 · A6</TxBadge>
      <TxButton onPress={() => {}}>Find the class</TxButton>
    </TxCard>
  );
}
```

## 4. Role theming

Each university role has its own accent color. Pass `role` to individual components,
or wrap a whole screen with the role-specific PaperProvider theme:

```tsx
import { getThemeForRole } from './react-native/theme';

// Per-screen role theme
<PaperProvider theme={getThemeForRole('student')}>
  <StudentHome />
</PaperProvider>

// Per-component role
<TxButton role="admin" color="accent">Approve</TxButton>
```

## 5. Using tokens directly

For custom components, import tokens directly:

```tsx
import { Colors, Space, Radius, Shadow, FontFamily } from './react-native/tokens';

const styles = StyleSheet.create({
  panel: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xxl,       // 24px — card radius
    padding: Space[5],              // 20px
    ...Shadow.card,
  },
  heading: {
    fontFamily: FontFamily.ui,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textStrong,
  },
});
```

## Component map — Web → React Native

| Web (window.DesignSystem_83ace9) | React Native |
|---|---|
| `<Button>` | `<TxButton>` |
| `<Input>` | `<TxInput>` |
| `<Card>` | `<TxCard>` |
| `<Badge>` | `<TxBadge>` |
| `<StatusBadge>` | `<TxStatusBadge>` |
| `<BottomNav>` | `<TxBottomNav>` |
| CSS `var(--tx-*)` | `Colors.*` / `Space.*` / `Radius.*` |
| `data-role="student"` | `getThemeForRole('student')` |

## File structure

```
react-native/
  tokens.ts              # all design tokens as JS constants
  theme.ts               # React Native Paper MD3 theme
  index.ts               # barrel export
  components/
    Button.tsx
    Input.tsx
    Card.tsx
    Badge.tsx
    StatusBadge.tsx
    BottomNav.tsx
  README.md              # this file
```
