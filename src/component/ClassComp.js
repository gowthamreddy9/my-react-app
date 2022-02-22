import React from 'react';


class ClassComp extends React.Component {
    constructor(props) {
        super(props);
     }
   render() {
      return (
         <div>
             <h1>This is Class component</h1>
            <div><b>Item:</b> <em>Mango Juice</em></div>
            <div><b>Amount:</b> <em>30.00</em></div>
            <div><b>Spend Date:</b> <em>2020-10-10</em></div>
            <div><b>Category:</b> <em>Food</em></div>
         </div>
      );
    // return (
    //     <div>
    //        <div><b>Item:</b> <em>{this.props.name}</em></div>
    //        <div><b>Amount:</b> <em>{this.props.amount}</em></div>
    //        <div><b>Spend date:</b> 
    //           <em>{this.props.spenddate.tostring()}</em></div>
    //        <div><b>Category:</b> <em>{this.props.category}</em></div>
    //     </div>
    //  );
   }
  
}
export default ClassComp;