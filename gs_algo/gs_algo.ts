type person = {
    id: string;
    preference: number[];
    engaged: number;
  }

  // Array of men
  const M: person[] = [{id: "m1", preference: [1,0], engaged: -1}, {id: "m2", preference: [1,0], engaged: -1}];
  // Array of women
  const W: person[] = [{id: "w1", preference: [0,1], engaged: -1}, {id: "w2", preference: [0,1], engaged: -1}];

  // Array to contain stable matches represented by man's index in M
  const S: number[] = [];

  // While there are men that are not engaged, loop through their preference for women. 
  while( S.length < 2 ){
    M.forEach((man, index) => {
      console.log(man);

      man.engaged === -1 
      && man.preference.some((woman) => {
        const prefWoman: person = W[woman];
        console.log(prefWoman);

        // Loop through the woman's preference to see if the man ranks higher in her preference list than the man she is engaged to
        return prefWoman.preference.some(p => {

          // If man ranks higher than engaged, update engaged values to reflect correct indexes. Free man will be set to -1 and removed from S. 
          if (p === index && p > prefWoman.engaged) {
            if (prefWoman.engaged !== -1){
              S.splice(S.indexOf(prefWoman.engaged), 1);
              M[prefWoman.engaged].engaged = -1;
            } 

            prefWoman.engaged = index;
            man.engaged = woman;
            S.push(index);
            console.log(S);
            return true;
          } 
        })
      })
    })

    console.log(M);
    console.log(W);
    console.log(S);
}; 