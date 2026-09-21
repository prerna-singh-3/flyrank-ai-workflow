# AI-Assisted Settings Form Workflow

## Overview

This assignment was completed in two development rounds using an AI-assisted workflow. The same small settings-form feature was implemented twice so that the difference between a vague prompt and a precise, specification-driven prompt could be evaluated.

## Round 1: Vague Prompt

The first implementation was created from a general request to build a settings form. The resulting branch, `round-1-vague`, provided the basic structure of the feature. It established the initial HTML, JavaScript, and CSS files and demonstrated the core form functionality.

The implementation was intentionally treated as the baseline rather than being modified immediately. This made it possible to compare the second implementation against an actual working version.

## Round 2: Precise Prompt

The second implementation was created on the `round-2-precise` branch using more explicit requirements for the settings form. The implementation added or refined the structure in `index.html`, the behaviour in `script.js`, and the presentation and responsive styling in `style.css`.

The Git comparison confirms that all three files changed. The comparison reports 340 insertions and 13 deletions between `round-1-vague` and `round-2-precise`. The second version was also tested in the browser by entering form data, submitting the form, and checking that the success message appeared correctly.

## Correctness and Verification

Verification was performed by running the project locally through VS Code Live Server. The form was opened in the browser and tested with values for name, email, password, and the notification checkbox. After submission, the page displayed the successful-save message.

The second branch was committed only after testing. Git also confirmed a clean working tree after the Round 2 commit, which provides an additional check that the tested implementation matches the committed version.

## Accessibility and Edge Cases

The precise implementation uses labelled form controls and appropriate HTML input types such as `email`, `password`, and `text`. This provides clearer form semantics and browser-level input handling. Validation and user feedback were also considered during testing.

An important edge case noticed during testing was form submission behaviour: test data should be treated carefully because sensitive values such as passwords should not be exposed unnecessarily through a URL or query string. This is an area that should be handled securely in a production application.

## Lessons Learned

The main lesson from the two rounds is that precise specifications produce a more deliberate implementation. Instead of accepting generated code immediately, the workflow involved defining requirements, testing the result, comparing branches, reviewing the differences, and committing only after verification.

AI output should therefore be treated as a starting point that requires human review, testing, and correction rather than as automatically correct production code.