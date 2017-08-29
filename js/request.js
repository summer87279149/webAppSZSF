(function() {
	var getConfig = {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		}
	}
	var putConfig = {
		dataType: 'json', //服务器返回json格式数据
		type: 'put', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		}
	}
	var postConfig = {
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json'
		}
	}
	var rooturl = 'http://36.111.195.164:9081/';
	var ceshiurl = 'http://36.111.195.164:9081/'
	var httprequest = {
		getDetail: function(shopid, suc, err) {
			console.log('请求题里面shopid是', shopid)
			mui.ajax(rooturl + 'api/dp/' + shopid, {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					//异常处理；
					console.log(type);
//					err(errorThrown)
				}
			});
		},
		getNearShops: function(page, location, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(rooturl + 'api/dp/GetdpsNear'+'?$top='+perPageNumbers+'&$skip='+pageNumber+'&location='+location, {
				data: {
					location: location,
					$top: perPageNumbers,
					$skip: pageNumber
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log('data=',data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					//异常处理；
					console.log(type);
					err()
				}
			});
		},
		getHotShops: function(page, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(rooturl + 'api/dp/GetdpsHot'+'?$top='+perPageNumbers+'&$skip='+pageNumber, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		getNewShops: function(page, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(rooturl + 'api/dp/GetdpsNew'+'?$top='+perPageNumbers+'&$skip='+pageNumber, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		addVisitNumber: function(shopid, suc, err) {
			mui.ajax(rooturl + 'api/dp/UpdatedpDJAdd1/' + shopid, {
				dataType: 'json', //服务器返回json格式数据
				type: 'put', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log('put请求失败', errorThrown);
					err()
				}
			});
		},
		search: function(content, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = 0 * 10;
			mui.ajax(rooturl + 'api/dp/Querydp'+'?$top='+perPageNumbers+'&$skip='+pageNumber, {
				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber,
					dpname: '张师傅'
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		getHotShopsCatagory(catagoryID, page, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(rooturl + 'api/dp/' + catagoryID + '/GetdpsHotBydptype'+'?$top='+perPageNumbers+'&$skip='+pageNumber, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber,
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log('返回时：',data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		getNewShopsCatagory(catagoryID, page, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(rooturl + 'api/dp/' + catagoryID + '/GetdpsNewBydptype'+'?$top='+perPageNumbers+'&$skip='+pageNumber, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber,
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		getNearShopsCatagory(catagoryID, page, locat, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			var url = rooturl + 'api/dp/' + catagoryID + '/GetdpsNearBydptype'+'?location='+locat+'&$top='+perPageNumbers+'&$skip='+pageNumber
			mui.ajax(url, {
//				data: {
//					location: locat,
//					$top: perPageNumbers,
//					$skip: pageNumber,
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err()
				}
			});
		},
		getGoodsOfShop: function(dpid, suc, err) {
			var perPageNumbers = 100;
			var pageNumber = 0;
			var url = rooturl + 'api/good/' + dpid + '/goods'+'?$top='+perPageNumbers+'&$skip='+pageNumber
			console.log('请求地址:', url)
			mui.ajax(url, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber,
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					err(errorThrown)
				}
			});
		},
		getGoodsByID: function(gid, suc, err) {
			var url = ceshiurl + 'api/good/' + 23
			mui.ajax(url, {
				data: {},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					err(errorThrown)
				}
			});
		},
		buyGoods: function(data, token, suc, err) {
			var url = ceshiurl + 'api/good/Addshop_orderlist?token=' + token
			mui.ajax(url, {
				data: data,
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					err(errorThrown)
				}
			});
		},
		joinUs(data, suc, err) {
			var obj = JSON.stringify(data);
			var url = rooturl + 'api/dp/Addsqrzlist' + '?sqrzlistModel=' + obj
			mui.ajax(url, {
				data: data,
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});

		},
		refreshToken: function(token, suc, err) {
			var url = ceshiurl + 'api/client/refreshToken?token=' + token
			mui.ajax(url, {
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					err(errorThrown)
				}
			});
		},
		getSmsCode: function(tel, suc, err) {
			var url = ceshiurl + 'api/sms/register'
			mui.ajax(url, {
				data: {
					tel
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		login: function(tel, pwd, suc, err) {
			var url = ceshiurl + 'api/client/login'
			mui.ajax(url, {
				data: {
					Tel_No: tel,
					Tel_PassWord: pwd
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});

		},
		regist: function(tel, pwd, yzm, suc, err) {
			mui.ajax(ceshiurl + 'api/client/register', {
				data: {
					Tel_No: tel,
					Tel_PassWord: pwd,
					Code: yzm
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		getMyInfo: function(token, suc, err) {
			var url = ceshiurl + 'api/client/Getclient?token=' + token

			mui.ajax(ceshiurl + 'api/client/Getclient?token=' + token, {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		//还没写完，注意data用的是测试数据
		modifyMyInfo: function(token, data, suc, err) {
			mui.ajax(ceshiurl + 'api/client/UpdateclientAddressInfo?token=' + token, {
				data: {
					"Client_RealName": "张三",
					"zstel": "13777878576",
					"Client_Address": "测试地址"
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'put', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		getAllMyCollection: function(token, suc, err) {
			var perPageNumbers = 1000;
			var pageNumber = 0 * 10;
			var url = ceshiurl + 'api/client/Getdpshoucanglist?token=' + token+'&$top='+perPageNumbers+'&$skip='+pageNumber
			console.log('获取我所有的收藏', url)
			mui.ajax(ceshiurl + 'api/client/Getdpshoucanglist?token=' + token+'&$top='+perPageNumbers+'&$skip='+pageNumber, {
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log('dadwada',data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		getMyCollection: function(page, token, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			var url = ceshiurl + 'api/client/Getdpshoucanglist?token=' + token+'&$top='+perPageNumbers+'&$skip='+pageNumber;
			console.log('woocaaaa', url)
			mui.ajax(url, {

				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		getMyOrderToShop: function(page, token, suc, err) {
			var perPageNumbers = 10;
			var pageNumber = page * 10;
			mui.ajax(ceshiurl + 'api/client/Getshop_orderlist?token=' + token+'&$top='+perPageNumbers+'&$skip='+pageNumber, {
//				data: {
//					$top: perPageNumbers,
//					$skip: pageNumber,
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'get', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},
		addCollection: function(token, suc, err) {
			var a =1
			console.log('uli是',ceshiurl + 'api/client/Adddpshoucanglist?token='+token)
			mui.ajax(ceshiurl + 'api/client/Adddpshoucanglist?token='+token, {
//				data: {
//					'1':1
//				},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data.meg)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		},           
		deleteCollection:function(token, suc, err) {               
			var a = 1
			mui.ajax(ceshiurl + 'api/client/Deldpshoucanglist?token='+token, {
//				data: {
//					'1':1
//				},
				dataType: 'json', //服务器返回json格式数据
				type: 'delete', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'Content-Type': 'application/json'
				},
				success: function(data) {
					console.log(data.meg)
					suc(data)
				},
				error: function(xhr, type, errorThrown) {
					console.log(type);
					err(errorThrown)
				}
			});
		}

	}

	if(typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function() {
			return httprequest;
		});
	} else if(typeof module !== 'undefined' && module.exports) {
		module.exports = httprequest;
	} else {
		window.httprequest = httprequest;
	}
})()