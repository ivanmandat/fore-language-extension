# ToolBarButton.StateChanged

ToolBarButton.StateChanged
-


# ToolBarButton.StateChanged


## Синтаксис


StateChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие StateChanged наступает при смене состояния кнопки.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ToolBar](../../Components/ToolBar/ToolBar.htm) с наименованием «toolBar» (см. «[Пример создания компонента ToolBar](../../Components/ToolBar/Example_ToolBar.htm)»).


//Добавим на панель инструментов 4 кнопки: 2 переключателя и 2 флажка:


    toolBar.addItem(new PP.Ui.ToolBarButton({ Content: "1", IsToggle: true


}));


    toolBar.addItem(new PP.Ui.ToolBarButton({ Content: "2", IsToggle: true


}));


    toolBar.addItem(new PP.Ui.ToolBarButton({ Content: "3", GroupName: "Gr"


}));


    toolBar.addItem(new PP.Ui.ToolBarButton({ Content: "4", GroupName: "Gr"


}));


    var children = toolBar.getItems();


//Создаем функцию - обработчик события StateChange:


    function onStateChange() {


        for (var i = 0; i < children.length; i++) {


            var checked = toolBar.getItem(i).getIsChecked();


            var toggle = toolBar.getItem(i).getIsToggle();


            if (checked == true) {


                 if (toggle == true)


                     toolBar.getItem(i).setContent("check" + i);


                 else


                     toolBar.getItem(i).setContent("radio" + i);


             }


        }


    }


//Добавляем обработчик события для всех кнопок панели инструментов:


    for (var i = 0; i < children.length; i++) {


        toolBar.getItem(i).StateChanged.add(onStateChange);


    }


После выполнения примера на панель инструментов будут добавлены 2 переключателя и 2 флажка. При выделении для них устанавливаются новые названия.


См. также:


[ToolBarButton](ToolBarButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
