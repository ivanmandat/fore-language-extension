# DimSrv.selectGroup

DimSrv.selectGroup
-


# DimSrv.selectGroup


## Синтаксис


selectGroup(dim: PP.Mb.DimSource, args: Object,
 callback: Function | PP.Delegate, errorCallback: Function | PP.Delegate);


## Параметры


dim. Справочник;


args. Аргументы операции. Объект
 должен содержать следующие поля: selId
 - моникёр отметки; groupId - идентификатор
 группы; limitToGroup - признак
 удаления элементов не входящих в группу, если для аргумента установлено
 значение true, то элементы, не
 входящие в группу, будут убраны; fireEvent
 - признак вызова события [DimSrv.SelectionChanged](DimSrv.SelectionChanged.htm),
 если для параметра установлено значение true,
 то событие будет вызвано;


callback. Функция обратного
 вызова;


errorCallback. Функция обратного
 вызова при ошибке.


## Описание


Метод selectGroup устанавливает
 отметку элементам группы.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Добавим обработчик события получения метаданных справочника.
 Установим отметку элементам группы с идентификатором, полученным из метаданных
 справочника:


// Добавляем обработчик события получения метаданных справочника
dimService.DimGetMetadataComplete.add(function(sender, args) {
    console.log("Метаданные справочника успешно получены");
    console.log(args);
});
// Получаем метаданные справочника
var meta;
var func = function(sender, args){
    meta = JSON.parse(args.ResponseText).GetDimMetadataResult;
}
dimService.getMetadata(dim, {}, func);
// Выделям элементы группы из метаданных
var args = {
    groupId: meta.data.groups.it[0].id
}
dimService.selectGroup(dim, args);
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var elems = res.GetDimElementsResult.els.e;
    console.log("Наименования выделенных элементов:");
    var k = 0;
    var str = elems[0].n + " ";
    for (var i = 1; i < elems.length; i++) {
        if (k < 3) {
            str += elems[i].n + " ";
            k++;
        } else {
            console.log(str);
            str = elems[i].n + " ";
            k = 0;
        }
    }
}
dimService.getAllSelectedEls(dim, func);
В результате выполнения примера в консоль были выведены отмеченные элементы:


Метаданные справочника успешно получены


Наименования выделенных элементов:


I квартал 1990 II квартал 1990 III квартал 1990
 IV квартал 1990


I квартал 1991 II квартал 1991 III квартал 1991
 IV квартал 1991


I квартал 1992 II квартал 1992 III квартал 1992
 IV квартал 1992


I квартал 1993 II квартал 1993 III квартал 1993
 IV квартал 1993


I квартал 1994 II квартал 1994 III квартал 1994
 IV квартал 1994


I квартал 1995 II квартал 1995 III квартал 1995
 IV квартал 1995


I квартал 1996 II квартал 1996 III квартал 1996
 IV квартал 1996


I квартал 1997 II квартал 1997 III квартал 1997
 IV квартал 1997


I квартал 1998 II квартал 1998 III квартал 1998
 IV квартал 1998


I квартал 1999 II квартал 1999 III квартал 1999
 IV квартал 1999


I квартал 2000 II квартал 2000 III квартал 2000
 IV квартал 2000


I квартал 2001 II квартал 2001 III квартал 2001
 IV квартал 2001


I квартал 2002 II квартал 2002 III квартал 2002
 IV квартал 2002


I квартал 2003 II квартал 2003 III квартал 2003
 IV квартал 2003


I квартал 2004 II квартал 2004 III квартал 2004
 IV квартал 2004


Обработаем событие очистки справочника и добавим группу элементов к
 его метаданным:


// Обрабатываем событие DimCleared
dimService.DimCleared.add(function(sender, args) {
    console.log("Справочник очищен");
};
var callback = function(sender, args) {
    console.log("Группа элементов добавлена к метаданным справочника");
};
// Добавляем группу элементов к метаданным справочника
dimService.setElementsGroup(dim, {groupId: "OBJ10901"}, callback);
В результате выполнения примера в консоль были выведены сообщения о
 добавлении группы элементов к метаданным справочника и об его очистке:


Группа элементов добавлена к метаданным справочника


Справочник очищен


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
