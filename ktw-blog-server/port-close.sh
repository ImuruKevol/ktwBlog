sudo firewall-cmd --permanent --zone=public --remove-port=3001/tcp
sudo firewall-cmd --permanent --zone=public --remove-port=8080/tcp
sudo systemctl restart firewalld
