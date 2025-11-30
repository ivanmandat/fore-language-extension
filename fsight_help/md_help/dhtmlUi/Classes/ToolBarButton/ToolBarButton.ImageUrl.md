# ToolBarButton.ImageUrl

ToolBarButton.ImageUrl
-


# ToolBarButton.ImageUrl


## Синтаксис


ImageUrl: String


## Описание


Свойство ImageUrl устанавливает путь к изображению кнопки.


## Комментарии


По умолчанию кнопка не содержит изображение.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ToolBar](../../Components/ToolBar/ToolBar.htm) с наименованием «toolBar» (см. «[Пример создания компонента ToolBar](../../Components/ToolBar/Example_ToolBar.htm)») и файла с пиктограммой с наименованием «icon.png».


//Создаем кнопку с изображением:


    var imgbtn = new PP.Ui.ToolBarButton({


            ImageUrl: "icon.png"


        });


//Добавляем кнопку на панель инструментов:


    toolBar.addItem(imgbtn);


После выполнения примера на панели инструментов будет размещена кнопка с изображением.


См. также:


[ToolBarButton](ToolBarButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
