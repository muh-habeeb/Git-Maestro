import ContentSection from '@/components/ui/content-section';
import {CodeBlock} from '@/components/ui/code-block';
import {Button} from '@/components/ui/button';
import {GitBranch, ArrowRight, ArrowLeft} from 'lucide-react';
import Image from 'next/image';
import {GithubLogo} from '@/components/icons/github-logo';
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
          ground up with this interactive guide.
        </p>
        <div className="flex justify-center items-center gap-8 mt-12">
          <GitBranch className="w-16 h-16 text-primary" />
          <GithubLogo className="w-16 h-16 text-primary" />
        </div>
        <p className="mt-12 text-lg text-muted-foreground">
          Mastering these tools enables safe development, seamless
          collaboration, and a professional portfolio. These are essential
          skills for any developer looking to work on real-world projects.
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
          and every part of your project's history. It's the brain of your version control system.
        </p>
        <CodeBlock code={`# Navigate to your project folder\ncd my-project\n\n# Initialize a new Git repository\ngit init`} />
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
          Think of commits as intentional snapshots of your code at a specific moment in time. You have precise control over what goes
          into each snapshot. First, you 'stage' your changes with{' '}
          <code className="font-code text-accent">git add</code>. This is like preparing a box of items before taking a photo. It tells Git which modifications you want to save. Once you're ready, you
          'commit' the staged changes with a descriptive message. This creates a
          permanent, historical record of your work. The special pointer <code className="font-code text-accent">HEAD</code> always points to your most recent commit, representing your current working version.
        </p>
        <Image
          src="https://picsum.photos/seed/version-control/800/400"
          width={800}
          height={400}
          alt="Diagram showing git add and git commit workflow"
          className="rounded-lg glow-border"
          data-ai-hint="version control diagram"
        />
        <CodeBlock
          code={`# Stage a specific file for the next commit\ngit add index.html\n\n# Stage all modified and new files in the current directory\ngit add .\n\n# Commit the staged changes with a descriptive message\ngit commit -m "feat: Add initial homepage structure and styles"`}
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
          How do you know what you've changed or where you are in your project's history?{' '}
          <code className="font-code text-accent">git status</code> is your most trusted command. It provides a summary of your repository, showing which files are staged, which are modified but
          not yet staged, and which files are completely untracked by Git. To look back at your project's
          timeline, use <code className="font-code text-accent">git log</code>.
          It presents a detailed history of all your commits, showing who made changes,
          when they were made, and the message associated with each commit.
        </p>
        <CodeBlock
          code={`# See the status of your working directory and staging area\ngit status\n\n# Review the commit history of the current branch\ngit log\n\n# For a more condensed view of the log\ngit log --oneline --graph`}
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
          crucial for collaboration, as it attributes work to the correct person. You should set your identity globally on your machine for all your
          projects. You can also override it on a project-by-project basis if needed. This ensures
          everyone on your team knows who authored which changes.
        </p>
        <CodeBlock
          code={`# Set your name and email for all repositories on your machine\ngit config --global user.name "Your Name"\ngit config --global user.email "you@email.com"\n\n# You can also set it for the current project only (by removing --global)\ngit config user.name "Your Name"`}
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
          Your local repository is great, but what if your computer crashes? A 'remote' repository, hosted on a service like
          GitHub, is your secure cloud backup and collaboration hub. After
          creating a new repository on GitHub.com, you link your local repo to
          it using{' '}
          <code className="font-code text-accent">
            git remote add origin &lt;url&gt;
          </code>
          . Then you can 'push' your commits to GitHub. The{' '}
          <code className="font-code text-accent">-u</code> flag sets up an
          'upstream' tracking relationship, which simplifies future pushes and pulls. After the initial push, you can just run{' '}
          <code className="font-code text-accent">git push</code> and <code className="font-code text-accent">git pull</code>.
        </p>
        <Image
          src="https://picsum.photos/seed/cloud-collaboration/800/400"
          width={800}
          height={400}
          alt="Diagram of local and remote repositories"
          className="rounded-lg glow-border"
          data-ai-hint="cloud collaboration diagram"
        />
        <CodeBlock
          code={`# Link local repo to a remote on GitHub (use the URL from GitHub)\ngit remote add origin https://github.com/user/repo.git\n\n# Push your 'main' branch to the 'origin' remote and set up tracking\ngit push -u origin main\n\n# In the future, pull updates from the remote repo\ngit pull\n\n# And push your local updates\ngit push`}
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
          Branches are the core of safe and effective development. Think of them as alternate universes for your code. Want to add a new
          feature or fix a bug without breaking the main project? Create a branch! You can work on
          your feature there, making commits as you go. When it's polished and working correctly, you 'merge' it back into the
          main branch. On GitHub, you can create a 'Pull Request' (PR) to
          propose your changes. This is a formal way to ask for your branch to be merged, allowing teammates to review your code,
          suggest improvements, run automated checks, and finally approve the merge. This is the heart of
          professional, collaborative software development.
        </p>
        <CodeBlock
          code={`# Create a new branch named 'new-feature' and switch to it\ngit checkout -b new-feature\n\n# ... work on your feature and make commits ...\n\n# When ready, switch back to the main branch\ngit checkout main\n\n# Pull the latest changes from remote to avoid conflicts\ngit pull origin main\n\n# Merge your new-feature branch into main\ngit merge new-feature\n\n# On GitHub, create a Pull Request for peer review before merging.`}
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
          You've learned the essentials! Together, Git and GitHub provide a powerful system for safe,
          recoverable, and professional code management. You now have a complete
          history of your project, a secure backup in the cloud, a visible
          portfolio to showcase your skills, and the ability to collaborate with
          developers worldwide on any project, big or small. This foundation is key to a successful career in software development.
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
          Reading is one thing, doing is another. Time to practice! Follow these steps to solidify your new knowledge:
        </p>
        <ol className="list-decimal list-inside text-lg text-muted-foreground space-y-2 text-left w-full max-w-2xl">
          <li>
            Create a new folder for a test project and run{' '}
            <code className="font-code text-accent">git init</code> inside it.
          </li>
          <li>
            Create a file (e.g., `README.md`), add some text, and then use{' '}
            <code className="font-code text-accent">git add</code> and{' '}
            <code className="font-code text-accent">git commit</code> to save your first snapshot.
          </li>
          <li>
            Create a new, empty repository on GitHub.com and push your local repo to it.
          </li>
          <li>
            Create a new branch for a feature, e.g.,{' '}
            <code className="font-code text-accent">
              git checkout -b my-awesome-feature
            </code>
            .
          </li>
          <li>
            Make some changes on the new branch, commit them, and then push the branch to
            GitHub using <code className="font-code text-accent">git push origin my-awesome-feature</code>.
          </li>
          <li>
            Go to your repository on GitHub.com. You should see a prompt to open a Pull Request. Do it!
          </li>
        </ol>
        <p className="mt-8 text-xl italic text-center text-primary text-glow">
          "Once you learn Git, you’ll never start a project without it."
        </p>
        <div className="flex justify-start w-full mt-4">
          <Button variant="outline" asChild>
            <a href="#summary">
              <ArrowLeft /> Previous
            </a>
          </Button>
        </div>
      </ContentSection>
    </div>
  );
}
