# Incident Specific Channels

Spike Lindsey Aug 11th at 2:04 PM
doug/matt - sorry for the very immediate reaction, i just remembered the pushback i got when i tried to do something similar. a few other quick ideas in :thread_your_answers_please: because i definitely want to see channel-per-incident
5 replies

Spike Lindsey  11 days ago
* i would love to put some actual words in the titles we have for channels. i think historically people use numbers because slack used to have a hard cap on channel name length. but now i think you could name things like #inc-shard55-down initially. it could also be renamed once the incident is persisted to servicesDB, so maybe #inc-shard-55-down -> #inc-1235-shard-55-down (edited) 

Spike Lindsey  11 days ago
* we can also keep the next sequence number from services db in spy redis locally

Spike Lindsey  11 days ago
(we’d need something to refresh it if we did lose redis for whatever reason, but that shouldn’ t be too hard)

Matt Seccafien  11 days ago
You could pull key words from the summary when they start the incident. (edited) 

Matt Seccafien  11 days ago
Yeah you’re right, they changed the max length of channels:
We're extending the maximum length of channel names—from 21 to a whopping 80 characters. That means acronym-packed channels can finally be written out. 