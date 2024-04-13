/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { server } from './components/Button/components/test/mocks/server';




beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())