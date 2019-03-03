import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxChartComponent } from '../assets/jqwidgets-ts/angular_jqxchart';
import { jqxLayoutComponent } from '../assets/jqwidgets-ts/angular_jqxlayout';
import { jqxDockingLayoutComponent } from '../assets/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxMenuComponent } from '../assets/jqwidgets-ts/angular_jqxmenu';
import { jqxTreeComponent } from '../assets/jqwidgets-ts/angular_jqxtree';
import { jqxButtonComponent } from '../assets/jqwidgets-ts/angular_jqxbuttons';
import { jqxWindowComponent } from '../assets/jqwidgets-ts/angular_jqxwindow';



import { jqxCheckBoxComponent } from "../assets/jqwidgets-ts/angular_jqxcheckbox";
import { jqxTabsComponent } from "../assets/jqwidgets-ts/angular_jqxtabs";

import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

    showHead: boolean = false;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    @ViewChild("windowReference") window: jqxWindowComponent;
    @ViewChild("showWindowButton") showWindowButton: jqxButtonComponent;
    @ViewChild("hideWindowButton") hideWindowButton: jqxButtonComponent;
    @ViewChild("resizeCheckBox") resizeCheckBox: jqxCheckBoxComponent;
    @ViewChild("dragCheckBox") dragCheckBox: jqxCheckBoxComponent;
    @ViewChild("tabsReference") tab: jqxTabsComponent;

    @ViewChild('viewServerExplorer1Btn') viewServerExplorer1Btn: jqxButtonComponent;
    @ViewChild('viewServerExplorer2Btn') viewServerExplorer2Btn: jqxButtonComponent;
    @ViewChild('viewServerExplorer3Btn') viewServerExplorer3Btn: jqxButtonComponent;
    @ViewChild('viewServerExplorer4Btn') viewServerExplorer4Btn: jqxButtonComponent;
    @ViewChild('viewServerExplorer5Btn') viewServerExplorer5Btn: jqxButtonComponent;
    @ViewChild('myDockingLayout') myDockingLayout: jqxDockingLayoutComponent;
    @ViewChild('windowReference') myWindow: jqxWindowComponent;
    constructor(
    private formBuilder: FormBuilder,
 
  
) {
    // redirect to home if already logged in
   
}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
   
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {

    
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
        this.showHead = true;
        this.window.close();
    }

   
}

    ngAfterViewInit(): void {

    
        this.window.createComponent(this.windowSettings);

        this.myWindow.open();
         this.myDockingLayout.createComponent({ width: 800, height: 600, layout: this.layout() });
    }
    onResizeCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.resizable(true);
        }
        else 
        {
            this.window.resizable(false);
        }
    }
 
    onDragCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.draggable(true);
        }
        else 
        {
            this.window.draggable(false);
        }
    }
 
    onShowButton(): void
    {
        this.window.open();
    }
 
    onHideButton(): void
    {
        this.window.close();
    }
 
    windowSettings: jqwidgets.WindowOptions =
    {
        height: 300,
        width: 500,
        maxHeight: 400,
        maxWidth: 700,
        minHeight: 200,
        minWidth: 200,
        position: { x: 300, y: 100 },
        showCollapseButton: true,
        initContent: (): void =>
        {
            this.tab.createComponent({ width: "100%", height: "100%" });
            this.window.focus();
        }
    }
	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
    }
    viewServerExplorerBtn1OnClick(): void {
        this.myDockingLayout.addFloatGroup(300, 200, { x: 500, y: 200 }, 'layoutPanel', 'Server Explorer', '<div id="serverExplorerTree" />',
            (): void => {
                let source = [{
                    icon: '../assets/images/dataadapter.png',
                    label: 'Data Connections',
                    expanded: true,
                    items: [{
                        icon: '../assets/images/validator.png',
                        label: 'northwinddatabase.mdf'
                    }]
                }, {
                    icon: '../assets/images/nav1.png',
                    label: 'Servers',
                    items: [{
                        icon: '../assets/images/nav1.png',
                        label: 'WorkStation3-PC'
                    }, {
                        icon: '../assets/images/dragdrop.png',
                        label: 'SharePoint Connections'
                    }]
                    }];
                jqwidgets.createInstance('#serverExplorerTree', 'jqxTree', { width: '99%', height: '99%', source: source });
            }
        );
        this.viewServerExplorer1Btn.disabled(true);
    }

    viewServerExplorerBtn2OnClick(): void {

      
        this.myDockingLayout.addFloatGroup(300, 200, { x: 500, y: 200 }, 'layoutPanel', 'Server Explorer', '<div id="serverExplorerTree1" />',
            (): void => {
                let source = {
                    type: 'documentGroup',
                    height: 400,
                    minHeight: 200,
                    items: [{
                        type: 'documentPanel',
                        title: 'Document 1',
                        contentContainer: 'Document1Panel'
                    },
                    {
                        type: 'documentPanel',
                        title: 'Document 2',
                        contentContainer: 'Document2Panel'
                    }]
                }               }
        );
        this.viewServerExplorer2Btn.disabled(true);
    }
    viewServerExplorerBtn3OnClick(): void {

      
      
        this.myDockingLayout.addFloatGroup(500, 300, { x: 350, y: 250 }, 'layoutPanel', 'float group', '<div id="serverExplorerTree3" />',
            (): void => {
                let source = {
                    type: 'floatGroup',
                    width: 500,
                    height: 300,
                    position: {
                        x: 350,
                        y: 250
                    },
                    items: [{
                        type: 'layoutPanel',
                        title: 'Output',
                        contentContainer: 'OutputPanel',
                       initContent:{},
                        selected: true
                    },
                    {
                        type: 'layoutPanel',
                        title: 'Output2',
                        contentContainer: 'OutputPanel',
                        selected: false
                    }]
                }               }
        );
        this.viewServerExplorer3Btn.disabled(true);
    }

    viewServerExplorerBtn4OnClick(): void {

       
      
        this.myDockingLayout.addFloatGroup(500, 300, { x: 350, y: 250 }, 'layoutPanel', 'tabbed group', '<div id="serverExplorerTree4" />',
            (): void => {
                let source = {
                    type: 'layoutGroup',
                    orientation: 'horizontal',
                    items: [
                   
                    {
                        type: 'tabbedGroup',
                        width: 220,
                        minWidth: 200,
                        items: [
                            ,
                            {
                                type: 'layoutPanel',
                                title: 'Properties',
                                contentContainer: 'PropertiesPanel'
                            }]
                    }]
                        }            }
        );
        this.viewServerExplorer4Btn.disabled(true);
    }

    viewServerExplorerBtn5OnClick(): void {

       
      
        this.myDockingLayout.addFloatGroup(500, 300, { x: 350, y: 250 }, 'layoutPanel', 'autoHideGroup', '<div id="serverExplorerTree5" />',
            (): void => {
                let source = {
                    type: 'autoHideGroup',
                    alignment: 'left',
                    width: 80,
                    unpinnedWidth: 200,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Toolbox',
                        contentContainer: 'ToolboxPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Help',
                        contentContainer: 'HelpPanel'
                    }]
                        }            }
        );
        this.viewServerExplorer5Btn.disabled(true);
    }
layout(): any[] {
    let layout = [
        {
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                // type: 'autoHideGroup',
                alignment: 'left',
                width: 80,
                unpinnedWidth: 200,
             
            }]
        }];
    return layout;
}
}
