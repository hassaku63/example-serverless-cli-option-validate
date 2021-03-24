/**
 * https://www.serverless.com/framework/docs/providers/aws/guide/variables/#reference-variables-in-javascript-files
 * 
 * @param {*} serverless 
 * @returns 
 */

module.exports = ({options, resolveConfigurationProperty}) => {
    console.log(options);

    if(!options.region) {
        const errorMessage = 'CLI Option "region" not supplied';
        console.log(errorMessage);
        throw new Error(errorMessage);
    }

    return {
        config: {
            ...options,
        }
    }
};