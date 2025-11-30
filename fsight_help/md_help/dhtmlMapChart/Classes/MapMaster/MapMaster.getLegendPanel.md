# MapMaster.getLegendPanel

MapMaster.getLegendPanel
-


**


# MapMaster.getLegendPanel


## Синтаксис


getLegendPanel();


## Описание


Метод getLegendPanel**
 возвращает [панель «Легенда»](MapMaster.getLegendPanel.htm)
 мастера карты.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [MapMaster](../../Components/MapMaster/MapMaster.htm) с наименованием
 «master» (см. «[Пример
 размещения компонентов MapMaster и EaxMasterBox](../../Components/MapMaster/MapMaster_and_EaxMasterBox.htm)»). Добавим на страницу
 [флажки](dhtmlUi.chm::/Components/CheckBox/CheckBox.htm),
 при установке/снятии которых будут отображаться/скрываться панели [мастера
 карты](../../Components/MapMaster/MapMaster.htm).


Для этого в теге BODY добавьте элементы div, в которых будут размещаться
 флажки:


    <div id = "CB1"></div>


    <div id = "CB2"></div>


    <div id = "CB3"></div>


В теге SCRIPT добавьте код для создания флажков:


        var checkbox1 = new PP.Ui.CheckBox({//Создаем экземпляр компонента CheckBox
            ParentNode: document.getElementById("CB1"),
            Content: "Цветовой индикатор"
        });
        checkbox1.CheckedChanged.add(function (sender, args) {//Добавляем обработчик события CheckedChanged
            var cb1 = checkbox1.getChecked(); //Создаем переменную, содержащую значение свойства Checked
            if (cb1 === true)//Если флажок установлен,
                master.getAreaVisualPanel().show(); //показываем панель «Цветовой индикатор»
            else
                master.getAreaVisualPanel().hide();
        });
        var checkbox2 = new PP.Ui.CheckBox({//Создаем экземпляр компонента CheckBox
            ParentNode: document.getElementById("CB2"),
            Content: "Индикатор объема"
        });
        checkbox2.CheckedChanged.add(function (sender, args) {//Добавляем обработчик события CheckedChanged
            var cb2 = checkbox1.getChecked(); //Создаем переменную, содержащую значение свойства Checked
            if (cb2 === true)//Если флажок установлен,
                master.getVisual3DPanel().show(); //показываем панель «Индикатор объема»
            else
                master.getVisual3DPanel().hide(); //иначе - скрываем
        });
        var checkbox3 = new PP.Ui.CheckBox({//Создаем экземпляр компонента CheckBox
            ParentNode: document.getElementById("CB3"),
            Content: "Легенда"
        });
        checkbox3.CheckedChanged.add(function (sender, args) {//Добавляем обработчик события CheckedChanged
            var cb3 = checkbox1.getChecked(); //Создаем переменную, содержащую значение свойства Checked
            if (cb3 === true)//Если флажок установлен,
                master.getLegendPanel().show(); //показываем панель «Цветовой индикатор»
            else
                master.getLegendPanel().hide();
        });

После выполнения примера на странице будут размещены [флажки](dhtmlUi.chm::/Components/CheckBox/CheckBox.htm)
 с наименованиями, соответствующими названиям панелей [мастера
 карты](../../Components/MapMaster/MapMaster.htm). При установке/снятии [флажка](dhtmlUi.chm::/Components/CheckBox/CheckBox.htm)
 будет отображена/скрыта соответствующая панель [мастера](../../Components/MapMaster/MapMaster.htm).


См. также:


[MapMaster](../../Components/MapMaster/MapMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
