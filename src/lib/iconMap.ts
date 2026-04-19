import {
  Rocket, Package, Calculator, Type, GitBranch, RotateCw, BarChart3,
  FileText, MousePointer2, Building2, Link2, Settings, Repeat,
  FolderInput, GraduationCap, BookOpen, Code2, Cpu, Database, Layers,
  Lightbulb, Target, Wrench, Zap, FileCode, Binary, Hash, Variable,
  Braces, Boxes, Workflow, ListTree, Sigma, FunctionSquare, Component,
  type LucideIcon,
} from "lucide-react";

export const chapterIconMap: Record<string, LucideIcon> = {
  Rocket, Package, Calculator, Type, GitBranch, RotateCw, BarChart3,
  FileText, MousePointer2, Building2, Link2, Settings, Repeat,
  FolderInput, GraduationCap, Workflow,
};

// Pool of icons used for individual slides within a chapter (cycled by index)
const slideIconPool: LucideIcon[] = [
  Lightbulb, BookOpen, Code2, Cpu, Database, Layers, Target, Wrench,
  Zap, FileCode, Binary, Hash, Variable, Braces, Boxes, Workflow,
  ListTree, Sigma, FunctionSquare, Component,
];

export const getSlideIcon = (index: number): LucideIcon =>
  slideIconPool[index % slideIconPool.length];

export const getChapterIcon = (name: string): LucideIcon =>
  chapterIconMap[name] ?? BookOpen;
