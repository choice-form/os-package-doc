const fs = require('fs');

const replaceHint = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = dir + '/' + file;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceHint(filePath);
    } else if (file.endsWith('.html')) {
      const hints = `<script>
      location.href="https://choice-form.github.io/os-client-core/content/modules/_index_d_.html"
      </script>`;
      fs.writeFileSync(filePath, hints);
    }
  })
}

replaceHint('os-package-doc/client-core')