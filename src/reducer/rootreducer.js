const iniState={
	viewUser:"1",
	editPost:true
}

const root= (state=iniState,action)=> {
	const {type}=action
	if(type === "viewUser"){
		return {
			...state,
			viewUser:action.id
		}
	}
	else if(type === "editPost"){
		return {
			...state,
			editPost:action.setPost
		}
	}
	return state
}

export default root