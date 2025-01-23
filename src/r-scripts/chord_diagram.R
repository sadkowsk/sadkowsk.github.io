pacman::p_load(chorddiag, htmlwidgets, rstudioapi) # To install {chorddiag}: run `devtools::install_github("mattflor/chorddiag")`

# Placeholder data: Expanded adjacency matrix for Groups A to G
mat <- matrix(c(
  5, 10, 15, 20, 25, 30, 35,
  10, 5, 25, 30, 15, 20, 10,
  15, 25, 5, 35, 10, 25, 20,
  20, 30, 35, 5, 25, 15, 10,
  25, 15, 10, 25, 5, 30, 35,
  30, 20, 25, 15, 30, 5, 40,
  35, 10, 20, 10, 35, 40, 5
), ncol = 7)

# Set placeholder row and column names for Groups A to G
colnames(mat) <- rownames(mat) <- c("Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G")

# Define a more sophisticated, jewel-toned color palette
sophisticated_colors <- c("#4B0082", # Deep Indigo
                          "#006400", # Dark Green
                          "#8B0000", # Dark Red
                          "#4682B4", # Steel Blue
                          "#D2691E", # Chocolate
                          "#FFD700", # Gold
                          "#708090") # Slate Gray

# Ensure the color palette matches the number of groups (categories)
group_colors <- sophisticated_colors[1:nrow(mat)]

# Create the chord diagram with customized colors
chord <- chorddiag(
  mat,
  groupColors = group_colors,
  groupnameFontsize = 14,
  groupPadding = 5,
  showTicks = FALSE,
  tooltipGroupConnector = " → "
)

# Dynamically determine the project root (assumes this script is in 'r-scripts/')
output_path <- file.path(
  dirname(rstudioapi::getActiveDocumentContext()$path), # Path of the R script
  "..",                                                 # Move up to the project root
  "assets",                                             # Navigate to the assets directory
  "visualizations",                                     # Navigate to visualizations
  "chord_diagram.html"                                  # Output file name
)

# Save the widget as an HTML file
saveWidget(chord, file = output_path, selfcontained = TRUE)

cat(sprintf("Interactive chord diagram saved to %s\n", output_path))
