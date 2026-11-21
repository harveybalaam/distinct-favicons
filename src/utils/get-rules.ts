import * as z from "zod"; //oxlint-disable-line eslint/id-length
import { type Rule, RuleSchema } from "../schemas/rule";

export const getRules = async (): Promise<Rule[]> => {
  try {
    const rawRules = await browser.storage.local.get("rules");
    const { rules } = z
      .object({ rules: z.array(RuleSchema).default([]) })
      .parse(rawRules);

    return rules;
  } catch {
    return [];
  }
};
