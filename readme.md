Here's the updated version of your setup instructions in English and formatted in Markdown for your `README` file:

# Medusa E-commerce Project Setup (2024)

This guide provides step-by-step instructions for setting up the Medusa E-commerce platform using Docker, including the backend and storefront.

## Prerequisites

- Docker
- Docker Compose

## Environment Setup (Initial Script)

First, run the following script to install Docker and Docker Compose on your machine:

```bash
#!/bin/bash

# Update and install dependencies
sudo apt-get update
sudo apt-get install -y git
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# Install Docker GPG key and repository
sudo mkdir -p /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker and Docker Compose
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## 1. Clone the repository

Clone the Medusa E-commerce repository to your local machine:

```bash
cd ~
mkdir medusa-project
cd medusa-project
sudo git clone https://github.com/bulan506/e-commerceMedusa.git
```

## 2. Create the `.env` file

Navigate to the project directory and create the `.env` file:

```bash
cd e-commerceMedusa
sudo touch .env
```

## 3. Set up `.env` variables

After creating the `.env` file, edit it with the appropriate values:

```bash
# Open the .env file for editing
sudo nano .env
```

Add and configure the following variables:

```bash
# .env file example

IP_ADDRESS=PUBLIC_IP
JWT_SECRET=my_secretjhbgjhklhgyuFYUGHIGUFYTjhkyt
DATABASE_URL=postgres://TEST:TESTTEST@34.122.99.107:5432/medusa_db
MEDUSA_API_KEY=pk_01JBB9STPSNXS0ZGFEQ7VDGB5T
```

- **IP_ADDRESS**: Your public server IP address.
- **JWT_SECRET**: A secret key for JWT (JSON Web Token) authentication. Generate your own secure string.
- **DATABASE_URL**: The connection string for your PostgreSQL database. Replace `<DB_USER>`, `<DB_PASSWORD>`, `<DB_IP>`, and `<DB_NAME>` with your actual database credentials.
- **MEDUSA_API_KEY**: The API key for Medusa. You can obtain it from your Medusa admin panel.

## 4. Build and run with Docker

First, validate your `docker-compose.yml` configuration:

```bash
sudo docker-compose config
```

Then, build and start the containers:

```bash
sudo docker-compose up --build
```

## 5. Access the applications

Once the containers are running, you can access the following applications in your browser:

- **Storefront**: [http://<YOUR_PUBLIC_IP>:8100](http://<YOUR_PUBLIC_IP>:8000)
- **Admin Panel**: [http://<YOUR_PUBLIC_IP>:7700](http://<YOUR_PUBLIC_IP>:7001)
- **Backend API**: [http://<YOUR_PUBLIC_IP>:9000](http://<YOUR_PUBLIC_IP>:9000)

Make sure the respective ports (8000, 7001, and 9000) are open and accessible on your firewall.

## Optional: Verify Docker Installation

You can check if Docker and Docker Compose are installed correctly by running:

```bash
sudo docker --version
sudo docker-compose --version
```
