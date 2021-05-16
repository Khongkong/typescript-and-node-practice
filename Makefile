MAIN_SERVICE := ts-node
DB_SERVICE := mysql

# start a service
.PHONY: service.dev.up
service.dev.up:
	docker-compose up -d $(DB_SERVICE)
	sleep 10
	docker-compose up -d $(MAIN_SERVICE)

# start a service
.PHONY: service.prod.up
service.prod.up:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up ts-node

# close docker-compose
.PHONY: down
down:
	docker-compose down

