# Nginx Deployment Instructions

## Server Setup

1. Copy the configuration file to your server:
```bash
sudo cp airstars.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/airstars.conf /etc/nginx/sites-enabled/
```

2. Run the SSL setup script:
```bash
chmod +x ssl-setup.sh
sudo ./ssl-setup.sh
```

3. Test and reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Domain Configuration

Both domains will serve the same content:
- airstars.asia (primary)
- airstars.jp (secondary)

All www variants redirect to non-www versions.

## SSL Certificates

The configuration uses Let's Encrypt certificates for both domains. The SSL setup script will obtain certificates for all domain variants.