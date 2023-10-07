# portfolio1

1) new update 

<!-- Add MapGuide skill -->
<img id="logo" src="mapguide_logo.png" alt="MapGuide">

<!-- Add GeoServer skill -->
<img id="logo" src="geoserver_logo.png" alt="GeoServer">

<!-- Add Bing Maps API skill -->
<img id="logo" src="bingmaps_logo.png" alt="Bing Maps API">

<!-- Add ArcGIS Server skill -->
<img id="logo" src="arcgisserver_logo.png" alt="ArcGIS Server">

<!-- Add GeoNetwork skill -->
<img id="logo" src="geonetwork_logo.png" alt="GeoNetwork">

<!-- Add Google Maps JSP Tag Library skill -->
<img id="logo" src="googlemaps_jsp_logo.png" alt="Google Maps JSP Tag Library">

<!-- Add GeoGoogle Address Standardizer skill -->
<img id="logo" src="geogoogle_standardizer_logo.png" alt="GeoGoogle Address Standardizer">

<!-- Add ArcFM skill -->
<img id="logo" src="arcfm_logo.png" alt="ArcFM">

<!-- Add GeoCortex skill -->
<img id="logo" src="geocortex_logo.png" alt="GeoCortex">

<!-- Add GESmallworld skill -->
<img id="logo" src="gesmallworld_logo.png" alt="GESmallworld">

<!-- Add FME skill -->
<img id="logo" src="fme_logo.png" alt="FME">


2) new 2

import pandas as pd

# Read the Excel file
excel_file = "path-to-your-excel-file.xlsx"
df = pd.read_excel(excel_file)

# Convert the DataFrame to an HTML table
html_table = df.to_html(classes="table table-bordered table-striped", index=False)

# Save the HTML table to a file or use it in your HTML template
with open("output_table.html", "w") as f:
    f.write(html_table)

<div>
    <!-- Include the generated HTML table here -->
    <h2>Excel Data</h2>
    <div class="table-responsive">
        {% include 'output_table.html' %}
    </div>
</div>
