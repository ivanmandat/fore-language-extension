# NavigatorBox.isContainer

NavigatorBox.isContainer
-


# NavigatorBox.isContainer


## Синтаксис


isContainer(object): Boolean;


## Параметры


object. [PP.Mb.Object](../Object/Object.htm).
 Объект репозитория.


## Описание


Метод isContainer возвращает
 признак того, является ли объект репозитория контейнером.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Проверим, является ли выделенный объект контейнером
object = navbox.getFocusedObject();
console.log(navbox.isContainer(object) ? "Выделенный объект является контейнером" : "Выделенный объект не является контейнером");
В результате выполнения примера в консоль был выведен признак того,
 является ли выделенный объект контейнером.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
