# TabSheetModel.getObjectsJSON

TabSheetModel.getObjectsJSON
-


**


# TabSheetModel.getObjectsJSON


## Синтаксис


getObjectsJSON();


## Описание


Метод getObjectsJSON** возвращает объекты таблицы в JSON-формате.


## Комментарии


Метод возвращает JSON-объект со следующими полями: H - высота объекта, L - отступ слева, LC - индекс столбца ячейки, в область которой вставлен объект, OT - тип объекта, T - отступ сверху, TR - индекс строки ячейки, в область которой вставлен объект, U - адрес ссылки на объект, V - признак видимости объекта, W - его ширина.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также в ячейке с координатами (1, 1) должен быть вставлен значок в виде объекта типа PP.Ui.[TabSheetObject](../TabSheetObject/TabSheetObject.htm) с наименованием «tabSheetObject» (см. страницу описания метода [TabSheet.addObject](../TabSheet/TabSheet.addObject.htm)). Получим адрес объекта и в пределах которой расположен его левый верхний угол:


// Получим модель таблицы
var model = tabSheet.getModel();
// Получим массив объектов таблицы в JSON-формате
var objectsJSON = model.getObjectsJSON();
for (var i in objectsJSON) {
    var object = objectsJSON[i];
    console.log("Адрес объекта: " + object.U);
    console.log("Координаты размещения объекта: (" + object.TR + ", " + object.LC + ")")
};

В результате выполнения примера в консоли браузера был выведен адрес объекта и координаты ячейки, в пределах которой расположен его левый верхний угол:


Адрес объекта: img/home.png

Координата размещения объекта: (1, 1)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
