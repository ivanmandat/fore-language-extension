# NavigatorBox.copyObjects

NavigatorBox.copyObjects
-


# NavigatorBox.copyObjects


## Синтаксис


copyObjects(objects, parentKey, withContent);


## Параметры


objects. Массив объектов, которые
 необходимо скопировать;


parentKey. Ключ родительской
 вершины;


withContent. Определяет, будут
 ли объекты копироваться со всем своим содержимым.


## Описание


Метод copyObjects помещает в
 буфер обмена копии нескольких объектов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Предполагается наличие папки с
 ключом 323. Скопируем выделенные в списке объекты в папку с ключом 323:


navbox.copyObjects(navbox.getSelectedObjects(),
 323)


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
