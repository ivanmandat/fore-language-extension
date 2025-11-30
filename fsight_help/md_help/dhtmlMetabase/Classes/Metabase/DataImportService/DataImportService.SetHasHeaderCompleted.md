# DataImportService.SetHasHeaderCompleted

DataImportService.SetHasHeaderCompleted
-


# DataImportService.SetHasHeaderCompleted


## Синтаксис


SetHasHeaderCompleted: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SetHasHeaderCompleted наступает при снятии или установке флажка «Первая строка содержит заголовки».


## Пример


Для выполнения примера предполагается наличие на странице компонента [ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard.htm) и сервиса для работы с импортом данных с наименованием «dataImportService» (см. «[Пример создания компонента ImportDataWizard](../../../Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Добавим обработчик события SetHasHeaderCompleted:


dataImportService.SetHasHeaderCompleted.add(function (sender, args)


{


    alert("HasHeaderCompleted")


});


После выполнения примера при снятии или установке флажка «Первая строка содержит заголовки» на первом этапе мастера импорта данных будет выдаваться сообщение «HasHeaderCompleted».


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
