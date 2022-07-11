prod:
	docker-compose up -d --force-recreate

dev:
	docker compose -f docker-compose-dev.yml up --force-recreate

test:
	docker compose -f docker-compose-test.yml up --force-recreate

down:
	docker compose down

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .