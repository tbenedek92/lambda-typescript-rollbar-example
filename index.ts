import Rollbar = require('rollbar')
import { Context, Callback } from 'aws-lambda';

const rollbar = new Rollbar({accessToken: "<ACCESS_TOKEN>"})

export const rbhandler = rollbar.lambdaHandler((event: any , context: Context, callback: Callback ) => {
    rollbar.log(event)
    callback();
})

