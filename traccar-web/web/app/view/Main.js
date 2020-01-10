/*
 * Copyright 2015 - 2017 Anton Tananaev (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    requires: [
        'Traccar.view.MainController',
        'Traccar.view.edit.Devices',
        'Traccar.view.State',
        'Traccar.view.Report',
        'Traccar.view.Events',
        'Traccar.view.map.Map'
    ],

    controller: 'mainController',

    layout: 'border',
    componentCls: 'toolbar-header-style',

    defaults: {
        collapsible: true,
        split: false
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        layout: 'accordion',
        width: Traccar.Style.deviceWidth,
        title: 'Painel de Gerenciamento',
        floatable: true,
        stateful: true,
        collapsed: true,
        stateId: 'devices-and-state-and-events-panel',
        componentCls: 'toolbar-header-style',

        defaults: {
            header: true,
            flex: 1
        },

        items: [{
            xtype: 'panel',
            type: 'vbox',
            title: Strings.devicesAndState,
            items: [{
                maxHeight: '250',
                region: 'center',
                flex: 1,
                title: Strings.deviceTitle,
                xtype: 'devicesView',
                reference: 'devicesView'
            }, {
                region: 'bottom',
                title: Strings.stateTitle,
                flex: 2,
                heigth: '30%',
                xtype: 'stateView',
                reference: 'stateView'
            }]
        }, {
            xtype: 'eventsView',
            reference: 'eventsView'
        }, {
            region: 'center',
            xtype: 'reportView',
            reference: 'reportView'
        }]
    }, {
        region: 'center',
        xtype: 'mapView',
        collapsible: false,
        header: false
    }]
});
