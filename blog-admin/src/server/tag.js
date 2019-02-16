import axios from './index';
import { handleMessage } from '../utils/helper'; 
export const getTagList = ({ page, params }) => (new Promise((resolve, reject) => {
  axios(
    {
      url: '/specialUrl',
      method: 'post',
      data: {
        variables: {params, page},
        query: `
          query($params: TagParams, $page: PageInput){
            tagList( params: $params, page: $page, orderBy: { creationTime: -1 } ){
              list{ name, icon id parent { id name } updateTime status color}
              page{ page pageSize }
              stats{ total }   
              rescode
              message
            }
          }`,
      }
    }
  )
  .then(function (response) {
    const data = response.data.data.tagList;
    resolve(data);
  })
  .catch(function (error) {
    // console.log(error);
  });
}));

export const createTags = ({body}) => (new Promise((resolve, reject) => {
  axios(
    {
      url: '/specialUrl',
      method: 'post',
      data: {
        variables: { body: [body] },
        query: `
          mutation($body: [UpdateTag!]!){
            createTags( body: $body ){ rescode message }
          }
        `,
      }
    }
  )
  .then(function (response) {
    const data = response.data.data.createTags;
    handleMessage({
      rescode: data.rescode,
      message: data.message
    });
    resolve(data);
  })
  .catch(function (error) {
    // console.log(error);
  });
}));

export const updateTagByIds = ({ id, body = {} }) => (new Promise((resolve, reject) => {
  axios(
    {
      url: '/specialUrl',
      method: 'post',
      data: {
        variables: {ids: [id], body},
        query: `
          mutation($ids: [ID!]!, $body: UpdateTag!){
            updateTagByIds( ids: $ids, body: $body ){ rescode message }
          }
        `,
      }
    }
  )
  .then(function (response) {
    const data = response.data.data.updateTagByIds;
    handleMessage({
      rescode: data.rescode,
      message: data.message
    });
    resolve(data);
  })
  .catch(function (error) {
    // console.log(error);
  });
}));

export const removeTagByIds = ({ id }) => (new Promise((resolve, reject) => {
  axios(
    {
      url: '/specialUrl',
      method: 'post',
      data: {
        variables: {ids: [id]},
        query: `
          mutation($ids: [ID!]!){
            removeTagByIds( ids: $ids){ rescode message }
          }
        `,
      }
    }
  )
  .then(function (response) {
    const data = response.data.data.removeTagByIds;
    handleMessage({
      rescode: data.rescode,
      message: data.message
    });
    resolve(data);
  })
  .catch(function (error) {
    // console.log(error);
  });
}));