import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
    <h1 align="center">IPApps Admin Workflow</h1>
    <div className="div-page">
        <label for="bktNameLbl" className="hidden">S3 Temp Folder Name</label>
        <input type="text" id="BucketNameId" className="hidden" name="BucketName" placeholder="ctp-ipapps-file-upload" value="ctp-ipapps-file-upload" readonly/>
        <label for="bktObjectLbl">File Name - "Vendor+Ver.zip" - For e.x., "densov1.1.zip"</label>
        <input type="text" id="ObjectNameId" name="ObjectName" placeholder="*.zip" value=""/>
        <input style='display:none;' type="text" id="FileNameId" name="FileNameId"/>
        <label for="OperationTypeLbl" className="hidden">What do you want to do?</label>
        <select id="methodTypeId" name="methodType" >
            <option value="GET">Read a File</option>
            <option value="POST"  selected="selected">Upload a File</option>
        </select>
        <div className="div-form" style='display:none;' id='uploadFileDiv'>
            <form enctype="multipart/form-data" method="POST" name="formS3ObjManager" id="formS3ObjManagerId">
                <input type="file" name="file" required />
            </form>
            <button className="UrlSignerBtn" id='ObjectUploadBtnId'><span>Upload File </span></button>
        </div>
        <button className="UrlSignerBtn" id='UrlSignerBtnId'><span>Get Pre Signed Url </span></button>
    </div>
    <br />
    <div className="div-obj-holder" style='display:none;' id="div-obj-holderId">
        <div id="urlTextId" className="urlText">Url Text Goes here ...</div>
        <div id="SignedUrlId"></div>
    </div>

      </div>
    );
  }
}

export default withAuthenticator(App, true);
