# FilterEls

FilterEls
-


# FilterEls


## Синтаксис


FilterEls: Object


## Описание


Свойство FilterEls содержит
 объект с параметрами фильтров элементов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setFilterEls,
 а возвращается с помощью метода getFilterEls.


Параметры метода setFilterEls:


- dimFilter. Объект с параметрами
 фильтра;


- els. Массив элементов, для
 которых задан фильтр с указанными параметрами.


Параметры метода getFilterEls:


- dimFilter. Параметры фильтрации,
 экземпляр класса PP.Mb.DimFilter;


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../Components/Metabase/DimTree/DimTree.htm) с
 наименованием «dimTree» (см. «[Пример
 создания компонента DimTree](../../Components/Metabase/DimTree/DimTree_Example.htm)»). Установим и отфильтруем элементы измерения:


function filterElements(dim, filter) {
    var result = [];
    var elems = dim.getFilterEls(filter);
    for (var i in elems) {
        var elem = elems[i];
        if (filter && filter.getType() === "Contains" && (elem.indexOf(filter.getValue()) >= 0)) {
            result.push(elem);
        }
    }
    return result;
};
//Получаем источник измерения
dim = dimTree.getSource();
//Устанавливаем параметры фильтра
var filter = new PP.Mb.DimFilter({
    Value: "4",
       Type: "Contains",
       Attr: "NAME",
       CaseSensitive: false
});
//Указываем параметры фильтра для элементов измерения
dim.setFilterEls(filter, ["YEARS:2002", "YEARS:2003", "YEARS:2004"]);
console.log("Исходные элементы: %s", dim.getFilterEls(filter).toString());
//Выводим в консоль ключи элементов, для которых были указаны параметры фильтра
var result = filterElements(dim, filter);
console.log("Отфильтрованные элементы: %s", result.toString());
В результате выполнения примера были установлены элементы YEARS:2002,
 YEARS:2003, YEARS:2004, из которых были отфильтрованы те, которые содержат
 символ «3»:


Исходные элементы: YEARS:2002,YEARS:2003,YEARS:2004


Отфильтрованные элементы: YEARS:2004


Очищаем установленные фильтры у всех элементов:


dim.clearFilterCache();
В результате параметры фильтрации были сняты со всех элементов.


См. также:


[DimSourceSettings](DimSourceSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
