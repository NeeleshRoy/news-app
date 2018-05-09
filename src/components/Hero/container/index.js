import React,{ Component } from 'react'
import fetchJsonp from "fetch-jsonp"
import Card from '../presentation'

export default class Hero extends Component {
  constructor() {
    super()
    
    this.state = {
      articles: []
    }
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this._getLocation = this._getLocation.bind(this)
    this._getNewsByLocation = this._getNewsByLocation.bind(this)
  }
  
  _getLocation() {
    const that = this
    fetchJsonp('https://ipinfo.io')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      that.setState({ location: data.city + ', ' +  data.country })
      that._getNewsByLocation(data.country)
    })
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
      that.setState({ articles: data.articles })
    })
  }
  
  componentDidMount() {
    this._getLocation();
  }
  
  handleMouseEnter() {
    
  }
  
  handleMouseLeave() {
    console.log('mouseleave')
  }

  _getBackground(url) {
    const styles = {
      background: 'url(' + url + ') 0 0 no-repeat',
      backgroundSize: 'cover'
    }
    return styles
  }
  
  render() {
    return (
      <div>
        <h1>News - { this.state.location }</h1>
        <div className = "row">
        {
          this.state.articles.map((article, i) => {
            return(
              <Card 
              style = { this._getBackground(article.urlToImage) }
              key = { i }
              title = { article.title }
              image = { article.urlToImage }
              link = { article.url }
              source = { article.source.name }
              handleMouseEnter = { this.handleMouseEnter } 
              handleMouseLeave = { this.handleMouseLeave }
              />
            )
          })
        }
        </div>
      </div>
    )
  }
}