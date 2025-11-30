# ParallelCoordinates.isLoaded

ParallelCoordinates.isLoaded
-


# ParallelCoordinates.isLoaded


## Синтаксис


isLoaded();


## Описание


Метод isLoaded проверяет, загружена
 ли диаграмма.


## Комментарии


Метод возвращает значение true,
 если диаграмма загружена, иначе - значение false.


## Пример


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Проверим, загружена ли
 диаграмма с параллельными координатами:


// Проверям, загружена ли диаграмма
if (coord.isLoaded()) {
    console.log("Диаграмма загружена");
} else {
    console.log("Диаграмма не загружена");
}
В результате в консоль будет выведено сообщение о том, что диаграмма
 загружена.


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
