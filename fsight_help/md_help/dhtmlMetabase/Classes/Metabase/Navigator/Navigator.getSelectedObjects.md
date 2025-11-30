# Navigator.getSelectedObjects

Navigator.getSelectedObjects
-


# Navigator.getSelectedObjects


## Синтаксис


getSelectedObjects(): Array;


## Описание


Метод getSelectedObjects возвращает
 массив выделенных объектов в списке объектов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Выделим объекты и получим выделенные
 объекты:


obj = nav.getSelectedObjects();
console.debug(JSON.stringify(obj, null, 4));
После выполнения примера в консоль была выведена информация о выделенных
 объектах.


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
