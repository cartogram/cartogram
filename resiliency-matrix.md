Matrix

- take time to understand the

* Ask to clarify the degradation
* are you in a sitation being down is that going to overload the DB? Ecessive calls to memcache
* why does the shipping rates cache cause the entire app to be down. If this si a cache why does tha information exist somewhere that can be quried.
* Why does shopify shipping being slow impact memcache slow
* why does all the things down be down and not degraded
* A gameday should be 1:1 with the matrix services
* Using the toxiproxy thing they can impact on teh slow external services
* No test on redis issues
* Are you game daying the shipping rates cache
* Anyone alerted anyone paged.

for geekbot tommorow

- upgraded polaris icons fixed ci in shopstatus
- chatted with larissa grant about notifications

* Larissa follow up
* Kirs follow up

look at the failure rows
mysql is just a thing that fails
if in the degraded state, it is fair to ask for more details here? There are many degrees of degraded, acceptable vs not-acceptable.
The gameday might be more important because you can see what alerts go off and what not
Look for use cases with toxi proxy otherwise defer to them

Run with them
