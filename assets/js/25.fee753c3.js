(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{368:function(t,a,e){"use strict";e.r(a);var s=e(35),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"faq-and-known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq-and-known-issues","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ and Known Issues")]),t._v(" "),e("h3",{attrs:{id:"imunify-agent-is-not-running-troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imunify-agent-is-not-running-troubleshooting","aria-hidden":"true"}},[t._v("#")]),t._v(' "Imunify agent is not running" troubleshooting')]),t._v(" "),e("p",[t._v("Having the Imunify service installed, you may come across the situation when the message "),e("span",{staticClass:"notranslate"},[t._v('"Imunify agent is not running"')]),t._v(" is displayed when you try to access the Dashboard:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/ImunifyAgentNotRunning.png",alt:""}})]),t._v(" "),e("p",[t._v("First of all, try to check the status of the service via the command line using the following command:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# service imunify-antivirus status\n")])])])]),t._v(" "),e("p",[t._v("In case you see the agent is inactive:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@host ~]# service imunify360 status\n\n\nRedirecting to /bin/systemctl status imunify360.service\n● imunify360.service - Imunify360 agent\nLoaded: loaded (/usr/lib/systemd/system/imunify360.service; disabled; vendor preset: disabled)\nActive: inactive (dead)\n")])])])]),t._v(" "),e("p",[t._v("try to start it via the following command:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# service imunify-antivirus start\n")])])])]),t._v(" "),e("p",[t._v("It may also occur that despite the Imunify’s Dashboard showing the "),e("span",{staticClass:"notranslate"},[t._v('"agent is not running"')]),t._v(", the service itself is loaded and active.")]),t._v(" "),e("p",[t._v("You can check it with the following command:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# service imunify-antivirus status -l\n")])])])]),t._v(" "),e("p",[t._v("Example output:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[root@host ~]# service imunify360 status -l\n\nRedirecting to /bin/systemctl status -l imunify360.service\n● imunify360.service - Imunify360 agent\nLoaded: loaded (/usr/lib/systemd/system/imunify360.service; enabled; vendor preset: disabled)\nActive: active (running) since Mon 2020-05-13 02:58:43 WIB; 3min 54s ago\nMain PID: 1234567 (python3)\nStatus: "Demonized"\nCGroup: /system.slice/imunify360.service\n├─1234567 /opt/alt/python35/bin/python3 -m im360.run --daemon --pidfile /var/run/imunify360.pid\n├─1234568 /usr/bin/tail --follow=name -n0 --retry /usr/local/cpanel/logs/cphulkd.log\n├─1234569 /usr/bin/tail --follow=name -n0 --retry /etc/apache2/logs/modsec_audit.log\n├─1234570 /usr/bin/tail --follow=name -n0 --retry /var/ossec/logs/alerts/alerts.json\n└─1234571 /opt/alt/python27/bin/python2.7 -s /usr/sbin/cagefsctl --wait-lock --force-update-etc\nMay 13 02:58:39 host.domain.com systemd[1]: Starting Imunify360 agent…\nMay 13 02:58:43 host.domain.com systemd[1]: Started Imunify360 agent.\nMay 13 02:58:43 host.domain.com imunify-service[4072717]: Starting migrations\nMay 13 02:58:43 host.domain.com imunify-service[4072717]: There is nothing to migrate\n')])])])]),t._v(" "),e("p",[t._v("Most often, such circumstances attest that the Imunify service has been recently installed on the server. Sometimes, a desynchronization between the agent and the web interface may occur in such cases, and it can take a bit of time for the database to be integrated completely.")]),t._v(" "),e("p",[t._v("In case the issue is still the same after 60 minutes, you can try creating the backup of the Imunify files and do the service restart to force the sync process:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# service imunify-antivirus stop\n# mv /var/imunify360/files /var/imunify360/files_backup\n# service imunify-antivirus start\n")])])])]),t._v(" "),e("p",[t._v("After these actions, wait until the files downloading and the migration process are complete – the agent will synchronize with the web interface and start working normally. You can monitor this process via")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# tail -f /var/log/imunify360/console.log\n")])])])]),t._v(" "),e("p",[t._v("Another similar workaround may be handy in case you locate some database-related error inside the "),e("span",{staticClass:"notranslate"},[e("code",[t._v("/var/log/imunify360/error.log")])]),t._v(" – by renaming the database file and restarting the service. There may be errors like")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"Imunify360 database is corrupt. Application cannot run with corrupt database."\n')])])])]),t._v(" "),e("p",[t._v("or some lines with")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"sqlite3.DatabaseError".\n')])])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("imunify360.db")]),t._v(" file is an sqlite3 database the Imunify relies on; it contains incidents, malware hits/lists, settings, etc. Using this workaround will force the database recreation:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# service imunify-antivirus stop\n# mv /var/imunify360/imunify360.db /var/imunify360/imunify360.db_backup\n# service imunify-antivirus start\n")])])])]),t._v(" "),e("p",[t._v("If you face any difficulties during the progress or simply cannot make the agent start, please run")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# imunify-antivirus doctor\n")])])])]),t._v(" "),e("p",[t._v("and provide the output to our Support Team at "),e("a",{attrs:{href:"https://cloudlinux.zendesk.com/hc/requests/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloudlinux.zendesk.com/hc/requests/new"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"how-to-enable-disable-the-start-scanning-button-for-imunifyav-av"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-disable-the-start-scanning-button-for-imunifyav-av","aria-hidden":"true"}},[t._v("#")]),t._v(' How to enable/disable the "Start scanning" button for ImunifyAV\\AV+')]),t._v(" "),e("p",[t._v('To enable the "Start scanning" button, run the following command:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# imunify-antivirus config update \'{"PERMISSIONS": {"allow_malware_scan": true}}\'\n')])])]),e("p",[t._v('To disable the "Start scanning" button, run the following command:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# imunify-antivirus config update \'{"PERMISSIONS": {"allow_malware_scan": false}}\'\n')])])]),e("Disqus")],1)},[],!1,null,null,null);a.default=n.exports}}]);