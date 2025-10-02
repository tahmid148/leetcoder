type AdjacencyList = { [from: string]: string[] };

function findItinerary(tickets: string[][]): string[] {
  tickets.sort().reverse(); // Smallest lexical at the end of the list

  const adjacencyList: AdjacencyList = {};
  for (const [from, to] of tickets) {
    if (!adjacencyList[from]) {
      adjacencyList[from] = [];
    }
    adjacencyList[from].push(to);
  }
  console.log(adjacencyList);

  let res: string[] = [];

  const dfs = (curr: string): void => {
    console.log(curr);
    while (adjacencyList[curr]?.length) {
      const next = adjacencyList[curr].pop()!;
      dfs(next);
    }
    res.push(curr);
    console.log("completed all edges of", curr);
  };

  dfs("JFK");

  return res.reverse();
}

// let tickets = [
//   ["MUC", "LHR"],
//   ["JFK", "MUC"],
//   ["SFO", "SJC"],
//   ["LHR", "SFO"],
// ];

// const tickets = [
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "JFK"],
//   ["ATL", "SFO"],
// ];

const tickets = [
  ["JFK", "KUL"],
  ["JFK", "NRT"],
  ["NRT", "JFK"],
];

// const tickets = [
//   ["JFK", "SFO"],
//   ["JFK", "ATL"],
//   ["SFO", "JFK"],
//   ["ATL", "AAA"],
//   ["AAA", "ATL"],
//   ["ATL", "BBB"],
//   ["BBB", "ATL"],
//   ["ATL", "CCC"],
//   ["CCC", "ATL"],
//   ["ATL", "DDD"],
//   ["DDD", "ATL"],
//   ["ATL", "EEE"],
//   ["EEE", "ATL"],
//   ["ATL", "FFF"],
//   ["FFF", "ATL"],
//   ["ATL", "GGG"],
//   ["GGG", "ATL"],
//   ["ATL", "HHH"],
//   ["HHH", "ATL"],
//   ["ATL", "III"],
//   ["III", "ATL"],
//   ["ATL", "JJJ"],
//   ["JJJ", "ATL"],
//   ["ATL", "KKK"],
//   ["KKK", "ATL"],
//   ["ATL", "LLL"],
//   ["LLL", "ATL"],
//   ["ATL", "MMM"],
//   ["MMM", "ATL"],
//   ["ATL", "NNN"],
//   ["NNN", "ATL"],
// ];

console.log(findItinerary(tickets));
