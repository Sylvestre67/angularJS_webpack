export const ossHomeService = ($resource) => {
	'ngInject'
	return $resource('/mocks/api/channel/video_length/:id.json',{},
		{
			get:{ isArray:true }
		})
};