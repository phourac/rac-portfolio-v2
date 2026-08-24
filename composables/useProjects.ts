import { personal_project, company_project } from '~/utils/data-utils'

export interface ApiProject {
  _id?: string
  id?: string
  name: string
  category: 'COMPANY' | 'FREELANCE' | 'PERSONAL' | string
  technologies: string[] | string
  images?: string[] | string
  demoUrl?: string
  repositoryUrl?: string
  description?: string | string[]
  responsibilities?: string[] | string
  achievements?: string[] | string
  createdAt?: string
  updatedAt?: string
  // Compatibility fields
  slug?: string
  title?: string
  img?: string
  demo?: string
  github?: string
  desc?: string | string[]
}

const CATEGORY_ORDER: Record<string, number> = {
  COMPANY: 1,
  FREELANCE: 2,
  PERSONAL: 3
}

export function normalizeCategory(category?: string): string {
  if (!category) return 'PERSONAL'
  const upper = category.trim().toUpperCase()
  if (upper.includes('COMPANY')) return 'COMPANY'
  if (upper.includes('FREELANCE') || upper.includes('FREELANCER')) return 'FREELANCE'
  if (upper.includes('PERSONAL')) return 'PERSONAL'
  return upper
}

export function ensureArray(val: unknown): string[] {
  if (!val) return []
  if (Array.isArray(val)) return val.map((item) => String(item).trim()).filter(Boolean)
  if (typeof val === 'string') {
    const trimmed = val.trim()
    if (!trimmed) return []
    if (trimmed.startsWith('[')) {
      try {
        const parsed = JSON.parse(trimmed)
        if (Array.isArray(parsed)) return parsed.map((item) => String(item).trim()).filter(Boolean)
      } catch (e) {
        // Fallback to single string item
      }
    }
    return [trimmed]
  }
  return []
}

export function slugify(text: string): string {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

export function formatProjectDescription(desc?: string | string[]): string {
  if (!desc) return ''
  if (Array.isArray(desc)) return desc.join(' ')
  return desc
}

export function normalizeProject(project: ApiProject): ApiProject {
  const generatedSlug = project.slug || slugify(project.name || project.title || '') || project._id || ''
  
  let imagesArray = ensureArray(project.images)
  if (imagesArray.length === 0 && project.img) {
    imagesArray = ensureArray(project.img)
  }

  const primaryImg = imagesArray.length > 0 ? imagesArray[0] : '/images/default-image.jpg'
  const normCategory = normalizeCategory(project.category)

  return {
    ...project,
    title: project.name || project.title || '',
    category: normCategory,
    slug: generatedSlug,
    img: primaryImg,
    images: imagesArray.length > 0 ? imagesArray : [primaryImg],
    technologies: ensureArray(project.technologies),
    demo: project.demoUrl || project.demo || '',
    github: project.repositoryUrl || project.github || '',
    desc: project.description || project.desc || '',
    responsibilities: ensureArray(project.responsibilities),
    achievements: ensureArray(project.achievements)
  }
}

export function sortProjectsByCategory(list: ApiProject[]): ApiProject[] {
  return [...list].sort((a, b) => {
    const orderA = CATEGORY_ORDER[a.category] || 99
    const orderB = CATEGORY_ORDER[b.category] || 99
    return orderA - orderB
  })
}

export function useProjects() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase || 'https://rac-portfolio-api.onrender.com/api'

  const { data: rawProjectsResponse, pending, error, refresh } = useAsyncData('projects-data', async () => {
    try {
      const res = await $fetch<{ success: boolean; data: ApiProject[] }>(`${apiBase}/projects`)
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        return res.data
      }
      return null
    } catch (e) {
      console.warn('[useProjects] Failed to fetch projects from API, falling back to local data.', e)
      return null
    }
  }, {
    server: false,
    lazy: false
  })

  // Normalize project list ordered by category priority: COMPANY -> FREELANCE -> PERSONAL
  const projects = computed<ApiProject[]>(() => {
    if (rawProjectsResponse.value && rawProjectsResponse.value.length > 0) {
      const normalized = rawProjectsResponse.value.map(normalizeProject)
      return sortProjectsByCategory(normalized)
    }

    // Static fallback
    const fallbackPersonal = personal_project.map(p => normalizeProject({
      ...p,
      name: p.title,
      category: 'PERSONAL',
      images: [p.img],
      demoUrl: p.demo,
      repositoryUrl: p.github,
      description: p.desc
    }))

    const fallbackCompany = company_project.map(p => normalizeProject({
      ...p,
      name: p.title,
      category: 'COMPANY',
      images: [p.img],
      demoUrl: p.demo,
      repositoryUrl: p.github,
      description: p.desc
    }))

    return sortProjectsByCategory([...fallbackCompany, ...fallbackPersonal])
  })

  const companyProjects = computed(() => {
    return projects.value.filter(p => p.category === 'COMPANY')
  })

  const freelanceProjects = computed(() => {
    return projects.value.filter(p => p.category === 'FREELANCE')
  })

  const personalProjects = computed(() => {
    return projects.value.filter(p => p.category === 'PERSONAL')
  })

  const getProjectBySlug = (slug: string): ApiProject | undefined => {
    if (!slug) return undefined
    const cleanSlug = slug.trim().toLowerCase()
    return projects.value.find(p => {
      const matchSlug = p.slug?.toLowerCase() === cleanSlug
      const matchId = p._id?.toLowerCase() === cleanSlug || p.id?.toLowerCase() === cleanSlug
      const matchName = slugify(p.name || p.title || '').toLowerCase() === cleanSlug
      return matchSlug || matchId || matchName
    })
  }

  return {
    projects,
    companyProjects,
    freelanceProjects,
    personalProjects,
    pending,
    error,
    refresh,
    getProjectBySlug
  }
}
