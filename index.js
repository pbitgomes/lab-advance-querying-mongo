// 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.
const filter1 = {
  name: "Babelgum",
};
const projection1 = {
  name: 1,
  '_id': 0
};

// 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.
const filter2 = {
    'number_of_employees': {
      '$gt': 5000
    }
  };
  const sort2 = {
    'number_of_employees': 1
  };
  const limit2 = 20;

// 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.
const filter3 = {
    '$and': [
      {
        'founded_year': {
          '$gte': 2000
        }
      }, {
        'founded_year': {
          '$lte': 2005
        }
      }
    ]
  };
  const projection3 = {
    'name': 1, 
    'founded_year': 1, 
    '_id': 0
  };

// 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
const filter4 = {
    '$and': [
      {
        'founded_year': {
          '$lt': 2010
        }
      }, {
        'ipo.valuation_amount': {
          '$gt': 100000000
        }
      }
    ]
  };
  const projection4 = {
    'name': 1, 
    'ipo': 1, 
    '_id': 0
  };

// 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.
const filter5 = {
    '$and': [
      {
        'number_of_employees': {
          '$lt': 10000
        }
      }, {
        'founded_year': {
          '$lt': 2005
        }
      }
    ]
  };
  const limit5 = 10;


// 6. All the companies that don't include the `partners` field.
const filter6 = {
    'partners': {
      '$exists': false
    }
  };

// 7. All the companies that have a null type of value on the `category_code` field.
const filter7 = {
    'category_code': {
      '$type': 'null'
    }
  };

// 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.
const filter8 = {
    'number_of_employees': {
      '$gt': 100, 
      '$lt': 1000
    }
  };
  const projection8 = {
    'name': 1, 
    'number_of_employees': 1, 
    '_id': 0
  };

// 9. Order all the companies by their IPO price in a descending order.
const filter9 = {};
const sort9 = {
  'ipo': -1
};

// 10. Retrieve the 10 companies with most employees, order by the `number of employees`
const filter10 = {};
const sort10 = {
  'number_of_employees': -1
};
const limit10 = 10;

// 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.
const filter11 = {
    'founded_month': {
      '$gte': 7
    }
  };
  const limit11 = 1000;

// 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000
const filter12 = {
    '$and': [
      {
        'founded_year': {
          '$lt': 2000
        }
      }, {
        'acquisition.price_amount': {
          '$gt': 10000000
        }
      }
    ]
  };
  const projection12 = {
    'acquisition': 1
  };

// 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.
const filter13 = {
  'acquisition.acquired_year': {
    '$gt': 2010
  }
};
const projection13 = {
  'acquisition': 1, 
  'name': 1, 
  '_id': 0
};
const sort13 = {
  'acquisition.price_amount': 1
};

// 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
const filter14 = {};
const projection14 = {
  'name': 1, 
  'founded_year': 1, 
  '_id': 0
};
const sort14 = {
  'founded_year': 1
};

// 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.
const filter15 = {
  'founded_day': {
    '$lte': 7
  }
};
const sort15 = {
  'acquisition.price_amount': -1
};
const limit15 = 10;

// 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.
const filter16 = {
    '$and': [
      {
        'category_code': 'web'
      }, {
        'number_of_employees': {
          '$gt': 4000
        }
      }
    ]
  };
  const projection16 = {
    'category_code': 1, 
    '_id': 0
  };
  const sort16 = {
    'number_of_employees': 1
  };

// 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.
const filter17 = {
  '$and': [
    {
      'acquisition.price_amount': {
        '$gt': 10000000
      }
    }, {
      'acquisition.price_currency_code': 'EUR'
    }
  ]
};

// 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
const filter18 = {
  'acquisition.acquired_month': {
    '$lte': 3
  }
};
const projection18 = {
  'name': 1, 
  'acquisition': 1, 
  '_id': 0
};
const limit18 = 10;

// 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
const filter19 = {
  '$and': [
    {
      'founded_year': {
        '$gte': 2000
      }, 
      'founded_year': {
        '$lte': 2010
      }
    }, {
      'acquisition.acquired_year': {
        '$gt': 2011
      }
    }
  ]
};