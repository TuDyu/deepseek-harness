/**
 * Local-build brand mark: the product fish inside a dashed frame whose gaps read
 * as an unpackaged build rather than a release.
 * @module @deepseek-ai/dsh-client-ui-sidebar/client/LocalBuildMark
 */
import { FISH_LOGO_PATH, FISH_LOGO_VIEWBOX } from '@deepseek-ai/dsh-client-ui-primitives'
import css from './SidebarRoot.module.css'

/** Seal edge in viewBox units; the sidebar requests this square in both column states. */
const SEAL_EDGE = 24

/** Fish width inside the seal, leaving the dashed frame a 3.4-unit inset on each side. */
const FISH_WIDTH = 15.4

const FISH_SCALE = FISH_WIDTH / FISH_LOGO_VIEWBOX.width
const FISH_X = (SEAL_EDGE - FISH_WIDTH) / 2
const FISH_Y = (SEAL_EDGE - FISH_LOGO_VIEWBOX.height * FISH_SCALE) / 2

/**
 * Render the local-build seal.
 * @param props - presentation options.
 * @param props.size - square edge in pixels (default 24).
 * @returns the seal svg.
 */
export function LocalBuildMark({ size = SEAL_EDGE }: { size?: number }) {
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
