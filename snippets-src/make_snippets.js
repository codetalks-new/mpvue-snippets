const fs = require('fs');
const path = require('path');

function includeSnippetBody(snippet, key, includesDir) {
  // if we did not specify the body field
  // then using the key as the filenameWithoutSuffix
  // then find a matching file in `includes` dir.
  const body = snippet["body"]
  let filePath
  if (body) {
    if (typeof body !== 'string') {
      return
    }
    if (!body.startsWith("@includes")) {
      return
    }
    filePath = path.join(__dirname, body.substring(1))
  } else {
    // find the first matching file
    for (const filename of fs.readdirSync(includesDir)) {
      const lastDotIndex = filename.lastIndexOf('.')
      const filenameWithoutSuffix = lastDotIndex > 0 ? filename.substring(0, lastDotIndex) : filename
      const rcPath = path.join(includesDir, filename)
      if (filenameWithoutSuffix === key && fs.statSync(rcPath).isFile()) {
        filePath = rcPath
        break
      }
    }
    if (!filePath) {
      console.error("Failed to find default includes file:", { key: key, includesDir: includesDir })
      return
    }
  }

  if (!fs.existsSync(filePath)) {
    console.error("Failed to find includes file: ", { body: body, key: key, filePath: filePath })
    return
  }

  const bodyContent = fs.readFileSync(filePath, 'utf8')
  const lines = []
  const rawLines = bodyContent.match(/[^\r\n]+/g)
  for (const line of rawLines) {
    lines.push(line.trimRight())
  }
  snippet['body'] = lines

}

function ensureSnippetPrefix(snippet, key) {
  if (!snippet.hasOwnProperty("prefix")) {
    snippet.prefix = key
  }
}

function ensureSnippetDescription(snippet) {
  if (!snippet.hasOwnProperty("description")) {
    snippet.description = snippet.body
  }
}

function mergeSnippetOptions(snippet, options) {
  //  value in snippet should have high priority
  const resultObj = Object.assign({}, options || {})
  Object.assign(resultObj, snippet)
  Object.assign(snippet, resultObj)
}

function makeSnippets(name, folder, global_options) {
  console.info("make snippets from ", name)
  const srcPath = path.join(__dirname, name);
  if (!fs.existsSync(srcPath)) {
    console.error("Failed to find source file:", srcPath);
    return
  }
  const srcText = fs.readFileSync(srcPath, 'utf8');
  const data = JSON.parse(srcText);
  const includesDir = path.join(__dirname, "includes", folder)
  const options = Object.freeze(global_options)
  for (const key in data) {
    if (!data.hasOwnProperty(key)) {
      continue;
    }
    const snippet = data[key];
    ensureSnippetPrefix(snippet, key)
    includeSnippetBody(snippet, key, includesDir)
    if (global_options) {
      mergeSnippetOptions(snippet, options)
    }
    ensureSnippetDescription(snippet)
  }

  const destFilePath = path.join(__dirname, '..', 'snippets', name)
  console.info("Write snippets to ", destFilePath)
  fs.writeFileSync(destFilePath, JSON.stringify(data, null, 2));
}


makeSnippets('wx_api.json', 'wx_api', { scope: "javascript,typescript" });
makeSnippets('mp_components.json', 'mp_components', { scope: "vue, html, vue-html, wpy" });
makeSnippets('weui.json', 'weui', { scope: "vue,html,vue-html,wpy" });
makeSnippets('mp_configs.json', 'mp_configs', { scope: "javascript,typescript" });
