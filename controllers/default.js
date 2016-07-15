exports.install = function() {
	F.route('/', view_index);
	// or
	// F.route('/');
};

function view_index(name) {
	var self = this;
	console.log(name, self);

	self.view('index',{name:name,address:"广西南宁市民族大道"});
}