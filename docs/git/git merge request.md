# git 使用流程规范（merge-request)

如果你的git workflow 采用此模式，谨记一定要忘记 git merge,除了在 master 分支上 git pull 可以使用 git pull，其他分支如果要 git pull应该使用 git pull --rebase
使用 git rebase 的黄金法则就是：分支的开发者尽量是一个人，重写提交历史不会影响别人

1. 新建分支

> # 创建分之前，先切换到 master 分支，更新到最新版本，确保你的新分支是基于最新版本的master
> # 在 master 分支上基本上只有一个操作 git pull
> git checkout master
> git pull
> # 创建分支 git checkout 命令是切换分支，加上参数 -b 表示如果分支不存在，就创建，且立即切换到新创建的分支
> git checkout -b myfeature


2. 分支开发

> # 添加工作区改变的文件到暂存区，尽量git add file1 file2, 不提倡 git add *
> git add *
> # 查看当前工作区的状态
> git status
> # 把暂存区内容放入版本库,加上 verbose 参数的话会对变化比较且显示
> git commit --verbose



3. 撰写提交信息

> git 提交的信息非常重要
> 第一行是信息摘要50字以内
> 
> 空一行，
> 第三行罗列出改天原因，主要变动，注意事项
> 切记提交有意义的 commit message


4. 与主干同步

> # 拉取远端仓库所有变更内容到本地仓库
> # 注意和 git pull 的区别，git pull=git fetch + git merge(rebase)
> git fetch origin
> 假设分支 myfeature 是几个人共同开发，这个时候 需要执行
> 
> # 此操作可能会产生冲突，且解决完之后 push 的时候，可能要加上 --force 参数强制推送代码，改变提交历史记录，慎用
> git pull --rebase


5. 合并 commit
此处的操作是最复杂的

> #rebase 命令和 merge 相仿,-i参数表示交互模式
> git rebase -i origin/master
> 使用交互模式，可以合并同一个分支里面的多个 commit 为一个或者多个，能灵活控制 commit。
> 当执行 rebase 发生冲突的时候，先解决冲突文件，使用git add 标志所有冲突为已经解决。 最后 git rebase --continue 完成 rebase 流程

6. 推送代码到远端

> # push 命令加上 --force 参数，因为 rebase 之后，分支历史改变，跟远程分支不一定兼容

> git push -u origin myfeature 


7. 请求代码合并 merge-request