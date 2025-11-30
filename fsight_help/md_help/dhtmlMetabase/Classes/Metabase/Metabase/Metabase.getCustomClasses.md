# Metabase.getCustomClasses

Metabase.getCustomClasses
-


# Metabase.getCustomClasses


## Синтаксис


getCustomClasses (parentKey, pattern, callback);


## Параметры


parentKey. Ключ родительской папки пользовательского класса;


pattern.


callback. Возвратная функция.


## Описание


Метод getCustomClasses отправляет запрос на получение пользовательских классов репозитория.


## Пример


Для выполнения примера предполагается наличие на html-странице объекта репозитория с наименованием «mb» (см. «[Пример создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). В репозитории должен быть создан пользовательский класс и его объекты (см. «[Создание объекта собственного класса](KeSom.chm::/Examples/Example_1_CustomClass.htm)»). Выведем в консоль метаданные объекта пользовательского класса, расположенного в корневой папке репозитория:


mb.getCustomClasses(0, null, function (sende, args) {


    var res = JSON.parse(args.ResponseText);


    customData = res.OpenCustomObResult;


    console.log(customData)


});


После выполнения примера в консоль браузера будет выведен объект с метаданными объекта пользовательского класса.


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
