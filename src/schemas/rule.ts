import * as z from "zod"; //oxlint-disable-line eslint/id-length

export const RuleSchema = z.object({
  alterationColour: z.string().nonempty(),
  alterationType: z.literal(["colourOverlay", "colourFill"]),
  dateCreated: z.iso.datetime(),
  dateUpdated: z.iso.datetime(),
  enabled: z.boolean(),
  id: z.uuid(),
  name: z.string().nonempty(),
  pattern: z.string().nonempty(),
});

export const CreateRuleSchema = RuleSchema.omit({
  dateCreated: true,
  dateUpdated: true,
  id: true,
}).extend({
  enabled: z.stringbool({ falsy: [], truthy: ["on"] }).default(false),
});

export type Rule = z.infer<typeof RuleSchema>;
export type CreateRuleInput = z.output<typeof CreateRuleSchema>;
