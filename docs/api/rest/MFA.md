---
layout: docs_page
title: Multifactor Authentication
---

* Will be replaced with the ToC
{:toc .list-unstyled .toc}

## Overview

Multifactor authentication (MFA) provides an additional layer of security for your enterprise applications. Okta provides the following factors:

 * Okta Verify – To sign in, you must start the Okta Verify app on your mobile device to generate a six-digit code that you use to sign into your org. The numbers are generated using the industry standard Time-Based One-Time Password Algorithm.

 * Google Authenticator – To sign in, you must start the Google Authenticator app on your mobile device to generate a six-digit code that you use to sign into your org. The numbers are generated using the industry standard Time-Based One-Time Password Algorithm. The allowable clock skew is two minutes. After five unsuccessful attempts regardless of the time between the attempts the user account is locked and must be reset by an administrator. 

 * SMS Authentication – To sign in, you must enter a security token that is sent to your mobile device.

 * Symantec VIP – Available for free in the United States and Canada in both enterprise and SSO editions, this factor enables you to use the VIP Manager tool to obtain a certificate that you use to sign in.

 * Security question – To sign in, users must enter the correct response to a security question that they select from a list of possible questions.


Operations are divided into two groups.

* Factor Operations - get, list, and delete extra verification factors for end users that are part of their user profiles.
* Factor Lifecycle Operations - enroll, activate, and verify factors and a general reset of all factors.
 

### Factor Model

Parameter|Description|Param Type|Data Type|Required|Default
---------|---------|---------|---------|---------|---------
id|Id of the User Factor|Body|String|Yes|
factorType|MFA Type|Body|[FactorType](#factor-type)|TRUE|None
provider|Provider of the factor|Body|[ProviderType](#provider-type)|TRUE|okta
status|Status of the Factor|Body|Factor Status|Yes|
created|Creation Timestamp|Body|Timestamp|Yes|
lastUpdated|Last Update Timestamp|Body|Timestamp|Yes|
profile|Profile information|Body|Profile Information|TRUE|None
_links|Resources related to the User Factor|Body|JSON HAL|Optional|
_embedded|Objects related to the Enrollment|Body|JSON HAL|Optional|

> Some attributes are available only after enrollment in a factor.


##### Factor Type

Factor Type|Description
---------|---------
orn:okta:factor:types:sms|SMS
orn:okta:factor:types:call|Call
orn:okta:factor:types:hotp|Hardware Token
orn:okta:factor:types:sotp|Software Token
orn:okta:factor:types:question|Question

##### Provider Type

Provider|Description
--------|-----------
OKTA|Okta
RSA|Okta RSA Integration
SYMANTEC|Okta Symantec Integration
GOOGLE|Okta Google Integration

The following parameters are used in factor lifecycle responses.

### Factor Operations

#### Factors 
{:.api .api-operation}

<span class="api-uri-template api-uri-get"><span class="api-label">GET</span> /api/v1/users/*:id*/factors

Returns all the active factors for the specified user.

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |


#####Response Example
{:.api .api-response .api-response-example}

Returns all types of factor that are active for the user. In this example, the user has three factor types, specifically: questions, Okta token, and SMS.

~~~json
    {
        "id": "ufs2bysphxKODSZKWVCT",
        "factorType": "question",
        "provider": "OKTA",
        "status": "ACTIVE",
        "created": "2014-04-15T18:10:06.000Z",
        "lastUpdated": "2014-04-15T18:10:06.000Z",
        "profile": {
            "question": "favorite_art_piece",
            "questionText": "What is your favorite piece of art?"
        },
        "_links": {
            "questions": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/questions",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            },
            "self": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/ufs2bysphxKODSZKWVCT",
                "hints": {
                    "allow": [
                        "GET",
                        "DELETE"
                    ]
                }
            },
            "user": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            }
        }
    },
    {
        "id": "ostf2gsyictRQDSGTDZE",
        "factorType": "token:software:totp",
        "provider": "OKTA",
        "status": "PENDING_ACTIVATION",
        "created": "2014-06-27T20:27:33.000Z",
        "lastUpdated": "2014-06-27T20:27:33.000Z",
        "profile": {
            "credentialId": "oclouditude@okta.com"
        },
        "_links": {
            "next": {
                "name": "activate",
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/ostf2gsyictRQDSGTDZE/activate",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "self": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/ostf2gsyictRQDSGTDZE",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            },
            "user": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            }
        },
        "_embedded": {
            "activation": {
                "timeStep": 30,
                "sharedSecret": "HE64TMLL2IUZW2ZLB",
                "encoding": "base32",
                "keyLength": 16
            }
        }
    },
    {
        "id": "sms2gt8gzgEBPUWBIFHN",
        "factorType": "sms",
        "provider": "OKTA",
        "status": "ACTIVE",
        "created": "2014-06-27T20:27:26.000Z",
        "lastUpdated": "2014-06-27T20:27:26.000Z",
        "profile": {
            "phoneNumber": "+12135551212”
        },
        "_links": {
            "verify": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/sms2gt8gzgEBPUWBIFHN/verify",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "self": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/sms2gt8gzgEBPUWBIFHN",
                "hints": {
                    "allow": [
                        "GET",
                        "DELETE"
                    ]
                }
            },
            "user": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            }
        }
    }
~~~

#### Factors Catalog

{:.api .api-operation}

<span class="api-uri-template api-uri-get"><span class="api-label">GET</span> /api/v1/users/*:id*/factors/catalog

Returns all the types of factors that can be assigned for the specified user.

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |


#####Response Example
{:.api .api-response .api-response-example}

Returns all types of factor that can be assigned for the user. In this example, the user has four factor types available, specifically: questions, Okta token, Google token, and SMS.

~~~json
    {
        "factorType": "question",
        "provider": "OKTA",
        "_links": {
            "questions": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors/questions",
                "hints": {
                    "allow": [
                        "GET"
                    ]
                }
            },
            "enroll": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            }
        }
    },
    {
        "factorType": "token:software:totp",
        "provider": "OKTA",
        "_links": {
            "enroll": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            }
        }
    },
    {
        "factorType": "token:software:totp",
        "provider": "GOOGLE",
        "_links": {
            "enroll": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            }
        }
    },
    {
        "factorType": "sms",
        "provider": "OKTA",
        "_links": {
            "enroll": {
                "href": "https://company.okta.com/api/v1/users/00u6fud33CXDPBXULRNG/factors",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            }
        }
    }
~~~

#### Reset Factor

{:.api .api-operation}

<span class="api-uri-template api-uri-delete"><span class="api-label">DELETE</span> /api/v1/users/*:id*/factors/*:factorID*

Resets a factor for the specified user.

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |
factorID     | The id of the factor to reset                       | Body       | String   | TRUE     |

#####Response Example
{:.api .api-response .api-response-example}

Status 204 No Content - The server successfully processed the request, but did not return any content.


#### Questions

{:.api .api-operation}

<span class="api-uri-template api-uri-post"><span class="api-label">POST</span> /api/v1/users/*:id*/lifecycle/questions

Returns all additional security questions available for a user and the question id.

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |

##### Response Parameters
{:.api .api-response .api-response-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
question     | question id                                         | String      | String  | TRUE     |
questionText | the text of the security question                   | String      | String  | TRUE     |

##### Response Example
{:.api .api-response .api-response-example}

Returns all additional security questions available for a user and the question id.

~~~json
{
        "question": "disliked_food",
        "questionText": "What is the food you least liked as a child?"
    },
    {
        "question": "name_of_first_plush_toy",
        "questionText": "What is the name of your first stuffed animal?"
    },
    {
        "question": "first_award",
        "questionText": "What did you earn your first medal or award for?"
    },
    {
        "question": "favorite_security_question",
        "questionText": "What is your favorite security question?"
    },
    {
        "question": "favorite_toy",
        "questionText": "What is the toy/stuffed animal you liked the most as a kid?"
    },
    {
        "question": "first_computer_game",
        "questionText": "What was the first computer game you played?"
    },
    {
        "question": "favorite_movie_quote",
        "questionText": "What is your favorite movie quote?"
    },
    {
        "question": "first_sports_team_mascot",
        "questionText": "What was the mascot of the first sports team you played on?"
    },
    {
        "question": "first_music_purchase",
        "questionText": "What music album or song did you first purchase?"
    },
    {
        "question": "favorite_art_piece",
        "questionText": "What is your favorite piece of art?"
    }
~~~



### Factor Management Operations

There are factor management operations for the following six factors: questions, SMS factor, Okta soft token, Google authenticator, RSA factor, and Symantec VIP. 

* SMS factor, Okta soft token, and Google authenticator have enroll, activate, and reset operations. 
* Question, RSA factor, and Symantec VIP have enroll and reset operations only.

The **factors** api is used to enroll and activate all factors.


#### Enroll Factor
{:.api .api-operation}

<span class="api-uri-template api-uri-put"><span class="api-label">POST</span> /api/v1/users/*:id*/factors

Enrolls the specified user in a specified factor. 

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                    | Param Type | DataType | Required | Default
------------ | ------------------------------ | ---------- | -------- | -------- | -------
id           | `id` of user                   | URL        | String   | TRUE     |  
factor       | Factor to enroll| [Factor Types](#Factor-Type) | Body | Factor | TRUE |

##### Request Examples
{:.api .api-request .api-request-example} 

Enroll Question


~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
        "factorType": "question",
        "provider": "okta",
        "profile": {
            "question": "name_of_first_plush_toy",
            "answer": "plush_toy"
        }
}'
~~~

Enroll SMS Factor

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
  "factorType"     : "sms",
  "provider" : "okta",
  "profile"  : {
    "phoneNumber" :  "+1 213 555 1212"
  }
}'
~~~

Enroll Okta Soft Token

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
  "factorType"   : "token:software:totp",
  "provider" : "okta"
}'
~~~

Enroll Google Authenticator

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
  "factorType"   : "token:software:totp",
  "provider" : "google"
}'
~~~

Enroll RSA Factor

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
	"factorType": "token:hardware",
    "provider": "okta:rsa",
    "profile": {
    	"credentialId": "gooduser"
    },
    "verify": {
  		"passCode": "gooduser"
    }
}'
~~~

Enroll Symantec VIP

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/factors
-d \
'{
	"factorType": "token",
    "provider": "okta:symantec",
    "profile": {
    	"credentialId": "TEST_TOKEN_ID"
    },
    "verify": {
  		"passCode": "875492",
        "nextPassCode":"678191"
    }
}'
~~~

#####Response Example

{:.api .api-response .api-response-example}

The responses are the same as the responses for /api/v1/users/*:id*/factors that returns all the active factors for a user, but only contains the one particular factor in which the user is enrolled.

#### Factor Activation
{:.api .api-operation}


<span class="api-uri-template api-uri-post"><span class="api-label">POST</span> /users/*:id*/factors/*:factorID*/activate</span>

SMS factors, Okta soft tokens, and Google authenticator tokens require activation after a user is enrolled.

##### Request Parameters
{:.api .api-request .api-request-params}


Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |
factorID     | The `id` returned from Enroll Factor                | String     | String   | TRUE     |
passCode     | The activation code supplied by the provider        | Body       | String   | TRUE     |

##### Request Example
{:.api .api-request .api-request-example}

Activates an SMS token.

~~~ ruby
curl -v -H "Authorization: SSWS yourtoken" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST "https://your-domain.okta.com/api/v1/users/454ub0oNGTSWTBKOLGLNR/factors/sms2gt8888EBPUWBIFH/activate"
-d \
'{
	"passCode" : "123456" 
 }

#####Response Example
{:.api .api-response .api-response-example}

~~~json
    {
	   "factorType": "token",
       "provider": "okta:symantec",
       "profile": {
       "credentialId": "TEST_TOKEN_ID"
       "verify": {
  		   "passCode": "875492",
           "nextPassCode":"678191"
       }
    }
~~~

#### Verify Factors

{:.api .api-operation}

<span class="api-uri-template api-uri-post"><span class="api-label">POST</span> /api/v1/users/*:id*/factors/*:factorID*/verify

Questions and SMS tokens require verification after activating the factor. 

##### Request Parameters
{:.api .api-request .api-request-params}


Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |
factorID     | The `id` returned from Enroll Factor                | String     | String   | TRUE     |


Pass the `id` and `factorID` to begin the verification challenge. Include the following body parameters to answer the challenge.


##### Request Example
{:.api .api-request .api-request-params}

SMS Token Verification Answer

~~~json
    {
        "passCode": "935661"
    }
~~~

Question Verification Answer

~~~json
    {
        "answer": "question"
    }
~~~

#### Reset Factors

{:.api .api-operation}

<span class="api-uri-template api-uri-post"><span class="api-label">POST</span> /api/v1/users/*:id*/lifecycle/reset_factors

Resets all extra verification factors that are setup for the specified user. 

##### Request Parameters
{:.api .api-request .api-request-params}

Parameter    | Description                                         | Param Type | DataType | Required | Default
------------ | --------------------------------------------------- | ---------- | -------- | -------- | -------
id           | `id` of user                                        | URL        | String   | TRUE     |

#####Response Example
{:.api .api-response .api-response-example}

Status 204 No Content – The server successfully processed the request, but did not return any content.





