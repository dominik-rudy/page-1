document.querySelector('[name=searchBar]').addEventListener('input',function(){
    let x = this.value.replace("[a-zA-Z]", '');
    this.value=this.value.replace(x,"")
});