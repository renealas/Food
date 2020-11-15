import axios from 'axios';

export default axios.create({
 baseURL: 'https://api.yelp.com/v3/businesses',
 headers: {
     Authorization: 
     'Bearer NMhj1r-JVYExdo7rzCYFLKoTeRJEfWSaXiQK4n9VdQw1GahyNppveLcAwuep9vct3yhFZzPJ2LaR0E0kg1vURlIC4y8xWv55z33IblHzE0YfZ5paIRqz-S_kjuR8X3Yx'
 }
});
