generate-sdk:
	openapi-generator generate -i https://raw.githubusercontent.com/etcaterva/eas-backend/master/swagger.yaml -g javascript -o src/services/api/client/ -c codegen_options.json
