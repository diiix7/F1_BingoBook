const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const {sendResponseError} = require('../middleware/middleware')
const {checkPassword, newToken} = require('../utils/utility.function')

const signUpUser = async (req, res) => {
  const {name, email, password} = req.body
  try {
    const hash = await bcrypt.hash(password, 8)

    await User.create({...req.body, password: hash})
    res.status(201).send('Account successfully created')
    return
  } catch (err) {
    console.log('Error : ', err)
    sendResponseError(500, 'Something went wrong, please try again !', res)
    return
  }
}

const signInUser = async (req, res) => {
  const {email, password} = req.body    
  try {
    const user = await User.findOne({email})
    if (!user) {
      sendResponseError(400, 'You have to Sign up first !', res)
    }
    else{
      const same = await checkPassword(password, user.password)
      if (same) {
        let token = newToken(user)
        res.status(200).send({status: 'ok', token})
        return
      }
      else {
        return res.status(401).json({ error: 'Invalid password' });
      }

      sendResponseError(400, 'Invalid password !', res)
    }
  } catch (err) {
    console.log('EROR', err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

const getUser = async (req, res) => {
  res.status(200).send({user: req.user})
}

module.exports = {signUpUser, signInUser, getUser}
