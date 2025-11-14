#!/bin/bash

client_id="e063c6224f3044e1bf137937f79a2d64"
client_secret="d37c2e518dd644f9b425d1a1ea6b1e05"

echo "Gerando token Spotify..."
auth=$(printf "%s" "$client_id:$client_secret" | base64 -w 0)

response=$(curl -s -X POST "https://accounts.spotify.com/api/token" \
  -H "Authorization: Basic $auth" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials")

echo
echo "Resposta da API:"
echo "$response"
echo
!
token=$(echo "$response" | grep -o '"access_token":"[^"]*"' | cut -d':' -f2 | tr -d '"')

if [ -n "$token" ]; then
    echo "$token" > spotify_token.txt
    echo "✅ Seu token Spotify é:"
    echo "$token"
    echo
    echo "Esse token vale por 1 hora. Copie e use no seu código JS!"
else
    echo "❌ Erro: não foi possível gerar o token. Veja a resposta acima."
fi


# chmod +x gerar_token_spotify.sh
# ./gerar_token_spotify.sh
