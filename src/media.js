
export function checkForMediaDevicesApi(){
  return typeof window.navigator === 'undefined' || !window.navigator.getUserMedia;
}

export async function getCameraAccess(){
  await navigator.getUserMedia({video: true}, (stuff)=>{console.log(stuff)} , ()=>{})
  // console.log(media)
}