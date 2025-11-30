# IGxDocument.PageCount

IGxDocument.PageCount
-


# IGxDocument.PageCount


## Синтаксис


PageCount(SectionIndex: Integer): Integer;


## Параметры


SectionIndex. Индекс
 секции.


## Описание


Свойство PageCount возвращает
 количество страниц секции, которые могут быть напечатаны.


## Комментарии


Разбивка секции на страницы производится в соответствии с параметрами,
 установленными для секции.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub Main;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    GxDoc: IGxDocument;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    GxDoc := Eax As IGxDocument;

	    Debug.WriteLine(GxDoc.PageCount(0));

	End Sub Main;


После выполнения примера в консоль среды разработки будет выведено количество
 страниц первой секции экспресс-отчета, которые могут быть напечатаны.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
