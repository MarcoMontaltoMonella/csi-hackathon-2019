#!/bin/bash

# Loading global vars
source leolabs-api-keys
source endpoints


# Getting measurements for obj with catalogNumber: L72 (ISS ZARYA module)

# Yesterday's
# ISO-8601 format (example: 2017-03-17)
YESTERDAY_DATE=$(date -v-1d +%Y-%m-%d)

# curl -H "Authorization: basic $LEOLABS_ACCESS_KEY:$LEOLABS_SECRET_KEY" "$LEOLABS_API/catalog/objects/L72/measurements?date=$YESTERDAY_DATE" | json_pp

# Most recent mesurement
# curl -H "Authorization: basic $LEOLABS_ACCESS_KEY:$LEOLABS_SECRET_KEY" "$LEOLABS_API/catalog/objects/L72/measurements/last" | json_pp

# Most recent mesurement statistics
# curl -H "Authorization: basic $LEOLABS_ACCESS_KEY:$LEOLABS_SECRET_KEY" "$LEOLABS_API/catalog/objects/L72/statistics/aggregate" | json_pp

# Retrive state vector from most recent mesurement statistics
curl -H "Authorization: basic $LEOLABS_ACCESS_KEY:$LEOLABS_SECRET_KEY" "$LEOLABS_API/catalog/objects/L72/states?date=$YESTERDAY_DATE" | json_pp

# Retrieve specific state vector
# curl -H "Authorization: basic $LEOLABS_ACCESS_KEY:$LEOLABS_SECRET_KEY" "$LEOLABS_API/catalog/objects/L72/states/105" | json_pp
