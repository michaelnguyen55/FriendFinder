// DATA
// Below data will hold all of the users. Initial data holds dummy data.
var friendArray = [
  {
	name: "James",
	photo: "https://www.wilsoncenter.org/sites/default/files/styles/450x550-scale-crop/public/18457363298_3ac27e78fb_o.jpg?itok=9nrUxEfI",
	scores: ["5","1","4","4","5","1","2","5","4","1"]
  },
  {
	name: "John",
	photo: "http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png",
	scores: ["1","1","1","1","1","1","1","1","1","1"]
  },
  {
	name: "David",
	photo: "http://www.math.uni-frankfurt.de/~person/_4170854.jpg",
	scores: ["5","5","5","5","5","5","5","5","5","5"]
  },
];

// Export array to make it accessible to other files using require.
module.exports = friendArray;