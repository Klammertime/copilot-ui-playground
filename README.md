# AG-UI CopilotKit Test Project

A test implementation of CopilotKit with LangGraph integration, exploring AI-assisted user interfaces. This project serves as a proof of concept for building agentic copilots using modern AI frameworks.

![Demo Screenshot](./public/demo-screenshot.png)

The demo shows a simple proverbs page with an integrated weather widget, showcasing CopilotKit's ability to handle both static content and dynamic data fetching.

## Tech Stack

- Next.js
- CopilotKit
- LangGraph
- Tailwind CSS

## Purpose

This repository explores the integration of AI assistance directly into web applications, testing the capabilities of:

- Human-in-the-loop AI interactions
- Real-time state management between UI and AI
- Modern UI patterns for AI interfaces

## Getting Started

### 1. Environment Setup

Add your API keys to the existing `.env` files:

In `/agent/.env`:

```
OPENAI_API_KEY=your_openai_api_key_here
```

In `/src/app/.env`:

```
LANGGRAPH_DEPLOYMENT_URL=http://localhost:8123  # This matches the local LangGraph server you'll run in step 2
```

### 2. Start the LangGraph Server

```bash
cd agent
npm install
npm run dev
```

This starts the LangGraph server on http://localhost:8123 (matching the URL in your `.env`). You can view the LangGraph Studio UI at https://smith.langchain.com/studio?baseUrl=http://localhost:8123

### 3. Start the Next.js App

In a new terminal:

```bash
# From the root directory
npm install
npm run dev
```

## Features

- 🤖 AI-powered responses using CopilotKit
- 🌡️ Real-time weather data integration
- 💅 Modern UI with Tailwind CSS
- 🔄 Dynamic content generation

## Project Structure

- `/agent` - LangGraph agent implementation
- `/src` - Next.js application code
  - `/app` - Next.js app router pages and API routes
  - `/lib` - Shared utilities and helpers

## Status

🧪 This is a test/experimental project for learning and evaluation purposes.

## Note

This is a test implementation to evaluate CopilotKit's capabilities. Not intended for production use.
