# 3-Tier App on Minikube with Ingress

## Overview
This project demonstrates a 3-tier application deployed on Kubernetes (Minikube) with Ingress, Helm, and monitoring using Prometheus and Grafana.

### Architecture
- **Frontend**: User interface (e.g., React, Angular, or simple static site)
- **Backend**: API server (e.g., Node.js, Python Flask)
- **Database**: Persistent data storage (e.g., MySQL, PostgreSQL)

### Features
- Kubernetes manifests for each tier
- Ingress for unified access
- Helm chart for microservice deployment
- Prometheus and Grafana for monitoring

## Project Structure
- `frontend/` - Frontend application
- `backend/` - Backend API service
- `database/` - Database manifests/configs
- `charts/` - Helm charts
- `monitoring/` - Prometheus & Grafana setup

## Getting Started
Instructions will be provided as the project progresses.

## Monitoring with Prometheus and Grafana

1. Add the Helm stable repo if you haven't:
   ```sh
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm repo add grafana https://grafana.github.io/helm-charts
   helm repo update
   ```

2. Install Prometheus:
   ```sh
   helm install prometheus prometheus-community/prometheus -f monitoring/prometheus-values.yaml
   ```

3. Install Grafana:
   ```sh
   helm install grafana grafana/grafana -f monitoring/grafana-values.yaml
   ```

4. Access Grafana:
   - Get the NodePort: `kubectl get svc grafana`
   - Default login: `admin` / `admin`

### Importing Example Grafana Dashboard

1. Open Grafana in your browser.
2. Go to 'Dashboards' > 'Import'.
3. Upload `monitoring/grafana-dashboard.json` or paste its contents.
4. Select your Prometheus data source and import.

### Custom Prometheus Scrape Configs

- To use custom scrape configs, mount `monitoring/prometheus-additional-scrape-configs.yaml` into your Prometheus deployment as additional scrape configs.
- See Prometheus Helm chart documentation for details on `additionalScrapeConfigs`.

## Prerequisites
- Docker
- Minikube
- kubectl
- Helm

## Build Docker Images
Build and tag the images for frontend and backend:

```sh
cd frontend
docker build -t frontend:latest .
cd ../backend
docker build -t backend:latest .
```

## Load Images into Minikube
If using Minikube, load the images:

```sh
minikube image load frontend:latest
minikube image load backend:latest
```

## Deploy to Kubernetes
Apply manifests for database, then use Helm for backend, and manifests for frontend:

```sh
kubectl apply -f database/
helm install backend charts/backend
kubectl apply -f frontend/
```

## Set Up Ingress
Enable Ingress in Minikube and apply the Ingress manifest:

```sh
minikube addons enable ingress
kubectl apply -f frontend/frontend-ingress.yaml
```

Add `3tier.local` to your hosts file pointing to Minikube IP.

## Access the App
Visit http://3tier.local/ in your browser.

## Monitoring
See the Monitoring section above for Prometheus and Grafana setup. 