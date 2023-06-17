import { mount } from "@vue/test-utils";
import LoginComponent from "src/components/LoginComponent.vue"
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

    // it('logs in successfully when valid username and password are entered', async () => {
    //     const wrapper = mount(LoginComponent);
        
    //     // Mock the login API function
    //     const loginMock = vi.fn().mockResolvedValue({ status: 200, data: { token: 'mockedToken' } });
    //     //wrapper.setMethods({ login: loginMock });
        
    //     // Set the username and password input values
    //     await wrapper.find('input[type="text"]').setValue('testuser');
    //     await wrapper.find('input[type="password"]').setValue('testpassword');
        
    //     // Simulate clicking the login button
    //     await wrapper.find('button').trigger('click');
        
    //     // Assert that the login function is called with the correct arguments
    //     expect(loginMock).toHaveBeenCalledWith('testuser', 'testpassword');
        
    //     // Assert that the token is stored in local storage
    //     expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mockedToken');
        
    //     // Assert that the router navigates to the TodoList component
    //     expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'TodoList' });
    //     });

});

// describe('LoginComponent', () => {
//   it('displays error message when username or password is not entered', async () => {
//     const wrapper = mount(LoginComponent);
    
//     // Simulate clicking the login button
//     await wrapper.find('button').trigger('click');
    
//     // Assert that an alert is shown with the expected message
//     expect(window.alert).toHaveBeenCalledWith('Please enter username and password');
//   });

//   it('logs in successfully when valid username and password are entered', async () => {
//     const wrapper = mount(LoginComponent);
    
//     // Mock the login API function
//     const loginMock = vi.fn().mockResolvedValue({ status: 200, data: { token: 'mockedToken' } });
//     //wrapper.setMethods({ login: loginMock });
    
//     // Set the username and password input values
//     await wrapper.find('input[type="text"]').setValue('testuser');
//     await wrapper.find('input[type="password"]').setValue('testpassword');
    
//     // Simulate clicking the login button
//     await wrapper.find('button').trigger('click');
    
//     // Assert that the login function is called with the correct arguments
//     expect(loginMock).toHaveBeenCalledWith('testuser', 'testpassword');
    
//     // Assert that the token is stored in local storage
//     expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mockedToken');
    
//     // Assert that the router navigates to the TodoList component
//     expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'TodoList' });
//   });

//   it('displays error message when login fails', async () => {
//     const wrapper = mount(LoginComponent);
    
//     // Mock the login API function to return an error
//     const loginMock = vi.fn().mockResolvedValue({ status: 400, data: { errors: 'Invalid credentials' } });
//     // wrapper.setMethods({ login: loginMock });
    
//     // Set the username and password input values
//     await wrapper.find('input[type="text"]').setValue('testuser');
//     await wrapper.find('input[type="password"]').setValue('testpassword');
    
//     // Simulate clicking the login button
//     await wrapper.find('button').trigger('click');
    
//     // Assert that an alert is shown with the error message
//     expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
//   });
// });
