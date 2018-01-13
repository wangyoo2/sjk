/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: api地址
 * routerMode: 路由模式
 *
 */
let baseUrl;
let routerMode;

if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://localhost:8080/lingxi-scalefarms-runtime';
	baseUrl = 'http://localhost:8080/lingxi-scalefarms-runtime-1.0';
	routerMode = 'hash'
}else{
	baseUrl = '/lingxi-scalefarms-runtime-1.0';
	//baseUrl = 'http://localhost:8080/lingxi-aquaculture-runtime-1.0';
	// baseUrl = 'http://localhost:8080/lingxi-scalefarms-runtime-1.0';
	routerMode = 'hash'
}

export {
	baseUrl,
	routerMode,
}
