# `data/` — 网站数据(无需写代码即可修改)

这个文件夹的所有 JSON 文件都是**直接驱动网站显示的数据**。修改任何一个文件,
然后 commit 到 `main` 分支,GitHub Actions 会自动重新 build 并部署到
[crabsatellite.github.io/dorawolf_portfolio](https://crabsatellite.github.io/dorawolf_portfolio/),
约 30 秒后生效。

## 怎么改

最简单的方式 — 在 GitHub 网页上直接编辑:

1. 打开 https://github.com/crabsatellite/dorawolf_portfolio/tree/main/data
2. 点开要改的 `.json` 文件
3. 点右上角铅笔图标(Edit this file)
4. 修改文字 → 拉到页面底部 → "Commit changes" → 输入说明 → Commit
5. 等 30 秒,刷新 [网站](https://crabsatellite.github.io/dorawolf_portfolio/) 就能看到

## 文件清单

| 文件 | 控制什么 | 谁会显示 |
|---|---|---|
| `site.json` | 网站基本信息(姓名 / 角色 / 联系方式 / ICP) | 全站(导航栏 / 页脚 / SEO) |
| `about.json` | 关于页 — 中英双语 bio / 教育背景 / 语言 / 兴趣 | About 页 |
| `skills.json` | 工具栈(按类别分组) | About 页右侧栏 |
| `experience.json` | 工作 + 教育 timeline | About 页 + Timeline 页 |
| `projects-record.json` | 完整项目记录(含未做案例页的项目) | About 页 "Selected projects on record" |
| `awards.json` | 奖项 / 荣誉 | About 页 |

## 项目案例(深度页面)在哪改

每个有详细页的建筑项目对应一个 markdown 文件,在
[`src/content/projects/`](../src/content/projects/) 里 — 文件名就是 URL 末尾的 slug
(比如 `cjxqwgyxx.md` 对应 `/projects/cjxqwgyxx/`)。

每个文件顶部有一段 `---` 框起来的 frontmatter(标题 / 年份 / 分类等),下面是
markdown 正文(段落 + 图片)。改完同样 commit 到 main 即可。

## JSON 格式注意事项

- 所有字符串必须用英文双引号 `"..."`
- 字段之间用英文逗号 `,`,**最后一项后面不要逗号**
- 中文/英文/数字都可以放在字符串里
- 字段名带 `$comment` 的是注释,不会显示,可以保留也可以删除
- 改完用 [jsonlint.com](https://jsonlint.com/) 验证一下能避免格式错误

如果 JSON 格式有错,GitHub Actions 会 build 失败 — 在 repo 的 "Actions" 标签
能看到红色 ❌,点进去看错误信息。最简单的恢复方式:回到 GitHub 网页打开同一文件
点 "History" → 找上一个能跑的版本 → "Restore"。
