---
title: 数式表示のテスト
date: 2022-07-01 21:44:00
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
