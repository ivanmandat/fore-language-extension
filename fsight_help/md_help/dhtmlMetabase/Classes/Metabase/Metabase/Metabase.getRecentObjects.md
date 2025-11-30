# Metabase.getRecentObjects

Metabase.getRecentObjects
-


# Metabase.getRecentObjects


## Синтаксис


getRecentObjects (includeClasses, withEmptyFolders, includeRoot, limit, orderBy, callback)


## Параметры


includeClasses. Массив классов объектов, которые будут возвращены. Экземпляры перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


withEmptyFolders. Определяет, включать ли пустые папки. Если установлено true, будут включаться пустые папки, иначе нет;


includeRoot. Определяет, возвращать ли корневую папку репозитория. Если установлено true, вместе с последними открытыми объектами будет возвращаться корневая папка репозитория;


limit. Количество объектов, которые будут возвращаться. По умолчанию 10;


orderBy. Устанавливает атрибут сортировки. Если не задан, сортировка не применяется.


callback. Процедура обратного вызова, экземпляр класса PP.Delegate. Необязательный параметр.


## Описание


Метод getRecentObjects возвращает последние открытые объекты.


## Пример


Для выполнения примера предполагается наличие на странице соединения с репозиторием с наименованием «mb» (см. «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Вернем 5 последних открытых объектов репозитория:


mb.getRecentObjects([2561], false, false, 5, null, function (sender, args)


{


    var res = JSON.parse(args.ResponseText).GetObjectsResult;


    console.log(res)


})


После выполнения примера в консоль браузера будет выведен объект с описаниями пяти экспресс-отчетов, которые были открыты последними.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
