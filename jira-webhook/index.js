/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
var rp = require('request-promise');


exports.issueUpdated = function helloHttp(req, res) {

  var item = req.body

  if (item.webhookEvent == 'jira:issue_updated') {

    var isVersionUpdated = false;
    item.changelog.items.map((it) => {
      if (it["fieldId"] == "fixVersions") {
        isVersionUpdated = true;
      }
    })

    if (isVersionUpdated) {

      var options = {
        uri: "https://fretron.atlassian.net/rest/api/2/search?jql=parent=" + item.issue.key,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Basic c3VuaWxAZnJldHJvbi5jb206NHNpRHNpN2tCT2ZlVXhacEh3YXRFNjky"
        },
        json: true // Automatically parses the JSON string in the response
      };
      rp(options)
        .then(function (sub_tasks) {
          sub_tasks.issues.map((sub_tsk) => {

            var options2 = {

              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": "Basic c3VuaWxAZnJldHJvbi5jb206NHNpRHNpN2tCT2ZlVXhacEh3YXRFNjky"
              },
              uri: "https://fretron.atlassian.net/rest/api/2/issue/" + sub_tsk.key,
              body: {
                "update": {
                  "fixVersions": [
                    {
                      "set":
                        item.issue.fields.fixVersions
                    }
                  ]
                }
              },
              json : true
            }

            rp(options2)
              .then(function (update_st) {
                console.log(update_st)
              })
              .catch(function (err_st) {
                // API call failed...
                console.log(err_st)
              });

          })
        })
        .catch(function (err) {
          // API call failed...
          console.log(err)
        });


    }

  }

};



