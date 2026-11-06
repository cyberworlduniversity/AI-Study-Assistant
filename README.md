# AI Study Assistant — StudyMate

A focused, English-only study assistant with a new responsive chat-first interface.

## Current implementation

- New lightweight study workspace; the previous marketing sections, demo login/register, quizzes and hard-coded Q&A UI are removed.
- Modes for concept explanations, Mermaid flowcharts and programming help.
- Compact SmolLM2 135M instruct model loaded in the browser through Transformers.js v3.
- No application backend, database, login system or API key.
- Markdown output is sanitized before rendering. Mermaid diagrams use strict security mode.
- Responsive layout for mobile and desktop.

## Model and runtime

The browser downloads the quantized model files from the public Hugging Face model repository on first use and uses browser caching where supported. This is a small open pretrained model, **not a model trained from scratch by this repository**. It is a lightweight prototype and will be less capable than large hosted assistants. Device memory, browser support and initial download speed affect performance.

## Data and privacy

The app does not save conversations to a server or database. Do not enter private or sensitive information. The model files are fetched from the model host; the app source is stored in this GitHub repository.

## Run locally

Serve the repository root with any static HTTP server and open the site in a modern browser. A local server is recommended because the application uses JavaScript modules.

## Next validation

1. Confirm the Vercel preview builds from this branch.
2. Test model download and inference on Android Chrome and desktop Chrome.
3. Validate Mermaid output and malformed model responses.
4. Measure actual model download size, memory use and response latency on target devices.
5. Only after these checks, consider a separately trained compact study model and decide where to host its weights.
