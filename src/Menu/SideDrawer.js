import React, { Component } from 'react';
import { FaRegEye, FaDatabase } from "react-icons/fa";
import { IoIosLogOut, IoIosSettings, } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { MdTagFaces, MdAssignment } from "react-icons/md";
import classes from "./SideDrawer.css"
import SideMenus from "../Menu/SideMenus.js";
import * as Const from '../Constant.js';


class SideDrawer extends Component {
 
  constructor() {
   
    super();
    this.state = {
      admin: [
        { name: 'Configure Subcourse', icon: IoIosSettings },
        { name: 'View Evaluation', icon: FaRegEye },
        { name: 'Assign Evaluator', icon: MdTagFaces },
        { name: 'Logout', icon: IoIosLogOut }
      ],
      trainee: [
        { name: 'View Evaluation', icon: FaRegEye },
        { name: 'Logout', icon: IoIosLogOut }
      ],
      evaluator: [
        { name: 'Evaluate', icon: MdAssignment},
        { name: 'Logout', icon: IoIosLogOut }
      ],

      showmenu: false,
      
      user : Const.ADMIN,

    };
  }

  showMenu = () => this.setState({ showmenu: !this.state.showmenu});
  
  collapsiveMenus = () => {
    
    return (
      <>
        {
          this.state.showmenu 
          ? 
            <div className={classes.dropdown_content}>
              <ul>
                <li><a href="#course">Course</a></li>
                <li><a href="#source">Evaluation Parameter</a></li>
                <li><a href="#evaluator">Evaluator</a></li>
                <li><a href="#source">Trainee</a></li>
              </ul>
            </div>
          : 
            ''  
        }
      </>
    );
  }

  render() {

    const {user} = this.state;

    return (
      <div className={classes.drawer}>

        {
          user === 'admin' && (
            <>
              <div className={classes.collapsive_menu}>
                  <FaDatabase className={classes.database_icon} />
                  <span className={classes.mainmenu}>                                                                                                   
                    Master Data
                    <GoChevronLeft className={`${classes.arrow_icon} ${this.state.showmenu && classes.arrow}`}
                                    onClick={this.showMenu} />
                  </span>
              </div>
              {this.collapsiveMenus()}
            </>
          )
        }

        <SideMenus role={this.state[user]} />
      </div>
    );
  }
}

export default SideDrawer;
