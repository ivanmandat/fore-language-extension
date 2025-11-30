# IDataAreaOwner.OwnerStyleSheet

IDataAreaOwner.OwnerStyleSheet
-


# IDataAreaOwner.OwnerStyleSheet


## Синтаксис


OwnerStyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство OwnerStyleSheet определяет
 внешнюю таблицу стилей, используемую объектом.


## Комментарии


Для работы с внутренней таблицей стилей используйте свойство [IDataAreaOwner.OwnerInnerStyleSheet](IDataAreaOwner.OwnerInnerStyleSheet.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_STYLE и таблицы стилей с идентификатором
 STYLE_TB.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IDataAreaOwner;

	    Style: IStyleSheet;

	    StyleCont: IStyleContainer;

	    StEntity: IStyledEntity;

	Begin

	    mb := MetabaseClass.Active;

	    Report := mb.ItemById("WORKBOOK_STYLE").Edit As IDataAreaOwner;

	    Style := mb.ItemById("STYLE_TB").Bind As IStyleSheet;

	    Report.OwnerStyleSheet := Style;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера к рабочей книге WORKBOOK_STYLE будет
 подключена внешняя таблица стилей STYLE_TB.


См. также:


[IDataAreaOwner](IDataAreaOwner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
