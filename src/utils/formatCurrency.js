/**
 * Formats a number as a currency string using the specified currency code.
 *
 * @param {number} value - The numeric value to format as currency.
 * @param {string} [currency="GBP"] - The ISO 4217 currency code to use for formatting (e.g., "USD", "EUR", "GBP").
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (value, currency = "GBP") =>
    new Intl.NumberFormat("en", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
    }).format(value);
