import React, { Component } from 'react';


function Homepage()
{
    return(
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet" />
  <title>Player Profile - Home</title>
  
  <style dangerouslySetInnerHTML={{__html: "\n            body{\n                \n                background-image: linear-gradient(to right,  #0fc0e4, #ffff);\n                background-image: url(\"bg2.jpg\");\n                align-items: center;\n                text-align: center;\n            }\n            nav {\n    border: 2px solid white;\n}\n\nnav ul {\n    font-family: 'Josefin Sans',arial;\n    font-size: 25px;\n    overflow: hidden;\n    background-color: #333;\n    margin: 0;\n    padding: 5px;\n}\n\nnav ul li {\n    list-style-type: none;\n    border-right: 2px solid white;\n    display: inline-block;\n}\nli a {\n    display: inline;\n    color: white;\n    text-align: center;\n    padding: 15px 15px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    /*Defines the default color if the anchor is not active*/\n    background-color: rgb(243, 85, 22);\n}\n\n.active {\n    /*Defines the currently active anchor tag color*/\n    background-color: #4caf50;\n}\n\n.column1 {\n  float: left;\n  width: 50%;\n}\n\n/* Clear floats after the columns */\n.column2 {\n  float: right;\n  width: 50%;\n  align-items: center;\n}\n\ntable{\n color: white;\n    background: rgba(0, 0, 0, 0.342);\n    border-radius: 25px;\n    margin: 5px;\n    padding: 15px;\n    \n}\n\nth{\n    align-items: center;\n    text-align: left;\n padding-right:5px;\n}\n td{\n      text-align: left;\n padding-left:15px;\n}       " }} />
  

  <br />
  <article id="content" style={{fontFamily: '"Trebuchet MS", Arial, sans-serif', fontSize: 35, margin: 10}}>
    <div className="row">
      <div className="column1">
        <img src="messi.png" width={412} height={492} alt="messi" />
      </div>
      <div className="column2">
        <img src="fcb.png" width={200} height={200} alt="barca" /><br />
        <table>
          <tbody><tr><th>Name </th> <td> Lionel Andrés Messi</td></tr>
            <tr><th>Age </th> <td> 33</td></tr>
            <tr><th>Height </th> <td> 1.87m </td></tr>
            <tr><th>Nationality </th> <td> Argentina </td></tr>
            <tr><th>Position </th> <td> Winger / Center forward </td></tr>
            <tr><th>Type </th> <td> Left footed </td></tr>
          </tbody></table>
      </div>
    </div>
  </article>
        </div>
    )
}

export default Homepage;