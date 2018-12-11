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
Time taken for tests:   7.279 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      14800000 bytes
HTML transferred:       1300000 bytes
Requests per second:    13737.29 [#/sec] (mean)
Time per request:       72.795 [ms] (mean)
Time per request:       0.073 [ms] (mean, across all concurrent requests)
Transfer rate:          1985.47 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   43 201.6      2    1039
Processing:     8   25  28.9     23     853
Waiting:        2   19  28.4     16     844
Total:         10   69 214.1     24    1874

Percentage of the requests served within a certain time (ms)
  50%     24
  66%     27
  75%     28
  80%     29
  90%     32
  95%     39
  98%   1050
  99%   1059
 100%   1874 (longest request)
```
