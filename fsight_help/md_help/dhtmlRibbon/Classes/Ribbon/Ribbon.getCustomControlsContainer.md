# Ribbon.getCustomControlsContainer

Ribbon.getCustomControlsContainer
-


# Ribbon.getCustomControlsContainer


## Синтаксис


getCustomControlsContainer();


## Описание


Метод getCustomControlsContainer
 возвращает контейнер для пользовательских элементов управления.


## Комментарии


Возвращаемое значение - DOM-вершина контейнера.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Ribbon](Ribbon.htm) c наименованием «ribbon» (см. «[Пример размещения
 компонента Ribbon из JSON](../../Components/Ribbon/Example_Ribbon_JSON.htm)»). Пример выполняется в консоли браузера.
 Получим контейнер для пользовательских элементов:


// Получаем контейнер для пользовательских элементов
console.log(ribbon.getCustomControlsContainer);
В результате в консоль будет выведен контейнер для пользовательских
 элементов:


<div class="PPCustomControlsContainer"></div>


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
