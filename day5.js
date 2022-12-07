Save New Duplicate & Edit Just Text1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
function day5(txt) {
  const arr = txt.split("\n");

console.log('arr', arr)

  const stacksPart = arr.slice(0, 8);
  const procedurePart = arr.slice(10);
  console.log("stacks part", stacksPart);

  console.log(procedurePart);
  const grid = stacksPart.map((line) =>
    line.split("").filter((el) => el !== "[" && el !== "]" && el !== " ")
  );

  function alignGrid() {
    grid[0].unshift("0");
    grid[1].unshift("0");
    grid[2].unshift("0");
    grid[3].unshift("0");
    grid[4].unshift("0");

    grid[0].splice(2, 0, "0");
    grid[1].splice(2, 0, "0");
    grid[2].splice(2, 0, "0");

    grid[1].splice(3, 0, "0");
    grid[2].splice(3, 0, "0");
    grid[3].splice(3, 0, "0");

    grid[1].splice(5, 0, "0");

    grid[0].splice(3, 0, "0");
    grid[0].splice(4, 0, "0");
    grid[0].splice(5, 0, "0");
    grid[0].push("0");
  }

  alignGrid();

  const s1 = [];
  const s2 = [];
  const s3 = [];
  const s4 = [];
  const s5 = [];
  const s6 = [];
  const s7 = [];
  const s8 = [];
  const s9 = [];

  for (let i = 0; i < grid.length; i++) {
    s1.push(grid[i][0]);
    s2.push(grid[i][1]);
    s3.push(grid[i][2]);
    s4.push(grid[i][3]);
    s5.push(grid[i][4]);
    s6.push(grid[i][5]);
    s7.push(grid[i][6]);
    s8.push(grid[i][7]);
    s9.push(grid[i][8]);
  }

  const procedures = procedurePart.map((line) =>
    line
      .split(" ")
      .map((el) => parseInt(el))
      .filter((el) => typeof el === "number")
      .filter(Boolean)
  );

  console.log(procedures);
  s1F = s1.filter(el => el !== '0').reverse()
  s2F = s2.filter(el => el !== '0').reverse()
  s3F = s3.filter(el => el !== '0').reverse()
  s4F = s4.filter(el => el !== '0').reverse()
  s5F = s5.filter(el => el !== '0').reverse()
  s6F = s6.filter(el => el !== '0').reverse()
  s7F = s7.filter(el => el !== '0').reverse()
  s8F = s8.filter(el => el !== '0').reverse()
  s9F = s9.filter(el => el !== '0').reverse()


  console.log(s1F, s2F, s3F, s4F, s5F, s6F, s7F, s8F, s9F)

  const stacks = {
    1: s1F,
    2: s2F,
    3: s3F,
    4: s4F,
    5: s5F,
    6: s6F,
    7: s7F,
    8: s8F,
    9: s9F,
  };
  function move(amount, from, to) {
    for (let index = 0; index < amount; index++) {
      const el = stacks[from].pop();
      stacks[to].push(el);
    }
  }
  // move 2 from 4 to 9

  let countMoves = 0;
  procedures.forEach((procedure) => {
    const [amount, from, to] = procedure;
    move(amount, from, to);
    countMoves++;
  });

  console.log(countMoves);

  


  

  
  
  const result =  s1F[s1F.length - 1] +
    s2F[s2F.length - 1] +
    s3F[s3F.length - 1] +
    s4F[s4F.length - 1] +
    s5F[s5F.length - 1] +
    s6F[s6F.length - 1] +
    s7F[s7F.length - 1] +
    s8F[s8F.length - 1] +
    s9F[s9F.length - 1]
  

  return result
}
