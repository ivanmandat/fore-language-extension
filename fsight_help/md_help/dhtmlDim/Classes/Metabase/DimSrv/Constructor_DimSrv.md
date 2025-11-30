# Конструктор DimSrv

Конструктор DimSrv
-


# Конструктор DimSrv


## Синтаксис


PP.Mb.DimSrv(settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор DimSrv создает экземпляр
 класса [DimSrv](DimSrv.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)»). Также предполагается
 наличие в репозитории справочника с ключом 106. Создадим сервис для работы
 со справочниками:


// Создаем сервис для работы со справочниками
var dimService = new PP.Mb.DimSrv({
    Metabase: metabase
});
// Добавляем обработчик события, наступающего при открытии справочника
dimService.DimOpened.add(
    function(sender, args) {
        // Выводим в консоль браузера список параметров события
        console.log("Список аргументов события DimOpened");
        for (var key in args) {
            console.log("Аргумент " + key + ", тип " + args[key].getTypeName());
        }
    }
);
// Открываем справочник
var dim = dimService.open(106, true, true, null);
В результате выполнения примера был создан сервис для работы со справочниками,
 с помощью которого был открыт справочник с ключом 106. В результате открытия
 справочника наступило соответствующее событие, после обработки которого
 в консоли браузера были выведены следующие сообщения:


Список аргументов события DimOpened


Аргумент Dim, тип DimSource


Аргумент Source, тип DimSource


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
