
import pandas as pd

# Read the Excel file
excel_file = "My Training Courses.xlsx"
df = pd.read_excel(excel_file)

# Convert the DataFrame to an HTML table
html_table = df.to_html(classes="table table-bordered table-striped", index=False)

# Save the HTML table to a file or use it in your HTML template
with open("output_table.html", "w") as f:
    f.write(html_table)



 
