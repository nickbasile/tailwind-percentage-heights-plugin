module.exports = function () {
  return function ({e, addUtilities}) {
    let percents = [
      {
        key: '1/2',
        value: '50%'
      },
      {
        key: '1/3',
        value: '33.33333%'
      },
      {
        key: '2/3',
        value: '66.66667%'
      },
      {
        key: '1/4',
        value: '25%'
      },
      {
        key: '3/4',
        value: '75%'
      },
      {
        key: '1/5',
        value: '20%'
      },
      {
        key: '2/5',
        value: '40%'
      },
      {
        key: '3/5',
        value: '60%'
      },
      {
        key: '4/5',
        value: '80%'
      },
      {
        key: '1/6',
        value: '16.66667%'
      },
      {
        key: '5/6',
        value: '83.33333%'
      },
      {
        key: '1/10',
        value: '10%'
      },
      {
        key: '3/10',
        value: '30%'
      },
      {
        key: '7/10',
        value: '70%'
      },
      {
        key: '9/10',
        value: '90%'
      },
    ];

    const heightUtilities = percents.map(item => {
     return {
       [`.h-${e(item.key)}`]: {
         height: item.value
       }
     }
    });

    addUtilities(heightUtilities, {
      variants: ['responsive'],
    });
  }
}