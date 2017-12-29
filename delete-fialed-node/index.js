


   



   var request = require('request');




   var url  = "http://localhost:8001/api/v1/proxy/namespaces/kube-system/services/kubernetes-dashboard/api/v1/pod?filterBy=&itemsPerPage=1000&page=1&sortBy=d,creationTimestamp";

   request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:

      data.pods.map((pod) => {
        
        
                if(pod.podStatus.status == "failed"){
        
                    request.delete("http://localhost:8001/api/v1/proxy/namespaces/kube-system/services/kubernetes-dashboard/api/v1/_raw/pod/namespace/streams/name/" + pod.objectMeta.name)
                }
        
           })
    }
});
    

  