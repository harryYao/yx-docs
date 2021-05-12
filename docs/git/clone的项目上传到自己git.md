# 如何将clone下来的项目添加到自己的远程仓库


1. clone你需要的项目：
    > git clone 代码地址

2. 进入项目目录：
    > cd app-demo

3. 删除原有git信息，有问题一直回车即可
    > rm -r .git

4. 初始化.git：
    > git init

5. 将本地代码添加到仓库
    > git add .
    > git commit -m “说明…”

6. 在git官网上新建一个Project，注意不要生成README.md文件

7. 关联远程库
    > git remote add origin 远程库地址

8. 提交代码
    > git push -u origin master