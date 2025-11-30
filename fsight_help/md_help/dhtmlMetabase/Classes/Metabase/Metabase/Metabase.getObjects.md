# Metabase.getObjects

Metabase.getObjects
-


# Metabase.getObjects


## Синтаксис


getObjects (parentKey, includeClasses, withEmptyFolders, includeRoot, callback, noCache)


## Параметры


parentKey. Ключ контейнера, в котором содержатся нужные объекты;


includeClasses. Массив классов объектов, которые будут возвращены. Экземпляры перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


withEmptyFolders. Определяет, включать ли пустые папки. Если установлено true, будут включаться пустые папки, иначе нет;


includeRoot. Определяет, включать ли корневую вершину. Если установлено true, будет включаться корневая вершина, иначе нет;


callback. Процедура обратного вызова, экземпляр класса PP.Delegate. Необязательный параметр;


noCache. Определяет, использовать ли кеш при отправке запроса. Если установлено true, кеш не используется, иначе - используется.


## Описание


Метод getObjects возвращает объекты репозитория.


## Пример


Для выполнения примера предполагается наличие на странице соединения с репозиторием с наименованием «mb» (см. «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). В репозитории должна быть папка с ключом 716495, из которой вернем все экспресс-отчеты:


mb.getObjects(716495, [2561], true, false, function (sender, args)


{


    var loadedObjects = JSON.parse(args.ResponseText).GetObjectsResult.objects;


    console.log(loadedObjects.its.d);


})


После выполнения примера в консоль браузера будет выведен массив описаний всех экспресс-отчетов, содержащихся в папке с ключом 716495.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
