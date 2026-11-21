import type { CreateRuleInput, Rule } from "../schemas/rule";

export const buildRule = (ruleInput: CreateRuleInput): Rule => {
  const now = new Date().toISOString();

  return {
    ...ruleInput,
    dateCreated: now,
    dateUpdated: now,
    id: crypto.randomUUID(),
  };
};
