## Dockerrizing the Services
```cmd
docker build .
docker run imageID

docker build -t tuwnguyen/posts .
docker run -it tuwnguyen/posts sh
docker exec -it 9a0c73a964bc sh
docker logs 28e1f2b13a94
```