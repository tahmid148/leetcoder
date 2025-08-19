class Tweet {
  id: number;
  time: number;

  constructor(id: number, time: number) {
    this.id = id;
    this.time = time;
  }
}

class TweetMaxHeap {
  private heap: Tweet[];

  constructor() {
    this.heap = new Array();
  }

  size(): number {
    return this.heap.length;
  }

  insert(tweet: Tweet): void {
    this.heap.push(tweet);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): Tweet | undefined {
    console.log("heap before popping", this.heap);
    if (this.heap.length <= 0) return;
    if (this.heap.length === 1) return this.heap.pop()!;

    this.swap(0, this.heap.length - 1);
    const head = this.heap.pop()!;
    this.heapifyDown(0);
    return head;
  }

  private heapifyDown(i: number): void {
    if (i <= this.heap.length - 1) {
      const leftIdx = this.left(i),
        rightIdx = this.right(i);

      if (rightIdx <= this.heap.length - 1) {
        const curr = this.heap[i],
          left = this.heap[leftIdx],
          right = this.heap[rightIdx];

        const max = Math.max(left.time, right.time);
        if (max > curr.time) {
          if (max === left.time) {
            this.swap(leftIdx, i);
            this.heapifyDown(leftIdx);
          } else if (max === right.time) {
            this.swap(rightIdx, i);
            this.heapifyDown(rightIdx);
          }
        }
      } else if (leftIdx <= this.heap.length - 1) {
        const curr = this.heap[i],
          left = this.heap[leftIdx];

        if (left.time > curr.time) {
          this.swap(leftIdx, i);
          this.heapifyDown(leftIdx);
        }
      }
    }
  }

  private heapifyUp(i: number): void {
    if (i > 0) {
      const parentIdx = this.parent(i);
      const curr = this.heap[i],
        parent = this.heap[parentIdx];

      if (curr.time > parent.time) {
        this.swap(i, parentIdx);
        this.heapifyUp(parentIdx);
      }
    }
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private left(i: number) {
    return 2 * i + 1;
  }
  private right(i: number) {
    return 2 * i + 2;
  }
  private swap(i: number, j: number) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

class Twitter {
  // userId -> Tweet[]
  private users: Set<number>;
  private userTweets: Map<number, Array<Tweet>>;
  private userToUser: Map<number, Set<number>>;
  private counter: number;

  constructor() {
    this.userTweets = new Map();
    this.userToUser = new Map();
    this.users = new Set();
    this.counter = 0;
  }

  postTweet(userId: number, tweetId: number): void {
    if (!this.users.has(userId)) {
      this.userTweets.set(userId, new Array());
      this.userToUser.set(userId, new Set());
      this.users.add(userId);
    }
    this.userTweets.get(userId)!.push(new Tweet(tweetId, this.counter++));
  }

  getNewsFeed(userId: number): number[] {
    if (!this.users.has(userId)) return [];

    let resultTweetIds: number[] = [];

    return resultTweetIds;
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.users.has(followerId)) {
      this.userTweets.set(followerId, new Array());
      this.userToUser.set(followerId, new Set());
      this.users.add(followerId);
    }
    if (!this.users.has(followeeId)) {
      this.userTweets.set(followeeId, new Array());
      this.userToUser.set(followeeId, new Set());
      this.users.add(followeeId);
    }
    this.userToUser.get(followerId)!.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (!this.users.has(followerId)) {
      this.userTweets.set(followerId, new Array());
      this.userToUser.set(followerId, new Set());
      this.users.add(followerId);
    }
    if (!this.users.has(followeeId)) {
      this.userTweets.set(followeeId, new Array());
      this.userToUser.set(followeeId, new Set());
      this.users.add(followeeId);
    }
    this.userToUser.get(followerId)!.delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter: Twitter = new Twitter();
twitter.postTweet(1, 5);
console.log("News Feed: ", twitter.getNewsFeed(1));
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log("News Feed: ", twitter.getNewsFeed(1));
