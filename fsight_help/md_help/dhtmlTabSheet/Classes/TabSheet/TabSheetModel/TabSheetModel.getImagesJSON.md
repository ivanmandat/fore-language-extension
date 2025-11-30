# TabSheetModel.getImagesJSON

TabSheetModel.getImagesJSON
-


**


# TabSheetModel.getImagesJSON


## Синтаксис


getImagesJSON();


## Описание


Метод getImagesJSON** возвращает
 все значки таблицы в JSON формате.


## Комментарии


Метод возвращает JSON-объект со следующими полями: ConditionIcons -
 содержит данные значков, являющихся объектами, TabImages - содержит данные
 значков, расположенных в ячейках таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также в ячейке с координатами (0,
 1) должен быть вставлен значок типа PP.Ui.TabSheetCellPicture
 с наименованием «picture» (см. страницу «Конструктор
 TabSheetCellPicture»). Получим наименования значков, расположенных
 в ячейках таблицы, и их индексы:


// Получим модель таблицы
var model = tabSheet.getModel();
// Получим все значки таблицы в JSON-формате
var imagesJSON = model.getImagesJSON();
// Получим значки таблицы
var tabImage = imagesJSON.TabImages.TabImage;
if (tabImage != null) {
    for (var i in tabImage) {
        var image = tabImage[i];
        console.log("Наименование значка с индексом " + image.I + ": «" + image.$ + "»")
    }
};

В результате выполнения примера в консоли браузера были выведены наименования
 значков, расположенных в ячейках таблицы, и их индексы:


Наименование значка с индексом 0: «img/filter/sort-desc.png»

Наименование значка с индексом 1: «img/filter/sort-asc.png»

Наименование значка с индексом 2: «img/filter/sort-desc.png»

Наименование значка с индексом 3: «img/filter/sort-asc.png»


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
