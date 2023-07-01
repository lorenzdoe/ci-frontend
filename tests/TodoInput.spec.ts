import { mount } from "@vue/test-utils";
import TodoInput from "../src/components/TodoInput.vue"
import { describe, it, expect, vi } from "vitest";

describe('TodoInput', () => {
    it('should have a todo input', () => {
        const wrapper = mount(TodoInput);
        expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    }
    );
    it('should have a placeholder', () => {
        const wrapper = mount(TodoInput);
        expect(wrapper.find('input[type="text"]').attributes('placeholder')).toBe('Enter next todo...');
    });
});
