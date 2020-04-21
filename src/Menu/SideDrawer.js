import React, { Component, Fragment } from 'react';
import { FaRegEye, FaDatabase } from "react-icons/fa";
import { IoIosLogOut, IoIosSettings, } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";
import { MdTagFaces } from "react-icons/md";
import AssignmentIcon from '@material-ui/icons/Assignment';
import classes from "./SideDrawer.css"
import SideMenus from "../Menu/SideMenus.js";


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
        { name: 'Evaluate', icon: AssignmentIcon },
        { name: 'Logout', icon: IoIosLogOut }
      ],

      showmenu: false,

      user : 'admin',

    };
  }

  showMenu = () => {
    this.setState({ showmenu: !this.state.showmenu }
    );
  }

  render() {

    const user = this.state.user;

    return (
      <div className={classes.drawer}>
        
        {
          user === 'admin' && (
            <>
              <div className={classes.Collapsive_menu}>
                  <FaDatabase className={classes.database_icon} />
                  <span className={classes.mainmenu}>                                                                                                   
                    Master Data
                    <GoChevronLeft className={!this.state.showmenu ? classes.arrow_icon : classes.arrow}
                                    onClick={this.showMenu} />
                  </span>
              </div>

              {
                this.state.showmenu
                  ? (
                    <div className={classes.dropdown_content}>
                      <ul >
                        <li><a href="#course">Course</a></li>
                        <li><a href="#source">Evaluation Parameter</a></li>
                        <li><a href="#evaluator">Evaluator</a></li>
                        <li><a href="#source">Trainee</a></li>
                      </ul>
                    </div>
                  )
                  : (
                    console.log("Sub-menu rendering is failed")
                  )
              }
              
            </>
          )
        }

        <SideMenus role={this.state[user]} />
      </div>
    );
  }
}

export default SideDrawer;