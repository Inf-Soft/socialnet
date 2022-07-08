up:
	docker-compose up -d --force-recreate

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .