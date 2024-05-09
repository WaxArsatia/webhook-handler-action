# Webhook Handler Action

This action just a simple webhook action that support trigger request without wait for response

## Inputs

### `webhook-url`

**Required** The Webhook url that will triggered.

### `await-response`

**Optional** Boolean as string value determine should response of webhook need to waited or not. Default `"false"`.

### `method`

**Optional** Kind of method to use for webhook request like `"GET"`, `"POST"` or etc. Default `"POST"`.

### `body`

**Optional** Body of webhook request to send.

## Example usage

```yaml
uses: WaxArsatia/webhook-handler-action
with:
  webhook-url: 'https://example.com/xxx'
```
