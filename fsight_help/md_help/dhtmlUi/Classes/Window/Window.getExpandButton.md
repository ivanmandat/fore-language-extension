# Window.getExpandButton

Window.getExpandButton
-


# Window.getExpandButton


## Синтаксис


getExpandButton ();


## Описание


Метод getExpandButton возвращает
 кнопку разворачивания окна.


## Комментарии


Кнопка разворачивания окна является экземпляром класса [RibbonButton](dhtmlRibbon.chm::/Classes/RibbonButton/RibbonButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Window](../../Components/Window/Window.htm) с наименованием
 «win» (см. «[Пример
 создания компонента Window](../../Components/Window/Example_Window.htm)»).


Для кнопки разворачивания окна добавим обработчик события Click: при
 нажатии на кнопку окно будет сворачиваться.


//Добавляем обработчик события
 Click для кнопки разворачивания окна:


win.getExpandButton().Click.add(function(sender,
 args){


    win.expand(false);


    });


После выполнения примера при нажатии на кнопку разворачивания окно будет
 свернуто.


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
