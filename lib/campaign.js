/* jshint esversion: 8 */

class Campaign {
  /**
   * A new campaign api object.
   * @param {object} self is `this` from index.js
   * @constructor
   */
  constructor (self) {
    this._sendRequest = self._sendRequest
    this._doRequest = self._doRequest
    this._threadSleep = self._threadSleep
    this.apiKey = self.apiKey
  }

  /**
   * returns information about a campaign.
   * The total raised is in this returned object.
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  get (id, callback) {
    this._sendRequest(`campaigns/${id}`, callback)
  }

  /**
   * returns the most recent page of donations.
   * Use this if polling for new donations.
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getRecentDonations (id, callback) {
    this._doRequest(`campaigns/${id}/donations`).then(function(response){
      const body = JSON.parse(response)
      callback(body.data)
    })
  }

  /**
   * returns ALL donations from a campaign.
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getDonations (id, callback) {
    this._sendRequest(`campaigns/${id}/donations?count=500`, callback)
  }

  /**
   * returns all rewards for a campaign
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getRewards (id, callback) {
    this._sendRequest(`campaigns/${id}/rewards`, callback)
  }

  /**
   * returns all polls for a campaign
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getPolls (id, callback) {
    this._sendRequest(`campaigns/${id}/polls`, callback)
  }

  /**
   * returns all challenges for a campaign
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getChallenges (id, callback) {
    this._sendRequest(`campaigns/${id}/challenges`, callback)
  }
  /**
   * returns the schedule of a campaign
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getSchedule (id, callback) {
    this._sendRequest(`campaigns/${id}/schedule`, callback)
  }

  /**
   * returns all supporting campaigns for a campaign
   * @param {string} id The campaign ID that you're looking up
   * @param {requestCallback} callback A function to call when we're done getting data
   */
  getSupportingCampaigns (id, callback) {
    this._sendRequest(`campaigns/${id}/supporting-campaigns`, callback)
  }
}

module.exports = Campaign
