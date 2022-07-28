dev:
	npm run dev:up
build:
	docker-compose -f docker-compose.dev.yml build --no-cache
