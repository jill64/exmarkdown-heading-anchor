import { expect, test } from '@playwright/test'

test('Test', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Heading1' })).toHaveAttribute(
    'id',
    'anchor-Heading1'
  )

  await expect(page.getByRole('heading', { name: 'Heading2' })).toHaveAttribute(
    'id',
    'anchor-Heading2'
  )

  await expect(page.getByRole('heading', { name: 'Heading3' })).toHaveAttribute(
    'id',
    'anchor-Heading3'
  )

  await expect(
    page.getByRole('heading', { name: 'Heading4' })
  ).not.toHaveAttribute('id', 'anchor-Heading4')

  const textarea = page.getByPlaceholder('Markdown')

  await textarea.fill('# Modified Heading1')

  await expect(
    page.getByRole('heading', { name: 'Modified Heading1' })
  ).toHaveAttribute('id', 'anchor-Modified Heading1')
})
