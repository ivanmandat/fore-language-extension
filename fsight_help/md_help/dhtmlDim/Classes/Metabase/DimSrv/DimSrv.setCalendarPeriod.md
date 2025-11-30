# DimSrv.setCalendarPeriod

DimSrv.setCalendarPeriod
-


# DimSrc.setCalendarPeriod


## Синтаксис


setCalendarPeriod(dim: PP.Mb.DimSource, args: Object,
 callback: Function|PP.Delegate, errorCallback: Function|PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: calendarLevel
 - устанавливаемый календарный период;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод setCalendarPeriod устанавливает
 календарный период для справочника.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree», источником которого является справочник «dim»
 (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Определим временной промежуток, охватываемый
 элементами справочника, используя разные календарные периоды:


// Создаём сервис для работы со справочниками
var dimService = new PP.Mb.DimSrv({
    Metabase: mb
});
function setCalendarPeriod(period) {
    var args = {
        calendarLevel: period
    };
    var readyCallback = function(sender, args) {
        // Прочитаем ответ сервера
        var res = JSON.parse(args.ResponseText);
        var firstSelected = PP.getProperty(res, "ChangeDimSelectionResult.selectionInfo.firstSelected");
        var lastSelected = PP.getProperty(res, "ChangeDimSelectionResult.selectionInfo.lastSelected");
        if(firstSelected && lastSelected) {
            console.log("%s - %s", firstSelected.n, lastSelected.n);
        }
    };
    var errorCallback = function(sender, args) {
        console.log("Ошибка при установке календарного периода");
    };
    // Устанавливаем указанный календарный период для справочника
    dimService.setCalendarPeriod(dim, args, readyCallback, errorCallback);
};
setCalendarPeriod("Month"); // Календарный период - месяц
setCalendarPeriod("Quarter"); // Квартал
setCalendarPeriod("Year"); // Год
В результате выполнения примера в консоли браузера был выведен временной
 промежуток, охватывающий все элементы справочника, в разных календарных
 периодах: месяц, квартал, год:


янв 1990 - дек 2005


I квартал 1990 - IV квартал 2005


1990 - 2005


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
