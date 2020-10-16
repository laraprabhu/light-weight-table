import Utils from '../../../Utilities';
import MockData from './mock-data';

export default {
  loadUrl: (dataUrl, dataMapper) => {
    // To mock the network call.
    // Repeated data with same keys throws warning in the console.
    return Utils.delayedResolution(MockData)
      .then(parsedResponse => {
        const mappedData = parsedResponse.data.map(dataMapper);
        const nextDataUrl = parsedResponse.nextDataUrl;
        return {
          data: mappedData,
          dataUrl: nextDataUrl
        }
      })
      .catch(error => error);;

    // TODO - Remove after creating demo

    /* ORIGINAL CODE
    return fetch(dataUrl)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.map(dataMapper))
      .catch(error => error);
    */
  }
};
