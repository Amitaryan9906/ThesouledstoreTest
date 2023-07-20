
# The Souled Store: Automation Testing Project

![App Screenshot](https://github.com/Amitaryan9906/ThesouledstoreTest/blob/main/cypress/screenshots/VerifyProduct.js/Tc_078%20--%20should%20verify%20product%20details%20(1).png?raw=true)

## Description
The Souled Store Automation Testing Project aims to ensure the quality and reliability of The Souled Store's e-commerce website, which offers a wide range of clothing products. By leveraging Cypress, JavaScript, Chai, and Mocha, this project automates the testing process to verify critical functionalities, including the product page, filters, wishlist, and cart functionality.


## Features

The Souled Store Automation Testing Project includes a comprehensive suite of automated tests to verify various critical features of The Souled Store's e-commerce website. The following are the key features covered by the test suite:

1. Product Page Verification:

Ensure accurate display of product details, including product name, price, description, and images.
Verify the availability and stock status of products.
Test the functionality of product image zoom.
Filter Functionality Testing:

2. Validate the functionality of various filters, such as categories, sizes, colors, and prices.
Verify that filters correctly narrow down the product selection based on selected criteria.
Test the application of multiple filters simultaneously.
Wishlist Management:

3. Test the ability to add items to the wishlist from product pages.
Verify that items can be removed from the wishlist.
Ensure the persistence of wishlist items across user sessions.
Add to Cart Functionality:

4. Test the process of adding items to the shopping cart from product pages and wishlist.
Verify that the cart's total value is calculated accurately.
Ensure that the cart updates correctly when items are added or removed.
## Tech Stack

The Masai Assess Platform leverages a range of technologies to provide a robust and user-friendly experience:

- Automated Testing: Selenium with Python and pytest are employed to automate the assessment evaluation process, ensuring accuracy and efficiency.

- Manual Testing: Jira is used for manual testing, enabling human examination of certain aspects that might not be suited for automation.
## Role/Responsibility
As part of the Souled Store Automation Testing Project, the responsibilities of the testing team include:

Product Page Verification: Ensuring that product details, pricing, and availability are accurately displayed on the product pages.

Filter Functionality: Verifying that the filters work correctly to narrow down the product selection based on various criteria.

Wishlist Management: Confirming that users can add and remove items from their wishlist with the expected behavior.

Add to Cart: Verifying that items can be successfully added to the shopping cart, and cart contents are accurately updated.

## Test Organization
The automated tests are organized into different suites and test cases to cover specific functionalities:

1. Product Page Test Suite:

- Verify product information (name, price, description, etc.).
- Check product availability and stock status.
- Test product image display and zoom functionality.
2. Filter Test Suite:

- Test filtering by categories, sizes, colors, and prices.
- Validate the application of multiple filters simultaneously.
3. Wishlist Test Suite:

- Test adding and removing items from the wishlist.
- Verify the persistence of wishlist items across sessions.
4. Add to Cart Test Suite:

- Test adding items to the cart from the product page and wishlist.
- Verify the correct calculation of the cart's total value.

## Running Tests

1. Clone the repository from GitHub: git clone https://github.com/Amitaryan9906/ThesouledstoreTest.git

2. Install the required dependencies: ```npm install```

3. View the test results in the Cypress Test Runner.
To run tests, run the following command

```bash
  npm run test
```


## Reporting
Test reports and results will be generated automatically by Cypress and will be available in the``` ./cypress/reports``` directory.
## Contributing

Contributions to this testing project are welcome! If you encounter any issues or have ideas for test improvements, please feel free to submit a pull request or create an issue on the GitHub repository.

