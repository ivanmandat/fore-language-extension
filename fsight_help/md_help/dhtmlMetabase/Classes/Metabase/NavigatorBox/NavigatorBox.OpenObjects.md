# NavigatorBox.OpenObjects

NavigatorBox.OpenObjects
-


# NavigatorBox.OpenObjects


## Синтаксис


OpenObjects: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие OpenObjects наступает
 при двойном щелчке по объекту из списка.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Добавим обработчик события OpenObjects:


 navbox.OpenObjects.add(function
 ()


 {


    console.log(navbox.getObjectsListRootMbObject().getName());


    navbox.[setObjectListMode](NavigatorBox.setObjectListMode.htm)(PP.Mb.Ui.NavigatorBox.ObjectListMode.Large)


 });


После выполнения примера при двойном щелчке по объекту из списка в консоль
 браузера будет выдаваться сообщение с названием родительской папки выбранного
 объекта и объекты будут отображаться в виде крупных значков.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
