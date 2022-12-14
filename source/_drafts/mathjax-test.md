---
title: 数式表示のテスト
date: 2022-07-01 21:44:00
mathjax: true
---

$$
f(x) = \int_{0}^{x} sin(t) dt
$$

$$
A = 
\left[
    \begin{array}{cc}
        1 & 0\\\\
        0 & 1
    \end{array}
\right]
$$

---

練習  
$x_n = 1/n$ ，$(x_n)_{n=1}^{\infty}$ は $0$ に収束する．

$$
\begin{array}{c|ccc}
	& \mbox{1手目} & \mbox{2手目} & \mbox{3手目} & \mbox{勝利条件}\\\\
	\hline
	\forall & \epsilon & & n\ge N & \\\\
	\exists & & N & & 1/N < \epsilon
\end{array}
$$

↑2手目の $\exists$ さんは $1/\epsilon$ より大きい $N$ をとってくればいい！  

$$
\frac{1}{\epsilon} < N \le n \quad \rightarrow \quad \epsilon > \frac{1}{n}
$$

$\exists$ さんの勝利！（式は真）

## コードの表示

```python
import numpy as np
import matplotlib.pyplot as plt

def f(x):
    return np.sin(x)

x = np.arange(-3, 3, 0.01)
y = f(x)

plt.plot(x, y)
plt.show()
```

## mermaid
### 平衡二分探索木

<div class="mermaid">
graph TD
    root --> a
    a((12)) --> b((6))
    a --> c((20))
    b --> d((4))
    b --> e((8))
    c --> f((18))
    c --> g((25))
</div>
