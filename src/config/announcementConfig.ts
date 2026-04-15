import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "测试公告",

	// 公告内容
	content: "这是 Firefly 模板模块的测试公告，后续可以按需要保留、改写或删除。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: false,
		// 链接文本
		text: "稍后再定",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
