import { FISH_LOGO_PATH, FISH_LOGO_VIEWBOX } from '@deepseek-ai/dsh-client-ui-primitives'
import type { SidebarBrandMarkOwnerProps, SidebarBrandNameOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'
import css from './Brand.module.css'

/** Seal edge in viewBox units; the sidebar requests this square in both column states. */
const SEAL_EDGE = 24

/** Fish width inside the seal, leaving the dashed frame a 3.4-unit inset on each side. */
const FISH_WIDTH = 15.4

const FISH_SCALE = FISH_WIDTH / FISH_LOGO_VIEWBOX.width
const FISH_X = (SEAL_EDGE - FISH_WIDTH) / 2
const FISH_Y = (SEAL_EDGE - FISH_LOGO_VIEWBOX.height * FISH_SCALE) / 2

/**
 * Render the brand mark as a local-build seal: the fish inside a dashed frame,
 * whose gaps read as an unpackaged build rather than a release.
 * @param props - host-supplied mark presentation.
 * @returns the local-build seal svg.
 */
export function OfficialBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${SEAL_EDGE} ${SEAL_EDGE}`}
      fill="none"
      aria-hidden="true"
    >
      <rect className={css.sealFrame} x={0.85} y={0.85} width={22.3} height={22.3} rx={7} />
      <g transform={`translate(${FISH_X} ${FISH_Y}) scale(${FISH_SCALE})`}>
        <path d={FISH_LOGO_PATH} fill="currentColor" />
      </g>
    </svg>
  )
}

/**
 * Render the one-line build wordmark: the shell's localized lettering beside a
 * solid badge carrying the local-build stamp. Both words arrive as owner props
 * so the shell stays the single owner of brand copy.
 * @param props - owner share supplied by the sidebar shell.
 * @returns the build wordmark.
 */
export function OfficialBrandName({ wordmark, localBuildStamp }: SidebarBrandNameOwnerProps) {
  return (
    <span className={css.lockup}>
      <span>{wordmark}</span>
      <span className={css.stamp}>{localBuildStamp}</span>
    </span>
  )
}
