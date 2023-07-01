import { mount } from "@vue/test-utils";
import LoginComponent from "../src/components/LoginComponent.vue"
import { describe, it, expect, vi } from "vitest";

describe('LoginComponent', () => {
    it('should render', () => {
        const wrapper = mount(LoginComponent);
        expect(wrapper.find('h1').text()).toBe('Login');
    });

    it('should have a login button', () => {
        const wrapper = mount(LoginComponent);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('should get username and password from input', async () => {
        const wrapper = mount(LoginComponent);
        await wrapper.find('input[type="text"]').setValue('testuser');
        await wrapper.find('input[type="password"]').setValue('testpassword');
        expect(wrapper.vm.username).toBe('testuser');
        expect(wrapper.vm.password).toBe('testpassword');
    });

    it('should have a login button with @click event', () => {
        const wrapper = mount(LoginComponent);
        expect(wrapper.find('button').attributes('v-on:click'));
    });

    it('should have a text input for username with placeholder username', () => {
        const wrapper = mount(LoginComponent);
        expect(wrapper.find('input[type="text"]').attributes('placeholder')).toBe('username');
    });

    it('should have a text input for password with placeholder password', () => {
        const wrapper = mount(LoginComponent);
        expect(wrapper.find('input[type="password"]').attributes('placeholder')).toBe('Enter password');
    });

});
