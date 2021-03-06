/*
 * File: MyViewport.ui.js
 * Date: Thu Feb 17 2011 09:40:50 GMT+0100 (CET)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

MyViewportUi = Ext.extend(Ext.Viewport, {
	layout: 'fit',
	initComponent: function() {
		this.items = [
			{
				xtype: 'panel',
				title: 'GIS-Browser',
				layout: 'border',
				id: 'GisBrowserPanel',
				items: [
					{
						xtype: 'panel',
						title: 'Infos und Werkzeuge',
						height: 333,
						width: 225,
						collapsible: true,
						boxMinWidth: 200,
						boxMaxWidth: 400,
						layout: 'border',
						region: 'west',
						floatable: false,
						minWidth: 200,
						split: true,
						collapseMode: 'standard',
						id: 'LeftPanel',
						items: [
							{
								xtype: 'treepanel',
								title: 'Kartenebenen',
								height: 159,
								split: true,
								region: 'center',
								collapsible: true,
								rootVisible: false,
								autoScroll: true,
								containerScroll: true,
								cls: 'x-tree-noicon',
								id: 'LayerTree',
								root: {
									text: 'Root',
									expanded: true,
									singleClickExpand: true
								},
								loader: {

								}
							},
							{
								xtype: 'panel',
								region: 'south',
								collapsible: true,
								boxMinHeight: 275,
								split: true,
								headerAsText: false,
								id: 'ToolsPanel',
								items: [
									{
										xtype: 'tabpanel',
										activeTab: 0,
										id: 'ToolTabPanel',
										items: [
											{
												xtype: 'panel',
												title: 'Legende',
												autoScroll: true,
												id: 'LegendTab'
											},
											{
												xtype: 'panel',
												title: 'Metadaten',
												layout: 'fit',
												id: 'SearchTab'
											}
										]
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						flex: 1,
						region: 'center',
						width: 100,
						layout: 'border',
						id: 'CenterPanel',
						items: [
							{
								xtype: 'panel',
								region: 'center',
								tpl: '',
								layout: 'fit',
								id: 'MapPanel',
								tbar: {
									xtype: 'toolbar',
									autoHeight: true,
									id: 'myTopToolbar',
									items: [
										{
											xtype: 'tbseparator'
										},
										{
											xtype: 'button',
											tooltip: 'Objektidentifizierung (Attributdaten)',
											toggleGroup: 'mapTools',
											enableToggle: true,
											icon: '/resources/gis_icons/mActionIdentify.png',
											allowDepress: true,
											tooltipType: 'title',
											iconCls: '',
											scale: 'medium',
											id: 'IdentifyTool'
										},
										{
											xtype: 'button',
											tooltip: 'MapTips anzeigen',
											toggleGroup: 'mapTools',
											enableToggle: true,
											icon: '/resources/gis_icons/mActionMapTips.png',
											allowDepress: true,
											tooltipType: 'title',
											iconCls: '',
											scale: 'medium',
											id: 'MapTips'
										},
										{
											xtype: 'tbtext',
											text: 'Objektidentifikation:'
										},
										{
											xtype: 'combo',
											width: 120,
											store: 'objIdentificationModes',
											valueField: 'value',
											mode: 'local',
											displayField: 'name',
											triggerAction: 'all',
											id: 'ObjectIdentificationModeCombo'
										},
										{
											xtype: 'tbseparator'
										},
										{
											xtype: 'button',
											enableToggle: true,
											allowDepress: true,
											toggleGroup: 'mapTools',
											icon: '/resources/gis_icons/mActionMeasure.png',
											tooltip: 'Distanz Messen',
											tooltipType: 'title',
											scale: 'medium',
											id: 'measureDistance'
										},
										{
											xtype: 'button',
											enableToggle: true,
											allowDepress: true,
											toggleGroup: 'mapTools',
											scale: 'medium',
											icon: '/resources/gis_icons/mActionMeasureArea.png',
											tooltipType: 'title',
											tooltip: 'Fläche Messen',
											id: 'measureArea'
										},
										{
											xtype: 'tbseparator'
										},
										{
											xtype: 'button',
											enableToggle: true,
											allowDepress: true,
											toggleGroup: 'mapTools',
											scale: 'medium',
											icon: '/resources/gis_icons/mActionFilePrint.png',
											tooltipType: 'title',
											tooltip: 'Karte drucken',
											id: 'PrintMap'
										},
										{
											xtype: 'tbfill'
										},
										{
											xtype: 'button',
											scale: 'medium',
											icon: '/resources/gis_icons/mActionUndo.png',
											tooltipType: 'title',
											tooltip: 'Suchfeld zurücksetzen',
											id: 'EmptySearchField'
										}
									]
								},
								bbar: {
									xtype: 'toolbar',
									id: 'myBottomToolbar',
									items: [
										{
											xtype: 'tbtext',
											text: 'Kartenapplikation ladet ...',
											id: 'mainStatusText'
										},
										{
											xtype: 'tbfill'
										},
										{
											xtype: 'tbtext',
											text: '',
											id: 'rightStatusText'
										},
										{
											xtype: 'tbtext',
											text: 'X/Y:'
										},
										{
											xtype: 'tbspacer'
										},
										{
											xtype: 'textfield',
											width: 130,
											regex: /^\d{6}\.?\d{0,2},\d{6}\.?\d{0,2}$/,
											enableKeyEvents: true,
											id: 'CoordinateTextField'
										},
										{
											xtype: 'tbtext',
											text: '1:'
										},
										{
											xtype: 'numberfield',
											minValue: 1,
											allowNegative: false,
											allowDecimals: false,
											width: 45,
											enableKeyEvents: true,
											id: 'ScaleNumberField'
										}
									]
								}
							},
							{
								xtype: 'treepanel',
								title: 'Attributdaten',
								rootVisible: false,
								region: 'east',
								collapsed: true,
								boxMinWidth: 300,
								boxMaxWidth: 600,
								collapsible: true,
								autoScroll: true,
								split: true,
								width: 300,
								id: 'AttributeDataTree',
								root: {
									text: 'Tree Node',
									expanded: true,
									editable: false
								},
								loader: {

								}
							}
						]
					}
				]
			}
		];
		MyViewportUi.superclass.initComponent.call(this);
	}
});
