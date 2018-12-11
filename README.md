# nodejs perf test
## run:
node app.js

## result of load test of 1000 concurrent request at time:

```
ab -n 100000 -c 1000 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   8.558 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      21200000 bytes
HTML transferred:       1300000 bytes
Requests per second:    11685.18 [#/sec] (mean)
Time per request:       85.578 [ms] (mean)
Time per request:       0.086 [ms] (mean, across all concurrent requests)
Transfer rate:          2419.20 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   52 220.3      2    1035
Processing:     4   30  36.5     27     866
Waiting:        3   23  35.7     20     858
Total:          6   82 237.0     28    1883

Percentage of the requests served within a certain time (ms)
  50%     28
  66%     31
  75%     33
  80%     34
  90%     38
  95%    149
  98%   1056
  99%   1072
 100%   1883 (longest request)
 ```
