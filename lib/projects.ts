export type ProjectDetail = {
  slug: string;
  index: string;
  id: string;
  title: string;
  summary: string;
  description: string;
  status: string;
  image: string;
  tags: string[];
  version?: string;
  assignment: {
    owner: string;
    objective: string;
  };
  techMetrics: {
    throughput: string;
    uptime: string;
    custom: string;
  };
  logs: Array<{
    level: "error" | "warning" | "info";
    code: string;
    message: string;
  }>;
  overview: string[];
  implementation: {
    code: string;
    description: string;
  };
  architecture: string[];
};

const projects: ProjectDetail[] = [
  {
    slug: "quantum-telemetry-node",
    index: "01",
    id: "X-AE-92",
    title: "量子遥测节点",
    summary: "为分布式传感器网络中的异常事件检测设计的高吞吐量数据摄取流水线与实时可视化层。",
    description:
      "A hyper-minimalist operating system dashboard designed for real-time monitoring of distributed cloud architecture. Features zero-latency telemetry visualizations.",
    status: "DEPLOYED",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["Rust", "gRPC", "Kafka", "WebGL", "ClickHouse", "自定义着色器 API"],
    version: "v1.0.4",
    assignment: {
      owner: "AEROSPACE_DIV_04",
      objective: "开发一个具备每秒 1M+ 请求处理能力且延迟低于 10ms 的高可用入口流水线。",
    },
    techMetrics: {
      throughput: "1.2M 请求/秒",
      uptime: "99.999%",
      custom: "零分配热路径",
    },
    logs: [
      {
        level: "error",
        code: "错误_0x9A",
        message: "遥测同步丢失。正在尝试重新连接。",
      },
      {
        level: "warning",
        code: "警告_0x2B",
        message: "缓冲区容量已达 85%。",
      },
      {
        level: "info",
        code: "信息_0x01",
        message: "系统启动序列已完成。",
      },
    ],
    overview: [
      "首要指令是构建一个能够摄取来自轨道平台的高频异常数据，并进行本地可视化处理而不影响渲染线程的系统。之前的迭代版本在太阳耀斑事件期间曾遭受过灾难性的连锁故障。",
      "通过重构入口层以利用基于 Rust 的 gRPC 多路复用器，我们在客户提供的硬件限制内实现了此前被认为不可能达到的结构完整性。",
    ],
    implementation: {
      code: `fn process_telemetry_stream(
    mut stream: impl Stream<Item = TelemetryPacket> + Unpin,
    buffer: Arc<Mutex<RingBuffer>>
) -> Result<(), SystemError> {
    // 关键部分：高优先级解析
    while let Some(packet) = stream.next().await {
        let normalized = DataNormalizer::execute(&packet)?;

        let mut buf_lock = buffer.lock().unwrap();
        buf_lock.push_and_notify(normalized);
    }
    Ok(())
}`,
      description:
        "执行阶段要求在关键路径上严格遵守零分配原则。可视化组件利用自定义 WebGL 着色器流水线，将矩阵计算直接卸载到 GPU 运行，从而释放主线程以保证 UI 响应能力。",
    },
    architecture: ["轨道节点 [N]", "gRPC 多路复用器", "环形缓冲区缓存", "WebGL 渲染流水线"],
  },
  {
    slug: "aether-core-os",
    index: "02",
    id: "A-CORE-01",
    title: "AETHER_CORE OS",
    summary: "面向分布式云架构实时监测的高密度控制台系统。",
    description:
      "A hyper-minimalist operating system dashboard designed for real-time monitoring of distributed cloud architecture. Features zero-latency telemetry visualizations.",
    status: "DEPLOYED",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWBdiAexkf-c8GMwIOgf26dBpJcelQMxEa4CpYydm65jOPsAqeFY_xCgE8gqJXR3agqjvTwCIifKyCwMgCNSjMRjfP07Dc0T0dikdfkJ-anzSYNLmF5Ym4i1IxmDK0FoR22sqLATC9fBSc801MpMiv8f5kU-QNgA7wgVIQN6CPWl6QT9phj5UYg8T2w1QNNToaYdffumcfi7UfsyWJZg03ve5O2UZJyqUDSPsNpbUPWw73bLZeJUUc9p8GPoNNfKNmv9olbofbi_s",
    tags: ["Full-Stack", "Next.js", "Rust"],
    assignment: {
      owner: "SYSTEMS_LAB",
      objective: "建立一个低延迟的遥测监测与控制中控台。",
    },
    techMetrics: {
      throughput: "420k 请求/秒",
      uptime: "99.98%",
      custom: "实时可观测面板",
    },
    logs: [],
    overview: ["项目详情待补充。"],
    implementation: {
      code: "// implementation details pending",
      description: "项目详情待补充。",
    },
    architecture: ["Ingress", "Telemetry Bus", "Dashboard UI"],
  },
  {
    slug: "quantum-ui-lib",
    index: "03",
    id: "QUI-240",
    title: "QUANTUM_UI LIB",
    summary: "遵循科学极简主义与数学网格刚性的组件库。",
    description:
      "An open-source library of 150+ React components following the principles of scientific minimalism and mathematical grid-rigidity.",
    status: "V2.4.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-QTFVJ2M4N9cib8uksDn0jMG838fVr4YzQH5MyITHdKdYuHugz5AIm4yCFWBIKP6McreaYDpbOzsrOUdYQEjwj3uBgOEQ_QeNE-GjDWdfn25-Cu_C3Ro0PIkpCiiI6Pq2GXglrBm2a5c4LM6DjPGsfRixDtOi7eIrOqgfR5SI1OLtItEfTiURMejzNGAAm1wWpYtBCTWj39ms8ujj-0mn0SjesEIUnUb74zF-XI1quyqsGlLUmbFn2FD5RHzSFuy4LfPOusCHxY",
    tags: ["Design System", "Figma", "Tailwind"],
    assignment: {
      owner: "DESIGN_SYSTEMS",
      objective: "统一多项目的结构、令牌和视觉约束。",
    },
    techMetrics: {
      throughput: "150+ 组件",
      uptime: "持续维护",
      custom: "Token-based",
    },
    logs: [],
    overview: ["项目详情待补充。"],
    implementation: {
      code: "// implementation details pending",
      description: "项目详情待补充。",
    },
    architecture: ["Tokens", "Components", "Documentation"],
  },
  {
    slug: "nebulae-engine",
    index: "04",
    id: "NEB-GL3",
    title: "NEBULAE ENGINE",
    summary: "为天体物理数据可视化设计的实时粒子模拟引擎。",
    description:
      "Real-time particle simulation engine using custom GLSL shaders for astrophysical data visualization. Capable of rendering 1M+ active points.",
    status: "BETA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQNdXIX5p727iJ9hAKx15iG2SRsq2XN9radtoSFoO9j0fiVcAje6gfpp_xmwDJYYQP5PF5HB42ddIZxWlz2m7mt60aFpK_G01KLBsgBfBNdPj4_L3JcbqIvMoL0JF_PNPQjGOyibPAcjjxof_vylAaju0fbIH8xENr0qtQEqPEDsUcrQ57TtvBSEa2IOe-OBjbuU9rulIVAz3zHdEjBdkHCrUrAO_PmhMh9N_V4Gsp9gZXXTk_8qocVQAzq4g5gp89jynTFjOedk",
    tags: ["Three.js", "WebGL", "GLSL"],
    assignment: {
      owner: "VIS_LAB",
      objective: "构建高密度实时粒子渲染核心。",
    },
    techMetrics: {
      throughput: "1M+ active points",
      uptime: "实验阶段",
      custom: "Custom shaders",
    },
    logs: [],
    overview: ["项目详情待补充。"],
    implementation: {
      code: "// implementation details pending",
      description: "项目详情待补充。",
    },
    architecture: ["Data Source", "Shader Core", "Render Loop"],
  },
  {
    slug: "synapse-grid",
    index: "05",
    id: "SYN-EDGE",
    title: "SYNAPSE_GRID",
    summary: "面向边缘计算设备的去中心化机器学习网络。",
    description:
      "A decentralized machine learning network optimized for edge computing devices. Features a custom protocol for model sharding.",
    status: "ARCHIVED",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSztbznju0u92MQuWdfzcAasPBsxAwCwiTpuneNg8QJa-73Mx0sNiqwRdxRkLDI-hATyy734QPUay5TqIZVAZBBy27YXX_s_hrowz0DVxAdz-V0IiKmmhVHNyMZSNaKoH_uaeXffzzJ8Zen4Fcf--gR9h-GJwkS0xEuGwWdHTktd3l1pqZMSXVurSBGpZfXEbSnvT-fZrdzR20LdcCrYpcRHAsOUZCrX7M1Zrp7K5F99wxugDAOmzOfTNbrg2ieLituXHjqeVNQVw",
    tags: ["AI / ML", "Python", "PyTorch"],
    assignment: {
      owner: "EDGE_COMPUTE",
      objective: "在边缘设备上进行模型分片与协同推理。",
    },
    techMetrics: {
      throughput: "Edge distributed",
      uptime: "Archived",
      custom: "Model sharding",
    },
    logs: [],
    overview: ["项目详情待补充。"],
    implementation: {
      code: "// implementation details pending",
      description: "项目详情待补充。",
    },
    architecture: ["Nodes", "Shard Manager", "Inference Mesh"],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
