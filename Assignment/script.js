const dns  = require('dns');
const { hostname } = require('os');

//lookup  : convert human-readable name to ip address
// dns.lookup('www.google.com',(err,address)=>
// {
//     console.log('IP Address : ',address);
// })

// dns.resolve('google.com','A',(err,address)=>
// {
//     console.log('A records (IPV4) : ',address);
// });

// dns.reverse('8.8.8.8',(err,hostname)=>
// {
//     console.log('Hostname',hostname);
// })

//console.log('Current DNS server',dns.getServers());

// dns.resolveNs('gmail.com',(error,address)=>
// {
//     console.log('Ns records',address);
// });

// const dnspromises = require('dns').promises;
 
// async function resolvedomain()
// {
//     const ips = await dnspromises.resolve4('google.com');
//     console.log('Resolved Ips : ',ips);
// }
// resolvedomain();

