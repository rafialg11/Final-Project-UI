# Tokopedia Play Clone

The TokoPlay Clone is a dynamic platform designed to replicate the essence of Tokopedia Play, offering a unique blend of video content and e-commerce integration. It allows users to explore a curated selection of embedded YouTube videos, each complemented by related products. Additionally, users can engage with the content by posting comments on their chosen videos.
You can access the website by clicking this link: https://final-project-ui-cyan.vercel.app/

## Features

- Feature 1: User can open two pages:
  - Home (/)
  - Video Detail (/video/:id)
- Feature 2: User can see a video list with thumbnail in home page.
- Feature 3: User can click each video and go to video detail page.
- Feature 4: User can see list products, embed YouTube, list comment, and form submit comment.
- Feature 5: User just need input name and comment when submit comment in form.
- Feature 6: User can see their comment in list comment section after success submit comment.

### Additional Features

- Additional Feature 1: Search Feature, easily find specific videos or products through a robust search.
- Additional Feature 2: The user will be redirected to the product page on Tokopedia when clicking on a product.

## How to Install & Run

Here are the steps to install and run the project in your local environment.

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/rafialg11/Final-Project-UI.git
    cd Final-Project-UI
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

   or

    ```bash
    yarn install
    ```

3. **Run the Application**:

    ```bash
    npm start
    ```

   or

    ```bash
    yarn start
    ```

5. **Access the Application**:

    Access the application in your browser at `http://localhost:3000`.

## Database Schema

### Videos Collection

The `videos` collection is designed to store information about the videos featured on the platform. Each document in this collection includes the following fields:

- `urlImgThumbnail`: URL of the video thumbnail image.
- `videoUrl`: Embedded YouTube video URL.
- `videoTitle`: Title of the video.
- `videoOwner`: Name of the video owner.
- `videoViews`: Number of video views.

**Example Document:**

```json
{
  "urlImgThumbnail": "https://i.pinimg.com/564x/4c/9a/b8/4c9ab8c37b93ef118defe2b2616a2ba8.jpg",
  "videoUrl": "https://www.youtube.com/embed/X5EXTKMnDuA",
  "videoTitle": "Diskon Sepatu Edisi HUT RI",
  "videoOwner": "Pentella",
  "videoViews": 1
}
```

### Products Collection

The `products` collection is utilized to store information about products associated with the videos on the platform. Each document in this collection contains these fields:

- `title`: Product title.
- `productUrl`: E-commerce product URL.
- `productImg`: Product image URL.
- `storeName`: Store or seller name.
- `price`: Product price.
- `videoId`: ID of the video associated with this product.

**Example Document:**

```json
{
  "title": "Sepatu Casual",
  "productUrl": "https://www.tokopedia.com/footstepfootwear/footstep-footwear-sepatu-loafers-pria-casual-patra-boat-shoes-boat-39",
  "productImg": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/22/a2b86d0e-99c1-4e65-95b2-b6e80c5f90b6.jpg",
  "storeName": "Pentella",
  "price": "325000",
  "videoId": "64df1c887d5a29001cd13069"
}
```

### Comments Collection

The `comments` collection is used to store comments left by users on the platform's videos. Each document in this collection consists of these fields:

- `username`: Name of the user who left the comment.
- `comment`: Comment content.
- `timestamp`: Time when the comment was made.
- `videoId`: ID of the video to which this comment is related.

**Example Document:**

```json
{
  "username": "Rafi",
  "comment": "Sepatu nya murah dan bagus",
  "timestamp": "2023-08-19T09:44:31.880Z",
  "videoId": "64df1c887d5a29001cd13069",
}
```
