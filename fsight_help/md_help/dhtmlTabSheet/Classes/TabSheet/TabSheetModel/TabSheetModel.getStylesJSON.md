# TabSheetModel.getStylesJSON

TabSheetModel.getStylesJSON
-


# TabSheetModel.getStylesJSON


## Синтаксис


getStylesJSON();


## Описание


Метод getStylesJSON возвращает
 стили в формате JSON.


## Комментарии


Метод возвращает массив объектов в формате JSON.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим стили в формате JSON:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим стили в формате JSON
model.getStylesJSON();

В результате выполнения примера были получены стили в формате JSON.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
