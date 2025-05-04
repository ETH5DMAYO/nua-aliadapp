# NUA: Plataforma Integral de Bienestar y Apoyo Inteligente

## Smart contract Address 
0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d



## Resumen

**NUA** es una plataforma digital que acompaña y preveé la violencia encontra de las mujeres a través de herramientas de bienestar, organización financiera y acompañamiento emocional, todo en un solo espacio seguro y personalizado. Incorpora un agente de IA conversacional, protocolos de emergencia y acceso a redes de apoyo, encontrar patrones y a diferencia de otros sistemas, es capaz de prevenir la violencia.

---


## Visión y Objetivos

- Apoya a las mujeres para gestionar su bienestar y finanzas de forma integral y segura.
- Proveer acompañamiento emocional y orientación práctica en momentos clave.
- Facilitar redes de apoyo y protocolos de emergencia.
- Usar IA para personalizar la experiencia y brindar respuestas útiles, empáticas y seguras.

---

## Características Principales

- **Onboarding interactivo**: Slides motivacionales y registro personalizado.
- **Chat con agente AI**: Asistente conversacional para dudas, apoyo emocional, organización y guía.
- **Soporte para texto, voz e imagen**: Interacción multimodal.
- **Protocolos de emergencia**: Acceso rápido a recursos y contactos de ayuda.
- **Organización financiera y bienestar**: Herramientas para planificar, registrar y reflexionar.
- **Modo seguro y privacidad**: Opciones de anonimato y protección de datos.

---

## Arquitectura General

```
Frontend (Next.js/React)
    |
    v
n8n (Orquestador de Flujos)
    |
    v
Modelo AI Local (Ollama/Llama3)
    |
    v
Servicios externos / Base de datos
```

---

## Stack Tecnológico

- **Frontend:** Next.js (React), TypeScript, TailwindCSS
- **Backend/Orquestador:** n8n
- **Agente AI:** Modelo Llama3 local vía Ollama
- **Base de datos:** (opcional) SQLite, PostgreSQL, etc.
- **Infraestructura:** Docker, Vercel (frontend), local o cloud para n8n y modelo AI

---

## Estructura del Proyecto

```
nua-app/
├── app/
│   ├── page.tsx              # Landing y Onboarding
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Estilos globales
│   └── ...                   # Otras páginas y rutas
├── components/
│   ├── onboarding-screen.tsx # Slides de bienvenida
│   ├── registration-form.tsx # Registro de usuario
│   ├── chat-input.tsx        # Entrada de chat
│   └── ...                   # Otros componentes
├── hooks/                    # Custom React hooks
├── public/                   # Imágenes y assets
└── ...
```

---

## Flujos Principales

### 1. Onboarding
- Slides informativos y motivacionales.
- Registro de usuario.

### 2. Chat con Agente AI
- El usuario puede enviar texto, voz o imagen.
- n8n recibe el mensaje, lo enruta según el tipo (texto, voz, imagen).
- El mensaje es procesado por el modelo AI local (Llama3/Ollama).
- La respuesta se envía de vuelta al usuario (texto o audio).

### 3. Emergencia
- Acceso rápido a protocolos y contactos de ayuda.

---

## Integración del Agente AI

- El agente AI corre localmente usando Ollama y el modelo Llama3.
- n8n se comunica con el modelo AI a través de un nodo HTTP Request:
  - **POST** a `http://localhost:11434/api/generate`
  - Body: `{ "model": "llama3", "prompt": "<mensaje del usuario>" }`
- El flujo de n8n permite fácilmente cambiar el modelo o agregar lógica adicional (memoria, contexto, etc).

---

## Seguridad y Privacidad

- **Datos sensibles:** Se manejan localmente y no se envían a servicios externos sin consentimiento.
- **Modo seguro:** Opciones de anonimato y eliminación de historial.
- **Infraestructura local:** El modelo AI y n8n pueden correr en la máquina del usuario para mantener la privacidad de nuestros usuarios.

---

## Roadmap

- Mejorar la personalización del agente AI.
- Integrar notificaciones push y recordatorios.
- Añadir módulos de organización financiera y bienestar.
- Escalar la infraestructura para uso multiusuario.
- Certificar la app en temas de privacidad y seguridad.

---

