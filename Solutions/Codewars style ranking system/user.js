class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activity) {
    try {
      if (activity < -8 || activity === 0 || activity > 8) {
        throw new RangeError();
      }
      let diff;
      if (activity > 0 && this.rank < 0) {
        diff = activity - this.rank - 1;
      } else if (activity < 0 && this.rank > 0) {
        diff = activity - this.rank + 1;
      } else {
        diff = activity - this.rank;
      }
      let calcProgress;
      if (this.rank !== 8) {
        if (diff > 0) {
          calcProgress = 10 * diff * diff;
        } else if (diff === 0) {
          calcProgress = 3;
        } else if (diff === -1) {
          calcProgress = 1;
        } else {
          calcProgress = 0;
        }
        this.progress += calcProgress;
      }
      if (this.progress >= 100 && this.rank < 8) {
        if (this.rank === -1) {
          this.rank++;
        }
        this.rank += Math.floor(this.progress / 100);
        if (this.rank < 8) {
          this.progress %= 100;
        } else {
          this.progress = 0;
        }
      }
    } catch (err) {
      throw err;
    }
  }
}
