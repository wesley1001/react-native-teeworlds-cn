const appHash = '0c4872a8';
const forumKey = '7QzjP443pk3B8zdUhe';

export async function getTopicList(sortby, page = 1) {
  let countResponse = await fetch('http://www.teeworlds.cn/mobcent/app/web/index.php?r=forum/topiclist');
  let countData = await countResponse.json();
  let count = countData.total_num;
  const body = 'sdkType=&boardId=0&circle=0&topOrder=0&filterId=0&platType=1&isImageList=1&sdkVersion=2.4.0&forumType=7&' +
  `page=${page}&appHash=${appHash}&forumKey=${forumKey}&sortby=${sortby}&pageSize=${count}`;
  const context = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": body.length,
		},
		body: body
	};
  let response = await fetch('http://www.teeworlds.cn/mobcent/app/web/index.php?r=forum/topiclist', context);
  let data = await response.json();
  return data;
}
