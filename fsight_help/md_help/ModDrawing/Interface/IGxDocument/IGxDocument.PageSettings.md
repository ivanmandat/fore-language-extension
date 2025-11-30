# IGxDocument.PageSettings

IGxDocument.PageSettings
-


# IGxDocument.PageSettings


## Синтаксис


PageSettings(SectionIndex: Integer): [IGxPageSettings](../IGxPageSettings/IGxPageSettings.htm);


## Параметры


SectionIndex. Индекс
 секции.


## Описание


Свойство PageSettings возвращает
 настройки секции с указанным индексом.


## Комментарии


Для регламентного отчёта под секцией подразумевается отдельный лист,
 для экспресс-отчета и рабочего пространства под секцией понимается весь
 документ.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


			Sub UserProc;

Var

    MB: IMetabase;

    Document: IGxDocument;

    PageSet: IGxPageSettings;

Begin

    MB := MetabaseClass.Active;

    Document := MB.ItemById("REPORT").Edit As IGxDocument;

    PageSet := Document.PageSettings(0);

    PageSet.PaperOrientation := GxPaperOrientation.Landscape;

    (Document As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет изменена ориентация страниц первого листа
 регламентного отчёта.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
