# Metabase.sharePointShare

Metabase.sharePointShare
-


# Metabase.sharePointShare


## Синтаксис


sharePointShare (mbObject, title, body, callback)


## Параметры


mbObject. Объект для публикации
 - PP.Mb.[Object](../Object/Object.htm);


title. Заголовок темы обсуждения,
 связанная с текущим объектом;


body. Текст сообщения, который
 будет опубликован в обсуждении;


callback. Процедура обратного
 вызова.


## Описание


Метод sharePointShare используется
 для публикации [объекта](../Object/Object.htm) в SharePoint.


## Комментарии


Для создания обсуждения в репозитории должны быть заданы сайт SharePoint
 и группа обсуждения.


## Пример


Для выполнения примера предполагается наличие на странице [соединения
 с репозиторием](Metabase.htm) с наименованием «metabase» и модели экспресс-отчета с
 наименованием «eaxAnalyzer». Опубликуем экспресс-отчет на портале SharePoint:


metabase.sharePointShare(eaxAnalyzer, "olap1",
 "My olap1", function (sender,
 args)


{


    var res = JSON.parse(args.ResponseText);


    var sharedObj = res.SaveObjectAsResult.object;


    console.log(sharedObj)


})


После выполнения примера указанный отчет будет опубликован портале SharePoint,
 при этом в консоль браузера будет выведено описание опубликованного отчета.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
