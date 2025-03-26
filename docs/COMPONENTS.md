# Documentación de Componentes

## Componente `Button`

El componente Button es un átomo que representa un botón interactivo en la aplicación. Maneja estados de presión y se adapta al tema actual (claro/oscuro).

### Ubicación

`src/components/atoms/Button.tsx`

### Props

```typescript
export interface ButtonProps {
  width?: DimensionValue;
  text: string;
  onPress: () => void;
}
```

- `width`: Ancho personalizado del botón (Opcional).
- `text`: Texto a mostrar en el botón.
- `onPress`: Función llamada al presionar el botón.

### Uso Básico

```typescript
import {Button} from '../components';

function MyScreen() {
  const handlePress = () => {
    console.log('Botón presionado');
  };

  return <Button text="Presionar" onPress={handlePress} />;
}
```

## Componente `Icon`

El componente Icon es un átomo que muestra iconos vectoriales utilizando la biblioteca Font Awesome. Permite una fácil integración y personalización de iconos en toda la aplicación.

### Ubicación

`src/components/atoms/Icon.tsx`

### Props

```typescript
export interface IconProps {
  name: IconProp;
  size?: number;
  color?: string;
}
```

- `name`: Nombre del icono a mostrar (requerido). Los iconos disponibles están definidos en la librería.
- `size`: Tamaño del icono en pixels (opcional, por defecto 16).
- `color`: Color del icono (opcional, por defecto 'black').

### Iconos Disponibles

El componente incluye previamente estos iconos de Font Awesome:

- house (Inicio)

- search (Búsqueda)

- moon (Luna - modo oscuro)

- sun (Sol - modo claro)

### Uso Básico

```typescript
import {Icon} from '../components';

function MyComponent() {
  return (
    <View>
      <Icon name="house" size={24} color="#333" />
      <Icon name="search" />
    </View>
  );
}
```

## Componente `Input`

El componente Input es un átomo que proporciona un campo de texto personalizable que se adapta al tema actual (claro/oscuro) de la aplicación.

### Ubicación

`src/components/atoms/Input.tsx`

### Props

```typescript
export interface InputProps {
  width?: DimensionValue;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}
```

- `width`: Ancho personalizado del input (Opcional).
- `placeholder`: Texto de placeholder que aparece cuando el input está vacío.
- `value`: Valor actual del input.
- `onChangeText`: Función que se ejecuta cuando el texto cambia.

### Uso Básico

```typescript
import {Input} from '../components';
import {useState} from 'react';

function MyForm() {
  const [text, setText] = useState('');

  return (
    <Input placeholder="Escribe algo..." value={text} onChangeText={setText} />
  );
}
```

## Componente `Logo`

El componente Logo es un átomo que muestra el logo de la aplicación con versión adaptada para los temas claro y oscuro.

### Ubicación

`src/components/atoms/Logo.tsx`

### Props

Este componente no recibe props actualmente.

### Uso Básico

```typescript
import {Logo} from '../components';

function Header() {
  return (
    <View>
      <Logo />
    </View>
  );
}
```

## Componente `ButtonIcon`

El componente ButtonIcon es una molécula que combina un Icon dentro de un Button interactivo, creando un botón con icono que se adapta al tema actual.

### Ubicación

`src/components/molecules/ButtonIcon.tsx`

### Props

```typescript
export interface ButtonIconProps {
  icon: IconProps;
  onPress: () => void;
}
```

- `icon`: Propiedades del icono a mostrar (objeto que contiene name, size y color).
- `onPress`: Función llamada al presionar el botón.

### Uso Básico

```typescript
import {ButtonIcon} from '../components';

function MyComponent() {
  const handlePress = () => {
    console.log('Botón de icono presionado');
  };

  return <ButtonIcon icon={{name: 'search', size: 24}} onPress={handlePress} />;
}
```

## Componente `Card`

El componente Card es una molécula que proporciona un contenedor estilizado para agrupar contenido relacionado, con soporte para un título opcional y contenido personalizable.

### Ubicación

`src/components/molecules/Card.tsx`

### Props

```typescript
export interface CardProps {
  title?: string;
  children: React.ReactNode;
}
```

- `title`: Título opcional de la tarjeta (si no se proporciona, no se renderiza).
- `children`: Contenido principal de la tarjeta (componentes hijos).

### Uso Básico

```typescript
import {Card} from '../components';
import {Text} from 'react-native';

function UserProfile() {
  return (
    <Card title="Perfil de Usuario">
      <Text>Nombre: John Doe</Text>
      <Text>Email: john@example.com</Text>
      <Text>Ubicación: Nueva York</Text>
    </Card>
  );
}
```

## Componente `SearchInput`

El componente SearchInput es una molécula que combina un campo de búsqueda (Input) con un botón de acción (Button) en un diseño horizontal responsivo.

### Ubicación

`src/components/molecules/SearchInput.tsx`

### Props

```typescript
export interface SearchInputProps {
  input: InputProps;
  button: ButtonProps;
}
```

- `input`: Todas las propiedades del componente Input (value, onChangeText, placeholder, etc.)
- `button`: Todas las propiedades del componente Button (text, onPress, etc.)

### Uso Básico

```typescript
import {SearchInput} from '../components';
import {useState} from 'react';

function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Buscar:', searchText);
  };

  return (
    <SearchInput
      input={{
        placeholder: 'Buscar personajes...',
        value: searchText,
        onChangeText: setSearchText,
      }}
      button={{
        text: 'Buscar',
        onPress: handleSearch,
      }}
    />
  );
}
```

## Componente `ThemeToggle`

El componente ThemeToggle es una molécula que permite alternar entre los temas claro y oscuro de la aplicación mediante un botón de icono interactivo.

### Ubicación

`src/components/molecules/ThemeToggle.tsx`

### Props

Este componente no recibe props actualmente, ya que obtiene todo lo necesario del contexto de tema.

### Uso Básico

```typescript
import {ThemeToggle} from '../components';

function SettingsScreen() {
  return (
    <View>
      <Text>Configuración de apariencia</Text>
      <ThemeToggle />
    </View>
  );
}
```

## Componente `TouchableCard`

El componente TouchableCard es una molécula que extiende la funcionalidad del componente Card básico añadiendo un botón interactivo para acciones.

### Ubicación

`src/components/molecules/TouchableCard.tsx`

### Props

```typescript
export interface TouchableCardProps extends CardProps {
  onPress: () => void;
}
```

- `title`: Título opcional de la tarjeta.
- `children`: Contenido principal de la tarjeta.
- `onPress`: Función llamada al presionar el botón.

### Uso Básico

```typescript
import {TouchableCard} from '../components';
import {Text} from 'react-native';

function CharacterList({character, onDetailsPress}) {
  return (
    <TouchableCard
      title={character.name}
      onPress={() => onDetailsPress(character.id)}>
      <Text>Género: {character.gender}</Text>
      <Text>Año de nacimiento: {character.birth_year}</Text>
    </TouchableCard>
  );
}
```

## Componente `Header`

El componente Header es un organismo que representa la cabecera de la aplicación, combinando múltiples moléculas y átomos en una estructura compleja.

### Ubicación

`src/components/organisms/Header.tsx`

### Props

Este componente actualmente no acepta props, ya que su contenido es fijo.

### Uso Básico

```typescript
import {Header} from '../components';
import {View} from 'react-native';

function AppLayout() {
  return (
    <View style={{flex: 1}}>
      <Header />
      {/* Resto del contenido */}
    </View>
  );
}
```

## Componente `ThemedApp`

La plantilla ThemedApp es el componente de nivel superior que envuelve toda la aplicación, proporcionando:

1. Configuración del tema global

2. Seguridad para áreas no seguras (notch, etc.)

3. Configuración de la barra de estado

4. Contenedor de navegación

### Ubicación

`src/components/templates/ThemedApp.tsx`

### Props

Este componente actualmente no acepta props

### Integración con el Tema

El componente utiliza:

- useTheme(): Para determinar el tema actual

- DarkTheme/DefaultTheme: Temas de React Navigation

- Configuración dinámica de StatusBar

### Uso Básico

```typescript
import {ThemedApp} from '../components';

// En el punto de entrada de la aplicación (App.tsx o similar)
export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
```
