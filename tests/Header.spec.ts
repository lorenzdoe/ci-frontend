import { mount } from "@vue/test-utils";
import Header from "../src/components/Header.vue"
import { describe, it, expect, vi } from "vitest";

describe('Header', () => {
    it('should have a logout button with text Logout', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('button').text()).toBe('Logout');
    }
    );
    it('should have a logout button with class logout-button', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('button').classes()).toContain('logout-button');
    }
    );  
});