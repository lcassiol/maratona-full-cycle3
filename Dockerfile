FROM golang:1.14

WORKDIR /app

COPY hellogo.go ./

RUN go build hellogo.go

CMD ["./hellogo"]

