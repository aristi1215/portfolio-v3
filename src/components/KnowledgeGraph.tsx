import { useState, useMemo } from "react";
import graphData from "../content/knowledge-graph.json";

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
  frontend: "#5a7a8a",
  backend: "#6a8a5a",
  data: "#8a6a5a",
  cloud: "#5a6a8a",
  security: "#8a5a6a",
  practices: "#7a7a5a",
  projects: "#8a7a5a",
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
    const h = 600;
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
      const baseR = 180;

      groupNodes.forEach((n, ni) => {
        const spread = groupNodes.length > 1 ? 0.4 : 0;
        const nodeAngle =
          angle + (ni - (groupNodes.length - 1) / 2) * spread * 0.3;
        const r = baseR + ni * 30;
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
    <section id="graph" className="py-24 px-6 bg-charcoal/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Knowledge Graph
        </h2>
        <p className="text-muted text-sm mb-8">
          Skills, projects, and concepts — hover to explore connections.
        </p>

        <div className="border border-border rounded-xl overflow-hidden bg-paper">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto max-h-[500px]"
            role="img"
            aria-label="Knowledge graph showing relationships between skills, projects, and concepts"
          >
            {/* Edges */}
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
                  stroke={isHighlighted ? "#5a7a8a" : "#d4d0cc"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  opacity={isDimmed ? 0.15 : isHighlighted ? 1 : 0.5}
                  className="transition-all duration-200"
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const pos = positions[node.id];
              if (!pos) return null;

              const r = TYPE_RADIUS[node.type] || 20;
              const color = GROUP_COLORS[node.group || ""] || "#888";
              const isHovered = hoveredNode === node.id;
              const isConnected = connectedNodes.has(node.id);
              const isDimmed = hoveredNode && !isHovered && !isConnected;

              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                  opacity={isDimmed ? 0.25 : 1}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r}
                    fill={isHovered ? color : `${color}15`}
                    stroke={color}
                    strokeWidth={isHovered || isConnected ? 2.5 : 1.5}
                    className="transition-all duration-200"
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={node.type === "project" ? 10 : 9}
                    fontWeight={node.type === "project" ? 600 : 400}
                    fill={isHovered ? "white" : color}
                    className="pointer-events-none select-none transition-all duration-200"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-accent bg-accent/10" />
            Skill
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-gold bg-gold/10" />
            Project
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-stone bg-stone/10" />
            Concept
          </span>
        </div>
      </div>
    </section>
  );
}
