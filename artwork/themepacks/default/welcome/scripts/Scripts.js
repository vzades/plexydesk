/*******************************************************************************
* This file is part of PlexyDesk.
*  Maintained by : Siraj Razick <siraj@kde.org>
*  Authored By  : Varuna Lekamwasam <vrlekamwasam@gmail.com>
*
*  PlexyDesk is free software: you can redistribute it and/or modify
*  it under the terms of the GNU Lesser General Public License as published by
*  the Free Software Foundation, either version 3 of the License, or
*  (at your option) any later version.
*
*  PlexyDesk is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU Lesser General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with PlexyDesk. If not, see <http://www.gnu.org/licenses/lgpl.html>
*******************************************************************************/
.pragma library

var infoDesktop = "PlexyDesk is a modular desktop renderer. We bring the web to desktop. Based on QGraphicsView. We aim for simply cool desktop with exapnding through operating systems";
var infoAddingWidget = "PlexyDesk has the capability to use complete Qt/C++ widgets as well as it supports the QML applications.\nTo add a QML application just drag and drop to the desktop, we'll load the application to the desktop. Just write and see. simple and cool :D\nTo add the Qt/C++ widgets please use the QDBUS command. We are building the panels to load the widgets from UI. Please wait for our newest release.";
var addWidgetCommand = "qdbus org.PlexyDesk.Config /Configuration local.PlexyDesk.Config.addWidget <your_widget_name>";
var infoDeleteWidget = "Current PlexyDesk does not support automated widget removal. You can goto the ~/.config/plexydesk/plexydeskconf.conf and remove the widget entries from the conf file. Widgets will be removed after a reload";
var infoChangeWallpaper = "In PlexyDesk simply drag and drop your image to the desktop, we'll set the wallpaper to which you dropped. :D";
var infoDevelopment = "Visit us at redmine.plexyplanet.org, Use our widget API to develop Qt/C++ applications, Just write any QML and drag and drop. Visit GitHub and simply fork and start development. Development is simply exciting";
var infoWiki = "Visit our wiki page here are the links.. :D \n\n\thttp://redmine.plexyplanet.org/\n\thttp://plexyplanet.org/"

function changeState(base,stt) {
    base.state = stt;
}

function showInfo(clicked,topic,content)
{
    if (clicked === "Desktop")
    {
        topic.text = "Desktop";
        content.text = infoDesktop;
        //code.text = "";
    }
    else if (clicked === "Adding Widgets")
    {
        topic.text = "Adding Widgets";
        content.text = infoAddingWidget;
        //code.text = addWidgetCommand;
    }
    else if (clicked === "Removing Widgets")
    {
        topic.text = "Removing Widgets";
        content.text = infoDeleteWidget;
        //code.text ="";
    }
    else if (clicked === "Changing Wallpaper")
    {
        topic.text = "Changing Wallpaper";
        content.text = infoChangeWallpaper;
        //code.text = "";
    }
    else if (clicked === "Development")
    {
        topic.text = "Development";
        content.text = infoDevelopment;
        //code.text = "";
    }
    else if (clicked === "Wiki")
    {
        topic.text = "Wiki";
        content.text = infoWiki;
        //code.text = "";
    }
}

function buttonClicked(base,toState,clickedButton,topic,content)
{
    changeState(base,toState);
    showInfo(clickedButton,topic,content);
    changeState(base,toState);
}



