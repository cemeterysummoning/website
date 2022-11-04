---
title: "Binet's Formula"
date: "Nov 5 2022" 
---

My [last post](https://chun.cat/blog/metallic-ratios) talked a lot about the Golden Ratio and how we can see and derive it from many different sources. This post will focus on a special formula for finding the nth Fibonacci number that involves the Golden Ratio, named Binet's formula for Jacques Philippe Marie Binet, who derived the formula (although sources indicate that Abraham de Moivre and Daniel Bernoulli had known about it beforehand).

To start, let's express the formula itself: 

$$F(n) = \frac{\varphi^n - \bar{\varphi}^n}{\varphi - \bar{\varphi}} = \frac{\varphi^n - \bar{\varphi}^n}{\sqrt{5}}$$

where $\varphi$ is the Golden Ratio, and $\bar{\varphi}$ is its conjugate. They are both solutions to the equation 

$$x^2 - x - 1 = 0$$

To make things clearer, I want to write the polynomial in a different way: 

$$x^2 - x^1 - x^0 = 0$$

We can multiply any amount of $x$s to the equation, and it will still preserve equality (0 times anything is 0, while the relative powers of the polynomial are preserved). 
This means that we can rewrite the quadratic as 

$$x^3 - x^2 - x^1 = 0$$

$$x^4 - x^3 - x^2 = 0$$

$$\vdots$$

$$x^n - x^{n - 1} - x^{n - 2} = 0$$

or: 

$$x^n = x^{n - 1} + x^{n - 2}$$

Since we haven't changed the validity of the equation, the solutions to the above polynomial are still $\varphi$ and $\bar{\varphi}$. This means that 


$$\varphi^n = \varphi^{n-1} + \varphi^{n-2}$$

$$\bar{\varphi}^n = \bar{\varphi}^{n-1} + \bar{\varphi}^{n-2}$$

This is meaningful in that the powers of $\varphi$ and $\bar{\varphi}$ themselves satisfy the Fibonacci recurrence. 
So for any sequence $P$ defined as 

$$P_n = a\varphi^n + b\bar{\varphi}^n$$

also satisfies the Fibonacci recurrence: 

$$P_n = a(\varphi^{n-1} + \varphi^{n-2}) + b(\bar{\varphi}^{n-1} + \bar{\varphi}^{n-2})$$

$$P_n = a\varphi^{n-1} + b\bar{\varphi}^{n-1} + a\varphi^{n-2} + b\bar{\varphi}^{n-2} = P_{n-1} + P_{n-2}$$

So, we can choose some $a$ and $b$ such that it follows the Fibonacci sequence: namely, 

$$a + b = 0$$

$$a\varphi + b\bar{\varphi} = 1$$

solutions of which make sure that $a$ and $b$ fulfill the first two terms of the sequence. 
With some manipulation, we find that 

$$a=\frac{1}{\varphi - \bar{\varphi}} = \frac{1}{\sqrt{5}}$$

and 

$$b = -a = -\frac{1}{\sqrt{5}}$$

So, with our arbitrary sequence $P_n$, we can plug our $a,\ b$ back in to find a formula for the Fibonacci sequence itself:

$$P_n = a\varphi^n + b\bar{\varphi}^n = a(\varphi^n - \bar{\varphi}^n)$$

$$F_n = \frac{\varphi^n - \bar{\varphi}^n}{\sqrt{5}}$$

Notice how we can use *any* value for $a,\ b$ here to find the nth term of any sequence that behaves like the Fibonacci sequence but with different starting numbers. All we'd have to do is find an $a,\ b$ that satisfies the system of equations 

$$a + b = P_0$$

$$a\varphi + b\bar{\varphi} = P_1$$
