angular.module('app').factory('arrayHelper', arrayHelper);

function arrayHelper() {
    return {
        /**
         * get message param by field and value */
        getArryItemByAttribute: function (arr, field, value) {
            var result = $.grep(arr, function (item) {
                return item[field] === value;
            });

            //return array or object
            if (result.length > 1) {
                return result;
            } else {
                return result[0];
            }


        },
        /**
         *  removes matching items from the array and returns the removed items
         */
        removeArrayItemByAttribute: function (messageParams, field, value) {

            //return array or object
            if (messageParams.length) {
                var retval = [];
                //					for(var i = 0; i < result.length; i++){
                for (var i = (messageParams.length - 1); i >= 0; i--) {
                    if (messageParams[i][field] === value) {
                        var rem = messageParams.splice(i, 1);
                        retval.unshift(rem[0]);
                    }
                }

                return {
                    kept: messageParams,
                    removed: retval
                };

            }

        }

    }

}