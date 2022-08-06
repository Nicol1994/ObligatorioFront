const BASE_URL = 'https://crypto.develotion.com/';

const login = async (user, pass) => {
  try {
    // Devuelvo la promesa del fetch
    const response = await fetch(`${BASE_URL}/login.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        usuario: user,
        password: pass,
      }),
    });

    if (response.status === 200) {
      
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const registro = async (user, pass, dep, ciu) => {
  try {
    // Devuelvo la promesa del fetch
    const response = await fetch(`${BASE_URL}/usuarios.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        usuario: user,
        password: pass,
        idDepartamento: dep,
        idCiudad: ciu,
      }),
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
const getMonedas= async (apikey) => {
  try {
    // Devuelvo la promesa del fetch
    const response = await fetch(`${BASE_URL}/monedas.php`, {
      method: 'GET',
      headers: {
        'apikey': apikey,
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
const getDptos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/departamentos.php`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
const getCiudades= async (dptoId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/ciudades.php?idDepartamento=${dptoId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export { login, registro, getMonedas, getCiudades, getDptos};
