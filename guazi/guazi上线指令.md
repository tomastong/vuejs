## 瓜子手动tag上线步骤

    git co online           // online上面更新
    git pull

    git tag                 // 查看所有tag
    git tag | grep 2017     // 查看tag中包含2017的所有tag
    git tag -a jr_20171026.3 -m '描述'     // 执行指令打tag
    git push --tags         // 将tag push到远程