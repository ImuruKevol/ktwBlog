sudo firewall-cmd --permanent --zone=public --add-port=3001/tcp
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp
sudo systemctl restart firewalld
