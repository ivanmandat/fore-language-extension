# MapMaster.hide3DPanel

MapMaster.hide3DPanel
-


**


# MapMaster.hide3DPanel


## Синтаксис


hide3DPanel();


## Описание


Метод hide3DPanel** скрывает [панель «Индикатор объема»](../Visual3DPanel/MapMaster.Visual3DPanel.htm) [мастера карты](../../Components/MapMaster/MapMaster.htm).


## Комментарии


Чтобы отобразить панель «Индикатор объема», используйте метод [MapMaster.hide3DPanel](MapMaster.hide3DPanel.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [MapMaster](../../Components/MapMaster/MapMaster.htm) с наименованием «master» (см. «[Пример размещения компонентов MapMaster и EaxMasterBox](../../Components/MapMaster/MapMaster_and_EaxMasterBox.htm)»). Добавим кнопки для скрытия и отображения панели мастера «Индикатор объема». В теге BODY добавьте элементы DIV c идентификаторами «but1» и «but2». В теге SCRIPT добавьте код для размещения кнопок:


        var but1 = new PP.Ui.Button({
            ParentNode: document.getElementById("but1"),
            Content: "Скрыть панель Индикатор объема",
            //Если карта отображается не в режиме 3D, скроем панель «Индикатор объема»
            Click: function (sender, args) { if (master.getMapChartSL() == null) master.hide3DPanel() }
        });
        var but2 = new PP.Ui.Button({
            ParentNode: document.getElementById("but2"),
            Content: "Показать панель Индикатор объема",
            //Если тип карты «SVG», покажем панель Индикатор объема
            Click: function (sender, args) { if (master.getMapType() == "SVG") master.show3DPanel() }
        });

После выполнения примера на странице будут размещены кнопки «Скрыть панель Индикатор объема» и «Показать панель Индикатор объема». При нажатии на первую кнопку панель будет скрыта, при условии что карта отображается не в формате 3D. При нажатии на вторую кнопку панель отобразится, при условии что выбран [тип карты](../../Enums/MapChartType.htm) «SVG».


См. также:


[MapMaster](MapMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
