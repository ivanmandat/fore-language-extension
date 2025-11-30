# TabSheet.getContainer

TabSheet.getContainer
-


**


# TabSheet.getContainer


## Синтаксис


getContainer();


## Описание


Метод getContainer** возвращает DOM-элемент контейнера таблицы.


## Комментарии


Метод возвращает значение типа HTMLDivElement.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим DOM-элемент и идентификатор контейнера таблицы:


// Получим DOM-элемент контейнера таблицы
var domElement = tabSheet.getContainer();
console.log("DOM-элемент контейнера таблицы:");
console.log(domElement);
// Получим идентификатор DOM-элемента контейнера таблицы
var id = tabSheet.getContainerId();
console.log("Идентификатор DOM-элемента контейнера таблицы: " + id);

В результате выполнения примера в консоли браузера были выведены DOM-элемент и идентификатор контейнера таблицы:


DOM-элемент контейнера таблицы:

<div id="tabSheet1" class="PPUiTabSheetContainer PPC" tabindex="100" style="height: 190px; width: 350px;" enabled="enabled">…</div>

Идентификатор DOM-элемента контейнера таблицы: tabSheet1_tabsheet_container


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
