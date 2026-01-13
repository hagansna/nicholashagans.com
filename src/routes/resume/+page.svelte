<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Download } from "lucide-svelte";
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
  title="Resume"
  description="Professional resume of Nicholas Hagans - software engineer with expertise in web development, front-end frameworks, and data visualization."
/>

<div class="container mx-auto max-w-4xl px-4 py-16">
  <div
    class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <h1 class="text-4xl font-bold tracking-tight">Resume</h1>
    <Button href="/resume.pdf" target="_blank">
      <Download class="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  </div>

  <div class="mt-12 space-y-12">
    <!-- Experience -->
    <section>
      <h2 class="text-2xl font-semibold">Experience</h2>
      <div class="mt-6 space-y-6">
        <div class="border-l-2 border-border pl-4">
          <h3 class="font-semibold">Technology Architect</h3>
          <p class="text-sm text-muted-foreground">
            riskCanvas @ Genpact | 2019 - Present
          </p>
          <ul class="mt-2 list-disc space-y-1 pl-4 text-muted-foreground">
            <li>
              Manage a team of developers to create a commercial product aimed
              at assisting financial institutions in the fight against money
              laundering.
            </li>
            <li>
              Lead Scrum ceremonies such as team retrospectives, sprint
              plannings, and sprint demos.
            </li>
            <li>
              Develop interactive and user-friendly applications using Angular,
              Java, ElasticSearch, HBase, and AWS tools like AWS Lambda (with
              Python), SQS, and DynamoDB.
            </li>
            <li>
              Create complex ElasticSearch queries to retrieve data based on
              “messy” data such as names and addresses.
            </li>
            <li>
              Plan agile sprints and determine tasking priorities through
              discussions with the product owner and client representatives.
            </li>
            <li>
              Collaborate with other members of riskCanvas leadership to
              determine project processes, goals, and maneuver around team wide
              blockers.
            </li>
          </ul>
        </div>

        <div class="border-l-2 border-border pl-4">
          <h3 class="font-semibold">Software Engineer</h3>
          <p class="text-sm text-muted-foreground">
            Booz Allen Hamilton | 2015 - 2019
          </p>
          <ul class="mt-2 list-disc space-y-1 pl-4 text-muted-foreground">
            <li>
              Developed interactive and user-friendly applications using Angular
              and AngularJS.
            </li>
            <li>Led a UI development team.</li>
            <li>
              Planned agile sprints and determined tasking priorities through
              discussions with business analysts and product owners.
            </li>
            <li>
              Worked with RESTful endpoints to provide data to widgets and
              dashboards.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h2 class="text-2xl font-semibold">Education</h2>
      <div class="mt-6 space-y-6">
        <div class="border-l-2 border-border pl-4">
          <h3 class="font-semibold">
            Master of Science in Applied Urban Science and Informatics
          </h3>
          <p class="text-sm text-muted-foreground">
            New York University | 2015
          </p>
        </div>

        <div class="border-l-2 border-border pl-4">
          <h3 class="font-semibold">
            Bachelor of Science in Physics with a minor in Mathematics
          </h3>
          <p class="text-sm text-muted-foreground">
            James Madison University | 2014
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="text-2xl font-semibold">Skills</h2>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          Typescript
        </span>
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          HTML/CSS
        </span>
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          Svelte
        </span>
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          Angular
        </span>
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          NodeJS
        </span>
        <span
          class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
        >
          AI Tools and Agents
        </span>
      </div>
    </section>
  </div>
</div>
