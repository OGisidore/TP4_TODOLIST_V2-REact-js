
export const generateID = ()=>{
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(){
      return (Math.random()*16 | 0 ).toString(16)
    }).toLowerCase();
  }

  
export  const validateRegisterForm = (values : any) => {
  const errors : any = {};
  if (!values.name) {
    errors.name = 'name Required';
  }  else if (values.name.length > 255) {
    errors.name = 'Name should not exceed 255 characters!';
  }

  if (!values.description) {
    errors.description = ' name Required';
  } else if (values.description.length > 1000) {
    errors.description = 'Description should not exceed 1000 characters!';
  }

  
    if (!values.status) {
      errors.status = 'Status is required!';
    } else if (!['Pending', 'Completed'].includes(values.status)) {
      errors.status = 'Invalid status!';
    }

    if (!values.matrice) {
      errors.matrice = 'Matrice is required!';
    } else if (!["0", "1", "2", "3"].includes(values.matrice)) {
      errors.status = 'Invalid matrice!';
    }



  return errors;
};