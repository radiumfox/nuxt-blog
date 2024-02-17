import {mount} from "@vue/test-utils";
import ButtonBase from "./index.vue";
import { expect, test } from "vitest";

const wrapper = mount(ButtonBase);

test("testing ButtonBase component props", async () => {
    const props = wrapper.props() as {text: string};
    expect(props.text).toContain("");
});