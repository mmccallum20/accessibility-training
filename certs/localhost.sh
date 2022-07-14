#!/bin/bash
output_id=dev
openssl genrsa -out $output_id-ca.key 4096
openssl req -x509 -new -nodes -key $output_id-ca.key -sha256 -days 365 -out $output_id-ca.crt -subj /C=GB/ST=/L=London/O=/OU=/CN=DevCA
openssl genrsa -out $output_id.key 4096
openssl req -new -key $output_id.key -config config.cnf -out $output_id.csr
openssl x509 -req -in $output_id.csr -CA $output_id-ca.crt -CAkey $output_id-ca.key -CAcreateserial -out $output_id.crt -days 365 -sha256 -extfile config.cnf -extensions req_ext
rm *.csr
rm *.srl
rm $output_id-ca.key