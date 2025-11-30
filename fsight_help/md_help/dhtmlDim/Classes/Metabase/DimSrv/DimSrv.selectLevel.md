# DimSrv.selectLevel

DimSrv.selectLevel
-


# DimSrv.selectLevel


## Синтаксис


selectLevel(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; groupId - идентификатор
 группы; selCommand - тип операции,
 элемент перечисления PP.Mb.SelCommands; fireEvent
 - признак вызова события [DimSrv.SelectionChanged](DimSrv.SelectionChanged.htm),
 если для параметра установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод selectLevel устанавливает
 отметку элементам заданного уровня.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree», источником которого является справочник «dim»
 (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Определим временной промежуток, охватываемый
 элементами справочника, с учётом отмеченного уровня:


// Создаём сервис для работы со справочниками
var dimService = new PP.Mb.DimSrv({
    Metabase: mb
});
// Создаём источник данных
var dimSource = new PP.Mb.DimSource({
    Metabase: mb
});
function selectLevel(level) {
    var args = {
        selId: dim.getOdId().id,
        levelId: level,
        selCommand: PP.Mb.SelCommands.Select,
        fireEvent: true
    };
    function callback(sender, args) {
        // Прочитаем ответ сервера
        var res = JSON.parse(args.ResponseText);
        var res = JSON.parse(args.ResponseText);
        var firstSelected = PP.getProperty(res, "ChangeDimSelectionResult.selectionInfo.firstSelected");
        var lastSelected = PP.getProperty(res, "ChangeDimSelectionResult.selectionInfo.lastSelected");
        if(firstSelected && lastSelected) {
            console.log("%s - %s", firstSelected.n, lastSelected.n);
        }
    };
    function errCallback(sender, args) {
        if(args) {
            console.log(args.ResponseText);
        }
    };
    dimSource.addSelection(dim.getOdId());
    // Отмечаем отметку элементам для выбранного уровня
    dimService.selectLevel(dimSource, args, callback, errCallback);
};
// Устанавливаем отметку элементам уровня «Год»
selectLevel(1);
// Устанавливаем отметку элементам уровня «Квартал»
selectLevel(3);
// Устанавливаем отметку элементам уровня «Месяц»
selectLevel(4);
В результате выполнения примера в консоли браузера был выведен временной
 промежуток, охватывающий все элементы справочника и учитывающий отмеченные
 уровни - месяц, квартал, год:


1990 - 2005


1990 - IV квартал 2005


1990 - дек 2005


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
