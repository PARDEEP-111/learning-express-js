import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basePath = "C:\\Users\\ACER\\Documents\\GitHub\\learning-express-js\\exercises\\ex1";

let files = await fs.readdir(basePath);

for (const item of files) {
    let itemPath = path.join(basePath, item);

    // skip folders
    if (fsn.lstatSync(itemPath).isDirectory()) continue;
if (item.endsWith(".js")) continue;
    let ext = item.split(".").pop();
    let extFolderPath = path.join(basePath, ext);

    if (!fsn.existsSync(extFolderPath)) {
        await fs.mkdir(extFolderPath);
    }

    await fs.rename(
        itemPath,
        path.join(extFolderPath, item)
    );
}
