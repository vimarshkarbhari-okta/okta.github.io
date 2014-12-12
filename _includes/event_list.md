

##### System Log Tags

ObjectType | Description
--- | ---
system_log_category.<wbr>app_assignment | Application Assignment
system_log_category.<wbr>app_access | Application Access
system_log_category.<wbr>ad_agent | Active Directory Agent
system_log_category.<wbr>ldap_agent | LDAP Agent
system_log_category.<wbr>user_creation | User Creation
system_log_category.<wbr>user_activation | User Activation
system_log_category.<wbr>user_deactivation | User Deactivation
system_log_category.<wbr>user_locked_out | User Locked Out
system_log_category.<wbr>signin_failure | Sign-in Failure
system_log_category.<wbr>signin_success | Sign-in Success
system_log_category.<wbr>suspicious_activity | Suspicious Activity
system_log_category.<wbr>app_import_summary | Application Imports (Summary)
system_log_category.<wbr>app_import_details | Application Imports (Detailed)
system_log_category.<wbr>sms_messages | SMS Messages
system_log_category.<wbr>universal_directory | Universal Directory
system_log_category.<wbr>token_lifecycle | Token Lifecycle
system_log_category.<wbr>directory_agent_action | Directory Agent Actions
system_log_category.<wbr>policy_lifecycle | Policy Lifecycle
system_log_category.<wbr>user_self_service_unlock | Self Service Unlock
system_log_category.<wbr>user_profile_update | User Profile Update


##### User Activity Report

ObjectType | Description
--- | ---
user_activity.<wbr>core.<wbr>user_auth.<wbr>login_success | Sign-in
user_activity.<wbr>core.<wbr>user_auth.<wbr>logout_success | Sign-out
user_activity.<wbr>core.<wbr>user_auth.<wbr>session_expired | SessionExpired
user_activity.<wbr>app.<wbr>auth.<wbr>sso | SingleSignOn
user_activity.<wbr>clickstream.<wbr>request.<wbr>complete | RequestComplete


##### Core - User

ObjectType | Description
--- | ---
core.<wbr>user_auth.<wbr>login_failed.<wbr>invalid_credentials | Sign-in Failed - Invalid Credentials
core.<wbr>user_auth.<wbr>login_failed.<wbr>locked_out | Sign-in Failed - User is currently locked out
core.<wbr>user_auth.<wbr>login_failed.<wbr>unknown_user | Sign-in Failed - Unknown User '${okta_username}'
core.<wbr>user_auth.<wbr>login_failed.<wbr>not_activated | Sign-in Failed - User not activated
core.<wbr>user_auth.<wbr>login_failed.<wbr>pending_activation | Sign-in Failed - User pending activation
core.<wbr>user_auth.<wbr>login_failed.<wbr>not_verified | Sign-in Failed - Not Verified
core.<wbr>user_auth.<wbr>login_failed.<wbr>service_not_available | Sign-in Failed - Service not available
core.<wbr>user_auth.<wbr>login_failed.<wbr>general_nonsuccess | Sign-in Failed
core.<wbr>user_auth.<wbr>login_failed.<wbr>temp_login | Sign-in Failed - Temp login
core.<wbr>user_auth.<wbr>login_failed.<wbr>additional_credentials_required | Sign-in Failed - Additional credentials required
core.<wbr>user_auth.<wbr>login_failed.<wbr>del_auth_timeout | Sign-in Failed - AD authentication connection failed
core.<wbr>user_auth.<wbr>login_failed.<wbr>del_auth_no_connected_agents | Sign-in Failed - No connected agents found
core.<wbr>user_auth.<wbr>login_failed.<wbr>sso_authentication_failure | Sign-in Failed - SSO authentication failed
core.<wbr>user_auth.<wbr>login_failed.<wbr>inactive_org | Sign-in Failed - Org is inactive
core.<wbr>user_auth.<wbr>login_failed.<wbr>password_based_login_disallowed | Sign-in Failed - Password based login not allowed
core.<wbr>user_auth.<wbr>login_failed.<wbr>password_expired | Sign-In Failed - Password has expired
core.<wbr>user_auth.<wbr>login_failed.<wbr>not_specified | Sign-in Failed - Not Specified
core.<wbr>user_auth.<wbr>login_failed.<wbr>sunone_password_expired | Sign-In Failed - Password has expired
core.<wbr>user_auth.<wbr>login_failed.<wbr>verification_error | Sign-In Failed - Verification failed for user: ${okta_username}
core.<wbr>user_auth.<wbr>login_denied | Sign-In Denied - Login is not allowed for the user.
core.<wbr>user_auth.<wbr>account_auto_unlocked | Account automatically unlocked
core.<wbr>user_auth.<wbr>account_locked | Account Locked - Max sign-in attempts exceeded.
core.<wbr>user_auth.<wbr>mfa_bypass_attempted | A bypass of MFA may have been attempted for this user
core.<wbr>user_auth.<wbr>unknown_account_self_service_unlock_attempted | Self service account unlock attempted by unknown user
core.<wbr>user_auth.<wbr>account_self_service_unlocked | Account unlocked using self-service
core.<wbr>user_auth.<wbr>account_self_service_unlock_failed | Self-service account unlock failed
core.<wbr>user_auth.<wbr>login_success | Sign-in successful
core.<wbr>user_auth.<wbr>logout_success | Sign-out successful
core.<wbr>user_auth.<wbr>session_expired | Session has expired
core.<wbr>user_auth.<wbr>account_not_found | Account was not found
core.<wbr>user_auth.<wbr>radius.<wbr>login.<wbr>succeeded | Login from Radius Agent succeeded. <br />Client address: ${client_address} <br />Client ID: ${client_id}
core.<wbr>user_auth.<wbr>radius.<wbr>login.<wbr>failed | Login from Radius Agent failed. <br />Client address: ${client_address} <br />Client ID: ${client_id}
cvd.<wbr>user_profile_bootstrapped | User profile bootstrapped (Profile: ${profile_id})
cvd.<wbr>user_profile_updated | User profile updated (<br />Profile: ${profile_id}, <br />Attributes Added: [${profile_properties_added}], <br />Attributes Deleted: [${profile_properties_deleted}])
cvd.<wbr>appuser_profile_bootstrapped | Application User profile bootstrapped (Profile: ${profile_id})
cvd.<wbr>appuser_profile_updated | Application User profile updated (<br />Profile: ${profile_id}, <br />Attributes Added: [${profile_properties_added}], <br />Attributes Deleted: [${profile_properties_deleted}])
core.<wbr>user.<wbr>config.<wbr>password_update.<wbr>success | User updated their Okta password
core.<wbr>user.<wbr>config.<wbr>password_update.<wbr>failure | User failed to update their okta password. ${reason}
core.<wbr>user.<wbr>config.<wbr>user_activated | Okta user has been activated
core.<wbr>user.<wbr>config.<wbr>user_deactivated | Okta user has been deactivated
core.<wbr>user.<wbr>config.<wbr>user_status.<wbr>password_reset | Admin has reset user's password
core.<wbr>user.<wbr>config.<wbr>user_creation.<wbr>success | Okta user created
core.<wbr>user.<wbr>config.<wbr>user_creation.<wbr>failure | Okta user creation failed for ${login} ${validation_errors}
core.<wbr>user.<wbr>config.<wbr>user_reactivation.<wbr>success | Okta User reinstated from deactivated status
core.<wbr>user.<wbr>config.<wbr>profile_update.<wbr>success | Okta User profile updated


##### Auth Factors

ObjectType | Description
--- | ---
core.<wbr>user.<wbr>factor.<wbr>activate | User set up ${factor} factor
core.<wbr>user.<wbr>factor.<wbr>deactivate | User reset ${factor} factor
core.<wbr>user.<wbr>factor.<wbr>update | User updated ${factor} factor
core.<wbr>user.<wbr>factor.<wbr>reset_all | All additional factors reset for user
core.<wbr>user.<wbr>factor.<wbr>attempt_fail | Failed ${factor} factor attempt
core.<wbr>user.<wbr>factor.<wbr>attempt_success | Successful ${factor} factor attempt


##### SMS

ObjectType | Description
--- | ---
core.<wbr>user.<wbr>sms.<wbr>message_sent.<wbr>factor | SMS sent for second factor
core.<wbr>user.<wbr>sms.<wbr>message_sent.<wbr>verify | SMS sent to verify user's phone number
core.<wbr>user.<wbr>sms.<wbr>message_sent.<wbr>forgotpw | SMS sent to initiate forgot password
core.<wbr>user.<wbr>sms.<wbr>message_sent.<wbr>self_service_unlock | SMS sent to initiate self-service unlock


##### Email

ObjectType | Description
--- | ---
core.<wbr>user.<wbr>email.<wbr>message_sent.<wbr>self_service_unlock | Email sent to initiate self-service unlock


##### Impersonation

ObjectType | Description
--- | ---
core.<wbr>user.<wbr>impersonation.<wbr>session.<wbr>initiated | Impersonation session initiated
core.<wbr>user.<wbr>impersonation.<wbr>session.<wbr>ended | Impersonation session ended
core.<wbr>user.<wbr>impersonation.<wbr>grant.<wbr>enabled | Impersonation grant enabled
core.<wbr>user.<wbr>impersonation.<wbr>grant.<wbr>extended | Impersonation grant extended
core.<wbr>user.<wbr>impersonation.<wbr>grant.<wbr>revoked | Impersonation grant revoked


##### Administrative Privileges

ObjectType | Description
--- | ---
core.<wbr>user.<wbr>admin_privilege.<wbr>granted | ${privilege_granted} privileges granted
core.<wbr>user.<wbr>admin_privilege.<wbr>revoked | Revoked all administrator privileges


##### Core - Groups

ObjectType | Description
--- | ---
core.<wbr>user_group_member.<wbr>user_add | User added to group ${group_name}
core.<wbr>user_group_member.<wbr>user_remove | User removed from group ${group_name}
core.<wbr>org.<wbr>config.<wbr>org_creation.<wbr>success | Org created


##### App Provisioning

ObjectType | Description
--- | ---
app.<wbr>user_management.<wbr>push_password_update | Pushing User's password to app
app.<wbr>user_management.<wbr>push_profile_update | Pushing User's Profile to app
app.<wbr>user_management.<wbr>push_profile_success | Successfully pushed User's Profile to App
app.<wbr>user_management.<wbr>push_profile_failure | Failed to push User's Profile to App
app.<wbr>user_management.<wbr>push_new_user | Pushing new user account to app
app.<wbr>user_management.<wbr>provision_user | Synchronizing user with app
app.<wbr>user_management.<wbr>push_pending_user | Pushing new pending user account to app
app.<wbr>user_management.<wbr>activate_user | Activating new user account in app
app.<wbr>user_management.<wbr>importing_profile | Importing profile for user from app
app.<wbr>user_management.<wbr>importing_profile_failed.<wbr>email_length | Skip importing profile for user from app due to email address too long: ${app_error_code}
app.<wbr>user_management.<wbr>import.<wbr>csv.<wbr>line.<wbr>error | Error reading line from CSV: ${app_error_code}
app.<wbr>user_management.<wbr>import.<wbr>csv.<wbr>header.<wbr>error | CSV Header does not match template: ${app_error_code}
app.<wbr>user_management.<wbr>import.<wbr>csv.<wbr>parse.<wbr>error | Unable to parse CSV file
app.<wbr>user_management.<wbr>verified_user_with_thirdparty | Verified user exists in app
app.<wbr>user_management.<wbr>provision_user_failed | Could not synchronize user with app
app.<wbr>user_management.<wbr>updating_api_credentials_for_password_change | API user has changed their password, updating API credentials to match
app.<wbr>user_management.<wbr>deactivate_user | User deactivation was pushed to app
app.<wbr>user_management.<wbr>reactivate_user | User was reactivated in app
app.<wbr>user_management.<wbr>provision_user.<wbr>user_inactive | Could not reactivate user in app
app.<wbr>user_management.<wbr>deactivate_user.<wbr>api_account | Could not deactivate user. This user is the API user
app.<wbr>user_management.<wbr>update_from_master_failed | Could not apply import: ${message}
app.<wbr>user_management.<wbr>app_group_member_import.<wbr>insert_success | Imported new member of the ${app_group_name} app group - ${app_username}
app.<wbr>user_management.<wbr>app_group_member_import.<wbr>delete_success | Deleted member of the ${app_group_name} app group - ${app_username}
app.<wbr>user_management.<wbr>user_group_import.<wbr>upsert_success | Imported the ${user_group_name} group from app
app.<wbr>user_management.<wbr>user_group_import.<wbr>delete_success | Deleted the ${user_group_name} group from app
app.<wbr>user_management.<wbr>app_group_group_member_import.<wbr>insert_success | Imported new group member of the ${parent_app_group_name} app group - ${child_app_group_name}
app.<wbr>user_management.<wbr>app_group_group_member_import.<wbr>delete_success | Deleted group member of the ${parent_app_group_name} app group - ${child_app_group_name}


##### App Group Push

ObjectType | Description
--- | ---
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule | A Group Push mapping to the group ${user_group_name} has been created from the rule ${rule_id} with the id - ${msg}.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>error.<wbr>duplicate | A Group Push mapping to the group ${user_group_name} did not get created from rule ${rule_id} because an existing mapping already existed.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>warning.<wbr>duplicate.<wbr>name | A Group Push mapping did not get created from rule ${rule_id} to UserGroup ${user_group_name} since group with same name already exists in AppInstance ${app_instance_id}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>warning.<wbr>duplicate.<wbr>name.<wbr>tobecreated | A Group Push mapping did not get created from rule ${rule_id} to UserGroup ${user_group_name} since group with same name will already be created in AppInstance ${app_instance_id}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>warning.<wbr>upsertGroup.<wbr>duplicate.<wbr>name | UserGroup was created or updated. A Group Push mapping did not get created from rule ${rule_id} to UserGroup ${user_group_name} since group with same name already exists in AppInstance ${app_instance_id}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>error.<wbr>validation | A Group Push mapping to the group ${user_group_name} did not get created from rule ${rule_id} because of the validation error: ${msg}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>created.<wbr>from.<wbr>rule.<wbr>errors | A Group Push mapping to the group ${user_group_name} did not get created from rule ${rule_id} because of errors: ${msg}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>deactivated.<wbr>source.<wbr>group.<wbr>renamed | A Group push mapping to the group ${user_group_name} was deactivated because the source group was renamed.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>deactivated.<wbr>source.<wbr>group.<wbr>renamed.<wbr>failed | A Group push mapping to the group ${user_group_name} could not be deactivated when the source group was renamed.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>app.<wbr>group.<wbr>renamed | A Group push mapping to the group ${user_group_name} was renamed because the source group was renamed.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>app.<wbr>group.<wbr>renamed.<wbr>failed | A Group push mapping to the group ${user_group_name} could not be renamed when the source group was renamed.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>and.<wbr>groups.<wbr>deleted.<wbr>rule.<wbr>deleted | The Group push mapping to the group ${user_group_name} will be deleted because its rule has been deleted.
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>update.<wbr>or.<wbr>delete.<wbr>failed.<wbr>with.<wbr>error | Changes to the Group push mapping for the group ${user_group_name} could not take effect due to error: ${msg}
app.<wbr>user_management.<wbr>grouppush.<wbr>mapping.<wbr>update.<wbr>or.<wbr>delete.<wbr>failed | Changes to the Group push mapping for the group ${user_group_name} could not take effect.
platform.<wbr>grouppush.<wbr>appgroup.<wbr>not.<wbr>found | No appGroup found for the user group id: {0}
platform.<wbr>grouppush.<wbr>appgroup.<wbr>oktamastered | Appgroup {0} is already Okta mastered


##### App Generic

ObjectType | Description
--- | ---
app.<wbr>generic.<wbr>provision.<wbr>assign_user_to_app | User provisioned to app
app.<wbr>generic.<wbr>provision.<wbr>deactivate_user_from_app | User deprovisioned from app
app.<wbr>generic.<wbr>config.<wbr>app_activated | App activated
app.<wbr>generic.<wbr>config.<wbr>app_deactivated | App deactivated
app.<wbr>generic.<wbr>config.<wbr>app_deleted | App deleted
app.<wbr>generic.<wbr>config.<wbr>app_updated | App configuration updated ${custom_message}
app.<wbr>generic.<wbr>import.<wbr>provisioning_data | Imported provisioning data for app
app.<wbr>generic.<wbr>import.<wbr>import_user | Started importing users for app
app.<wbr>generic.<wbr>import.<wbr>summary.<wbr>custom_object | Imported Custom Objects: ${objects_total} scanned, ${objects_added} added, ${objects_updated} updated, ${objects_deleted} deleted
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>add_custom_object | Import added new Custom Object of type ${custom_object_type} with id ${custom_object_id}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>update_custom_object | Import updated existing Custom Object of type ${custom_object_type} with id ${custom_object_id}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>delete_custom_object | Import removed existing Custom Object of type ${custom_object_type} with id ${custom_object_id}
app.<wbr>generic.<wbr>import.<wbr>summary.<wbr>user | Imported Users: ${objects_total} scanned, ${objects_unchanged} unchanged, ${objects_added} added, ${objects_updated} updated, ${objects_deleted} deleted
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>add_user | Import added new User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>update_user | Import updated existing User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>delete_user | Import removed existing User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>summary.<wbr>group | Imported Groups: ${objects_total} scanned, ${objects_unchanged} unchanged, ${objects_added} added, ${objects_updated} updated, ${objects_deleted} deleted
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>add_group | Import added new Group: ${group_name} - ${group_description}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>update_group | Import updated existing Group: ${group_name} - ${group_description}
app.<wbr>generic.<wbr>import.<wbr>details.<wbr>delete_group | Import removed existing Group: ${group_name} - ${group_description}
app.<wbr>generic.<wbr>import.<wbr>summary.<wbr>group_membership | Imported Group Members: ${objects_total} scanned, ${objects_unchanged} unchanged, ${objects_added} added, ${objects_deleted} deleted
app.<wbr>generic.<wbr>import.<wbr>new_user | Import added new User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>user_update | Import updated existing User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>user_delete | Import removed existing User: ${app_username}
app.<wbr>generic.<wbr>import.<wbr>user_match.<wbr>complete | User matching complete
app.<wbr>generic.<wbr>import.<wbr>started | ${import_type} Import started via ${import_trigger}
app.<wbr>generic.<wbr>import.<wbr>complete | Import complete, total time: ${import_time}
app.<wbr>generic.<wbr>config.<wbr>app_username_update | User has changed their app username to ${app_username}
app.<wbr>generic.<wbr>config.<wbr>app_password_update | User has changed their app password
app.<wbr>generic.<wbr>config.<wbr>app_user_update | App user property has been updated


##### App Real Time Sync

ObjectType | Description
--- | ---
app.<wbr>realtimesync.<wbr>import.<wbr>details.<wbr>add_user | Real time sync added new User: ${app_username}
app.<wbr>realtimesync.<wbr>import.<wbr>details.<wbr>update_user | Real time sync updated existing User: ${app_username}
app.<wbr>realtimesync.<wbr>import.<wbr>details.<wbr>delete_user | Real time sync removed existing User: ${app_username}
app.<wbr>realtimesync.<wbr>import_failed.<wbr>details.<wbr>email_length | Real time sync failed due to email address too long: ${app_error_code}


##### App Instance

ObjectType | Description
--- | ---
app.<wbr>app_instance.<wbr>change | App settings changed
app.<wbr>app_instance.<wbr>logo_update | Logo changed
app.<wbr>app_instance.<wbr>logo_reset | Logo reset
app.<wbr>app_instance.<wbr>label_update | Label changed
app.<wbr>app_instance.<wbr>seats_update | Number of seats changed
app.<wbr>app_instance.<wbr>icon_hidden | Do not display icon to users
app.<wbr>app_instance.<wbr>icon_displayed | Display icon to users
app.<wbr>app_instance.<wbr>icon_hidden_in_ios | Do not display icon in the Okta Mobile app
app.<wbr>app_instance.<wbr>icon_displayed_in_ios | Display icon in the Okta Mobile app
app.<wbr>app_instance.<wbr>toolbar_autosubmit_enabled | Toolbar autosubmit is enabled
app.<wbr>app_instance.<wbr>toolbar_autosubmit_disabled | Toolbar autosubmit is disabled
app.<wbr>app_instance.<wbr>outbound_delauth_enabled | Delegated authentication is enabled
app.<wbr>app_instance.<wbr>outbound_delauth_disabled | Delegated authentication is disabled
app.<wbr>app_instance.<wbr>sign_on_policy.<wbr>change | Sign on policy changed
app.<wbr>app_instance.<wbr>sign_on_policy.<wbr>new_rule | Rule created in sign on policy
app.<wbr>app_instance.<wbr>sign_on_policy.<wbr>delete_rule | Rule deleted in sign on policy
app.<wbr>app_instance.<wbr>sign_on_policy.<wbr>access_denied | User denied access due to sign on policy
app.<wbr>app_instance.<wbr>import_schedule_update | Import scheduled changed
app.<wbr>app_instance.<wbr>autoconfirm_imports_enabled | Imported new users will be automatically confirmed
app.<wbr>app_instance.<wbr>autoconfirm_imports_disabled | Imported users will not be automatically confirmed
app.<wbr>app_instance.<wbr>autoconfirm_both_imports_enabled | Imported new and existing users will be automatically confirmed
app.<wbr>app_instance.<wbr>autoactivate_imports_enabled | Imported users will be automatically activated
app.<wbr>app_instance.<wbr>autoactivate_imports_disabled | Imported users will not be automatically activated
app.<wbr>app_instance.<wbr>error_page_update | Using custom error page
app.<wbr>app_instance.<wbr>error_page_reset | Using default error page
app.<wbr>app_instance.<wbr>display_links_update | Number of links displayed changed
app.<wbr>app_instance.<wbr>import_ou_update | Organizational Unit to import changed
app.<wbr>app_instance.<wbr>suppress_activation_mail_enabled | Stop sending new user activation emails
app.<wbr>app_instance.<wbr>suppress_activation_mail_disabled | Sending new user activation emails
app.<wbr>app_instance.<wbr>activation_email_recipient_update | Recipient of new account credentials changed
app.<wbr>app_instance.<wbr>sign_on_method_update | Sign on method changed
app.<wbr>app_instance.<wbr>default_username_update | Application username format changed
app.<wbr>app_instance.<wbr>auth_token_update | Authentication token generated
app.<wbr>app_instance.<wbr>profile_master_enabled | Profile mastering enabled
app.<wbr>app_instance.<wbr>profile_master_disabled | Profile mastering disabled
app.<wbr>app_instance.<wbr>push_new_users_enabled | Pushing new users
app.<wbr>app_instance.<wbr>push_new_users_disabled | Importing new users
app.<wbr>app_instance.<wbr>push_profile_updates_enabled | Pushing user profile changes
app.<wbr>app_instance.<wbr>push_profile_updates_disabled | Importing user profile changes
app.<wbr>app_instance.<wbr>push_password_updates_enabled | Pushing user passwords
app.<wbr>app_instance.<wbr>push_password_updates_disabled | Stop pushing user passwords
app.<wbr>app_instance.<wbr>push_deactivated_users_enabled | Deprovisioning unassigned users
app.<wbr>app_instance.<wbr>push_deactivated_users_disabled | Stop deprovisioning unassigned users
app.<wbr>app_instance.<wbr>user_management_disabled | Disable provisioning
app.<wbr>app_instance.<wbr>default | {0}
app.<wbr>app_instance.<wbr>config-error | Configuration error detected for ${app_instance_name}: ${config_error}
app.<wbr>app_instance.<wbr>custom_user_management_support_enabled | Custom Provisioning Support is enabled
app.<wbr>app_instance.<wbr>custom_user_management_support_disabled | Custom Provisioning Support is disabled
app.<wbr>app_instance.<wbr>personal | Personal App
app.<wbr>app_instance.<wbr>import_match_rule_update | Updated Import Match Rules


##### App Editor

ObjectType | Description
--- | ---
app.<wbr>app_editor.<wbr>app.<wbr>create | User created new app (Version ${app_version_id})
app.<wbr>app_editor.<wbr>app.<wbr>update | User updated app (Version ${app_version_id})


##### API Event Exception

ObjectType | Description
--- | ---
api.<wbr>error.<wbr>logged_event.<wbr>exception | API Error: Event Exception
api.<wbr>error.<wbr>logged_event.<wbr>unknown_exception | API Error: Unknown Exception


##### API Token Lifecycle

ObjectType | Description
--- | ---
api.<wbr>token.<wbr>revoke | API Token revoked ${clientAppMessage}
api.<wbr>token.<wbr>enable | API Token enabled
api.<wbr>token.<wbr>create | API Token created ${clientAppMessage}
api.<wbr>token.<wbr>client_app_message | for client application ${clientAppName}


##### Policy Lifecycle

ObjectType | Description
--- | ---
policy.<wbr>created | Policy created (id: ${policyId}, type: ${policyType})
policy.<wbr>activated | Policy activated (id: ${policyId}, type: ${policyType})
policy.<wbr>deactivated | Policy deactivated (id: ${policyId}, type: ${policyType})
policy.<wbr>updated | Policy updated (id: ${policyId}, type: ${policyType})
policy.<wbr>deleted | Policy deleted (id: ${policyId}, type: ${policyType})
policy.<wbr>rule.<wbr>added | Policy rule (id: ${policyRuleId}, type: ${policyRuleType}) added to Policy (id: ${policyId}, type: ${policyType})
policy.<wbr>rule.<wbr>activated | Policy rule (id: ${policyRuleId}, type: ${policyRuleType}) activated in Policy (id: ${policyId}, type: ${policyType})
policy.<wbr>rule.<wbr>deactivated | Policy rule (id: ${policyRuleId}, type: ${policyRuleType}) deactivated in Policy (id: ${policyId}, type: ${policyType})
policy.<wbr>rule.<wbr>updated | Policy rule (id: ${policyRuleId}, type: ${policyRuleType}) updated in Policy (id: ${policyId}, type: ${policyType})
policy.<wbr>rule.<wbr>deleted | Policy rule (id: ${policyRuleId}, type: ${policyRuleType}) deleted from Policy (id: ${policyId}, type: ${policyType})


##### Generic App Auth

ObjectType | Description
--- | ---
app.<wbr>auth.<wbr>sso | User performed single sign on to app


##### Admin

ObjectType | Description
--- | ---
app.<wbr>admin.<wbr>sso.<wbr>no_response | SAML Response contained no confirmations
app.<wbr>admin.<wbr>sso.<wbr>bad_response | Could not parse SAML response
app.<wbr>admin.<wbr>sso.<wbr>orgapp.<wbr>notfound | Could not find application instance


##### Inbound Del Auth

ObjectType | Description
--- | ---
app.<wbr>inbound_del_auth.<wbr>login_success | Successful inbound delegated authentication request for user ${username}
app.<wbr>inbound_del_auth.<wbr>failure.<wbr>not_supported | App does not support delegated authentication
app.<wbr>inbound_del_auth.<wbr>failure.<wbr>instance_not_found | External system attempted to delegate authentication to Okta with an unknown app instance id: ${instance_id}
app.<wbr>inbound_del_auth.<wbr>failure.<wbr>invalid_request.<wbr>could_not_parse_credentials | Could not parse credentials from incoming request
app.<wbr>inbound_del_auth.<wbr>failure.<wbr>account_not_found | Could not find user matching username ${username} during delegated authentication from app: ${app_name}
app.<wbr>inbound_del_auth.<wbr>failure.<wbr>invalid_login_credentials | Got invalid credentials for username: ${username} trying to sign-in to app: ${app_name}. Login result code: ${login_result}


##### Rich Client Auth

ObjectType | Description
--- | ---
app.<wbr>rich_client.<wbr>instance_not_found | Rich client authentication failed: Unknown app instance id ${instance_id}
app.<wbr>rich_client.<wbr>account_not_found | Rich client authentication failed: Could not find ${app_name} user matching username ${username}
app.<wbr>rich_client.<wbr>multiple_accounts_found | Rich client authentication failed: Multiple ${app_name} users with username ${username} found
app.<wbr>rich_client.<wbr>login_failure | Rich client authentication failed for user ${username} to app ${app_name}
app.<wbr>rich_client.<wbr>login_success | Successful rich client authentication for user ${username} to app ${app_name}


##### Deprovision Tasks

ObjectType | Description
--- | ---
app.<wbr>user_management.<wbr>deprovision_task_complete | Deprovision task completed${empty app_username ? '' : ssfn:concat(' for user ', app_username)}


##### Credentials Recovery

ObjectType | Description
--- | ---
app.<wbr>generic.<wbr>reversibility.<wbr>credentials.<wbr>recovery | Password recovered from previous assignment
app.<wbr>generic.<wbr>reversibility.<wbr>personal.<wbr>app.<wbr>recovery | Personal app assignment recovered
app.<wbr>generic.<wbr>reversibility.<wbr>individual.<wbr>app.<wbr>recovery | Individual app assignment recovered


##### Google

ObjectType | Description
--- | ---
app.<wbr>google.<wbr>sso.<wbr>failure.<wbr>relay_state_not_found | SSO Error: No RelayState passed in request
app.<wbr>google.<wbr>sso.<wbr>failure.<wbr>domain_not_found | SSO Error: Unable to determine Google domain from URI [${invalid_uri}]
app.<wbr>google.<wbr>sso.<wbr>failure.<wbr>invalid_continue_url | SSO Error: Could not parse domain from URI [${invalid_url}]
app.<wbr>google.<wbr>sso.<wbr>failure.<wbr>invalid_domain | SSO Error: Google domain [${invalid_domain}] is not valid
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>api_login_failure | API login failed.
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>api_service_forbidden | API service forbidden: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>provisioning | Failed to provision app user: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>user_import | Failed to import Google user: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>user_group_import | Failed to import groups for Google user: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>download.<wbr>custom.<wbr>objects | Failed to download group data: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>create.<wbr>group | Failed to create Google group: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>delete.<wbr>group | Failed to delete Google group: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>update.<wbr>group | Failed to update Google group data: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>failure.<wbr>group.<wbr>membership.<wbr>update | Could not update Google group membership: ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>add_user_to_group | Added ${okta_username} to group '${group}'
app.<wbr>google.<wbr>user_management.<wbr>remove_user_from_group | Removed ${okta_username} from group '${group}'
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>check_user_exists | Failed to verify that the user exists. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>check_user_exists.<wbr>invalid_domain | The user's email domain does not match the domain specified in Google Apps.
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>create_new_user | Failed to create new user. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>deactivate_user | Failed to deactivate user. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>reactivate_user | Failed to reactivate user. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>push_password_update | Failed to push password update. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>push_profile_update | Failed to push profile update. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>download_users | Failed to download users. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>import_user_profile | Failed to import user profile. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>download_custom_objects | Failed to download custom objects. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>create_group | Failed to create group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>create_group_duplicate | Failed to create group because group already exists. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>update_group | Failed to update group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>delete_group | Failed to delete group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>download_group_members | Failed to retrieve members from group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>add_member_to_group | Failed to add user to group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>remove_member_from_group | Failed to remove user to group. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>download_org_units | Failed to download organization units. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>rateLimit | Rate limit exceeded for Google. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>download_app_schema | Failed to download Google schema. ${app_error_code}
app.<wbr>google.<wbr>user_management.<wbr>error.<wbr>invalid_orgunit_id | The OrgUnit specified is invalid. Please refresh the Application Data and retry again. ${app_error_code}
app.<wbr>google.<wbr>api.<wbr>error.<wbr>DomainUserLimitExceeded | Maximum number of users permitted has been reached for this domain
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidEmailAddress | Invalid Email Address
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidFamilyName | Invald Family Name
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidGivenName | Invalid Given Name
app.<wbr>google.<wbr>api.<wbr>error.<wbr>UnknownError | Unknown error occurred while provisioning user
app.<wbr>google.<wbr>api.<wbr>error.<wbr>ServerBusy | Google Service is busy
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidValue | Invalid value while provisioning user
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidPassword | Password does not meet password policy
app.<wbr>google.<wbr>api.<wbr>error.<wbr>EntityExists | User already exists
app.<wbr>google.<wbr>api.<wbr>error.<wbr>InvalidUsername | Invalid User name
app.<wbr>google.<wbr>api.<wbr>error.<wbr>UserDeletedRecently | An account with this user name was recently deleted
app.<wbr>google.<wbr>api.<wbr>error.<wbr>default | {0}


##### Salesforce

ObjectType | Description
--- | ---
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>invalid_api_credentials | API login failed because credentials were invalid
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>password_expired | API login failed because password has expired
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>api_service_not_available | API login failed because this application's service appears to be unavailable.
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>general_api_login_failure | API login failed for an unknown reason.
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>provisioning | Failed to provision user due to: ${app_error_code}
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>user_import | Failed import user in app due to: ${app_error_code}
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>no_api_response | The Salesforce API is not responding. Please ensure that your configurations are correct.
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>thirdparty_error | External API error: ${app_error_message}
app.<wbr>salesforce.<wbr>user_management.<wbr>failure.<wbr>cant.<wbr>push.<wbr>password | Unable to push password to Salesforce: ${app_error_code}
app.<wbr>salesforce.<wbr>user_management.<wbr>sso.<wbr>only.<wbr>user.<wbr>password.<wbr>rejected | Unable to push a password for an SSO-Only user in Salesforce
app.<wbr>salesforce.<wbr>api.<wbr>error.<wbr>INVALID_OPERATION_WITH_EXPIRED_PASSWORD | The password used to connect to the Salesforce API has expired
app.<wbr>salesforce.<wbr>api.<wbr>error.<wbr>INVALID_LOGIN | The credentials used to log in to the Salesforce API were invalid; please check your Salesforce configuration
app.<wbr>salesforce.<wbr>api.<wbr>error.<wbr>INVALID_NEW_PASSWORD | The password being set does not meet the password requirements of your Salesforce configuration.
app.<wbr>salesforce.<wbr>api.<wbr>error.<wbr>default | {0}


##### GoToMeeting

ObjectType | Description
--- | ---
app.<wbr>gotomeeting.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_login_failure | Sign-in to app failed because the API credentials were invalid. Message from API: ${app_error_code}
app.<wbr>gotomeeting.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_not_available | Couldn't connect to the GoToMeeting API service for app: ${app_name}.
app.<wbr>gotomeeting.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>user_import | Failed import user in app: ${app_name} due to: ${app_error_code}
app.<wbr>gotomeeting.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>user_provisioning | Failed to provision user in app: ${app_name} due to: ${app_error_code}
app.<wbr>gotomeeting.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_url_is_malformed | The URL used to connect the GoToMeeting API is malformed. Contact Okta if this persists.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>DefaultMessage | GoToMeeting API Error: [{0}] {1}
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>InvalidLogin | This can occur for any of the following reasons: <br />1. The userid and/or password are invalid <br />2. The corporate account associated with the userid and password does not have the GoToMeeting API enabled <br />3. The userid/password is for a personal manager account.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>SoftLockout | Indicates that the account associated with the userid has been locked for <br />5 minutes due to 3 consecutive failed logon attempts
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>HardLockout | Indicates that the account associated with the userid has been locked due to <br />10 consecutive failed logon attempts. Customer Care or Professional Services intervention is required to lift the <br />hard lockout
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>InvalidEmailAddress | Email Address has incorrect syntax/format.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>EmailAlreadyInUseException | Email Address is already in use by another organizer in the same <br />account or is already invited to a different group.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>NoSuchConnection | The connection does not exist or has expired
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>RateLimitExceeded | The rate limit for this call has been exceeded.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>InternalError | An unknown error occurred on the GoToMeeting Server. Please retry action. <br />If this message persists please contact GoToMeeting support.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>ServiceUnavailable | The GoToMeeting API is currently unable to process requests.
app.<wbr>gotomeeting.<wbr>api.<wbr>error.<wbr>NoSuchMember | No organizer exists for the supplied organizerEmail.


##### GoToMeetingRest

ObjectType | Description
--- | ---
app.<wbr>gotomeeting_rest.<wbr>api.<wbr>error.<wbr>DefaultMessage | GoToMeeting API Error: ${app_error_code}
app.<wbr>gotomeeting_rest.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_not_available | Couldn't connect to the GoToMeeting API service for app: ${app_name}.
app.<wbr>gotomeeting_rest.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>user_import | Failed import user in app: ${app_name} due to: ${app_error_code}
app.<wbr>gotomeeting_rest.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>user_provisioning | Failed to provision user in app: ${app_name} due to: ${app_error_code}
app.<wbr>gotomeeting_rest.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_url_is_malformed | The URL used to connect the GoToMeeting API is malformed. Contact Okta if this persists.
app.<wbr>gotomeeting_rest.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_auth_failed | OAuth authentication failed.


##### Workday

ObjectType | Description
--- | ---
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>validate | Unable to validate Workday API Credentials: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>bind | Unable to bind to Workday API Endpoint: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-workers | Unable to fetch Workday users: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-worker-by-id | Unable to find Workday user by id: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-worker-by-username | Unable to find Workday user by username: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>parse-workers | Unable to parse Worker result from Workday: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>parse-groups | Unable to parse Group result from Workday: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>parse-group-assignments | Unable to parse Group Assignment result from Workday: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-groups | Unable to fetch provisioning groups from Workday: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-group-assignments | Unable to fetch provisioning group assignments from Workday: ${app_error_code}
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>get-tx-logs | Unable to fetch Workday transaction logs: ${app_error_code}
workdayNoEmployeeIdPrompt | No Employee Id Prompt for WID found in custom reports. ${app_error_code}
workdayNullInResponse | Null in response from Workday. ${app_error_code}


##### Legacy Workday Messages

ObjectType | Description
--- | ---
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>default | Workday API Error
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>search | Unable to perform search
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>fetch | Unable to retrieve user
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>update | Unable to update user
app.<wbr>workday.<wbr>api.<wbr>error.<wbr>builduser | Unable to build user: ${app_error_code}


##### Yammer

ObjectType | Description
--- | ---
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>validation | Unable to validate Yammer API configuration
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>check.<wbr>user | Unable to check for user on Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Unable to download users from Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>import.<wbr>profile | Unable to import user profile from Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Unable to push user profile to Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>deactivation | Unable to deactivate user within Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Unable to create user within Yammer
app.<wbr>yammer.<wbr>api.<wbr>error.<wbr>query | Unable to query Yammer API


##### Echosign

ObjectType | Description
--- | ---
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>connection | Failed to connect with the Echosign API key
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>search.<wbr>by.<wbr>id | Error when searching Echosign for User
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>search.<wbr>by.<wbr>login | Error when searching Echosign for Username
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Error when fetching all users in Echosign
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>import.<wbr>profile | Error when importing profile information for user
app.<wbr>echosign.<wbr>api.<wbr>error.<wbr>create | Error trying to create new user in EchoSign


##### SuccessFactors

ObjectType | Description
--- | ---
app.<wbr>successfactors.<wbr>api.<wbr>exception | Failed to query SuccessFactors API
app.<wbr>successfactors.<wbr>api.<wbr>error | Error parsing SuccessFactors API results


##### Postini

ObjectType | Description
--- | ---
app.<wbr>postini.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_login_failed | Failed to authenticate with the Postini API
app.<wbr>postini.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>api_not_available | Could not connect to the Postini API
app.<wbr>postini.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>configuration | Failed to set provisioning options for Postini
app.<wbr>postini.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>user_import | Failed to import users from Postini
app.<wbr>postini.<wbr>user_management.<wbr>config.<wbr>failure.<wbr>provisioning | Failed to provision user in Postini
app.<wbr>postini.<wbr>user_management.<wbr>failure.<wbr>download_users | Failed to download users from Postini


##### Webex

ObjectType | Description
--- | ---
app.<wbr>webex.<wbr>api.<wbr>error.<wbr>validation | Failed to validate Webex Config: ${app_error_code}
app.<wbr>webex.<wbr>api.<wbr>error.<wbr>default | Webex failure: ${app_error_code}


##### Zendesk

ObjectType | Description
--- | ---
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>validate | Failed to validate Zendesk API credentials
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>download.<wbr>groups | Failed to download group information from Zendes
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>parse.<wbr>groups | Failed to parse group information from Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>download.<wbr>organizations | Failed to download organization information from Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>get.<wbr>login | Failed to get user by login
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>push.<wbr>password | Failed to push password to Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Failed to push user profile to Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Failed to create new user in Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>get.<wbr>users | Failed to download users from Zendesk
app.<wbr>zendesk.<wbr>api.<wbr>error.<wbr>role.<wbr>restriction | Invalid Role / Ticket Restriction combination for Zendesk user


##### Confluence

ObjectType | Description
--- | ---
confluenceLoginFailed | Could not connect to the Confluence API, please check your API Endpoint and Key
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>login | Failed to login to Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>logout | Failed to logout from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>parse.<wbr>groups | Failed to parse group information from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Failed to reactivate user from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>check.<wbr>group.<wbr>exists | Failed to verify a group exists from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>get.<wbr>user | Failed to download a user from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>convert.<wbr>remote.<wbr>user.<wbr>to.<wbr>app.<wbr>user | Failed to convert a remote user to an app user
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>convert.<wbr>app.<wbr>user.<wbr>to.<wbr>remote.<wbr>user | Failed to convert an app user to a remote user
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download all user from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create new a user
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>remove.<wbr>user | Failed to remove a user from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>group | Failed to create new a group
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>remove.<wbr>group | Failed to remove a group from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>add.<wbr>user.<wbr>to.<wbr>group | Failed to assign a user to a group from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>remove.<wbr>user.<wbr>to.<wbr>group | Failed to remove a user from a group from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>get.<wbr>user.<wbr>groups | Failed to download a user's groups from Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Failed to push a new password to a user to Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to Confluence
app.<wbr>confluence.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user's profile from Confluence


##### SugarCRM

ObjectType | Description
--- | ---
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>login | Failed to login to SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>logout | Failed to logout from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>hash.<wbr>password | Failed to hash password
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>set.<wbr>entry | Failed to set entry
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>get.<wbr>entry.<wbr>list | Failed to get entry list
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>download.<wbr>server.<wbr>set.<wbr>values | Failed to download values from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Failed to reactivate user from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download all user from SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create a new user
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Failed to push a new password to a user to SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to SugarCRM
app.<wbr>sugarcrm.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user's profile from SugarCRM


##### Jira

ObjectType | Description
--- | ---
jiraLoginFailed | Could not connect to the Jira API, please check your API Endpoint and Key
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>binding | Failed to bind with Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>login | Failed to login to Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>logout | Failed to logout from Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>get.<wbr>user | Failed to download a user from Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>convert.<wbr>remote.<wbr>user.<wbr>to.<wbr>app.<wbr>user | Failed to convert a remote user to an app user. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>convert.<wbr>app.<wbr>user.<wbr>to.<wbr>remote.<wbr>user | Failed to convert an app user to a remote user. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download all user from Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create new a user. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Failed to push a new password to a user to Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user's profile from Jira. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>upsert.<wbr>group | Failed to create a new user group. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>delete.<wbr>group | Failed to delete user group. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>update.<wbr>group.<wbr>membership | Failed to update users in group. ${app_error_code}
app.<wbr>jira.<wbr>api.<wbr>error.<wbr>download.<wbr>server.<wbr>set.<wbr>values | Failed to download user groups list. ${app_error_code}


##### ServiceNow

ObjectType | Description
--- | ---
servicenowLoginFailed | Could not verify the ServiceNow administrator login and password; please confirm that these are set correctly. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>binding.<wbr>user | Failed to bind with ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download all user from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create new a user. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Failed to push a new password to a user to ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user's profile from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Failed to reactivate user from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>validation | Failed to validate your Admin credentials. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>get.<wbr>keys.<wbr>by.<wbr>user.<wbr>id | Failed to fetch user. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>get.<wbr>departments | Failed to download departments list from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>get.<wbr>locations | Failed to download locations list from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>get.<wbr>costcenters | Failed to download cost centers list from ServiceNow. ${app_error_code}
app.<wbr>servicenow.<wbr>api.<wbr>error.<wbr>import.<wbr>manager.<wbr>profile | Failed to resolve ServiceNow manager hash: ${app_error_code}


##### ServiceNow Plugin Version

ObjectType | Description
--- | ---
app.<wbr>servicenow_app2.<wbr>api.<wbr>validation.<wbr>failure | Could not verify the ServiceNow administrator login and password; please confirm that these are set correctly.
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>binding.<wbr>user | Failed to bind with ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download all user from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create new a user. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Failed to push a new password to a user to ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user profile from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Failed to reactivate user from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>validation | Failed to validate your Admin credentials. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>get.<wbr>keys.<wbr>by.<wbr>user.<wbr>id | Failed to fetch user. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>get.<wbr>departments | Failed to download departments list from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>get.<wbr>locations | Failed to download locations list from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>get.<wbr>costcenters | Failed to download cost centers list from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>download.<wbr>groups | Failed to get user groups from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>upsert.<wbr>group | Failed to upsert group in ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>delete.<wbr>group | Failed to delete group in ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>download.<wbr>group.<wbr>memberships | Failed to get group memberships from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>warn.<wbr>upsert.<wbr>group | Failed to get existent group memberships from ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>add.<wbr>group.<wbr>memberships | Failed to add group membership in ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>delete.<wbr>group.<wbr>memberships | Failed to delete group membership in ServiceNow. ${app_error_code}
app.<wbr>servicenow_app2.<wbr>api.<wbr>error.<wbr>import.<wbr>manager.<wbr>profile | Failed to find manager profile in AD ${app_error_code}


##### Coupa

ObjectType | Description
--- | ---
app.<wbr>coupa.<wbr>api.<wbr>connection.<wbr>error | Failed to connect to Coupa API


##### MSBPOS

ObjectType | Description
--- | ---
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>validate.<wbr>creds | Failed to validate MSBPOS Credentials
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user in MSBPOS:
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed while checking for user in MSBPOS
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>activate.<wbr>license | Failed to add license to user in MSBPOS
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>get.<wbr>subscription | Failed to find subscription id in MSBPOS
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>push.<wbr>password | Failed to push password to MSBPOS
app.<wbr>msbpos.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Failed to create user in MSBPOS


##### BIG Machines

ObjectType | Description
--- | ---
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>connection | Failed to connect to BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>login | Failed to authenticate against BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>logout | Failed to logout from BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to check if user exists in BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>profile.<wbr>update | Failed to update profile for user in BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>create | Failed to create in BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>import | Failed to import user in BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>deactivate | Failed to deactivate user in BigMachines
app.<wbr>bigmachines.<wbr>api.<wbr>error.<wbr>activate | Failed to Activate user in BigMachines


##### Central Desktop

ObjectType | Description
--- | ---
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>connection | Failed to connect to CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>login | Failed to authenticate against CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>logout | Failed to logout from CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to check if user exists in CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>profile.<wbr>update | Failed to update profile for user in CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>create | Failed to create user in CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>import | Failed to import user in CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>deactivate | Failed to deactivate user in CentralDesktop
app.<wbr>centraldesktop.<wbr>api.<wbr>error.<wbr>password.<wbr>update | Failed to update user password in CentralDesktop


##### Office365 Messages

ObjectType | Description
--- | ---
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>validate.<wbr>creds | Could not validate your Office 365 credentials, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>validate.<wbr>creds.<wbr>unknown.<wbr>exception | Could not communicate with Office 365 to validate your credentials, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>download.<wbr>custom.<wbr>objects | Could not download group/role/license data for your Office 365 instance, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Could not download all users from your Office 365 instance, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>download.<wbr>groups | Could not download all groups from your Office 365 instance, received error: {app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Could not deactivate Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Could not reactivate Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Could not determine status of Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>push.<wbr>password | Could not push password for Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Could not create user in Office 365, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Could not push profile for Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>import.<wbr>profile | Could not import profile for Office 365 user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>ad.<wbr>user | User is assigned to more than one instance of Active Directory, could not set Immutable ID
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>no.<wbr>endpoints.<wbr>found | No Office 365 endpoint found to send our request.
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>endpoint.<wbr>unavailable | Unable to reach the Office 365 endpoint: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>create.<wbr>failure | Could not create Office 365 group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>create.<wbr>failure.<wbr>name.<wbr>in.<wbr>use | Could not create Office 365 group because the name is already in use, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>update.<wbr>failure | Could not update Office 365 group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>update.<wbr>failure.<wbr>not.<wbr>found | Could not update Office 365 group because it was not found, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>delete.<wbr>failure | Could not delete Office 365 group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>membership.<wbr>update.<wbr>failure | Could not update the Office 365 group membership, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>membership.<wbr>update.<wbr>removal.<wbr>failure | Could not update the Office 365 group membership because of an error removing a user from the group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>membership.<wbr>update.<wbr>assignment.<wbr>failure | Could not update the Office 365 group membership because of an error assigning a user to the group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>group.<wbr>membership.<wbr>update.<wbr>group.<wbr>not.<wbr>found.<wbr>failure | Could not update the Office 365 group membership because the group could not be found, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>sync.<wbr>complete | Sync completed. countUser=${count_user}, countUserFailure=${count_user_failure}, countGroup=${count_group}, countGroupFailure=${count_group_failure}, countContact=${count_contact}, countContactFailure=${count_contact_failure}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>sync | Failed to sync any object to Office 365, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>sync.<wbr>finalize | Failed to finalize export to Office 365, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>sync.<wbr>group | Failed to sync group, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>sync.<wbr>user | Failed to sync user, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>sync.<wbr>contact | Failed to sync contact, received error: ${app_error_code}
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>x-ms-forwarded-client-ip-header.<wbr>absent | X-MS-Forwarded-Client-IP header either empty or not found in the request.
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>no-license-found | No Office 365 license is specified for the user
app.<wbr>office365.<wbr>api.<wbr>error.<wbr>multiple-licenses-found | Multiple license types selected to be assigned to the user. Only one license type allowed to be selected


##### Dropbox

ObjectType | Description
--- | ---
dropboxVerifyFailed | Could not connect to Dropbox API, please check your OAuth Token and Secret
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>validation | Unable to validate Dropbox API configuration. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>check.<wbr>user | Unable to check for user on Dropbox. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Unable to download Dropbox users. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>import.<wbr>profile | Unable to import user profile from Dropbox. Note that this feature will not work for users who are only INVITED. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Unable to push user profile to Dropbox. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>deactivation | Unable to deactivate Dropbox user. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Unable to create Dropbox user. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Unable to update password for the given Dropbox user. Note that this feature will not work for users who are only INVITED. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>query | Unable to query Dropbox API. ${app_error_code}
app.<wbr>dropbox.<wbr>api.<wbr>error.<wbr>rateLimit.<wbr>exceeded | Rate limit exceeded for Dropbox. ${app_error_code}


##### HipChat

ObjectType | Description
--- | ---
hipchatVerifyFailed | Could not connect to Hipchat API, please check your API Token
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>validation | Unable to validate Hipchat API configuration. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>check.<wbr>user | Unable to check for user on Hipchat. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Unable to download Hipchat users. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>import.<wbr>profile | Unable to import user profile from Hipchat. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Unable to push user profile to Hipchat. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>deactivation | Unable to deactivate Hipchat user. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>reactivation | Unable to reactivate Hipchat user. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Unable to create Hipchat user. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Unable to update password for the given Hipchat user. ${app_error_code}
app.<wbr>hipchat.<wbr>api.<wbr>error.<wbr>query | Unable to query Hipchat API. ${app_error_code}
app.<wbr>hipchat.<wbr>rateLimit.<wbr>exceeded | Rate limit exceeded for Hipchat ${app_error_code}


##### Active Directory

ObjectType | Description
--- | ---
app.<wbr>ad.<wbr>config.<wbr>agent.<wbr>agent_created | Active Directory agent ${agent_name} created
app.<wbr>ad.<wbr>config.<wbr>agent.<wbr>agent_deactivated | Active Directory agent ${agent_name} deactivated
app.<wbr>ad.<wbr>config.<wbr>agent.<wbr>agent_reactivated | Active Directory agent ${agent_name} reactivated
app.<wbr>ad.<wbr>config.<wbr>agent.<wbr>agent_reactivate_failed_missing_token | Cannot reactivate the Active Directory agent ${agent_name} because the token has been removed. You must delete and re-install the agent.
app.<wbr>ad.<wbr>config.<wbr>agent.<wbr>agent_deleted | Active Directory agent ${agent_name} deleted
app.<wbr>ad.<wbr>agent.<wbr>disconnected | Active Directory agent ${agent_name} stopped connecting to Okta
app.<wbr>ad.<wbr>agent.<wbr>reconnected | Active Directory agent ${agent_name} reconnected to Okta
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>internal_object | Skipping the import of user '${distinguished_name}' because their account has attribute "iscriticalsystemobject" = true. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>invalid_user_account_control | Skipping import of user '${distinguished_name}'. Expected this user's UserAccountControl flag in Active Directory to be a valid integer. Got: [${user_account_control}]. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>missing_required_attribute | Skipping import of user '${distinguished_name}'. Expected required AD attribute: ${ad_attr_name}, (Okta attribute: ${okta_attr_name}) to not be null. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>attribute_too_long | Skipping import of user '${distinguished_name}'. AD attribute: ${ad_attr_name}, (Okta attribute: ${okta_attr_name}) with the value of ${ad_attr_value} was too long to be saved. Please consult with your Active Directory admin if you believe this user should be imported.


##### Name Is Null

ObjectType | Description
--- | ---
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>internal_object.<wbr>unknown_user | Skipping the import of AD user with unknown username because their account has attribute "iscriticalsystemobject" = true. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>invalid_user_account_control.<wbr>unknown_user | Skipping import of AD user with unknown username. Expected this user's UserAccountControl flag in Active Directory to be a valid integer. Got: [${user_account_control}]. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_user.<wbr>missing_required_attribute.<wbr>unknown_user | Skipping import of AD user with unknown username. Expected required AD attribute: ${ad_attr_name}, (Okta attribute: ${okta_attr_name}) to not be null. Please consult with your Active Directory admin if you believe this user should be imported.
app.<wbr>ad.<wbr>api.<wbr>user_import.<wbr>warn.<wbr>skipped_ou.<wbr>missing_required_attribute | Skipping the import of OU with missing attributes: DN: ${ou_attr_dn}, GUID: ${ou_attr_guid}, Name: ${ou_attr_name}
app.<wbr>ad.<wbr>outbound.<wbr>delauth.<wbr>no_connected_agent | Delegated authentication request for user: ${app_username} in app ${app_name} was not processed. No agents are connected to Okta.
app.<wbr>ad.<wbr>outbound.<wbr>delauth.<wbr>timeout | Delegated authentication request for user: ${app_username} in app ${app_name} timed out. Ensure that the agent for your directory is connected to Okta.


##### Built From AgentActionResult

ObjectType | Description
--- | ---
app.<wbr>ad.<wbr>agent.<wbr>start | Directory agent ${agent_name} started
app.<wbr>ad.<wbr>agent.<wbr>start.<wbr>error | Directory agent ${agent_name} failed to start with error: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>config | Directory agent ${agent_name} updated its configuration
app.<wbr>ad.<wbr>agent.<wbr>config.<wbr>error | Directory agent ${agent_name} encountered a configuration error: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>scan | Directory agent ${agent_name} performed an import
app.<wbr>ad.<wbr>agent.<wbr>scan.<wbr>error | Directory agent ${agent_name} encountered an import error: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>upgrade | Directory agent ${agent_name} upgraded
app.<wbr>ad.<wbr>agent.<wbr>upgrade.<wbr>error | Directory agent ${agent_name} upgraded
app.<wbr>ad.<wbr>agent.<wbr>user_auth | User Auth Success. Agent: ${agent_name}.
app.<wbr>ad.<wbr>agent.<wbr>user_auth.<wbr>error | User Auth Failure. Agent ${agent_name}. Message: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>dir-invoke | Directory agent ${agent_name} performed a Directory Invoke command
app.<wbr>ad.<wbr>agent.<wbr>dir-invoke.<wbr>error | Directory agent ${agent_name} encountered an error performing a Directory Invoke: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>read-ldap | Directory agent ${agent_name} performed an LDAP Read
app.<wbr>ad.<wbr>agent.<wbr>read-ldap.<wbr>error | Directory agent ${agent_name} encountered an error performing an LDAP Read: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>user-auth-and-update | User Auth and Update Success. Agent: ${agent_name}.
app.<wbr>ad.<wbr>agent.<wbr>user-auth-and-update.<wbr>error | Directory Agent ${agent_name} encountered an error performing a User Auth and Update action: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>write-ldap | Directory agent ${agent_name} performed an LDAP Write
app.<wbr>ad.<wbr>agent.<wbr>write-ldap.<wbr>error | Directory agent ${agent_name} encountered an error performing an LDAP Write: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>real-time-sync | Directory RealTimeSync Success. Agent: ${agent_name}.
app.<wbr>ad.<wbr>agent.<wbr>real-time-sync.<wbr>error | Directory Agent ${agent_name} encountered an error performing a RealTimeSync action: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>modify-config | Directory agent ${agent_name} had its configuration modified.
app.<wbr>ad.<wbr>agent.<wbr>modify-config.<wbr>error | Directory Agent ${agent_name} encountered an error performing a ModifyConfig action: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>read-config | Directory agent ${agent_name} had its configuration read.
app.<wbr>ad.<wbr>agent.<wbr>read-config.<wbr>error | Directory Agent ${agent_name} encountered an error performing a ReadConfig action: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>fetch-logs | Directory agent ${agent_name} had logs uploaded.
app.<wbr>ad.<wbr>agent.<wbr>fetch-logs.<wbr>error | Directory Agent ${agent_name} encountered an error performing a FetchLogs action: ${agent_error_message}
app.<wbr>ad.<wbr>agent.<wbr>read-schema | Directory agent ${agent_name} performed schema read operation;
app.<wbr>ad.<wbr>agent.<wbr>read-schema.<wbr>error | Directory agent ${agent_name} encountered an error performing schema read: ${agent_error_message};
app.<wbr>ad.<wbr>agent.<wbr>read-forest-topology | Directory agent ${agent_name} performed topology import operation;
app.<wbr>ad.<wbr>agent.<wbr>read-forest-topology.<wbr>error | Directory agent ${agent_name} encountered an error performing topology import operation: ${agent_error_message};
app.<wbr>ad.<wbr>agent.<wbr>read-dirsync | Directory agent ${agent_name} performed dirsync operation;
app.<wbr>ad.<wbr>agent.<wbr>read-dirsync.<wbr>error | Directory agent ${agent_name} encountered an error performing dirsync: ${agent_error_message};


##### AD Group Push Results

ObjectType | Description
--- | ---
app.<wbr>ad.<wbr>group.<wbr>provision.<wbr>create.<wbr>error | Error provisioning AD group: {0}
app.<wbr>ad.<wbr>group.<wbr>provision.<wbr>modify.<wbr>error | Error updating AD group: {0}
app.<wbr>ad.<wbr>group.<wbr>provision.<wbr>delete.<wbr>error | Error deleting AD group: {0}
app.<wbr>ad.<wbr>group.<wbr>provision.<wbr>updateMembershipError | Error ''{2}'' updating group membership for group={0} in directory {1}â.


##### LDAP Login Results

ObjectType | Description
--- | ---
app.<wbr>ldap.<wbr>login.<wbr>success | LDAP authentication succeeded
app.<wbr>ldap.<wbr>login.<wbr>bad_password | LDAP authentication failed: bad username or password
app.<wbr>ldap.<wbr>login.<wbr>expired_password | LDAP authentication failed: password has expired (${app_error_code})
app.<wbr>ldap.<wbr>login.<wbr>locked_account | LDAP authentication failed: account is locked (${app_error_code})
app.<wbr>ldap.<wbr>login.<wbr>disabled_account | LDAP authentication failed: account is disabled (${app_error_code})
app.<wbr>ldap.<wbr>login.<wbr>unknown_failure | LDAP authentication failed for unknown reasons: (${app_error_code})


##### AD Login Results

ObjectType | Description
--- | ---
app.<wbr>ad.<wbr>login.<wbr>success | Active Directory authentication succeeded
app.<wbr>ad.<wbr>login.<wbr>bad_password | Active Directory authentication failed: bad username or password
app.<wbr>ad.<wbr>login.<wbr>expired_password | Active Directory authentication failed: password has expired (${app_error_code})
app.<wbr>ad.<wbr>login.<wbr>locked_account | Active Directory authentication failed: account is locked (${app_error_code})
app.<wbr>ad.<wbr>login.<wbr>unknown_failure | Active Directory authentication failed for unknown reasons: (${app_error_code})
app.<wbr>ad.<wbr>password.<wbr>reset.<wbr>unlock-failed | Active Directory failed to reset accountLockTime for User: ${app_username}, check the permissions on the service account
app.<wbr>ad.<wbr>password.<wbr>reset.<wbr>success | Active Directory password reset was successful for User : ${app_username}.
app.<wbr>ad.<wbr>password.<wbr>reset.<wbr>failure | Active Directory failed to reset password for User : ${app_username}.
app.<wbr>ad.<wbr>user.<wbr>account.<wbr>unlock.<wbr>failure | Active Directory user account unlock failed for user : ${app_username}.
app.<wbr>ad.<wbr>user.<wbr>account.<wbr>unlock.<wbr>success | Active Directory user account unlock succeeded for user : ${app_username}.
app.<wbr>ldap.<wbr>jit.<wbr>ambiguous | JIT failed due to ambiguous name for User: ${app_error_code}, ensure that only one directory refers to this User
app.<wbr>ldap.<wbr>agent.<wbr>password_reset | LDAP agent ${agent_name} performed a password reset
app.<wbr>ldap.<wbr>agent.<wbr>password_reset.<wbr>error | LDAP agent ${agent_name} failed to performed a password reset
app.<wbr>ldap.<wbr>agent.<wbr>password_reset.<wbr>timeout | LDAP agent ${agent_name} password reset timed out
app.<wbr>ldap.<wbr>agent.<wbr>password_change.<wbr>timeout | LDAP agent ${agent_name} password change timed out
app.<wbr>ldap.<wbr>agent.<wbr>password_change | LDAP agent ${agent_name} performed a password change
app.<wbr>ldap.<wbr>agent.<wbr>password_update | LDAP agent ${agent_name} performed a password update
app.<wbr>ldap.<wbr>agent.<wbr>password_update.<wbr>error | LDAP agent ${agent_name} failed to perform a password update


##### IWA Applications Messages

ObjectType | Description
--- | ---
iwa.<wbr>ping | IWA Ping Action Received
iwa.<wbr>ping.<wbr>error | Failed to ping IWA agent: ${error_message}
iwa.<wbr>invalid_certificate | Invalid IWA SSO certificate
iwa.<wbr>no_certificate | No IWA SSO certificate provided from user: ${app_username}
iwa.<wbr>invalid_token | Invalid IWA SSO redirect token
iwa.<wbr>invalid_xml_signature | Invalid IWA XML signature from user: ${app_username}
iwa.<wbr>ip_not_in_range | IWA agent's IP is not in the range of allowed IP addresses. User tried to log in: ${app_username}
iwa.<wbr>created_successfully | Created IWA agent with redirect url: ${iwa_url} and version: ${iwa_version}
iwa.<wbr>creating_failed | Failed creating IWA agent with redirect url: ${iwa_url} and version: ${iwa_version}
iwa.<wbr>updated_successfully | Updated IWA agent: ${iwa_name}. ${iwa_custom_msg}
iwa.<wbr>updating_failed | Failed to update IWA agent ${iwa_name}. Error message: ${iwa_custom_msg}
iwa.<wbr>removed | Removed IWA agent ${iwa_name}
iwa.<wbr>disabled | Disabled IWA agent ${iwa_name}
iwa.<wbr>login_attempt_from_unknown_ip | Tried to login using IWA SSO from unknown IP: ${iwa_custom_msg}
iwa.<wbr>primary_not_found | No primary IWA app was found. Using default login page
iwa.<wbr>auth | IWA authentication result: ${iwa_custom_msg}
iwa.<wbr>went_offline | IWA agent ${iwa_custom_msg} went offline
iwa.<wbr>went_online | IWA agent ${iwa_custom_msg} is back to live. Setting it to backup
iwa.<wbr>promoted_to_primary | No primary IWA was found. Promoting backup ${iwa_custom_msg} to primary
iwa.<wbr>ad_agents_went_offline | IWA agent ${iwa_name} could not be verified because no active AD Agent available
iwa.<wbr>no_agents_promoted_to_primary | There is no primary IWA agent. Unable to find a backup IWA agent to promote to primary.
iwa.<wbr>custom | ${iwa_custom_msg}


##### Testing

ObjectType | Description
--- | ---
app.<wbr>test.<wbr>success_message | Test id: ${id} message: ${message}


##### Exception Messages

ObjectType | Description
--- | ---
exception.<wbr>invalid_event_type | ReportEventProcessor can't process event of type {0}


##### Platform - Groups

ObjectType | Description
--- | ---
platform.<wbr>group_app_assignment.<wbr>app_add | App ${instance_name} added to group ${group_name}
platform.<wbr>group_app_assignment.<wbr>app_remove | App ${instance_name} removed from group ${group_name}
platform.<wbr>group_app_assignment.<wbr>app_edit | App ${instance_name} properties edited in group ${group_name}


##### Inbound SAML

ObjectType | Description
--- | ---
core.<wbr>user_auth.<wbr>saml2.<wbr>inbound_saml_login_failed | Inbound SAML login failed with message: ${message}
core.<wbr>user_auth.<wbr>saml2.<wbr>user_create_failed | Inbound SAML user creation failed for user: ${login}


##### Rightscale Messages

ObjectType | Description
--- | ---
RightscaleVerifyFailed | Could not verify the Rightscale api username, password and id; please confirm that these are set <br />correctly
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>validate | Failed to validate Rightscale API credentials
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>download.<wbr>groups | Failed to download group information from Rightscale
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>push.<wbr>profile | Failed to push user profile to Rightscale: ${app_error_code}
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Failed to create new user in Rightscale: ${app_error_code}
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>get.<wbr>users | Failed to download users from Rightscale: ${app_error_code}
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>login | Failed to login to Rightscale: ${app_error_code}
app.<wbr>rightscale.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download users from Rightscale: ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>response | Could not connect to Box. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>invalid_user_login | User login is invalid. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>check_user_exists_external | User already exists on Box, but is not part of Box Enterprise account. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>check_user_exists | Could not verify that the user exists. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>deactivate_user | Could not deactivate user. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>reactivate_user | Could not reactivate user. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Could not download users. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>create_new_user | Could not create new user. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Could not push profile update. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Could not import user profile. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>download.<wbr>groups | Could not download groups. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>download.<wbr>group_users | Could not download group users. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>push.<wbr>groups_set | Could not add user to specified groups. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>push.<wbr>remove_from_groups | Could not remove user from specified groups. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>delete.<wbr>group | Could not delete group. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>create.<wbr>group | Could not create group. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>user.<wbr>push.<wbr>conflict_in_group | Skipped push of conflicting user in Box.
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>validate_parent_folder | Could not validate parent folder. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>create_personal_folder | Could not create personal folder. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>create_personal_folder.<wbr>conflict | In parent folder, personal folder already exists. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>personal_folder_sync_state | Could not configure the personal folder to sync folder to desktop. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>assign_folder_permissions | Could not assign folder permissions for personal folder. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>personal_folder_name | Personal folder name is invalid for user. ${app_error_code}
app.<wbr>boxnet.<wbr>api.<wbr>error.<wbr>add.<wbr>email.<wbr>alias | Could not add email alias ${alias} for user. ${app_error_code}


##### Netsuite Messages

ObjectType | Description
--- | ---
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>auth | Failed to authenticate with NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>check_user_exists | Failed to check if user exists on NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>create_new_user | Failed to create user in NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>deactivate_user | Failed to deactivate user in NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>reactivate_user | Failed to reactivate user in NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>import_user_profile | Failed to import user from NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>download_custom_objects | Failed to download roles from NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>download_users | Failed to download users from NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>push_profile_update | Failed to push profile update for user to NetSuite
app.<wbr>netsuite.<wbr>api.<wbr>error.<wbr>push_password_update | Failed to push password update for user in NetSuite


##### Concur Messages

ObjectType | Description
--- | ---
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>auth | Error authenticating against Concur: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user exists on Concur: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>create_user | Error while creating Concur user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>deactivate_user | Error while deactivating user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>reactivate_user | Error while reactivating user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>import_user_profile | Error while trying to import Concur user profile for user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>push_profile_update | Error while trying to push Concur profile update for user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>push_password_update | Error pushing Concur password for user: ${app_error_code}
app.<wbr>concur.<wbr>api.<wbr>error.<wbr>generic | Concur API error: ${app_error_code}


##### Lotus Domino

ObjectType | Description
--- | ---
app.<wbr>lotus_domino.<wbr>api.<wbr>exception | Error calling Lotus Domino API
app.<wbr>lotus_domino.<wbr>api.<wbr>error.<wbr>push.<wbr>password.<wbr>update | Error pushing password: ${app_error_code}


##### VeevaVault

ObjectType | Description
--- | ---
veevaVaultLoginFailed | Could not verify the Veeva Vault administrator login and password; please confirm that these are set correctly. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>binding.<wbr>user | Failed to bind with Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>download.<wbr>custom.<wbr>objects | Could not download custom user data for your Veeva Vault instance. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>download.<wbr>users | Failed to download users from Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>create.<wbr>new.<wbr>user | Failed to create new a user for Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>check.<wbr>user.<wbr>exists | Failed to verify a user exists from Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>push.<wbr>profile.<wbr>update | Failed to push a profile to a user to Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>import.<wbr>user.<wbr>profile | Failed to download a user's profile from Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>deactivate.<wbr>user | Failed to deactivate user from Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>reactivate.<wbr>user | Failed to reactivate user from Veeva Vault. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>validation | Failed to validate your Admin credentials. ${app_error_code}
app.<wbr>veeva_vault.<wbr>api.<wbr>error.<wbr>get.<wbr>keys.<wbr>by.<wbr>user.<wbr>id | Failed to fetch user. ${app_error_code}


##### Jive 6.0

ObjectType | Description
--- | ---
jive60LoginFailed | Could not verify the Jive administrator login and password; please confirm that these are set correctly.
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>api.<wbr>validation | Failed to validate Admin credentials. ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>auth | Error authenticating against Jive: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user exists on Jive: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>create_user | Error while creating Jive user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>deactivate_user | Error while deactivating user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>reactivate_user | Error while reactivating user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>import_user_profile | Error while trying to import Jive user profile for user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>push_profile_update | Error while trying to push Jive profile update for user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>push_password_update | Error pushing Jive password for user: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>upsert_group | Error while creating Jive security user group: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>upsert_group_duplicate | Jive user group already exists. ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>delete_group | Error while deleting Jive security user group: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>update_group_membership | Error while update Jive security user group membership for group: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>download_users | Error while downloading all users from Jive: ${app_error_code}
app.<wbr>jive60.<wbr>api.<wbr>error.<wbr>generic | Jive API error: ${app_error_code}


##### Jive 4.5

ObjectType | Description
--- | ---
jive45LoginFailed | Could not verify the Jive administrator login and password; please confirm that these are set correctly.
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>api.<wbr>validation | Failed to validate Admin credentials. ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>auth | Error authenticating against Jive: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user exists on Jive: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>create_user | Error while creating Jive user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>deactivate_user | Error while deactivating user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>reactivate_user | Error while reactivating user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>import_user_profile | Error while trying to import Jive user profile for user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>push_profile_update | Error while trying to push Jive profile update for user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>push_password_update | Error pushing Jive password for user: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>upsert_group | Error while creating Jive security user group: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>upsert_group_duplicate | Jive user group already exists. ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>delete_group | Error while deleting Jive security user group: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>update_group_membership | Error while update Jive security user group membership for group: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>download_users | Error while downloading all users from Jive: ${app_error_code}
app.<wbr>jive45.<wbr>api.<wbr>error.<wbr>generic | Jive API error: ${app_error_code}


##### Evernote Business

ObjectType | Description
--- | ---
evernoteBusinessVerifyFailed | Could not connect to Evernote Business API, please check your authentication Token
app.<wbr>evernote_business.<wbr>api.<wbr>error.<wbr>validation | Unable to validate Evernote API configuration. ${app_error_code}
app.<wbr>evernote_business.<wbr>api.<wbr>error.<wbr>deactivation | Unable to deactivate Evernote user. ${app_error_code}
app.<wbr>evernote_business.<wbr>api.<wbr>error.<wbr>create.<wbr>user | Unable to create Evernote user. ${app_error_code}
app.<wbr>evernote_business.<wbr>api.<wbr>error.<wbr>create.<wbr>user.<wbr>limit.<wbr>reached | Unable to create Evernote user. You have reached your maximum number of users. ${app_error_code}


##### Generic App

ObjectType | Description
--- | ---
appLoginFailed | Cannot connect. Please ensure all details are set correctly.
verificationFailed | Verification failed: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>api.<wbr>validation | Failed to validate Admin credentials: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>auth | Error authenticating: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>oauth.<wbr>get.<wbr>token | Error while retrieving OAuth token: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>oauth.<wbr>refresh.<wbr>token | Error while refreshing OAuth token: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>user.<wbr>not_found | User ${app_username} was not found in ${app_name}
app.<wbr>api.<wbr>error.<wbr>group.<wbr>not_found | Group ${group_name} was not found in ${app_name}
app.<wbr>api.<wbr>error.<wbr>user.<wbr>more_than_one_with_same_id | More than one user was found for ID: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>group.<wbr>more_than_one_with_same_id | More than one group was found for ID: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user exists: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>create_user | Error while creating user: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>deactivate_user | Error while deactivating user: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>reactivate_user | Error while reactivating user: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>import_user_profile | Error while trying to import user profile: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>push_profile_update | Error while trying to push profile update: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>push_password_update | Error pushing password: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>upsert_group | Error while creating user group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>group_name_long_length | Group name is too long: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>upsert_group_duplicate | User group already exists: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>delete_group | Error while deleting user group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>update_group_membership | Error while updating user group membership for group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>add_group_membership | Error while adding user(s) to group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>remove_group_membership | Error while removing user(s) from group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>download_users | Error while downloading all users: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>download_custom_objects | Error while downloading custom objects: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>get_group_by_id | Error while trying to find an individual group by id: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>download_groups | Error while downloading all groups: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>download_memberships | Error while downloading users for group: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>generic | API error: ${app_error_code}
app.<wbr>api.<wbr>error.<wbr>rate.<wbr>limit.<wbr>exceeded | API rate limit exceeded. ${app_error_code}


##### Syncplicity

ObjectType | Description
--- | ---
syncplicityLoginFailed | Verification failed: ${app_error_code}


##### Bloomfire

ObjectType | Description
--- | ---
app.<wbr>bloomfire.<wbr>api.<wbr>error.<wbr>login.<wbr>failed | Could not verify the Bloomfire administrator login and password; please confirm that these are set correctly.
app.<wbr>bloomfire.<wbr>api.<wbr>error.<wbr>api.<wbr>validation | Failed to validate Admin credentials. {0}
app.<wbr>bloomfire.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user {0} exists in Bloomfire: {1}
app.<wbr>bloomfire.<wbr>api.<wbr>error.<wbr>download_users | Error while downloading all users from Bloomfire: {0}
app.<wbr>bloomfire.<wbr>api.<wbr>error.<wbr>generic | Bloomfire API error: {0}


##### CornerStone

ObjectType | Description
--- | ---
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>validation | Failed to validate the admin credentials against CornerStone On Demand
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>auth | Error authenticating against CornerStone On Demand
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>init | Failed to init CornerStone WebServices API
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>check_user_exists | Failed to verify if user exists on CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>password_push | Failed to push the password to CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>create_user | Failed to create user in CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>push_profile | Failed to update profile in CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>import_profile | Failed to import profile from CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>reactivate_user | Failed to reactivate user in CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>api.<wbr>deactivate_user | Failed to deactivate user in CornerStone On Demand: ${app_error_code}
app.<wbr>cornerstone.<wbr>api.<wbr>error.<wbr>auth.<wbr>unknown.<wbr>host | Failed to connect to CornerStone On Demand. Please make sure that the CornerStone Organization Name has been entered correctly while configuring the General Settings


##### ExactTarget

ObjectType | Description
--- | ---
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>check_user_exists | Error while verifying if user exists on ExactTarget. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>create_user | Error while creating ExactTarget user. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>deactivate_user | Error while deactivatinguser in ExactTarget. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>reactivate_user | Error while reactivating user in ExactTarget. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>import_user_profile | Error while trying to import ExactTarget user profile. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>push_profile_update | Error while trying to push ExactTarget profile update. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>push_password_update | Error while trying to push ExactTarget password update. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>download_users | Error while downloading all users from ExactTarget. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>init | Error while client initialization. ${app_error_code}
app.<wbr>exacttarget.<wbr>api.<wbr>error.<wbr>generic | ExactTarget API error: ${app_error_code}


##### Bloomfire

ObjectType | Description
--- | ---
app.<wbr>bloomfire.<wbr>sso.<wbr>error.<wbr>user_not_extracted | Failed to extract user from SignOnRequest
app.<wbr>bloomfire.<wbr>sso.<wbr>error.<wbr>api_key_empty | API Key is required for SignOn request


##### Appature

ObjectType | Description
--- | ---
app.<wbr>appature.<wbr>sso.<wbr>error.<wbr>allowed_accounts.<wbr>empty | Allowed accounts regex is required
app.<wbr>appature.<wbr>sso.<wbr>error.<wbr>groups.<wbr>empty | Groups regex is required
app.<wbr>appature.<wbr>sso.<wbr>error.<wbr>allowed_accounts.<wbr>invalid_regex | Allowed accounts regex is malformed
app.<wbr>appature.<wbr>sso.<wbr>error.<wbr>groups.<wbr>invalid_regex | Groups regex is malformed


##### Benetrac

ObjectType | Description
--- | ---
app.<wbr>benetrac.<wbr>sso.<wbr>error.<wbr>site_id.<wbr>empty | SiteID is required
app.<wbr>benetrac.<wbr>sso.<wbr>error.<wbr>partner_id.<wbr>empty | PartnerID is required


##### Connector Agent

ObjectType | Description
--- | ---
agents.<wbr>connector_agent.<wbr>agent_reconnected | Agent ${agent_id} (${agent_name}) reconnected to Okta
agents.<wbr>connector_agent.<wbr>agent_disconnected | Agent ${agent_id} (${agent_name}) stopped connecting to Okta
agents.<wbr>connector_agent.<wbr>agent_deactivated | Agent ${agent_id} (${agent_name}) deactivated
agents.<wbr>connector_agent.<wbr>agent_reactivated | Agent ${agent_id} (${agent_name}) reactivated
agents.<wbr>connector_agent.<wbr>agent_deleted | Agent ${agent_id} (${agent_name}) deleted
agents.<wbr>connector_agent.<wbr>agent_reactivate_failed_missing_token | Cannot reactivate the agent ${agent_id} (${agent_name}) because the token has been removed. You must delete and re-install the agent.


##### MOVEit DMZ

ObjectType | Description
--- | ---
moveit_dmz.<wbr>error.<wbr>too.<wbr>long.<wbr>username.<wbr>or.<wbr>email | MOVEit DMZ username or email null or too long. Username and email: ${app_error_code}
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>timeout | LDAP agent failed to reset password due to timeout.
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>succeeded | Password reset succeeded.
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>failed | Password reset failed.
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>systemic.<wbr>error | LDAP agent failed to reset password due to systemic error.
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>constraint.<wbr>error | LDAP agent failed to reset password because of password policy violation.
app.<wbr>ldap.<wbr>password.<wbr>reset.<wbr>invalid.<wbr>old.<wbr>password | LDAP agent failed to reset password because old password is invalid.
app.<wbr>ldap.<wbr>password_reset.<wbr>old_new_passwords_equal | Failed to reset password because old and new password are equal.
app.<wbr>ldap.<wbr>password_reset.<wbr>old_password_empty | Failed to reset password because old password is empty.
app.<wbr>ldap.<wbr>password_reset.<wbr>new_password_empty | Failed to reset password because new password is empty.
app.<wbr>ldap.<wbr>password_reset.<wbr>new_confirm_password_empty | Failed to reset password because repeated password is empty.
app.<wbr>ldap.<wbr>password_reset.<wbr>passwords_do_not_match | Failed to reset password because passwords are not match.
app.<wbr>ldap.<wbr>password_reset.<wbr>attribs_not_set | LDAP agent failed to reset password because password attribute is not set.
app.<wbr>ldap.<wbr>password_reset.<wbr>restriction.<wbr>error | LDAP agent failed to reset password because of restriction error.
app.<wbr>ldap.<wbr>password.<wbr>change.<wbr>timeout | Unable to change your password at this time. Please try again or contact your administrator.
app.<wbr>ldap.<wbr>password.<wbr>change.<wbr>systemic.<wbr>error | Unable to change your password at this time.  Please try again or contact your administrator.
app.<wbr>ldap.<wbr>password.<wbr>change.<wbr>succeeded | Password reset succeeded.
permission_reporting.<wbr>disabled | The OPs team has disabled the permission reporting service with JMX.


##### Samanage

ObjectType | Description
--- | ---
app.<wbr>samanage.<wbr>api.<wbr>error.<wbr>login.<wbr>failed | Could not verify the SAManage administrator login and password; please confirm that these are set correctly.
app.<wbr>samanage.<wbr>api.<wbr>error.<wbr>long_group_name | Group name is too long (max length is 50 chars): ${app_error_code}


##### Egnyte

ObjectType | Description
--- | ---
app.<wbr>egnyte.<wbr>username.<wbr>validation.<wbr>failure | ${app_error_code}. Please make sure that the Username matches Egnyte user naming convention
app.<wbr>egnyte.<wbr>auth.<wbr>type.<wbr>validation.<wbr>failure | Please make sure that you selected correct Authentication Type for user ${app_error_code}
app.<wbr>egnyte.<wbr>rate.<wbr>limiting.<wbr>exceeded | Rate limit exceeded for Egnyte. {app_error_code}


##### DUO

ObjectType | Description
--- | ---
core.<wbr>user_auth.<wbr>duo.<wbr>disabled_lockout | User failed to login because their Duo Security account is disabled or locked out
core.<wbr>user_auth.<wbr>duo.<wbr>duo_down | User failed to login because the system was unable to contact the Duo API to validate their factor
core.<wbr>user_auth.<wbr>duo.<wbr>invalid_integration | User failed to login because your Duo integration configuration is no longer valid.
core.<wbr>user_auth.<wbr>duo.<wbr>enroll_incomplete | User is unable to self-enroll with Duo Security because their account has a previous registration that was not complete
core.<wbr>user_auth.<wbr>duo.<wbr>no_self_enroll_no_devices | User failed to login because the user is not allowed to self-enroll and does not have any registered devices


##### Roambi

ObjectType | Description
--- | ---
roambi.<wbr>api.<wbr>error.<wbr>deactivate_user.<wbr>confirmation | Error while activating user: confirmation failed
roambi.<wbr>api.<wbr>error.<wbr>reactivate_user.<wbr>confirmation | Error while deactivating user: confirmation failed
roambi.<wbr>api.<wbr>error.<wbr>auth.<wbr>unexpected.<wbr>response | Unexpected authentication response. HTTP status: ${app_error_code}
roambi.<wbr>api.<wbr>error.<wbr>auth.<wbr>empty.<wbr>code | Authentication failure: received 'code' parameter is empty
roambi.<wbr>api.<wbr>error.<wbr>auth.<wbr>empty.<wbr>account.<wbr>response | Authentication failure: Failed to get account info - response is empty


##### Litmos

ObjectType | Description
--- | ---
app.<wbr>litmos.<wbr>group.<wbr>push.<wbr>group_name_too_long | The length of the name of your group is {instance_id}, but Litmos allows only {app_error_code}


##### Smartsheet

ObjectType | Description
--- | ---
smartsheet.<wbr>rate.<wbr>limit.<wbr>exceeded | Rate limit exceeded for Smartsheet. ${app_error_code}


##### GitHub

ObjectType | Description
--- | ---
github.<wbr>api.<wbr>error.<wbr>user_not_found | User ${app_username} does not exist in GitHub. Please check username or create user manually
github.<wbr>api.<wbr>error.<wbr>rate_limit.<wbr>exceeded | Rate limit exceeded for GitHub instance ${instance_id}
github.<wbr>api.<wbr>error.<wbr>rate_limit.<wbr>reset_date | Unable to get rate limit reset date [${app_error_code}] from Response for GitHub instance ${instance_id}
github.<wbr>api.<wbr>error.<wbr>rate_limit.<wbr>remaining | Unable to get rate limit remaining queries [${app_error_code}] from Response for GitHub instance ${instance_id}


##### DocuSign

ObjectType | Description
--- | ---
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>no.<wbr>accounts | Provided user is not member of any account
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>not.<wbr>account.<wbr>member | Provided user is not member of account ${app_error_code}
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>update.<wbr>permission.<wbr>profile | Failed to update user permission profile. ${app_error_code}
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>import.<wbr>permission.<wbr>profile | Failed to import user permission profile. ${app_error_code}
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>update.<wbr>inactive.<wbr>user | Failed to update user details - user is not active. ${app_error_code}
app.<wbr>docusign.<wbr>api.<wbr>error.<wbr>import.<wbr>inactive.<wbr>user | Failed to get user details - user is not active. ${app_error_code}


##### Huddle

ObjectType | Description
--- | ---
huddle.<wbr>company_id.<wbr>validation.<wbr>failure | Company Id not specified.
huddle.<wbr>rate.<wbr>limit.<wbr>exceeded | You have exceeded rate limit for your client ID. Retrying after ${app_error_code}


##### PagerDuty

ObjectType | Description
--- | ---
app.<wbr>pagerduty.<wbr>api.<wbr>auth.<wbr>error.<wbr>invalid.<wbr>admin.<wbr>username | Incorrect admin username: ${app_error_code}
app.<wbr>pagerduty.<wbr>api.<wbr>auth.<wbr>error.<wbr>invalid.<wbr>admin.<wbr>role | User provided is not admin or owner. Provided user role is ${app_error_code}
app.<wbr>pagerduty.<wbr>api.<wbr>auth.<wbr>error.<wbr>invalid.<wbr>api.<wbr>key | API key provided is invalid
app.<wbr>pagerduty.<wbr>api.<wbr>push.<wbr>profile.<wbr>update.<wbr>unexpected.<wbr>status | Unexpected status response while updating user: ${app_error_code}. 200 is expected.
app.<wbr>pagerduty.<wbr>api.<wbr>deactivate.<wbr>user.<wbr>unexpected.<wbr>status | Unexpected status response while deleting user: ${app_error_code}. 204 is expected.


##### Clarizen

ObjectType | Description
--- | ---
app.<wbr>clarizen.<wbr>api.<wbr>error.<wbr>no_admin_rights | Provided credentials does not contain administrator permissions
app.<wbr>clarizen.<wbr>api.<wbr>error.<wbr>rate_limit.<wbr>exceeded | Rate limit exceeded for Clarizen
app.<wbr>clarizen.<wbr>api.<wbr>error.<wbr>entity.<wbr>not_found | Requested Clarizen Entity was not found: ${app_error_code}
app.<wbr>clarizen.<wbr>api.<wbr>error.<wbr>update_group | Unable to update Clarizen group: ${app_error_code}


##### CrashPlan Pro

ObjectType | Description
--- | ---
app.<wbr>crashplanpro.<wbr>api.<wbr>invalid_set_of_roles | Current API account does not have required roles to do API calls. It should have one of these roles: ${app_error_code}
app.<wbr>crashplanpro.<wbr>api.<wbr>auth.<wbr>invalid_login_url | Invalid login URL specified
app.<wbr>crashplanpro.<wbr>api.<wbr>rest.<wbr>unexpected_response_status | ${app_error_code}
app.<wbr>crashplanpro.<wbr>api.<wbr>user_not_found | User cannot be found in CrashPlan. ${app_error_code}
app.<wbr>crashplanpro.<wbr>api.<wbr>user_has_invalid_fields | User has invalid fields, please verify and try again. ${app_error_code}
app.<wbr>crashplanpro.<wbr>api.<wbr>ambiguous_search_results_by_user | Ambiguous search results. There are more than one user with same username was found. Username: ${app_error_code}


##### GoodData

ObjectType | Description
--- | ---
gooddata.<wbr>api.<wbr>error.<wbr>no.<wbr>admin.<wbr>rights | User is not a domain admin.
gooddata.<wbr>api.<wbr>error.<wbr>project.<wbr>access.<wbr>forbidden | Cannot access the project with admin credentials: ${app_error_code}
gooddata.<wbr>api.<wbr>error.<wbr>project.<wbr>assignment.<wbr>failed | Failed to assign user to the project ${app_error_code}.
gooddata.<wbr>api.<wbr>error.<wbr>project.<wbr>not.<wbr>found | Project ${app_error_code} not found.
gooddata.<wbr>api.<wbr>error.<wbr>incorrect.<wbr>roles.<wbr>count | Incorrect roles count for user ${app_error_code}: only zero or one role per project should be selected
