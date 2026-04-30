# `data/` 网站数据(无需写代码即可修改)

修改任一 JSON 后 commit 到 `main`,GitHub Actions 自动重建并部署到
[crabsatellite.github.io/dorawolf_portfolio](https://crabsatellite.github.io/dorawolf_portfolio/)，约 30 秒后生效。

## 修改方式

GitHub 网页直接编辑：

1. 打开 https://github.com/crabsatellite/dorawolf_portfolio/tree/main/data
2. 点开要改的 `.json` → 铅笔图标(Edit this file)
3. 改文字 → "Commit changes"
4. 等 30 秒，刷新网站

## 文件清单

| 文件 | 控制什么 | 哪里显示 |
|---|---|---|
| `site.zh.json` | **中文版**站点信息(姓名 / 角色 / 联系方式) | 全站(中文版导航 / 页脚 / SEO) |
| `site.en.json` | **English** site info | All pages (English nav / footer / SEO) |
| `about.zh.json` | **中文版**关于页内容(简介 / 教育 / 兴趣) | About 页中文版 |
| `about.en.json` | **English** About content | About page English version |
| `experience.json` | 工作 + 教育时间线(双语，中英字段并存) | About + Timeline 页 |
| `projects-record.json` | 完整项目记录(双语) | About 页 |
| `awards.json` | 奖项(双语) | About 页 |
| `skills.json` | 工具栈(分组，无需翻译) | About 页 |

## 项目案例(详细页面)

每个有详细页的建筑项目对应一个 markdown 文件，在
[`src/content/projects/`](../src/content/projects/)，文件名是 URL 末尾的 slug
(如 `yangtze-foreign-language-school.md` → `/projects/yangtze-foreign-language-school/`)。

每个文件顶部 `---` 框是 frontmatter(标题 / 年份 / 分类)，下面是 markdown 正文。

## JSON 注意事项

- 所有字符串用英文双引号 `"..."`
- 字段之间英文逗号 `,`,**最后一项不加逗号**
- 中英数字都可以
- `$comment` 字段是注释，不显示
- 出错恢复：GitHub repo → 文件 → "History" → 选可用版本 → "Restore"
