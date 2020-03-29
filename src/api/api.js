import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/'
  })

export const launchesAPI = {
    getLaunches() {
        return instance.get(`launches`)
    }
}