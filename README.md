# errror-handling-middleware
Centralized error handling for Express APIs with standardized API error responses.

The goal with this repository is to deliver a middleware that can be used in Donesy student kanban to improve its:
1. API consistency
2. Maintainability
3. Error handling robustness

## Error response format

This middleware makes sure all errors are returned in a JSON format:

```json

// Authorization: Forbidden Access (403)
{
  "error": {
    "message": "You do not have permission to access this board",
    "code": "FORBIDDEN"
  }
}

// Validation: Missing required fields (400)
{
  "error": {
    "message": "Invalid request body",
    "code": "VALIDATION_ERROR",
    "details": [
      { "field": "title", "issue": "required" },
      { "field": "columnId", "issue": "required" }
    ]
  }
}
```

## URL to project plan: https://miro.com/app/board/uXjVGNCBQcc=/?share_link_id=310866593453
