# Project Rules

## 1. Keep the settings form accessible
Every form control must have a clear associated label. Use semantic HTML elements and appropriate input types such as `email`, `password`, and `text` rather than relying only on placeholder text.

## 2. Validate user input before reporting success
The form must not display a successful-save message when required input is invalid. Browser validation and JavaScript validation should be used where appropriate, and error feedback should be understandable to the user.

## 3. Do not expose sensitive form data
Passwords and other sensitive values must never be placed in URLs, query strings, console logs, or other user-visible locations. Forms containing sensitive information should use an appropriate submission method such as POST when connected to a backend.

## 4. Test changes in the browser before committing
Any modification to the settings form must be tested through the local development server. Test normal input, invalid input, checkbox behaviour, and the success/error feedback before creating a Git commit.

## 5. Keep Round 1 and Round 2 changes traceable
Do not rewrite or delete the existing Round 1 branch. Round 2 should remain a separate branch so that the two implementations can be compared using Git.

## 6. Keep documentation synchronized with implementation
When the implementation workflow changes, update `WORKFLOW.md` so that it describes the actual development, testing, comparison, and verification process used for this project.