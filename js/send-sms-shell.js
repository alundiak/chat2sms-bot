#!/usr/bin/env node

require('dotenv').config()

process.env.NUMBER_TO = process.env.NUMBER_TO_ME_UA;

const sendSMS = require('./send-sms')

const text = process.argv[2] || "В МЕНЕ ВСЕ ДОБРЕ, АНДРІЙ.";

sendSMS(text)
