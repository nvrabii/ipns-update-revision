# ipns-update-revision

GitHub Action to update the CID associated with an IPNS name.

## Example usage

```yaml
- uses: nvrabii/ipns-update-revision@v1
  id: upd_rev
  with:
    w3_signing_key: ${{ secrets.SIGNING_KEY }}
    new_cid: ${{ steps.some_id.outputs.cid }}

- run: echo ${{ steps.upd_rev.outputs.name }}
```

## Inputs

### `signing_key`

**Required** The private key used at the generation of the IPNS name.

E.g. `CAESQN7qM8Iv65UI5kNZKG6sGeLSArTk2G9ImCGcN/sh3bb9KeVLed8O7jLs7UxV6T5/Ed3AoqdffACBKdIllp+eiHo=`

### `new_cid`

**Required** The CID that will be associated to the IPNS name (derived from `signing_key`).

E.g. `QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o`

## Outputs

### `name`

The IPNS name of the updated revision.

E.g. `k51qzi5uqu5dh86i7fseboo637wonolhlqiluolry45sc8fs2pcupry444j916`
