<details name="work-philosophy">
<summary>📜 Codebase is a Contract</summary>

A codebase is not just implementation.

It's a contract between developers, users, systems and its versions.<br>
Good code makes it visible, predictable and difficult to violate.

We should not rely on human discipline, it's too unreliable.<br>It's crucial to make codebase guard itself automatically.

<br>

</details>

<details name="work-philosophy">
<summary>🧠 Understand the Rule Before Following It</summary>

I don't like methodologies used as rituals.

SOLID, DDD, CQRS, Hexagon, patterns etc. are great.<br>But they are tools created to solve particular problems.

Understand the rules, understand the problem, verify the problem is real.<br>
Then make conscious decision. Nothing frees us from thinking, even AI.

<br>

</details>

<details name="work-philosophy">
<summary>⚖️ Puristic, but Pragmatic</summary>

I care a lot about clean architecture, readability and maintainability.<br>But software exists to deliver value, not to win architecture contests.

Breaking a rule consciously for a good reason is ok.<br>Always make an ADR or at least a comment when you do, though.

<br>

</details>

<details name="work-philosophy">
<summary>🧪 Prove Important Assumptions</summary>

Important behavior should not depend on memory or optimism.

Tests, ADRs, PoCs, diagrams and explicit constraints are not "nice to have".<br>Our memory is too unreliable and analysis too shallow to skip them.

The stronger the consequence of being wrong, the stronger the proof should be.

<br>

</details>

<details name="work-philosophy">
<summary>🧱 Make Invalid States Hard to Represent</summary>

Whenever possible, I create rules enforced by structure, not discipline.<br>Use static typing, make static tools part of deployment.<br>
Polish your tools for few hours, spare yourself months of accumulating debt.

Types, contracts, boundaries and validation are mandatory.<br>They should carry as much responsibility as they reasonably can.<br>Always fail fast and move errors from runtime to implementation/inspection.

Humans forget. Code can refuse.

<br>

</details>

<details name="work-philosophy">
<summary>🔄 Design for Change, Not Every Possible Future</summary>

Software changes constantly.<br>But that doesn't mean predicting every future requirement.

Make binding decisions at the last possible moment. Keep them reversible.<br>For example - stay in modularized monolith as long as possible.<br>
Delay commitments and evolve the design when real constraints appear.

<br>

</details>

<details name="work-philosophy">
<summary>🗂️ Predictability is a Feature</summary>

A codebase becomes easier to work with when standardized.

Naming, categorisation, conventions and ubiquitous language reduce complexity.<br>And since cognitive capacity is real, prioritize simplicity and readability.

Make every part of the code as simple obvious in its context as possible.<br>Balance quantity with complexity of elements to optimize total simplicity.

<br>

</details>

<details name="work-philosophy">
<summary>🚚 Delivering Matters</summary>

Performance and architecture are optimization problems.

But at the end delivery and UX makes the money.<br>Identify bottlenecks there, prioritize actual constraints and actual business priorities.

Optimizing something that does not matter is just another form of waste.

<br>

</details>

<details name="work-philosophy">
<summary>📖 Code Should Explain Itself</summary>

Complexity is sometimes unavoidable.
Obscurity usually isn't.

Good naming, small concepts, clear boundaries and useful documentation<br>should make the system progressively easier to understand.

If understanding the code requires archaeology, something went wrong.

And really lean into naming and structure<br>best code doesn't require documentation or comments.<br>

Always show business intents in names of<br>variables, functions, classes and namespaces.

<br>

</details>

<details name="work-philosophy">
<summary>🔍 Make Problems Diagnosable</summary>

Failures will happen.

For users, systems should fail early, safely and gracefully.
For developers, they should fail loudly enough to explain what happened.

Logs, tooling, observability and useful errors are part of the product, not cleanup work.

</details>
