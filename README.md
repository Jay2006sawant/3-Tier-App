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