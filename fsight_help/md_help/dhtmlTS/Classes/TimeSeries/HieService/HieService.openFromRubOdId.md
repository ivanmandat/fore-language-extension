# HieService.openFromRubOdId

HieService.openFromRubOdId
-


# HieService.openFromRubOdId


## Синтаксис


openFromRubOdId(rubOdId: String, rubKey: Number,
 wbk: [PP.TS.WbkDocument](../WbkDocument/WbkDocument.htm), callback:
 PP.Delegate);


## Параметры


rubOdId. Моникёр
 каталога показателей, иерархию которого требуется открыть;


rubKey. Ключ
 каталога показателей;


wbk. Документ
 рабочей книги;


callback. Функция
 обратного вызова.


## Описание


Метод openFromRubOdId открывает
 иерархию рабочей книги по моникёру каталога показателей.


## Комментарии


Метод возвращает объект типа [PP.TS.MetaHierarchy](../MetaHierarchy/MetaHierarchy.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим наименования уровней в
 иерархии текущего каталога показателей:


// Получим сервис для работы рабочей книги
var service = workbookBox._Service;
// Получим источник данных
var source = workbookBox.getSource();
// Получим моникёр текущего каталога показателей
var rubOdId = source.getRubOdId().id;
// Получим ключ текущего каталога показателей
var rubKey = source.getRub().meta.obInst.obDesc.k;
var metaHierarchy;
// Получим сервис для работы с иерархиями в источнике данных
var hieService = service.getHieService();
// Определим возвратную функцию
var onOpenFromRubOdId = function () {
    // Определим массив уровней в иерархии текущего каталого показателя
    console.log("Список уровней в иерархии текущего каталога показателей:")
    var levels = metaHierarchy.getLevels();
    for (var i in levels) {
        console.log(i + ". " + levels[i].n);
    };
};
// Получим иерархию рабочей книги по ключу каталога показателей
metaHierarchy = hieService.openFromRubOdId(rubOdId, rubKey, source, PP.Delegate(onOpenFromRubOdId, this));

В результате выполнения примера в консоли браузера были выведены наименования
 уровней в иерархии текущего каталога показателей:


Список уровней в иерархии текущего каталога показателей:

0. Период

1. Единица измерения

2. Страна

3. Показатель


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
