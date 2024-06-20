# Read the Excel File and Convert to HTML Table
import pandas as pd

def convert_excel_to_html(excel_path, output_html_path):
    # Read the Excel file
    df = pd.read_excel(excel_path)

    # Convert the DataFrame to an HTML table
    html_table = df.to_html(index=False, classes='table table-striped')

    # Create an HTML document and embed the table
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Excel Data</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
            <h1 class="mt-5">Excel Data</h1>
            {html_table}
        </div>
    </body>
    </html>
    """

    # Write the HTML content to a file
    with open(output_html_path, 'w') as f:
        f.write(html_content)

# Path to your Excel file
excel_path = r'F:\COGNIZANT\portfolio1-main\TrainingTranscripts_2_Online.xlsx'

# Path to the output HTML file
output_html_path = 'output_file-1.html'

# Convert the Excel file to an HTML file
convert_excel_to_html(excel_path, output_html_path)

print(f"HTML file has been created at {output_html_path}")
