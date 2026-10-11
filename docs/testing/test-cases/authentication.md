# Authentication Test Cases

## TC-AUTH-001 — Login with Valid Credentials

**Related Requirement:** FR-AUTH-001  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- A valid user account exists.

**Steps**
1. Open the login page.
2. Enter a valid email.
3. Enter the correct password.
4. Submit the login form.

**Expected Result**
- Login succeeds.
- The user is authenticated.
- The user can access functionality permitted for their role.


---

## TC-AUTH-002 — Login with Invalid Password

**Related Requirement:** FR-AUTH-001  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- A valid user account exists.

**Steps**
1. Open the login page.
2. Enter the user's valid email.
3. Enter an incorrect password.
4. Submit the login form.

**Expected Result**
- Login fails.
- The user remains unauthenticated.
- An appropriate error is returned/displayed.


---

## TC-AUTH-003 — Login with Unknown Account

**Related Requirement:** FR-AUTH-001  
**Status:** NOT YET IMPLEMENTED

**Steps**
1. Open the login page.
2. Enter credentials for an account that does not exist.
3. Submit the login form.

**Expected Result**
- Login fails.
- The user remains unauthenticated.


---

## TC-AUTH-004 — Access Protected Functionality Without Authentication

**Related Requirement:** FR-AUTH-003  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- The user is not authenticated.

**Steps**
1. Attempt to access protected functionality.

**Expected Result**
- Access is denied.


---

## TC-AUTH-005 — Agency Attempts DMC-Only Action

**Related Requirement:** FR-AUTH-004  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- An Agency user is authenticated.

**Steps**
1. Attempt to access DMC-only functionality.

**Expected Result**
- Access is denied.


---

## TC-AUTH-006 — DMC Attempts Agency-Only Action

**Related Requirement:** FR-AUTH-004  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- A DMC user is authenticated.

**Steps**
1. Attempt to access Agency-only functionality.

**Expected Result**
- Access is denied.


---

## TC-AUTH-007 — Non-Admin Attempts Admin Action

**Related Requirement:** FR-AUTH-004  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- A DMC or Agency user is authenticated.

**Steps**
1. Attempt to access Admin-only functionality.

**Expected Result**
- Access is denied.


---

## TC-AUTH-008 — Authorized Role Access

**Related Requirements:** FR-AUTH-002, FR-AUTH-004  
**Status:** NOT YET IMPLEMENTED

**Preconditions**
- A valid user is authenticated.

**Steps**
1. Access functionality permitted for the user's role.

**Expected Result**
- Access is allowed.