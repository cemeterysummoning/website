---
title: "Complex Limits to Infinity"
date: "Mar 26 2024"
excerpt: "A quick summary of a complex meeting"
---
By now, we've established the concept of a limit when working with a complex space. It turns out that it's basically the exact analogue of the real definition of a limit, which, if you'll recall, is 

$$\forall \epsilon,\ \exists \delta\ s.t.\ 0 \lt |x - c| \lt \delta \to |f(x) - L| \lt \epsilon$$

In complex space, we have a similar concept - we replace the absolute value bars with the modulus (which are, in effect, the same thing anyway). 

$$\forall \epsilon,\ \exists \delta\ s.t.\ |z - z_0| \lt \delta \to |f(z) - w_0| \lt \epsilon$$

We use this definition in a similar way. But how about limits to infinity?

In single variable calculus, we said that, for whichever "direction" of infinity we're choosing to travel in ($-\infty$ or $\infty$). we can choose an arbitrarily large (or small) number beyond which the function will approach some limit $L$. More formally, 

$$\forall \epsilon,\ \exists N\ s.t.\ x \gt N \to |f(x) - L| \lt \epsilon$$

But what does it even *mean* to travel in a "direction" of infinity on the complex plane? Aren't there a million paths? What does it mean to be inside some $B_\delta(\infty)$?

First, we'll take a tangent into the world of stereographic projections. Take a circle, cut in half by the real number line. We can draw a line through the top of the circle and every single point ($P$') on the real number line, which will intersect another point on the circle itself ($P$). 

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://web.resource.org/cc/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.0"
   x="0.0000000"
   y="0.0000000"
   width="192.60001pt"
   height="194.60001pt"
   id="svg3630"
   sodipodi:version="0.32"
   inkscape:version="0.43"
   sodipodi:docname="Stereoprojzero.svg"
   sodipodi:docbase="/home/aoleg/diverse/wiki">
  <metadata
     id="metadata30">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     inkscape:window-height="737"
     inkscape:window-width="962"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     borderopacity="1.0"
     bordercolor="#666666"
     pagecolor="#ffffff"
     id="base"
     inkscape:zoom="3.2241379"
     inkscape:cx="169.69911"
     inkscape:cy="147.01604"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:current-layer="g3605" />
  <defs
     id="defs3632" />
  <g
     transform="translate(1,1)"
     id="layer1">
    <g
       transform="translate(-314.796,-18.59962)"
       id="g3605">
      <g
         transform="translate(36.36549,8.135317)"
         id="g2076">
        <g
           transform="translate(-62.62946,-346.4823)"
           id="g2052">
          <path
             d="M 534.37069,487.68692 C 534.38074,533.44116 497.29242,570.53763 451.53818,570.53763 C 405.78394,570.53763 368.69562,533.44116 368.70567,487.68692 C 368.69562,441.93268 405.78394,404.83621 451.53818,404.83621 C 497.29242,404.83621 534.38074,441.93268 534.37069,487.68692 L 534.37069,487.68692 z "
             style="fill:none;stroke:#FFFFFF;stroke-opacity:1"
             id="path2042" />
          <path
             d="M 342.44171,489.68691 C 562.65497,489.68691 562.65497,489.68691 562.65497,489.68691"
             style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#FFFFFF;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             id="path2046" />
          <path
             d="M 452.54835,596.78339 C 452.54835,376.57013 452.54835,376.57013 452.54835,376.57013"
             style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#FFFFFF;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             id="path2048" />
        </g>
        <path
           d="M 389.91888,57.867002 L 476.792,224.54217"
           style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#FFFFFF;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           id="path2074" />
      </g>
      <path
         d="M 429.92418,66.507361 C 429.92508,68.506603 428.29521,70.127789 426.28436,70.127789 C 424.27353,70.127789 422.64367,68.506603 422.64457,66.507361 C 422.64367,64.508118 424.27353,62.886933 426.28436,62.886933 C 428.29521,62.886933 429.92508,64.508118 429.92418,66.507361 L 429.92418,66.507361 z "
         style="fill:#FFFFFF;fill-opacity:1;stroke:#FFFFFF;stroke-opacity:1"
         id="path3539" />
      <path
         d="M 474.3709,151.36016 C 474.3718,153.3594 472.74193,154.98059 470.73108,154.98059 C 468.72025,154.98059 467.09039,153.3594 467.09129,151.36016 C 467.09039,149.36092 468.72025,147.73973 470.73108,147.73973 C 472.74193,147.73973 474.3718,149.36092 474.3709,151.36016 L 474.3709,151.36016 z "
         style="fill:#FFFFFF;fill-opacity:1;stroke:#FFFFFF;stroke-opacity:1"
         id="path3541" />
      <path
         d="M 497.60441,196.81706 C 497.60531,198.8163 495.97544,200.43749 493.96459,200.43749 C 491.95376,200.43749 490.3239,198.8163 490.3248,196.81706 C 490.3239,194.81782 491.95376,193.19663 493.96459,193.19663 C 495.97544,193.19663 497.60531,194.81782 497.60441,196.81706 L 497.60441,196.81706 z "
         style="fill:#FFFFFF;fill-opacity:1;stroke:#FFFFFF;stroke-opacity:1"
         id="path3547" />
      <text
         x="504.76102"
         y="200.78679"
         style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans"
         id="text3557"
         xml:space="preserve"
         sodipodi:linespacing="125%"><tspan
           x="504.76102"
           y="200.78679"
           id="tspan3559"
           style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;font-family:Bitstream Vera Sans">P</tspan></text>
      <text
         x="477.1955"
         y="144.30322"
         style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans"
         id="text3561"
         xml:space="preserve"
         sodipodi:linespacing="125%"><tspan
           x="477.1955"
           y="144.30322"
           id="tspan3563"
           style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;font-family:Bitstream Vera Sans">P '</tspan></text>
      <text
         x="433.35544"
         y="61.456635"
         style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans"
         id="text3569"
         xml:space="preserve"
         sodipodi:linespacing="125%"><tspan
           x="433.35544"
           y="61.456635"
           id="tspan3571"
           style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;font-family:Bitstream Vera Sans">N</tspan></text>
      <path
         d="M 527.56996,145.30945 L 536.66133,151.37036 L 527.56996,157.41097"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#FFFFFF;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         id="path3575" />
      <path
         d="M 420.25391,47.374636 L 426.31482,38.283266 L 432.35543,47.374636"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#FFFFFF;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         id="path3583" />
      <text
         x="540.41833"
         y="156.14992"
         style="font-size:18px;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr-tb;text-anchor:start;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans"
         id="text3601"
         xml:space="preserve"
         sodipodi:linespacing="125%"><tspan
           x="540.41833"
           y="156.14992"
           id="tspan3603"
           style="font-size:18px;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr-tb;text-anchor:start;font-family:Bitstream Vera Sans">x</tspan></text>
      <text
         x="423.25259"
         y="32.434135"
         style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Bitstream Vera Sans"
         id="text1333"
         xml:space="preserve"
         sodipodi:linespacing="125%"><tspan
           x="423.25259"
           y="32.434135"
           id="tspan1335"
           style="font-size:18;font-style:oblique;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr;text-anchor:start;font-family:Bitstream Vera Sans">z</tspan></text>
    </g>
  </g>
</svg>
(image credits to Wikipedia). 

We've effectively created a *map* of the real number line onto this one circle. Furthermore, you'll notice that, as we near infinity, our mapped point nears the very top of the circle, where all of our rays originate from: $N$. 

Now, extend this to the complex plane (two dimensions). Instead of a circle, we have a sphere, with an intersecting equatorial plane. We similarly draw lines from the top of our circle, mapping points on the actual complex plane to points on the sphere. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Riemann_sphere1.svg/1280px-Riemann_sphere1.svg.png" alt="Riemann Sphere" style="width: 20%"/> (again, credits to Wikipedia).

This is called the Riemann sphere. What this projection does is it *realizes* this abstract concept of $\infty$ into a "physical" point that we can grapple with. Any $\delta$-neighborhood around $\infty$ can just be visualized as a neighborhood drawn on the top of the sphere, which can then be mapped onto boundaries on the complex plane. 

More formally, we define an $\epsilon$-neighborhood of $\infty$ to be the set of points 

$$\{z \in \mathbb{C}\ |\ |z| \gt \frac{1}{\epsilon}\}$$

Why $\frac{1}{\epsilon}$, you ask? We could choose any arbitrarily large number, like $N$ in our example with real, single variable functions. However, $\frac{1}{\epsilon}$ makes it extra clear that, with some small number $\epsilon$, we use its large reciprocal (it also makes the coming proofs just a bit nicer). 

With this definition, we can formulate a statement of limits: 

$$\forall \epsilon\ \exists \delta\ s.t.\ |z| \gt \frac{1}{\delta} \to |f(z) - w_0| \lt \epsilon$$

means 

$$\lim_{z \to \infty} f(z) = w_0$$

Meanwhile, 

$$\forall \epsilon\ \exists \delta\ s.t.\ 0 \lt |z - z_0| \lt \delta \to |f(z)| \gt \frac{1}{\epsilon}$$

means 

$$\lim_{z \to z_0} f(z) = \infty$$

We can derive some pretty cool properties that can help us evaluate certain limits to infinity. 

## Case 1

$$\lim_{z \to z_0} f(z) = \infty \Longleftrightarrow \lim_{z \to z_0} \frac{1}{f(z)} = 0$$

We first assume the statement $\lim_{z \to z_0} f(z) = \infty$, which tells us

$$|z - z_0| \lt \delta \to |f(z)| \gt \frac{1}{\epsilon}$$

by definition. We can then reciprocate:

$$|\frac{1}{|f(z)} - 0| \lt \epsilon,\ |z - z_0| \lt \delta$$ 

which yields 

$$\lim_{z \to z_0} \frac{1}{f(z)} = 0$$

## Case 2

$$\lim_{z \to \infty} f(z) = w_0 \Longleftrightarrow \lim_{z \to 0} f\left(\frac{1}{z}\right) = w_0$$

Once again, we assume $\lim_{z \to \infty} f(z) = w_0$. By definition, then, 

$$|z| \gt \frac{1}{\delta} \to |f(z) - w_0| \lt \epsilon$$

Manipulating the left side, 

$$|\frac{1}{z}| \lt \delta \to |f(z) - w_0| \lt \epsilon$$

We can "choose" $z = \frac{1}{z}$. (If this feels weird to you, remember that we can choose some auxiliary variable $a = \frac{1}{z}$, and then "rename" $a$ to $z$ in the formal limit statement, which is why we're allowed to do this next part). Plugging in $\frac{1}{z}$ for $z$, we get 

$$|z| \lt \delta \to |f\left(\frac{1}{z}\right) - w_0| \lt \epsilon$$

By definition, this becomes the limit 

$$\lim_{z \to 0} f\left(\frac{1}{z}\right) = w_0$$

## Case 3

$$\lim_{z \to \infty} f(z) = \infty \Longleftrightarrow \lim_{z \to 0} \frac{1}{f(1/z)} = 0$$

To see why this is true, we first assume the left side of the statement (sound familiar?). From $\lim_{z \to \infty} f(z) = \infty$, we get, by definition, 

$$|z| \gt \frac{1}{\delta} \to |f(z)| \gt \frac{1}{\epsilon}$$

This time, we can reciprocate for both statements, yielding 

$$|\frac{1}{z}| \lt \delta \to |\frac{1}{f(z)}| \lt \epsilon$$

Revisiting our trick from case 2, we can "choose" $z = \frac{1}{z}$ and get 

$$|z| \lt \delta \to |\frac{1}{f(1/z)}| \lt \epsilon$$

which is the formal statement of the limit 

$$\lim_{z \to 0} \frac{1}{f(1/z)} = 0$$