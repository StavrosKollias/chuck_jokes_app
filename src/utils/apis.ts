async function getAllRandomJokesNotExplicit(): Promise<any> {
   try {
      const response = await fetch(`http://api.icndb.com/jokes?exclude=[explicit]`);
      const data = await response.json();
      return data.value;
   } catch (e) {
      return null;
   }
}

async function getRandomJokeByCharacter(firstName?: string, lastName?: string): Promise<any> {
   try {
      const response = await fetch(`http://api.icndb.com/jokes/random?exclude=[explicit]&firstName=${firstName}&${lastName}`);
      const data = await response.json();
      return data.value;
   } catch (e) {
      return null;
   }
}

async function getMultipleRandomJokes(numberJokes: number): Promise<any> {
   try {
      const response = await fetch(`http://api.icndb.com/jokes/random/${numberJokes}?exclude=[explicit]`);
      const data = await response.json();
      return data.value;
   } catch (e) {
      return null;
   }
}

export { getAllRandomJokesNotExplicit, getRandomJokeByCharacter, getMultipleRandomJokes };
