# Backend Monitoring Setup

This repository contains a simple Express backend. The instructions below show how to monitor it using **Prometheus**, **Grafana**, and **Loki**. All services are orchestrated with **Docker Compose** so you can launch the entire stack with a single command.

## Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

## Running the stack

1. Clone this repository and navigate into it.
2. Run:

   ```bash
   docker compose up -d
   ```

   This builds the backend image and starts Prometheus, Grafana, Loki, and Promtail alongside it.

3. Access the services:

   - **Backend API**: <http://localhost:4000/api/users>
   - **Prometheus**: <http://localhost:9090>
   - **Grafana**: <http://localhost:3000> (default credentials: `admin` / `admin`)
   - **Loki**: <http://localhost:3100>

4. In Grafana, add Prometheus and Loki as data sources using the above URLs. You can then create dashboards to visualize metrics and logs.

## Configuration files

- `docker-compose.yml` – defines all services.
- `prometheus.yml` – Prometheus scraping configuration.
- `promtail-config.yml` – Promtail configuration for forwarding logs to Loki.

## Metrics endpoint

The backend exposes a basic metrics endpoint at `/metrics` which reports process uptime and memory usage. Prometheus is configured to scrape this endpoint every 15 seconds.

```bash
curl http://localhost:4000/metrics
```

You can extend `index.js` to provide more detailed metrics or structured logging depending on your requirements.

