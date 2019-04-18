exports.handler = async event => {
  const statusCode = 404

  const response = {
    statusCode,
    body: JSON.stringify({
      status: `${statusCode} Not Found`,
      message: "何でもは知らないわよ。知ってることだけ"
    })
  }

  return response
}
