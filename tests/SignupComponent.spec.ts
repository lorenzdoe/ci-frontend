import { mount } from "@vue/test-utils";
import SignupComponent from "../src/components/SignupComponent.vue"
import { describe, it, expect, vi } from "vitest";

describe('SignupComponent', () => {
    it('should render', () => {
        const wrapper = mount(SignupComponent);
        expect(wrapper.find('h1').text()).toBe('Create account');
    });

    it('should have a signup button', () => {
        const wrapper = mount(SignupComponent);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('should get username and password from input', async () => {
        const wrapper = mount(SignupComponent);
        await wrapper.find('input[type="text"]').setValue('testuser');
        await wrapper.find('input[type="password"]').setValue('testpassword');
        expect(wrapper.vm.username).toBe('testuser');
        expect(wrapper.vm.password).toBe('testpassword');
    });

});