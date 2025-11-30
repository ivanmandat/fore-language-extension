# NavigatorBox.createObject

NavigatorBox.createObject
-


# NavigatorBox.createObject


## Синтаксис


createObject(classId, name, callback);


## Параметры


classId. Идентификатор
 класса создаваемого объекта. Элемент перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


name. Имя создаваемого объекта;


callback. Возвратная функция.


## Описание


Метод createObject создает объект
 репозитория.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Создадим новый объект в текущей
 папке репозитория:


navbox.createObject(2561, "New
 OLAP", PP.Delegate(function
 (sender, args) {


   var
 res = JSON.parse(args.ResponseText);


   console.log("Ключ
 созданного объекта: " + res.CreateObjectResult.object.k)


}));


После выполнения примера в текущей папке будет создан экспресс-отчет
 с наименованием «New OLAP». В консоль браузера будет выведен ключ созданного
 объекта.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
