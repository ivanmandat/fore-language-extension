# MapMaster.AreaVisualPanel.SettingChanged

MapMaster.AreaVisualPanel.SettingChanged
-


**


# AreaVisualPanel.SettingChanged


## Синтаксис


SettingChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Name - название элемента управления, в котором произошло изменение, Value - новое значение.


## Описание


Событие SettingChanged** наступает при изменении настроек панели.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [MapMaster](../../Components/MapMaster/MapMaster.htm) с наименованием «master» (см. «[Пример размещения компонентов MapMaster и EaxMasterBox](../../Components/MapMaster/MapMaster_and_EaxMasterBox.htm)»). Добавим обработчик события SettingChanged:


avp = master.getAreaVisualPanel();


avp.SettingChanged.add(function (sender, args) {


    avp.getMapChart().setBackground(new PP.SolidColorBrush({


        Color: "Yellow",


        Opacity: 0.2


    }))


});


После выполнения примера при смене настройки на вкладке «Цветовой индикатор» фон карты изменится на светло-желтый.


См. также:


[MapMaster.AreaVisualPanel](MapMaster.AreaVisualPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
