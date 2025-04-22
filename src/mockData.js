// User data
export const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  company: "TechCorp Inc.",
  jobTitle: "Data Analyst",
  avatar: "https://via.placeholder.com/32"
};

// Previous files/datasets
export const userFiles = [
  { 
    id: 1, 
    name: "sales_q1_2025.csv", 
    date: "April 18, 2025", 
    type: "sales", 
    size: "1.2 MB",
    columns: 12,
    rows: 1248,
    missingValues: 23,
    duplicateRows: 0
  },
  { 
    id: 2, 
    name: "customer_data.csv", 
    date: "April 10, 2025", 
    type: "customer", 
    size: "3.5 MB",
    columns: 18,
    rows: 5642,
    missingValues: 112,
    duplicateRows: 5
  },
  { 
    id: 3, 
    name: "marketing_2025.csv", 
    date: "April 02, 2025", 
    type: "marketing", 
    size: "0.8 MB",
    columns: 9,
    rows: 756,
    missingValues: 0,
    duplicateRows: 0
  },
  { 
    id: 4, 
    name: "inventory_march.csv", 
    date: "March 28, 2025", 
    type: "inventory", 
    size: "2.1 MB",
    columns: 15,
    rows: 3245,
    missingValues: 47,
    duplicateRows: 0
  },
  { 
    id: 5, 
    name: "website_traffic.csv", 
    date: "March 15, 2025", 
    type: "traffic", 
    size: "4.7 MB",
    columns: 22,
    rows: 12567,
    missingValues: 236,
    duplicateRows: 18
  }
];

// Analysis models
export const analysisModels = [
  {
    id: 1,
    name: "Time Series Analysis",
    fileId: 1,
    confidence: 94,
    description: "Forecasting model with seasonal adjustment",
    insights: [
      "Sales show clear seasonal pattern with peaks in March and June",
      "Tuesday is consistently the highest sales day across all products",
      "Year-over-year growth is steady at 12% with occasional fluctuations"
    ]
  },
  {
    id: 2,
    name: "Regression Analysis",
    fileId: 1,
    confidence: 88,
    description: "Multi-variable regression for sales prediction",
    insights: [
      "Strong correlation (0.82) between marketing spend and sales",
      "Customer acquisition cost has decreased by 18% over the last quarter",
      "Product A sales are most sensitive to price changes"
    ]
  },
  {
    id: 3,
    name: "Cluster Analysis",
    fileId: 2,
    confidence: 92,
    description: "Customer segmentation by behavior",
    insights: [
      "Three distinct customer segments identified based on purchasing behavior",
      "Segment 2 has the highest average order value but lowest purchase frequency",
      "Geographic clustering shows concentration in urban centers"
    ]
  },
  {
    id: 4,
    name: "Funnel Analysis",
    fileId: 3,
    confidence: 87,
    description: "Marketing campaign performance analysis",
    insights: [
      "Email campaigns have a 24% higher conversion rate than social media",
      "Drop-off is highest between cart addition and checkout (32%)",
      "Retargeting campaigns show 3.5x ROI compared to new customer acquisition"
    ]
  }
];

// Visualizations
export const visualizations = [
  {
    id: 1,
    name: "Monthly Sales Trend",
    fileId: 1,
    type: "line",
    description: "Sales performance over the past 6 months",
    isRecommended: true
  },
  {
    id: 2,
    name: "Product Revenue Distribution",
    fileId: 1,
    type: "pie",
    description: "Revenue share by product category",
    isRecommended: true
  },
  {
    id: 3,
    name: "Regional Sales Comparison",
    fileId: 1,
    type: "bar",
    description: "Sales by geographic region",
    isRecommended: false
  },
  {
    id: 4,
    name: "Customer Segments",
    fileId: 2,
    type: "pie",
    description: "Distribution of customer segments",
    isRecommended: true
  },
  {
    id: 5,
    name: "Purchase Frequency",
    fileId: 2,
    type: "bar",
    description: "Number of purchases per customer segment",
    isRecommended: false
  },
  {
    id: 6,
    name: "Campaign Performance",
    fileId: 3,
    type: "bar",
    description: "Conversion rates by campaign type",
    isRecommended: true
  },
  {
    id: 7,
    name: "Marketing Funnel",
    fileId: 3,
    type: "funnel",
    description: "Customer journey through marketing funnel",
    isRecommended: true
  }
];

// Insights
export const insights = [
  {
    id: 1,
    fileId: 1,
    title: "North region consistently outperforms by 32%",
    description: "The North region has maintained a 32% higher sales performance compared to other regions for the past 6 months.",
    action: "Analyze North region sales strategies for potential application in other regions",
    severity: "high"
  },
  {
    id: 2,
    fileId: 1,
    title: "Tuesday shows highest conversion rate (34.2%)",
    description: "Customer conversion rates peak on Tuesdays at 34.2%, significantly higher than the weekly average of 21.8%.",
    action: "Consider increasing promotion budget allocation for Tuesdays",
    severity: "medium"
  },
  {
    id: 3,
    fileId: 2,
    title: "Product A + C frequently purchased together",
    description: "Customers who purchase Product A are 3.5x more likely to also purchase Product C within 30 days.",
    action: "Create bundle offers for Products A and C to increase attach rate",
    severity: "high"
  },
  {
    id: 4,
    fileId: 3,
    title: "Email click-through rates declining",
    description: "Email marketing click-through rates have declined by 12% over the past 3 months.",
    action: "Review email templates and A/B test new subject lines",
    severity: "medium"
  },
  {
    id: 5,
    fileId: 3,
    title: "Social media ROI exceeds target by 28%",
    description: "Social media campaigns are delivering 28% higher ROI than forecasted.",
    action: "Consider reallocating budget from underperforming channels to social media",
    severity: "high"
  }
];

// Chart data
export const chartData = {
  sales: [
    { month: 'Jan', value: 4000, target: 3500 },
    { month: 'Feb', value: 3000, target: 3200 },
    { month: 'Mar', value: 5000, target: 4800 },
    { month: 'Apr', value: 2780, target: 2600 },
    { month: 'May', value: 1890, target: 2000 },
    { month: 'Jun', value: 2390, target: 2400 }
  ],
  products: [
    { name: 'Product A', value: 35 },
    { name: 'Product B', value: 25 },
    { name: 'Product C', value: 20 },
    { name: 'Product D', value: 15 },
    { name: 'Product E', value: 5 }
  ],
  regions: [
    { name: 'North', value: 42 },
    { name: 'South', value: 23 },
    { name: 'East', value: 20 },
    { name: 'West', value: 15 }
  ],
  campaigns: [
    { name: 'Email', value: 45 },
    { name: 'Social', value: 28 },
    { name: 'Search', value: 18 },
    { name: 'Display', value: 9 }
  ],
  funnel: [
    { name: 'Impressions', value: 5200 },
    { name: 'Clicks', value: 1800 },
    { name: 'Page Views', value: 1400 },
    { name: 'Add to Cart', value: 680 },
    { name: 'Purchase', value: 240 }
  ]
};