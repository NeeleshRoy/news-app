import { Component } from 'react';
import fetchJsonp from "fetch-jsonp";

export default class Hero extends Component {
  constructor() {
    super()
    this._getLocation = this._getLocation.bind(this)
    this._getNewsByLocation = this._getNewsByLocation.bind(this)
    
    this.state = {
      articles: {}
    }
  }
  
  _getNewsByLocation(country) {
    const url = `https://newsapi.org/v2/top-headlines`
    const APIkey = `c3263e79091d41228fbb625a81e049bb`
    const that = this
    
    fetch(`${url}?country=${country}&apiKey=${APIkey}`)
    .then((response) => {
      return response.json()
    }, "jsonp")
    .then((data) => {
      console.log(data)
      that.setState({ articles: data.articles })
    })
  }
  
  _getLocation() {
    const that = this
    fetchJsonp('https://ipinfo.io')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      that._getNewsByLocation(data.country)
    })
  }
  
  componentDidMount() {
    this._getLocation();
  }
  
  render() {
    return('Hero Component')
  }
}