# PP.App.sharePointShare

PP.App.sharePointShare
-


# PP.App.sharePointShare


## Синтаксис


sharePointShare(mbObject: [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm),
 title: String, body: String, callback: Function|PP.Delegate);


## Параметры


mbObject. Объект репозитория;


title. Заголовок публикуемой
 записи. Необязательный параметр, по умолчанию подставляется наименование
 объекта репозитория;


body. Содержимое записи. Необязательный
 параметр, по умолчанию указывается адрес текущей страницы;


callback. Возвратная функция.
 Необязательный параметр.


## Описание


Метод sharePointShare публикует
 объект репозитория в службу SharePoint.


## Пример


Для выполнения примера необходимо, чтобы был открыт любой экспресс-отчёт.
 Указанный ниже сценарий нужно запустить в консоли браузера.


Теперь опубликуем экспресс-отчёт в SharePoint
 и определим для первого переданного данной службе объекта идентификатор,
 наименование и время последнего сохранения:


// Опубликуем данный экспресс-отчёта в SharePoint
PP.App.sharePointShare(mbObject, PP.App.getMbObject().getName(), url, function (sender, args) {
    var response = JSON.parse(args.ResponseText);
    // Получим настройки первого переданного объекта
    var object = response.SaveObjectAsResult.objects.objects.its.d[0];
    console.log("Идентификатор первого переданного объекта: " + object.i);
    console.log("Его наименование: " + object.n);
    console.log("Время последнего сохранения объекта: " + object["@ts"]);
});
После выполнения примера в консоли браузера были выведены идентификатор,
 наименование и время последнего сохранения первого переданного в SharePoint объекта:


Идентификатор первого переданного объекта: OBJ51


Его наименование: 1. Databases


Время последнего сохранения объекта: 2013-03-25T13:36:01.000


См. также:


[PP.App](../PP.App.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
