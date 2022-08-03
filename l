[33mcommit fa2d05f3aae73d8419364a74e4dcd5fbf2a881eb[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Author: Kerem AKSOY <keremaksoy1127@gmail.com>
Date:   Sun Jul 31 11:20:04 2022 +0300

    I made some change my app. I will continue

[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 6876a01..16454b2 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -11,6 +11,7 @@[m
         "@testing-library/jest-dom": "^5.16.4",[m
         "@testing-library/react": "^13.3.0",[m
         "@testing-library/user-event": "^13.5.0",[m
[32m+[m[32m        "bootstrap": "^5.2.0",[m
         "firebase": "^9.9.1",[m
         "react": "^18.2.0",[m
         "react-dom": "^18.2.0",[m
[36m@@ -3600,6 +3601,16 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@popperjs/core": {[m
[32m+[m[32m      "version": "2.11.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-9X2obfABZuDVLCgPK9aX0a/x4jaOEweTTWE2+9sr0Qqqevj2Uv5XorvusThmc9XGYpS9yI+fhh8RTafBtGposw==",[m
[32m+[m[32m      "peer": true,[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/popperjs"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/@protobufjs/aspromise": {[m
       "version": "1.1.2",[m
       "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",[m
[36m@@ -5868,6 +5879,24 @@[m
       "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",[m
       "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="[m
     },[m
[32m+[m[32m    "node_modules/bootstrap": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-qlnS9GL6YZE6Wnef46GxGv1UpGGzAwO0aPL1yOjzDIJpeApeMvqV24iL+pjr2kU4dduoBA9fINKWKgMToobx9A==",[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "github",[m
[32m+[m[32m          "url": "https://github.com/sponsors/twbs"[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "opencollective",[m
[32m+[m[32m          "url": "https://opencollective.com/bootstrap"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@popperjs/core": "^2.11.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[36m@@ -20187,6 +20216,12 @@[m
         "source-map": "^0.7.3"[m
       }[m
     },[m
[32m+[m[32m    "@popperjs/core": {[m
[32m+[m[32m      "version": "2.11.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-9X2obfABZuDVLCgPK9aX0a/x4jaOEweTTWE2+9sr0Qqqevj2Uv5XorvusThmc9XGYpS9yI+fhh8RTafBtGposw==",[m
[32m+[m[32m      "peer": true[m
[32m+[m[32m    },[m
     "@protobufjs/aspromise": {[m
       "version": "1.1.2",[m
       "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",[m
[36m@@ -21905,6 +21940,12 @@[m
       "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",[m
       "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="[m
     },[m
[32m+[m[32m    "bootstrap": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-qlnS9GL6YZE6Wnef46GxGv1UpGGzAwO0aPL1yOjzDIJpeApeMvqV24iL+pjr2kU4dduoBA9fINKWKgMToobx9A==",[m
[32m+[m[32m      "requires": {}[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 09c0a87..1ab219b 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -6,6 +6,7 @@[m
     "@testing-library/jest-dom": "^5.16.4",[m
     "@testing-library/react": "^13.3.0",[m
     "@testing-library/user-event": "^13.5.0",[m
[32m+[m[32m    "bootstrap": "^5.2.0",[m
     "firebase": "^9.9.1",[m
     "react": "^18.2.0",[m
     "react-dom": "^18.2.0",[m
[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex 8a1ba51..dbd29cd 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -10,6 +10,12 @@[m
       content="Web site created using create-react-app"[m
     />[m
     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />[m
[32m+[m[32m    <!-- CSS only -->[m
[32m+[m[32m<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">[m
[32m+[m
[32m+[m[32m<!-- JavaScript Bundle with Popper -->[m
[32m+[m[32m<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> -->[m
[32m+[m
 [m
  [m
     <!--[m
[1mdiff --git a/src/components/SignUp.css b/src/components/SignUp.css[m
[1mindex 1d6fe8c..ecb9aa6 100644[m
[1m--- a/src/components/SignUp.css[m
[1m+++ b/src/components/SignUp.css[m
[36m@@ -146,6 +146,66 @@[m [minput[type="text"]:placeholder {[m
   color: #cccccc;[m
 }[m
 [m
[32m+[m[32minput[type="password"] {[m
[32m+[m[32m  background-color: #f6f6f6;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  color: #0d0d0d;[m
[32m+[m[32m  padding: 15px 32px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  margin: 5px;[m
[32m+[m[32m  width: 85%;[m
[32m+[m[32m  border: 2px solid #f6f6f6;[m
[32m+[m[32m  -webkit-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -moz-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -ms-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -o-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -webkit-border-radius: 5px 5px 5px 5px;[m
[32m+[m[32m  border-radius: 5px 5px 5px 5px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput[type="password"]:focus {[m
[32m+[m[32m  background-color: #fff;[m
[32m+[m[32m  border-bottom: 2px solid #5fbae9;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput[type="password"]:placeholder {[m
[32m+[m[32m  color: #cccccc;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput[type="email"] {[m
[32m+[m[32m  background-color: #f6f6f6;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  color: #0d0d0d;[m
[32m+[m[32m  padding: 15px 32px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  font-size: 16px;[m
[32m+[m[32m  margin: 5px;[m
[32m+[m[32m  width: 85%;[m
[32m+[m[32m  border: 2px solid #f6f6f6;[m
[32m+[m[32m  -webkit-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -moz-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -ms-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -o-transition: all 0.5s ease-in-out;[m
[32m+[m[32m  transition: all 0.5s ease-in-out;[m
[32m+[m[32m  -webkit-border-radius: 5px 5px 5px 5px;[m
[32m+[m[32m  border-radius: 5px 5px 5px 5px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput[type="email"]:focus {[m
[32m+[m[32m  background-color: #fff;[m
[32m+[m[32m  border-bottom: 2px solid #5fbae9;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32minput[type="email"]:placeholder {