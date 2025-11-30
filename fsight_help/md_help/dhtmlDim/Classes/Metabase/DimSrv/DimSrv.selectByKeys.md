# DimSrv.selectByKeys

DimSrv.selectByKeys
-


# DimSrv.selectByKeys


## Синтаксис


selectByKeys(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; keys - ключи
 выделяемых элементов; selCommand
 - тип операции, элемент перечисления PP.Mb.SelCommands; dmElRelative
 - зависимые элементы, относительно указанных ключей, элемент перечисления
 PP.Mb.DmElRelative; fireEvent
 - признак вызова события [DimSrv.SelectionChanged](DimSrv.SelectionChanged.htm),
 если для параметра установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод selectByKeys устанавливает
 отметку элементам по ключам.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Добавим обработчик события изменения отметки элементов справочника.
 Установим отметку всем дочерним элементам у элемента с ключом «YEARS:2000»
 и получим наименования всех отмеченных элементов:


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
var elemsForUpdate = [];
dimService.selectByKeys(dim, args);
// Получаем наименования всех отмеченных элементов измерения
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Наименования отмеченных элементов:");
    for (var i in elems) {
        console.log(elems[i].n);
        elemsForUpdate.push(elems[i].k);
    }
}
dimService.getAllSelectedEls(dim, func);
// Обновляем элементы, которым была установлена отметка
dimService.updateStateData(dim, {keys: elemsForUpdate});
В результате в консоль были выведены наименования всех отмеченных элементов:


Изменилась отметка элементов


Наименования отмеченных элементов:


I квартал 2000


II квартал 2000


III квартал 2000


IV квартал 2000


Снимем отметку со всех элементов измерения и проверим наличие отмеченных
 элементов:


// Снимаем отметку со всех элементов
args = {
    dmSelectionArg: {
        elSelectOp: PP.Mb.SelCommands.Deselect,
        elRelative: PP.Mb.DmElRelative.All
    }
};
dimService.execCommand(dim, args);
// Проверяем наличие отмеченных элементов
var func2 = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els;
    console.log(elems ? "Есть отмеченные элементы" : "Отмеченных элементов нет");
}
dimService.getAllSelectedEls(dim, func2);
В результате в консоль был выведен результат проверки наличия отмеченных
 элементов:


Изменилась отметка элементов


Отмеченных элементов нет


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
