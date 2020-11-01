# Fire Cheatsheet

https://docs.google.com/document/d/1dkH0IQQWn95BhsmNNiC0wfbasrAfC1K-lAnIqcj2I58/edit#heading=h.deu80o5ht2wv

**General**

- [Flash dash](https://shopify.datadoghq.com/dashboard/mjq-zuz-jyf/flash-dash?from_ts=1601499610630&is_auto=false&live=true&page=0&to_ts=1601503210630&tpl_var_shard=%2A)
- [IMOC duties](https://development.shopify.io/engineering/production/incident_management/participating/imoc_duties/)

**Core**

- [Bugsnag](https://app.bugsnag.com/shopify/shopify-production/timeline?filters[event.since][0]=1h)
- [Profiling](https://development.shopify.io/engineering/production/performance/profiling)

**Master DB**

- [Check proxy sequel connections](https://shopify.datadoghq.com/dashboard/gr6-5dw-t9r/proxysql-cloud?from_ts=1601502451470&live=true&to_ts=1601503351470&tpl_var_shard=m)

**Splunk**

https://shopify.datadoghq.com/dashboard/p82-nfd-czn/shopify-storefront?from_ts=1597881770853&live=true&to_ts=1597885370853
https://shopify.datadoghq.com/dashboard/xy5-7p8-avx/mysql-by-shard?from_ts=1598312482820&live=true&to_ts=1598316082820&tpl_var_pod_id=%2A
https://shopify.datadoghq.com/dashboard/fir-gzq-irg/pod-impact?from_ts=1602035592180&live=true&to_ts=1602039192180
shop pulse:
https://sh.splunk.shopifysvc.com/en-GB/app/search/shop_pulse?form.shop_id=1566146&form.pod_id=%2A&form.date_range_token.earliest=-15m&form.date_range_token.latest=now
top botted shops by pod/shop_id:
https://sh.splunk.shopifysvc.com/en-GB/app/search/top_botted_shops_by_pod?form.shop_id=2939277&form.pod_id=*&form.field1.earliest=-5m%40m&form.field1.latest=now
