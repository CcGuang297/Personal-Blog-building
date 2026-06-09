import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我",
  description: "About the blog author.",
};

export default function AboutPage() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-stone-200 bg-white px-6 py-8 shadow-sm shadow-stone-200/40 sm:px-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          关于我
        </h1>
      </div>

      <div className="space-y-4 text-stone-600">
        <p>
          这里先放一个简单的个人介绍页。后面你可以把它改成你的真实经历、技能栈、联系方式，或者放一张头像。
        </p>
        <p>
          这个博客目前刻意保持简单，只保留最基础的页面结构和内容系统，方便你后续逐步增加功能，而不是一开始就面对一大堆复杂配置。
        </p>
        <p>
          如果你愿意，下一阶段我们可以继续加上文章封面、标签分类、分页、RSS 或自动部署工作流。
        </p>
      </div>
    </section>
  );
}
