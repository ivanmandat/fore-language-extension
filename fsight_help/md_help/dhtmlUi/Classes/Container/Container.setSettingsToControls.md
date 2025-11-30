# Container.setSettingsToControls

Container.setSettingsToControls
-


# Container.setSettingsToControls


## Синтаксис


setSettingsToControls ();


## Параметры


settings. JSON-объект с настройками компонентов.


## Описание


Метод setSettingsToControls устанавливает общие настройки для дочерних элементов контейнера.


## Пример


Для выполнения примера предполагается наличие компонента [GridPanel](../../Components/GridPanel/GridPanel.htm) с наименованием «container» (см. «[Пример создания компонента GridPanel](../../Components/GridPanel/GridPanel_example.htm)»), на котором расположены компоненты, наследники класса [Control](../Control/Control.htm). Настроим некоторые свойства данных компонентов:


container.setSettingsToControls({


      IsRTL: true,


      Width: 100,


      ToolTip: "Элемент контейнера"


  });


После выполнения примера для компонентов, содержащихся в контейнере настроено отображение слева направо, ширина 100 пикселей и всплывающая подсказка с текстом «Элемент контейнера».


См. также:


[Container](Container.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
