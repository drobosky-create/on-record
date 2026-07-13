On Record button — the only place oxblood appears as a fill; use `primary` for the one action that matters, `ghost` for everything else.

```jsx
<Button variant="primary">Begin the record</Button>
<Button variant="ghost">Learn more</Button>
```

Sharp corners, uppercase, tracked .1em, 13px/600. Primary hover deepens oxblood → maroon; ghost hover inverts to ink fill. `transition: none` — state changes are instant. Never add shadows or rounding.
