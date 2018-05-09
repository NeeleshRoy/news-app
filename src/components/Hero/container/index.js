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
    console.log('mouseenter')
  }
  
  handleMouseLeave() {
    console.log('mouseleave')
  }
  
  render() {
    return (
      <div className = "container">
      {
        this.state.articles.map((article, i) => {
          return(
            <Card 
            key = { i }
            title = { article.title }
            image = { article.urlToImage }
            description = { article.description }
            source = { article.source.name }
            handleMouseEnter = { this.handleMouseEnter } 
            handleMouseLeave = { this.handleMouseLeave }
            />
          )
        })
      }
      </div>
    )
  }
}