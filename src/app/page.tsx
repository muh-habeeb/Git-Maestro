import ContentSection from '@/components/ui/content-section';
import {CodeBlock} from '@/components/ui/code-block';
import {Button} from '@/components/ui/button';
import {GitBranch, ArrowRight, ArrowLeft} from 'lucide-react';
import Image from 'next/image';
import {GithubLogo} from '@/components/icons/github-logo';
import {PortfolioBuilder} from '@/components/sections/portfolio-builder';
import JumpToMenu from '@/components/ui/jump-to-menu';

const sections = [
  {id: 'intro', title: 'Introduction'},
  {id: 'init', title: 'git init'},
  {id: 'stage-commit', title: 'Stage & Commit'},
  {id: 'status-log', title: 'Check Status'},
  {id: 'config', title: 'Configure Identity'},
  {id: 'remotes', title: 'Remotes & Backups'},
  {id: 'collab', title: 'Collaboration'},
  {id: 'summary', title: 'Summary'},
  {id: 'exercise', title: 'Hands-on Exercise'},
  {id: 'portfolio', title: 'Portfolio Builder'},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <JumpToMenu sections={sections} />

      <ContentSection id="intro" className="min-h-screen text-center">
        <h1 className="text-6xl md:text-8xl font-headline font-bold text-glow bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
          Git Maestro
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Unlock professional coding workflows. Master Git and GitHub from the
          ground up.
        </p>
        <div className="flex justify-center items-center gap-8 mt-12">
          <GitBranch className="w-16 h-16 text-primary" />
          <GithubLogo className="w-16 h-16 text-primary" />
        </div>
        <p className="mt-12 text-lg text-muted-foreground">
          Mastering these tools enables safe development, seamless
          collaboration, and a professional portfolio. These are essential
          skills for any developer.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <a href="#init">
            Start Learning <ArrowRight />
          </a>
        </Button>
      </ContentSection>

      <ContentSection id="init">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          1. Initialize a Repository
        </h2>
        <p className="text-lg text-muted-foreground">
          Every great project starts somewhere. For a Git project, it starts
          with <code className="font-code text-accent">git init</code>. This
          single command transforms a regular folder into a Git repository,
          creating a hidden{' '}
          <code className="font-code text-accent">.git</code> directory where all
          the magic happens. This directory tracks every change, every snapshot,
          every part of your project's history.
        </p>
        <CodeBlock code={`cd my-project\ngit init`} />
        <div className="flex justify-end mt-4">
          <Button variant="outline" asChild>
            <a href="#stage-commit">
              Next: Staging <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="stage-commit">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          2. Stage & Commit Changes
        </h2>
        <p className="text-lg text-muted-foreground">
          Think of commits as snapshots in time. You decide exactly what goes
          into each snapshot. First, you 'stage' your changes with{' '}
          <code className="font-code text-accent">git add</code>. This is like
          putting items in a box before taking a photo. Once you're ready, you
          'commit' the staged changes with a descriptive message. This creates a
          permanent record.{' '}
          <code className="font-code text-accent">HEAD</code> is a special
          pointer that always points to your latest commit.
        </p>
        <Image
          src="https://picsum.photos/seed/gitmaestro1/800/400"
          width={800}
          height={400}
          alt="Developer at a laptop"
          className="rounded-lg glow-border"
          data-ai-hint="developer laptop"
        />
        <CodeBlock
          code={`# Stage a specific file\ngit add index.html\n\n# Stage all changes\ngit add .\n\n# Commit the staged changes\ngit commit -m "feat: Add initial homepage"`}
        />
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#init">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#status-log">
              Next: Checking History <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="status-log">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          3. Check Repository State & History
        </h2>
        <p className="text-lg text-muted-foreground">
          How do you know what you've changed?{' '}
          <code className="font-code text-accent">git status</code> is your best
          friend. It shows you which files are staged, which are modified but
          not staged, and which are untracked. To look back at your project's
          timeline, use <code className="font-code text-accent">git log</code>.
          It presents a history of all your commits, showing who made changes,
          when, and why.
        </p>
        <CodeBlock
          code={`# See the status of your working directory\ngit status\n\n# Review the commit history\ngit log`}
        />
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#stage-commit">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#config">
              Next: Your Identity <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="config">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          4. Configure Your Git Identity
        </h2>
        <p className="text-lg text-muted-foreground">
          Every commit you make is stamped with your name and email. This is
          crucial for collaboration. Set your identity globally for all your
          projects, or specify it locally for a single project. This ensures
          everyone on your team knows who authored which changes.
        </p>
        <CodeBlock
          code={`# Set your name and email globally\ngit config --global user.name "Your Name"\ngit config --global user.email "you@email.com"\n\n# Set it for the current project only (remove --global)\ngit config user.name "Your Name"`}
        />
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#status-log">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#remotes">
              Next: Going Remote <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="remotes">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          5. Connect to a Remote & Backup
        </h2>
        <p className="text-lg text-muted-foreground">
          Your local repository is great, but what if your computer crashes?
          GitHub is your secure cloud backup and collaboration hub. After
          creating a new repository on GitHub.com, you link your local repo to
          it using{' '}
          <code className="font-code text-accent">
            git remote add origin &lt;url&gt;
          </code>
          . Then you can 'push' your commits to GitHub. The{' '}
          <code className="font-code text-accent">-u</code> flag sets up an
          'upstream' tracking relationship, so in the future, you can simply run{' '}
          <code className="font-code text-accent">git push</code>.
        </p>
        <Image
          src="https://picsum.photos/seed/gitmaestro2/800/400"
          width={800}
          height={400}
          alt="Team collaboration"
          className="rounded-lg glow-border"
          data-ai-hint="team collaboration"
        />
        <CodeBlock
          code={`# Link local repo to a remote on GitHub\ngit remote add origin https://github.com/user/repo.git\n\n# Push your 'main' branch to the 'origin' remote\ngit push -u origin main\n\n# Pull updates from the remote repo\ngit pull`}
        />
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#config">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#collab">
              Next: Collaboration <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="collab">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          6. A Practical Collaboration Workflow
        </h2>
        <p className="text-lg text-muted-foreground">
          Branches are like alternate universes for your code. Want to add a new
          feature without breaking the main project? Create a branch! Work on
          your feature there, and when it's perfect, 'merge' it back into the
          main branch. On GitHub, you can create a 'Pull Request' (PR) to
          propose your changes. This allows teammates to review your code,
          suggest improvements, and approve the merge. This is the heart of
          professional, collaborative software development.
        </p>
        <CodeBlock
          code={`# Create a new branch and switch to it\ngit checkout -b new-feature\n\n# After committing your changes, switch back to main\ngit checkout main\n\n# Merge the new feature into main\ngit merge new-feature\n\n# On GitHub, create a Pull Request to merge your branch.`}
        />
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#remotes">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#summary">
              Next: Summary <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="summary">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          7. The Power of Git + GitHub
        </h2>
        <p className="text-lg text-muted-foreground">
          Together, Git and GitHub provide a powerful system for safe,
          recoverable, and professional code management. You have a complete
          history of your project, a secure backup in the cloud, a visible

          portfolio to showcase your skills, and the ability to collaborate with
          developers worldwide on open-source projects.
        </p>
        <div className="flex justify-between mt-4 w-full">
           <Button variant="outline" asChild>
            <a href="#collab">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#exercise">
              Next: Your Turn <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="exercise">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow">
          8. Hands-On Exercise
        </h2>
        <p className="text-lg text-muted-foreground">
          Time to practice! Follow these steps to solidify your knowledge:
        </p>
        <ol className="list-decimal list-inside text-lg text-muted-foreground space-y-2 text-left w-full max-w-2xl">
          <li>
            Create a new folder and run{' '}
            <code className="font-code text-accent">git init</code>.
          </li>
          <li>
            Create a file, add some text, and use{' '}
            <code className="font-code text-accent">git add</code> and{' '}
            <code className="font-code text-accent">git commit</code>.
          </li>
          <li>
            Create a new repository on GitHub and push your local repo to it.
          </li>
          <li>
            Create a new branch with{' '}
            <code className="font-code text-accent">
              git checkout -b my-feature
            </code>
            .
          </li>
          <li>
            Make changes on the new branch, commit them, and push the branch to
            GitHub.
          </li>
          <li>
            Go to GitHub and open a Pull Request to merge your new branch into
            `main`.
          </li>
        </ol>
        <p className="mt-8 text-xl italic text-center text-primary text-glow">
          "Once you learn Git, you’ll never start a project without it."
        </p>
        <div className="flex justify-between mt-4 w-full">
          <Button variant="outline" asChild>
            <a href="#summary">
              <ArrowLeft /> Previous
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#portfolio">
              Next: Build Your Portfolio <ArrowRight />
            </a>
          </Button>
        </div>
      </ContentSection>

      <ContentSection id="portfolio">
        <PortfolioBuilder />
      </ContentSection>
    </div>
  );
}
