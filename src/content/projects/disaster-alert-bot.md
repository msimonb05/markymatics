---
title: 'DisasterAlertBot: Local Disaster Preparedness Chatbot'
short: DisasterAlertBot
tagline: A locally hosted AI chatbot that answers disaster-preparedness questions for the Philippines.
role: Lead Developer
period: Nov – Dec 2025
sort: 202511
group: led
led: Scope and research for a five-document knowledge base compiled from government and NGO sources, including emergency hotlines for 146 cities.
built: A retrieval-augmented generation (RAG) chatbot running Llama 3.2 through Ollama, LangChain and Hugging Face, with a Flask and FastAPI back end that adds live OpenWeatherMap and Serper data, packaged with Docker.
stack: [Python, Llama 3.2, Ollama, LangChain, Hugging Face, Flask, FastAPI, Docker]
github: https://github.com/msimonb05/disaster-alert-bot
---

## The problem

The Philippines faces frequent typhoons, earthquakes and floods, yet preparedness information is spread across many government and NGO documents. In an emergency, people need answers quickly and for their own location.

## What I did

I compiled and structured a knowledge base of five documents from government and NGO sources, covering emergency hotlines for 146 cities, regional evacuation sites, and guides for natural and man-made hazards. I then built a chatbot that answers questions through retrieval-augmented generation over that knowledge base, running Llama 3.2 locally through Ollama together with LangChain and Hugging Face.

A Flask and FastAPI back end connects the model to live data from OpenWeatherMap and Serper, so answers can include location-based alerts, emergency contacts and evacuation guidance. The application is containerized with Docker.

## Outcome

A working chatbot that runs on local hardware and answers from the verified sources in its knowledge base.
