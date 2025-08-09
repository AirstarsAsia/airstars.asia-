#!/bin/bash

# SSL certificate setup for airstars domains
# Run this script on your server to obtain SSL certificates

# Install certbot if not already installed
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificates for both domains
sudo certbot --nginx -d airstars.asia -d www.airstars.asia -d airstars.jp -d www.airstars.jp

# Set up auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

echo "SSL certificates obtained and auto-renewal configured"