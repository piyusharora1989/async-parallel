Array.prototype.count = function(){
	var j = 0;
	var self = this;
	this.forEach(function(val,i){
		if(self[i]){
			j++;
		}
	})
	return j;
}


var parallel_function = function (array_of_funcs, final_func) {
	var result = [];
	array_of_funcs.forEach(function (val, i) {
		val(function (err, res) {
			if (err) {
				final_func(err, result);
			} else {
				result[i] = res;
				if (result.count() == array_of_funcs.length) {
					final_func(null, result);
				}
			}
		})
	})
};
