export default function personReducer(person, action) {
  switch(action.type) {
    case 'updated' : {
      const { prev, current } = action;
      return { 
        ...person, 
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev ? { ...mentor, name: current } : mentor
        }) 
      }
    }

    case 'added' : {
      const { name, title } = action;
      return { 
        ...person, 
        mentors : [ ...person.mentors, { name, title } ]
      };
    }

    case 'deleted' : {
      return { 
        ...person, 
        mentors: person.mentors.filter((mento) => mento.name !== action.name) 
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
    }
  }
}