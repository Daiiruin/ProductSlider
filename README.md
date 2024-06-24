# Slider Product ReactJS + Typescript

Hello everyone, here i did a simple slider for a product without any library that you can use ! If you have any improvements to suggest, do not hesitate to contact me.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credit](#credit)

## Features

- Slider product component
- Photos on the left, photo on the right

## Installation

1. Clone the repository.

2. Install dependencies in client folder:

   ```bash
   npm i
   ```

## Usage

1. In `src/App.tsx`

You will find the component called with props (images) who need array of strings.

```bash
<ProductSlider
        images={[
          "../public/images/car1.jpg",
          "../public/images/car2.png",
          "../public/images/car3.jpg",
          "../public/images/car4.jpg",
          "../public/images/car5.jpg",
        ]}
      />
```

## Technologies Used

- ReactJS
- Typescript

## Credit

Car images :

- Car 1 : https://www.overdrive.in/cars/audi/a3cabriolet-m360/
- Car 2 : https://www.finn.com/en-US/blog/car-buying/are-audis-reliable
- Car 3 : https://www.caranddriver.com/reviews/a29668008/2020-audi-r8-drive/
- Car 4 : https://www.topgear.com/car-reviews/audi/rs6
- Car 5 : https://www.turbo.fr/audi/a4/essai-auto/essai-audi-a4-restylee-2020-pour-une-fois-le-changement-se-voit-155287
