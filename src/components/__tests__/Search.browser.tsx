import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Search from '../Search.tsx'
import { userEvent } from '@vitest/browser/context'

test('renders search', async () => {
    const { findByText } = render(<Search />)
    await expect.element(await findByText('Searching for')).toBeInTheDocument()
})

test('types into the search', async () => {
    const { getByRole, getByText } = render(<Search />)
    const input = getByRole('textbox', { name: 'search' })
    await userEvent.type(input, 'Browser Mode')
    await expect.element(getByText('Searching for Browser Mode')).toBeInTheDocument()
})