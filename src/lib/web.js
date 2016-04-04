import * as Err from './error';

export class Uri {
  //private let _address = null;
  constructor(address) {
    if(address === null || address === undefined || address.trim() === "") {
      throw new Err.ArgumentNullException("address");
    }
    this._address = address;
  }
  // relativeConstructor(baseUri, relativeUrl) {
  //   if(baseUri)
  //   this._merge(base)
  // }
  // _merge(baseUri, relativeUri) {
  //
  // }
  toString() {
    return this._address;
  }
}

class WebRequest {
  constructor(address) {
    if(address instanceof Uri) {
      this.requestUri = address;
    }
    if(typeof address == "String") {
      let uri = new Uri(address)
      this.requestUri = uri;
    }
  }
  set () {

  }
}

class WebResponse {

}

export class WebClient {
  CreateUri(address) {
    // if(address === null || address === undefined || address.trim() === "") {
    //   throw new Err.ArgumentNullException("address");
    // }
    if(address instanceof Uri) {
      return address;
    }
    if(typeof address == "String") {
      let uri = new Uri(address)
      return uri;
    }
    throw new Err.ArgumentTypeException("address")
  }
  async DownloadData(address) {
    if(address instanceof Uri) {
      //console.log("uri");
      address = address.toString();
    } else if(typeof address == "String") {

    } else {
      throw new Err.ArgumentTypeException('address', ['String', 'Uri']);
    }
    let data = await fetch(address);
    return data;
  }
  async DownloadString(address) {
    // if(address instanceof Uri) {
    //   console.log("uri");
    //   return DownloadData(address).then((data)=>data.text());
    // }
    // if(typeof address == "String") {
    //   let uri = new Uri(address)
    return this.DownloadData(address).then((data)=>data.text());
    // }
  }
}
