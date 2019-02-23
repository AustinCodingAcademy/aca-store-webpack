
class App extends React.Component{
   state={
       shoppingCart:[],
       whatToShow:0,
       products:[]
   }
   componentDidMount(){
    fetch('https://acastore.herokuapp.com/products')
    .then((response)=> {
      return response.json();
    })
    .then((data) =>{
      this.setState({products:data})
    });
   }
   changeView = (view)=>{
      // this.setState({whatToShow:view});
    this.setState(()=>{
        return {whatToShow:view}
    })
   }
   addItemToCart = (product)=> {
    // don't do this!!!
    //this.setState({})
    //expect the state to already be set
    //and try to do something afterward
    this.setState((state,props)=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render(){
       let content = null;

       if(this.state.whatToShow ===0){
        content = <ProductList 
            addItemToCart ={this.addItemToCart}
            products={this.state.products} />
       }else{
        content = <ShoppingCart cart={this.state.shoppingCart} />
       }
        return (
        <Layout 
       
        changeView ={this.changeView}
        shoppingCart={this.state.shoppingCart} >
         {content}
        </Layout>
        );
   }
}

