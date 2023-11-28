import { expect, test } from '@playwright/test'

test('Test', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Heading1', exact: true })
  ).toHaveAttribute('id', 'Heading1')

  await expect(
    page.getByRole('heading', { name: 'Heading2', exact: true })
  ).toHaveAttribute('id', 'Heading2')

  await expect(
    page.getByRole('heading', { name: 'Heading3', exact: true })
  ).toHaveAttribute('id', 'Heading3')

  const textarea = page.getByPlaceholder('Markdown')

  await textarea.fill('# Modified Heading1')

  await expect(
    page.getByRole('heading', { name: 'Modified Heading1', exact: true })
  ).toHaveAttribute('id', 'Modified Heading1')
})
