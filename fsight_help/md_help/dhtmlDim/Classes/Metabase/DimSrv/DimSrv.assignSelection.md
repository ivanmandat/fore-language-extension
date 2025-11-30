# DimSrv.assignSelection

DimSrv.assignSelection
-


# DimSrv.assignSelection


## Синтаксис


assignSelection(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; assignOdId
 - моникёр импортируемой отметки; append
 - признак добавления отметки к уже имеющейся, если для аргумента установлено
 значение true, то отметка будет
 добавлена к уже имеющейся; keepGroup
 - признак сохранения установленных групп элементов, если для аргумента
 установлено значение true, то
 установленные группы будут сохранены; keepSchema
 - признак сохранения установленных схем элементов, если для аргумента
 установлено значение true, то
 установленные схемы будут сохранены; applyTransform
 - признак выполнения преобразований элементов, если для аргумента установлено
 значение true, то преобразования элементов будут выполнены; fireEvent
 - признак вызова события [DimSrv.SelectionChanged](DimSrv.SelectionChanged.htm),
 если для аргумента установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод assignSelection отмечает
 элементы справочника по указанному моникёру.


## Пример


Для выполнения примера необходимо наличие объекта класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. «[Конструктор
 DimSrv](Constructor_DimSrv.htm)»). Установим отметку всем дочерним элементам у элемента с ключом
 «YEARS:2000» и получим наименования всех отмеченных элементов:


// Добавляем обработчик события изменения отметки элементов
dimService.SelectionChanged.add(function(sender, args) {
    console.log("Изменилась отметка элементов");
});
// Устанавливаем отметку всем дочерним элементам у элемента с ключом «YEARS:2000»
var args = {
    keys: ["YEARS:2000"],
    selCommand: PP.Mb.SelCommands.Select,
    dmElRelative: PP.Mb.DmElRelative.Children
};
dimService.selectByKeys(dim, args);
// Получаем наименования всех отмеченных элементов справочника
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Наименования отмеченных элементов:");
    for (var i in elems) {
        console.log(elems[i].n);
    }
}
dimService.getAllSelectedEls(dim, func);
В результате выполнения примера в консоль были выведены наименования
 всех отмеченных элементов:


Наименования отмеченных элементов:


I квартал 2000


II квартал 2000


III квартал 2000


IV квартал 2000


Теперь программно откроем копию измерения и перенесём отметку из первого
 измерения:


// Создаём копию измерения
var dim2 = dim.clone();
// Переносим отметку из первого справочника
var args = {
    assignOdId: dim.getOdId(),
    append: true
}
dimService.assignSelection(dim2, args);
// Получаем наименования всех отмеченных элементов нового справочника
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Наименования отмеченных элементов нового справочника:");
    for (var i in elems) {
        console.log(elems[i].n);
    }
}
dimService.getAllSelectedEls(dim2, func);
В результате в консоль будут выведены наименования отмеченных элементов
 нового справочника:


Наименования отмеченных элементов нового справочника:


I квартал 2000


II квартал 2000


III квартал 2000


IV квартал 2000


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
