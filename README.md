## Dockerrizing the Services
```bash
docker build .
docker run imageID

docker build -t tuwnguyen/posts .
docker run -it tuwnguyen/posts sh
docker exec -it 9a0c73a964bc sh
docker logs 28e1f2b13a94
```

## K8s Services
```bash
kubectl version
kubectl apply -f posts.yaml
kubectl get pods
kubectl exec -it posts sh
kubectl describe pod posts
```
![alt text](README_IMG/image.png)
![alt text](README_IMG/image1.png)

Deployment
```bash
k apply -f posts-depl.yaml 
k apply -f . (apply all files)
k get deployments
k describe deployment posts-depl
k delete deployment posts-depl


```
![alt text](README_IMG/image2.png)

Update Deployment
```bash
kubectl rollout restart deployment posts-depl
```
![alt text](README_IMG/image3.png)
![alt text](README_IMG/image4.png)

Services
```bash
k get services
```
![alt text](README_IMG/image5.png)


Test communication between Services
![alt text](README_IMG/image6.png)


Install Ingress-Nginx

https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml
kubectl get ing
kubectl get services -n ingress-nginx

```
![alt text](README_IMG/image9.png)

Hosts File Tweak
```bash
code /etc/host
```
![alt text](README_IMG/image7.png)
![alt text](README_IMG/image8.png)