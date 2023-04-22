import { suite, cycle, add, save, complete } from "benny";
import { ts_serializable_deserialize, ts_serializable_serialize } from "./ts_serializable.ts";
import { class_transformer_deserialize, class_transformer_serialize } from "./class_transformer.ts";

const jsonData = {
  firstName: "Jack",
  lastName: "Sparrow",
  addresses: [
    {
      firstLine: "Some where 1",
      secondLine: "Over Here 1",
      city: "In This City 1",
    },
    {
      firstLine: "Some where 2",
      secondLine: "Over Here 2",
      city: "In This City 2",
    },
    {
      firstLine: "Some where 3",
      secondLine: "Over Here 3",
      city: "In This City 3",
    },
  ],
};

suite(
  "Benchmarks",

  add("ts_serializable_deserialize", () => {
    ts_serializable_deserialize(jsonData);
  }),

  add("class_transformer_deserialize", () => {
    class_transformer_deserialize(jsonData);
  }),

  cycle(),
  complete(),
  save({ file: "reduce", version: "1.0.0" }),
  save({ file: "reduce", format: "chart.html" })
);

suite(
  "Benchmarks 2",

  add("ts_serializable_serialize", () => {
    ts_serializable_serialize();
  }),

  add("class_transformer_serialize", () => {
    class_transformer_serialize();
  }),

  cycle(),
  complete(),
  save({ file: "reduce", version: "1.0.0" }),
  save({ file: "reduce", format: "chart.html" })
);