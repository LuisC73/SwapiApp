# SwapiApp 🚀

[![React Native](https://img.shields.io/badge/React%20Native-0.71-blue)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)
[![React Query](https://img.shields.io/badge/React%20Query-4.0%2B-orange)](https://tanstack.com/query/v4)

Aplicación móvil que consume la API SWAPI para mostrar personajes, películas y planetas de Star Wars, con soporte para tema oscuro/claro y navegación fluida.

## 📱 Capturas de Pantalla

| Modo Claro                      | Modo Oscuro                   |
| ------------------------------- | ----------------------------- |
| ![Light](https://github.com/user-attachments/assets/0f110bc9-a1cc-49bc-b8cc-c2ef2e8003ee) | ![Dark](https://github.com/user-attachments/assets/26526d09-664f-4c7d-a082-b0b92fa3a37b) |

## ✨ Características Principales

- **Integración con SWAPI**: Datos reales de Star Wars
- **Tema Dinámico**: Cambio entre modo claro/oscuro
- **Navegación Avanzada**: Stack + Bottom Tabs
- **Arquitectura Limpia**: Atomic Design + TypeScript
- **Renderizado Optimizado**: FlatList + React Query

## 🛠 Tecnologías Clave

| Tecnología          | Uso                         |
| ------------------- | --------------------------- |
| React Native CLI    | Base del proyecto           |
| TypeScript          | Tipado estático             |
| React Navigation v6 | Navegación                  |
| React Query v4      | Gestión de datos/cache      |
| Atomic Design       | Organización de componentes |
| SWAPI               | Fuente de datos             |

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone git@github.com:LuisC73/SwapiApp.git
```

2. Instala dependencias:

```bash
cd SwapiApp
npm install
# o
yarn install
```

3. Ejecuta en iOS/Android:

```bash
npx react-native run-android
# o
npx react-native run-ios
```

## 🏗 Estructura del Proyecto

```folder
src/
├── api/               # Llamadas a SWAPI
├── components/        # Componentes (Atomic Design)
│   ├── atoms
│   ├── molecules
│   └── organisms
│   └── templates
├── contexts/          # Contextos (Tema, etc.)
├── hooks/             # Hooks personalizados
├── navigation/        # Configuración de rutas
├── screens/           # Pantallas
├── styles/            # Estilos/themes
├── types/             # Tipos TypeScript
└── utils/             # Utilidades
```

## 📚 Documentación Adicional

- [SWAPI Documentation](https://swapi.py4e.com/documentation)

- [React Navigation Docs](https://reactnavigation.org/)

- [React Query Guide](https://tanstack.com/query/v4/docs/framework/react/overview)

🤝 Contribución

1. Haz fork del proyecto

2. Crea tu rama `(git checkout -b feature/nueva-funcionalidad)`

3. Haz commit de tus cambios `(git commit -m 'Add some feature')`

4. Haz push a la rama `(git push origin feature/nueva-funcionalidad)`

5. Abre un Pull Request

📄 Licencia

MIT © Luis Miguel Castro

## Autor

- Linkedin - [@luismiguelcc](https://www.linkedin.com/in/luismiguelcc/)
- Portafolio - [miguelcastroc.com](https://www.miguelcastroc.com/)
- Correo - [miguelcastroweb@gmail.com](mailto:miguelcastroweb@gmail.com)
