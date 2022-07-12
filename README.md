# Random DropZone API (COD - Warzone): 
# Visit the <a target="_blank" href="https://contact-list-mern.netlify.app/">Front-End App on Netlify</a>!

This is the <strong>Backend code</strong> for an App I developed that saves contact information. You can add contacts, delete contacts, and also edit the "additional info" section for each contact. The API is hosted on Herokuapp.com, and the backend is stored on MongoDB Atlas.
You may find the frontend code repo <a target="_blank" href="https://github.com/ubemacapuno/contact-list-frontend">HERE</a>!
<i><strong>*Please Note:</strong> The server is hosted on a free Herokuapp.com account, so please allow 15-30 seconds for their dyno to respond!</i>

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/contact-list.gif?raw=true" width="100%"  alt="Random Dropzone Front-end application."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

Back-end: Node.js, Express.js, MongoDB Atlas, Mongoose, hosting on Heroku.app.

Front-end: React.js/HTML/CSS, hosting on Netlify.app.

To use this repository, please be sure to install the proper packages with:

``npm -install``

And run the frontend client with

``npm -start``

With the backend code (on another repository), start up the server using Node with:

``node index.js``

## Optimizations:

As I learn more, I'd like to develop the application so that it updates on click in real-time. Currently, you MUST refresh the page after each request to grab the updated data. I would also like a more user-friendly UI and make it possible to update ALL fields; currently only the "additional info" field can be updated. Also ALL IPs are whitelisted for this project, so authentication will definitely be a feature that I will include for future MERN projects.

## Lessons Learned:

This is my first project using React, Mongoose, and MongoDB. Mongoose is very helpful and streamlines the coding of HTTP requests. I still have a lot to learn with React and building out functional UIs.
