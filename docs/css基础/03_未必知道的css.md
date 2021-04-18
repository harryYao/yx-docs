# 未必知道的CSS

## 1. shape-outside

可以来设置文字环绕时的形状。（示例）
```css
.c1 {
  width: 200px;
  height: 200px;
  float: left;
  background-color: rgb(101, 101, 185);

  border: 1px solid #dedee3;
  border-radius: 50%;
  shape-outside: circle();
  margin: 20px;
  
  /* margin: 50px;
  shape-outside: border-box; */
}
```
