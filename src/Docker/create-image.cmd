docker build --no-cache -f SQL\Dockerfile.PostgreSql -t rental_service/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t rental_service/app ../..
