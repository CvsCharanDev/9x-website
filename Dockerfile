# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Stage 1: Install dependencies using Bun
# -----------------------------------------------------------------------------
FROM oven/bun:1-alpine AS deps
WORKDIR /app

# Install build dependencies if needed
RUN apk add --no-cache libc6-compat

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# -----------------------------------------------------------------------------
# Stage 2: Build Next.js application
# -----------------------------------------------------------------------------
FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN bun run build

# -----------------------------------------------------------------------------
# Stage 3: Production Runner (Lean Node.js Alpine image)
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Non-root user for enterprise security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets & standalone production bundle
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
