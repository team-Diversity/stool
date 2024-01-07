const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // Ensure this is your entry file
    mode: "production",
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/, // Add this rule for JSX
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
            },
            {
              test: /\.tsx?$/,
              use: [
                  {
                      loader: "ts-loader",
                      options: {
                          compilerOptions: { noEmit: false },
                      }
                  }
              ],
              exclude: /node_modules/,
            },
            {
              test: /\.css$/i,
              use: [
                  "style-loader",
                  "css-loader"
              ],
              exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "manifest.json" },
                { from: "icons/stool.png", to: "icons/stool.png" },
            ],
        }),
        ...getHtmlPlugins(["popup"]), // Changed from ["index"] to ["popup"]
    ],
    
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"], // Add .jsx here
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(chunk =>
        new HTMLPlugin({
            title: "React Extension", // You can customize the title
            filename: `${chunk}.html`, // This generates a HTML file for each chunk
            chunks: [chunk],
        })
    );
}

