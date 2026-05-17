import { useState, useMemo } from "react";
import graphData from "../content/knowledge-graph.json";
import { SectionHeader } from "./SystemOverview";

interface Node {
  id: string;
  label: string;
  type: "skill" | "project" | "concept";
  group?: string;
}

interface Edge {
  from: string;
  to: string;
  label?: string;
}

const GROUP_COLORS: Record<string, string> = {
  frontend: "#4ade80",
  backend: "#38bdf8",
  data: "#a78bfa",
  cloud: "#22d3ee",
  security: "#fb7185",
  practices: "#f59e0b",
  projects: "#facc15",
};

const TYPE_RADIUS: Record<string, number> = {
  project: 28,
  skill: 22,
  concept: 18,
};

export default function KnowledgeGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const { positions, width, height } = useMemo(() => {
    const nodes = graphData.nodes as Node[];
    const w = 800;
    const h = 540;
    const cx = w / 2;
    const cy = h / 2;

    const groups: Record<string, Node[]> = {};
    nodes.forEach((n) => {
      const g = n.group || "other";
      if (!groups[g]) groups[g] = [];
      groups[g].push(n);
    });

    const groupKeys = Object.keys(groups);
    const pos: Record<string, { x: number; y: number }> = {};

    groupKeys.forEach((g, gi) => {
      const angle = (gi / groupKeys.length) * Math.PI * 2 - Math.PI / 2;
      const groupNodes = groups[g];
      const baseR = 170;

      groupNodes.forEach((n, ni) => {
        const spread = groupNodes.length > 1 ? 0.4 : 0;
        const nodeAngle =
          angle + (ni - (groupNodes.length - 1) / 2) * spread * 0.3;
        const r = baseR + ni * 28;
        pos[n.id] = {
          x: cx + Math.cos(nodeAngle) * r,
          y: cy + Math.sin(nodeAngle) * r,
        };
      });
    });

    return { positions: pos, width: w, height: h };
  }, []);

  const nodes = graphData.nodes as Node[];
  const edges = graphData.edges as Edge[];

  const connectedEdges = hoveredNode
    ? edges.filter((e) => e.from === hoveredNode || e.to === hoveredNode)
    : [];
  const connectedNodes = new Set(
    connectedEdges.flatMap((e) => [e.from, e.to])
  );

  return (
    <section id="graph" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="System Topology"
          title="Skills · projects · concepts."
          sub="Hover any node to trace the dependency graph."
        />

        <div className="mt-10 panel relative overflow-hidden">
          <div className="window-chrome">
            <span className="dot" style={{ background: "#fb7185" }} />
            <span className="dot" style={{ background: "#f59e0b" }} />
            <span className="dot" style={{ background: "#4ade80" }} />
            <span className="ml-2 text-[#6c7585]">graph.svg</span>
            <span className="ml-auto text-[10px] text-[#4a5263]">
              {nodes.length} nodes · {edges.length} edges
            </span>
          </div>

          <div className="grid-bg">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto max-h-[520px]"
              role="img"
              aria-label="Knowledge graph showing relationships between skills, projects, and concepts"
            >
              {edges.map((edge, i) => {
                const from = positions[edge.from];
                const to = positions[edge.to];
                if (!from || !to) return null;

                const isHighlighted =
                  hoveredNode &&
                  (edge.from === hoveredNode || edge.to === hoveredNode);
                const isDimmed = hoveredNode && !isHighlighted;

                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isHighlighted ? "#4ade80" : "#1d2330"}
                    strokeWidth={isHighlighted ? 1.6 : 1}
                    opacity={isDimmed ? 0.15 : isHighlighted ? 0.9 : 0.6}
                    className="transition-all duration-200"
                  />
                );
              })}

              {nodes.map((node) => {
                const pos = positions[node.id];
                if (!pos) return null;

                const r = TYPE_RADIUS[node.type] || 20;
                const color = GROUP_COLORS[node.group || ""] || "#6c7585";
                const isHovered = hoveredNode === node.id;
                const isConnected = connectedNodes.has(node.id);
                const isDimmed = hoveredNode && !isHovered && !isConnected;

                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                    opacity={isDimmed ? 0.3 : 1}
                  >
                    {isHovered && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={r + 8}
                        fill="none"
                        stroke={color}
                        strokeWidth={1}
                        opacity={0.4}
                      />
                    )}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={r}
                      fill={isHovered ? color : `${color}1a`}
                      stroke={color}
                      strokeWidth={isHovered || isConnected ? 2 : 1.2}
                      className="transition-all duration-200"
                    />
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={node.type === "project" ? 10 : 9}
                      fontWeight={node.type === "project" ? 700 : 500}
                      fill={isHovered ? "#07090d" : "#e6ebf2"}
                      fontFamily="JetBrains Mono, monospace"
                      className="pointer-events-none select-none transition-all duration-200"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="p-4 border-t border-[#1d2330] flex flex-wrap gap-4 font-mono text-[11px] text-[#aeb6c2]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-[#4ade80] bg-[#4ade80]/15" />
              Skill
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-[#facc15] bg-[#facc15]/15" />
              Project
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-[#a78bfa] bg-[#a78bfa]/15" />
              Concept
            </span>
            <span className="ml-auto text-[#6c7585]">
              hint: hover to trace connections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
