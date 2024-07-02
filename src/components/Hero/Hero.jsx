import React from 'react';
import styles from "./Hero.module.css"

export function Hero () {
//   state = {  }
//   render() {
//     let addStyle = '';
//     if(this.props.isLoginPage){
//       addStyle = "-login"
//     }else if(this.props.isCalculationPage) {
//       addStyle = "-calculation"
//     }
//     // const addStyle = this.props.isLoginPage ? "-login" : '';
    return ( 
      <section className={styles.decoration} >
         
          <div className={styles.decoration_vector}></div>
          <div className={styles.decoration_strawberry}></div>
          <div className={styles.decoration_leaves}></div>
          <div className={styles.decoration_banana}></div>
         
      </section>
     );
  }
 
  