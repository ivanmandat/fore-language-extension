# Metabase.getPathToRoot

Metabase.getPathToRoot
-


# Metabase.getPathToRoot


## Синтаксис


(objectKey, includeClasses, withEmptyFolders, callback,
 noCache)


## Параметры


objectKey. Ключ объекта репозитория,
 иерархию до корня которого нужно получить с сервера приложений;


includeClasses. Массив классов
 объектов, которые будут возвращены. Экземпляры перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


withEmptyFolders. Определяет,
 включать ли пустые папки. Если установлено true,
 будут включаться пустые папки, иначе нет;


includeRoot. Определяет, включать
 ли корневую вершину. Если установлено true,
 будет включаться корневая вершина, иначе нет;


callback. Процедура обратного
 вызова, экземпляр класса PP.Delegate. Необязательный параметр;


noCache. Определяет, использовать
 ли кеш при отправке запроса. Если установлено true,
 кеш не используется, иначе - используется.


## Описание


Метод getPathToRoot возвращает
 иерархию до корня указанного объекта.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree», источником которого является измерение «dim»,
 и сервиса для работы с измерениями с наименованием «dimSrv» (см. «[Пример
 создания компонента DimTree](dhtmlDim.chm::/Components/Metabase/DimTree/DimTree_Example.htm)»). Выведем в консоль браузера
 объект, содержащий информацию о всех объектах иерархии до измерения «dim»:


mb.getPathToRoot(dim.[getKey](../Descriptor/Descriptor.Key.htm)(),
 dim.[getClass](../Descriptor/Descriptor.Class.htm)(), false,
 function (sender, args)


{


    var res = JSON.parse(args.ResponseText).GetObjectsResult;


    console.log(res)


})


После выполнения примера в консоль браузера будет выведен объект, содержащий
 описания всех родительских папок объекта «dim» и всех объектов того же
 класса, что и «dim», находящихся в этих папках.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
