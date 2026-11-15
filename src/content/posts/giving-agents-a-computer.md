---
title: "Giving agents a computer"
date: 2026-05-27
kind: "talk"
event: "Dust × Google Cloud"
location: "London"
description: "How I ended up in London giving a talk at a Dust × Google Cloud evening, about the computer we built for Dust agents."
draft: false
---

My mate Sophie, who runs events at Dust, was hosting an evening with Google
Cloud at the Vorboss offices in London, and asked me who'd be the best engineer
to give the Dust talk.

Luckily enough for her, I'd just finished working on the last big piece of
Dust software: the computer. So I said I could go and give it, without really
knowing the subtleties of giving a talk (it was my first one), or how you fit
something like that into ten minutes.

Off to London then.

Three talks, then Q&A, pizza and drinks. I wanted mine to be fairly technical.
I've never been a big fan of talks that stay high level the whole time and end
up feeling a bit like a product pitch.

The two other guys were great. The guy from ElevenLabs built a voice AI replica
of himself live, to be his PA, which was fun to watch. The guy from Google
Cloud talked about the rate limiting algorithm behind Vertex AI. Really
interesting, and it came in clutch the week after, when we started hitting rate
limits ourselves.

Mine was about the computer. Our customers were building more and more
ambitious agents, and they kept hitting the same walls: every run started from
scratch, files had to go through the model's context, long tool outputs blew
up the prompt, and listing every tool on every call got expensive.

So we gave each conversation its own VM with a shell. Files live in a bucket
mounted inside it, and every tool we expose is also a command the agent can
run, so it can pipe a knowledge search into a Python script and post the result
to Slack in one go. The network is locked down by default, and each company
picks which domains its agents can reach.

<div class="pair">
  <img src="/talks/giving-agents-a-computer/view.jpg" alt="View over Liverpool Street from the Vorboss offices" />
  <img src="/talks/giving-agents-a-computer/stage.jpg" alt="Me giving the talk, seen from the back of the room" />
</div>

Happily, the Q&A went well, even though it was probably the scariest part for
me, I must admit!

I made the [slides](https://app.dust.tt/share/frame/256ae3a1-854a-4ca4-bd72-624bd4df9c0c) with Dust too.

I'm working on a few subjects right now that might turn into another talk
sooner or later. Can't wait to grab the mic again (and even better if it comes
with another Dishoom run in London!).
