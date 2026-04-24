import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Search from '../Search.tsx'
import { userEvent } from 'vitest/browser'

import { page } from 'vitest/browser'
import {findByText} from "@testing-library/react";

test('renders search', async () => {
    await render(<Search />)

    const el = document.body // or querySelector(...)
    await expect.element(el).toBeInTheDocument()
})

test('pass renders search', async () => {
    const screen = await render(<Search />)
    expect(await screen.getByText('Searching for')).toBeInTheDocument()
})

test('with element renders search', async () => {
    const screen = await render(<Search />)
    await expect.element(await screen.getByText('Searching for')).toBeInTheDocument()
})

test('types into the search', async () => {
    const { getByRole, getByText } = await render(<Search />)
    const input = getByRole('textbox', { name: 'search' })
    await userEvent.type(input, 'this is my search query')
    await expect.element(getByText('Searching for this is my search query')).toBeInTheDocument()
})