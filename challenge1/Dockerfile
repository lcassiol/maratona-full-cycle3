FROM golang:alpine as builder

RUN mkdir /build
ADD . /build/
WORKDIR /build
RUN go build -o hellogo

FROM alpine

RUN adduser -S -D -H -h /app appuser
USER appuser
COPY --from=builder /build/hellogo /app/
WORKDIR /app
CMD ["./hellogo"]

