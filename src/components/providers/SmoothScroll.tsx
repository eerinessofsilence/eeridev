'use client';

import { useEffect } from 'react';

const WHEEL_SPEED = 0.9;
const LERP_FACTOR = 0.6;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function normalizeWheelDelta(event: WheelEvent) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return event.deltaY * 16;
  }

  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight;
  }

  return event.deltaY;
}

function hasScrollableParent(target: EventTarget | null, deltaY: number) {
  let element =
    target instanceof HTMLElement
      ? target
      : target instanceof Node
        ? target.parentElement
        : null;

  while (element && element !== document.body) {
    const style = window.getComputedStyle(element);
    const canScroll =
      /(auto|scroll|overlay)/.test(style.overflowY) &&
      element.scrollHeight > element.clientHeight;

    if (canScroll) {
      const canScrollUp = element.scrollTop > 0;
      const canScrollDown =
        element.scrollTop + element.clientHeight < element.scrollHeight;

      if ((deltaY < 0 && canScrollUp) || (deltaY > 0 && canScrollDown)) {
        return true;
      }
    }

    element = element.parentElement;
  }

  return false;
}

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (reduceMotionQuery.matches) {
      return;
    }

    let currentY = window.scrollY;
    let targetY = currentY;
    let rafId = 0;

    function maxScrollY() {
      return Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    }

    function stopAnimation() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    function animate() {
      currentY += (targetY - currentY) * LERP_FACTOR;

      if (Math.abs(targetY - currentY) < 0.5) {
        currentY = targetY;
      }

      window.scrollTo({ top: currentY });

      if (currentY !== targetY) {
        rafId = window.requestAnimationFrame(animate);
        return;
      }

      rafId = 0;
    }

    function onWheel(event: WheelEvent) {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        Math.abs(event.deltaY) <= Math.abs(event.deltaX)
      ) {
        return;
      }

      const deltaY = normalizeWheelDelta(event);

      if (hasScrollableParent(event.target, deltaY)) {
        return;
      }

      event.preventDefault();

      targetY = clamp(targetY + deltaY * WHEEL_SPEED, 0, maxScrollY());
      currentY = window.scrollY;

      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    }

    function syncScrollPosition() {
      if (!rafId) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    }

    function resetTarget() {
      stopAnimation();
      currentY = window.scrollY;
      targetY = currentY;
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', syncScrollPosition, { passive: true });
    window.addEventListener('touchstart', resetTarget, { passive: true });
    window.addEventListener('keydown', resetTarget);

    return () => {
      stopAnimation();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', syncScrollPosition);
      window.removeEventListener('touchstart', resetTarget);
      window.removeEventListener('keydown', resetTarget);
    };
  }, []);

  return null;
}
