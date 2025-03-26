# Sistema de Diseño

## Esquema de Colores

- Modo Claro

```typescript
export const lightColors = {
  background: '#ffffff', // Fondo blanco
  text: '#2c3e50', // Texto azul oscuro
  placeholder: '#6B7280', // Placeholder gris medio
  error: '#DC2626', // Rojo para errores
  info: '#3B82F6', // Azul para información
  primary: '#000', // Negro para elementos primarios
  secondary: '#00000060', // Negro semitransparente para secundarios
};
```

- Modo Oscuro

```typescript
export const darkColors = {
  background: '#121212', // Fondo negro oscuro
  text: '#ecf0f1', // Texto blanco grisáceo
  placeholder: '#d5d7db', // Placeholder gris claro
  error: '#F87171', // Rojo claro para errores
  info: '#93C5FD', // Azul claro para información
  primary: '#E4AD19', // Amarillo dorado para elementos primarios
  secondary: '#E4AD1960', // Amarillo dorado semitransparente para secundarios
};
```

## Extras

- Espaciado

```typescript
export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};
```

## Hook `useThemeStyles`

Este hook centraliza todos los estilos y colores de la aplicación, proporcionando acceso consistente al tema actual (claro/oscuro) y a los estilos globales.

### Implementación

```typescript
import {StyleSheet} from 'react-native';
import {darkColors, lightColors, spacing} from '../styles/theme';
import {useTheme} from './useTheme';

export const useThemeStyles = () => {
  const {theme} = useTheme();
  const colors = theme === 'dark' ? darkColors : lightColors;

  return {
    colors: colors,
    spacing: spacing,
    globalStyles: StyleSheet.create({
      // Estilos globales definidos aquí
    }),
  };
};
```

### Uso en Componentes

```typescript
import {useThemeStyles} from '../hooks/useThemeStyles';

function MyComponent() {
  const {colors, globalStyles} = useThemeStyles();

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Título</Text>
      <Text style={globalStyles.text}>Contenido normal</Text>
    </View>
  );
}
```

### Combinación con Estilos Locales

```typescript
function CustomButton() {
  const {colors, globalStyles, spacing} = useThemeStyles();

  const localStyles = StyleSheet.create({
    button: {
      padding: spacing.md,
      borderRadius: 8,
      backgroundColor: colors.primary,
    },
  });

  return (
    <TouchableOpacity style={localStyles.button}>
      <Text style={globalStyles.buttonText}>Presionar</Text>
    </TouchableOpacity>
  );
}
```

## Estructura de Componentes (Atomic Design)

1.  Átomos

- Ubicación: `src/components/atoms`

- Responsabilidad: Componentes UI más básicos (Botones, Textos, Inputs)

- Requisitos:

  - Deben ser independientes

  - No contener lógica de negocio

  - Tipos en `src/types/components.ts`

2. Moléculas

- Ubicación: `src/components/molecules`

- Responsabilidad: Combinación de átomos (Formularios, Cards)

- Requisitos:

  - Pueden contener estado interno simple

  - Tipos en `src/types/components.ts`

3. Organismos

- Ubicación: `src/components/organisms`

- Responsabilidad: Componentes complejos (Headers, Listados)

- Requisitos:

  - Pueden consumir hooks de negocio

  - Tipos en `src/types/components.ts`

4. Plantillas

- Ubicación: `src/components/templates`

- Responsabilidad: Diseño de páginas completas

- Requisitos:

  - Definir estructura de layout

  - Tipos en `src/types/components.ts`
