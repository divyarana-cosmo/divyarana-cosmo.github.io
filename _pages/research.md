---
layout: page
permalink: /research/
title: research
description: Weak lensing and galaxy clustering, from the stellar mass inside galaxies to the edges of dark matter halos and the expansion of the Universe.
nav: true
nav_order: 2
---

## Weighing galaxies inside-out: the stellar IMF with small-scale lensing

How much of a galaxy's mass is in stars depends on the stellar initial mass function (IMF), which remains one of the largest uncertainties in galaxy evolution. Weak lensing on scales of 10–100 $$h^{-1}$$ kpc measures the total mass inside galaxies directly, independently of stellar-population modelling. Using image simulations, we showed that light from the lens galaxy itself biases source detection, photometry and shape measurements at these small separations, and that subtracting it with Galfit reduces the biases by nearly an order of magnitude. For a DESI Bright Galaxy Survey–like lens sample across about 9000 deg² of the Euclid wide survey, we forecast an 8.5% constraint on the IMF mismatch parameter, enough to distinguish Chabrier, Kroupa and Salpeter IMFs.

<div class="row justify-content-center mt-3">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/imf_alpha.png" title="Forecast IMF constraints for Euclid" alt="Forecast relative uncertainty on the IMF mismatch parameter versus stellar mass and redshift" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Forecast relative uncertainty on the IMF mismatch parameter α for Euclid, as a function of stellar mass (left) and redshift (right). The grey band is the stacked constraint; the dashed and dot-dashed lines show the offsets expected for Salpeter and Kroupa IMFs relative to a Chabrier IMF.
</div>

**Paper:** [Rana, Hoekstra, Kuijken, Sonnenfeld & Tajalli (2026), arXiv:2610.01541](https://arxiv.org/abs/2610.01541)

---

## Photometric-redshift calibration and cosmic shear with HSC Year 3

Cosmic shear measures the growth of cosmic structure, but its accuracy depends on knowing the redshifts of the source galaxies. We built an independent check from lensing shear ratios: measuring the tangential shear around spectroscopic lens galaxies from GAMA, SDSS and DESI in fifteen narrow redshift bins, we calibrated the photometric-redshift biases of the HSC Year 3 source galaxies in a blinded analysis. The calibration agrees with HSC cosmic-shear modelling, and combining the two gives $$\Omega_{\rm m} = 0.304^{+0.030}_{-0.029}$$ and $$S_8 = 0.773 \pm 0.031$$.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/hsc_s8.png" title="HSC Y3 cosmological constraints" alt="Omega_m and S8 constraints from HSC Y3 cosmic shear with and without shear ratios" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Constraints on Ω<sub>m</sub> and S<sub>8</sub> from HSC Y3 cosmic shear combined with our shear-ratio measurements (blue) and from cosmic shear alone (orange). Contours show 68% and 95% confidence regions.
</div>

**Paper:** [Rana, More, Miyatake, Sugiyama, Zhang & Shirasaki (2026), Physical Review D 113, 063534](https://arxiv.org/abs/2508.21681)

---

## The edges of dark matter halos

Dark matter halos are usually given a size defined by an arbitrary density threshold. The splashback radius, where recently accreted material reaches the apocentre of its first orbit, instead marks a physical edge, and shows up as a sharp steepening in the density of galaxies around clusters. Using HSC galaxies around X-ray-selected clusters from the eROSITA eFEDS survey, we obtained the best splashback constraints for an X-ray-selected cluster sample at the time. A student-led follow-up with RASS MCMF clusters then measured the mean cluster mass-accretion rate from the splashback radius.

<div class="row justify-content-center mt-3">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/splashback_efeds.png" title="Splashback radius of eFEDS clusters" alt="Splashback radius versus peak height for eFEDS clusters compared with earlier studies" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Splashback radius (in units of r<sub>200m</sub>) against peak height for X-ray-selected eFEDS clusters (black), compared with earlier optical, SZ and X-ray studies. The dashed line is the ΛCDM expectation from More et al. (2015).
</div>

**Papers:**
[Rana et al. (2023), MNRAS 522, 4181](https://arxiv.org/abs/2301.03626) ·
[Joshi<sup>†</sup>, Rana, More & Klein (2026), Physical Review D 113, 023512](https://arxiv.org/abs/2506.08925) ·
[Joshi<sup>†</sup>, Rana & More (2026), arXiv:2609.15375](https://arxiv.org/abs/2609.15375)

---

## The galaxy–halo connection with weak lensing

Weak lensing measures halo masses directly, without assuming dynamical equilibrium. Combining spectroscopic galaxy groups from GAMA with Subaru HSC lensing, we measured how group halo mass scales with luminosity and velocity dispersion, constraining the mass–luminosity relation to 5%. With HSC lensing we have also measured how galaxy size relates to halo radius across stellar mass, and, in a student-led study, set the first empirical upper limit on the fraction of "orphan" satellite galaxies in clusters.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/gama_mass_lum.png" title="Halo mass–luminosity relation" alt="Weak lensing halo mass versus group luminosity for GAMA groups" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/gama_mass_vel.png" title="Halo mass–velocity dispersion relation" alt="Weak lensing halo mass versus velocity dispersion for GAMA groups" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/size_halo_radius.png" title="Galaxy size–halo radius relation" alt="Ratio of galaxy size to halo radius versus stellar mass" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Left and centre: weak-lensing halo mass of GAMA groups (blue) against group luminosity and velocity dispersion, with the best-fit power law (red) and earlier measurements. Right: ratio of galaxy size to halo radius, r<sub>1/2</sub>/R<sub>200c</sub>, against stellar mass from HSC lensing (blue band), compared with abundance matching and IllustrisTNG.
</div>

**Papers:**
[Rana et al. (2022), MNRAS 510, 5408](https://arxiv.org/abs/2107.05641) ·
[Mishra, Rana & More (2023), MNRAS 526, 2403](https://arxiv.org/abs/2301.04664) ·
[Kumar<sup>†</sup>, More & Rana (2022), MNRAS 517, 4389](https://arxiv.org/abs/2205.00018)

---

## Gravitational-wave cosmology without host galaxies

Merging binary black holes are standard sirens: their gravitational waves give the distance directly, but without an electromagnetic counterpart their redshift is unknown. Because the mergers trace the same large-scale structure as galaxies, cross-correlating their positions and distances with a galaxy catalogue recovers the distance–redshift relation statistically. In simulations, we showed that this constrains the Hubble constant to better than 10% (90% confidence) with 50 events, even when the galaxy catalogue contains none of the host galaxies.

<div class="row mt-3">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/gw_crosscorr.png" title="GW–galaxy cross-correlation" alt="Gravitational-wave sources overlaid on galaxy density slices, with the cross-correlation peaking at the matching redshift" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/gw_h0_posterior.png" title="Hubble constant posterior" alt="Posterior on the Hubble constant from 50 simulated binary black hole mergers" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Left: gravitational-wave sources (red) compared with the galaxy density field at three trial redshifts; the cross-correlation peaks where the redshifts match (b). Right: posterior on H<sub>0</sub> from 50 simulated binary black hole mergers. The injected value (black) lies within the 90% credible interval (green dashed).
</div>

**Paper:** [Bera, Rana, More & Bose (2020), The Astrophysical Journal 902, 79](https://arxiv.org/abs/2007.04271)

---

## Also in progress

- **Halo assembly in cosmic filaments:** how the large-scale velocity field shapes halo mass assembly ([Díaz-Axtle<sup>†</sup> et al. 2026, arXiv:2609.15416](https://arxiv.org/abs/2609.15416)).
- **Environment in the halo model:** an environment-dependent halo model calibrated on the FLAMINGO simulations (Martín Girardi<sup>†</sup> et al., in preparation).
- **Euclid DR1 galaxy–galaxy lensing:** coordinating the Key Project that will deliver Euclid's first galaxy–galaxy lensing science products.

<sup>†</sup> Student supervised or mentored by D. Rana. See the full list on the [publications]({{ '/publications/' | relative_url }}) page.
