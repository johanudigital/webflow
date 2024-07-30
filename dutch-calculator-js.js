document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', calculateCost);
});

function calculateCost() {
    let baseCost = 0;
    const websiteType = document.getElementById('websiteType').value;
    const pageCount = parseInt(document.getElementById('pageCount').value);
    const customDesign = document.getElementById('design').checked;
    const cms = document.getElementById('cms').checked;
    const seo = document.getElementById('seo').checked;

    // Base cost by website type
    switch(websiteType) {
        case 'basic':
            baseCost = 500;
            break;
        case 'business':
            baseCost = 1000;
            break;
        case 'ecommerce':
            baseCost = 1500;
            break;
    }

    // Additional costs
    let totalCost = baseCost;
    totalCost += pageCount * 50; // €50 per page
    if (customDesign) totalCost += 500;
    if (cms) totalCost += 300;
    if (seo) totalCost += 200;

    // Display result
    document.getElementById('result').innerHTML = `Geschatte kosten: €${totalCost}`;
}
