# NavigationBar.getActiveItem

NavigationBar.getActiveItem
-


# NavigationBar.getActiveItem


## Синтаксис


getActiveItem ()


## Описание


Метод getActiveItem возвращает активную вкладку панели.


## Пример


Для выполнения примера предполагается наличие на странице компонента [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB» (см. «[Пример создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавим кнопку, при нажатии на которую будет удалена активная панель:


var button = new PP.Ui.Button(


{


    ParentNode: document.getElementById("but1"),


    Content: "Remove active item",


    Click: function ()


    {


        NB.removeItem(NB.getActiveItem())


    }


})


После выполнения примера при нажатии на кнопку «Remove active item» будет удалена активная вкладка.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
