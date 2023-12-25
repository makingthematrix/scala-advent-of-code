"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1],{6978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),o=a(6340);const r={},l="Day 1: Calorie Counting",s={unversionedId:"2022/puzzles/day01",id:"2022/puzzles/day01",title:"Day 1: Calorie Counting",description:"by @bishabosha",source:"@site/target/mdoc/2022/puzzles/day01.md",sourceDirName:"2022/puzzles",slug:"/2022/puzzles/day01",permalink:"/scala-advent-of-code/2022/puzzles/day01",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2022/puzzles/day01.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 25: Snowverload",permalink:"/scala-advent-of-code/2023/puzzles/day25"},next:{title:"Day 2: Rock Paper Scissors",permalink:"/scala-advent-of-code/2022/puzzles/day02"}},p={},m=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution Summary",id:"solution-summary",level:2},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Final Code",id:"final-code",level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1-1",level:4},{value:"Part 2",id:"part-2-1",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-1-calorie-counting"},"Day 1: Calorie Counting"),(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/bishabosha"},"@bishabosha")),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2022/day/1"},"https://adventofcode.com/2022/day/1")),(0,i.kt)("h2",{id:"solution-summary"},"Solution Summary"),(0,i.kt)("p",null,"First transform the input into a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"Inventory"),", each ",(0,i.kt)("inlineCode",{parentName:"p"},"Inventory")," is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", representing the calorie\ncount of an item in the inventory, this is handled in ",(0,i.kt)("inlineCode",{parentName:"p"},"scanInventories"),"."),(0,i.kt)("h3",{id:"part-1"},"Part 1"),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"Inventory"),", we must first find the total calorie count of each inventory."),(0,i.kt)("p",null,"For a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Inventory"),", we do this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," method on its ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," property (found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," class). e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"inventory.items.sum"),"."),(0,i.kt)("p",null,"Then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," class, to transform each ",(0,i.kt)("inlineCode",{parentName:"p"},"Inventory")," to its total calorie count with an anonymous function."),(0,i.kt)("p",null,"Then sort the resulting list of total calorie counts in descending order, this is provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"scala.math.Ordering.Int.reverse"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"maxInventories")," method handles the above, returning the top ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," total calorie counts."),(0,i.kt)("p",null,"For part 1, use ",(0,i.kt)("inlineCode",{parentName:"p"},"maxInventories")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"n == 1")," to create a singleton list of the largest calorie count."),(0,i.kt)("h3",{id:"part-2"},"Part 2"),(0,i.kt)("p",null,"As in part 1, construct the list of sorted total calorie counts with ",(0,i.kt)("inlineCode",{parentName:"p"},"maxInventories"),". But instead, we need the first 3 elements. We then need to ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," the resulting list."),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.math.Ordering\n\ndef part1(input: String): Int =\n  maxInventories(scanInventories(input), 1).head\n\ndef part2(input: String): Int =\n  maxInventories(scanInventories(input), 3).sum\n\ncase class Inventory(items: List[Int])\n\ndef scanInventories(input: String): List[Inventory] =\n  val inventories = List.newBuilder[Inventory]\n  var items = List.newBuilder[Int]\n  for line <- input.linesIterator do\n    if line.isEmpty then\n      inventories += Inventory(items.result())\n      items = List.newBuilder\n    else items += line.toInt\n  inventories.result()\n\ndef maxInventories(inventories: List[Inventory], n: Int): List[Int] =\n  inventories\n    .map(inventory => inventory.items.sum)\n    .sorted(using Ordering.Int.reverse)\n    .take(n)\n")),(0,i.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,i.kt)("h4",{id:"part-1-1"},"Part 1"),(0,i.kt)(o.Z,{puzzle:"day01-part1",year:"2022",mdxType:"Solver"}),(0,i.kt)("h4",{id:"part-2-1"},"Part 2"),(0,i.kt)(o.Z,{puzzle:"day01-part2",year:"2022",mdxType:"Solver"}),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jannyboy11/AdventOfCode2022/blob/master/src/main/scala/day01/Day01.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/JanBoerman95"},"Jan Boerman"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/JavadocMD/e3bcb6de646442159da0dfe3c9b01e0b"},"Solution using Akka Streams")," by ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/JavadocMD"},"Tyler Coles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/JavadocMD/9d5ce303c9e2a2ec9129f35a00d5b644"},"Solution using Akka Actors")," by ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/JavadocMD"},"Tyler Coles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimY4/advent-of-code-scala/blob/master/src/main/scala/aoc/y2022/Day1.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/actinglikecrazy"},"SimY4"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosminci/advent-of-code/blob/master/src/main/scala/com/github/cosminci/aoc/_2022/Day1.scala"},"Solution")," by Cosmin Ciobanu"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prinsniels/AdventOfCode2022/blob/master/src/main/scala/day01.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prinsniels"},"Niels Prins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sierikov/advent-of-code/blob/master/src/main/scala/sierikov/adventofcode/y2022/Day01.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sierikov"},"Artem Sierikov")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/danielnaumau/code-advent-2022/blob/master/src/main/scala/com/adventofcode/Day1.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/danielnaumau"},"Daniel Naumau")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AvaPL/Advent-of-Code-2022/tree/main/src/main/scala/day1"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AvaPL"},"Pawe\u0142 Cembaluk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ciuckc/AOC22/blob/master/day1/calorie_count.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ciuckc"},"Cristian Steiciuc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rpiotrow/advent-of-code-2022/tree/main/src/main/scala/io/github/rpiotrow/advent2022/day01"},"Solution using ZIO")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rpiotrow"},"Rafa\u0142 Piotrowski"))),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page."))}d.isMDXComponent=!0}}]);