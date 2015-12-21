_.mixin({
    pluckMany: function () {
        var args = _.rest(arguments, 1);
        return _.map(arguments[0], function (item) {
            var obj = {};
            _.each(args, function (arg) {
                obj[arg] = item[arg];
            });
            return obj;
        });
    }
});