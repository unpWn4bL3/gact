FROM golang:1.18
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go env -w GOPROXY=https://goproxy.cn,direct
RUN go mod download
RUN go build -o /app/main
CMD ["/app/main"]
