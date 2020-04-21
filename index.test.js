test("something", () => {
    expect({ a: 1, b: "test" }).toMatchInlineSnapshot(`
        Object {
          "a": 1,
          "b": "test",
        }
    `);
});
