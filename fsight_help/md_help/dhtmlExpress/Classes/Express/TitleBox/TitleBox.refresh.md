# TitleBox.refresh

TitleBox.refresh
-


**


# TitleBox.refresh


## Синтаксис


refresh(args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


*args.* Параметры, представленные в виде объекта класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm).
 Необязательный параметр.


## Описание


Метод refresh** обновляет
 заголовок экспресс-отчета.


## Комментарии


Метод возвращает значение true,
 если заголовок был успешно обновлён, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TitleBox](../../../Components/Express/TitleBox/TitleBox.htm)
 с наименованием «titleBox» (см. «Пример
 создания компонента EaxTitleMaster»). Обновим заголовок:


// Обработаем событие Refreshed
title.Refreshed.add(function (sender, args) {
    console.log(args.AllUpdate ? "Заголовок обновлён полностью" : "Заголовок обновлён не полностью");
    // Получим настройки заголовка
    var options = title.getOptions();
    console.log(options.visible ? "Заголовок видим" : "Заголовок скрыт" );
});
// Обновим заголовок
title.refresh();
В результате выполнения примера был обновлён заголовок. При этом в консоли
 браузера после срабатывания события Refreshed
 были выведены уведомления о том, что заголовок видим и полностью обновлён.


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
