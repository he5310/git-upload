export default function pageJumpTo(extParams){
	if(extParams.skipPage=="线路列表-目的地分类"){
		this.$store.commit('setFlid',extParams.flid);
		this.$router.push('/route/lists'+this.$store.state.shareParam)
	}
	if(extParams.skipPage=="线路列表"){
		if(extParams.mddId){
			this.$store.commit('setSearchParams',{mdd:extParams.mddId,p:1,per:10});
			this.$store.commit('setSearchTitle',extParams.title);
			this.$router.push('/route/list'+this.$store.state.shareParam)
		}
	}
	if(extParams.skipPage=="线路详情"){
		this.$router.push('/route/detail/'+extParams.productId+this.$store.state.shareParam)
	}
}