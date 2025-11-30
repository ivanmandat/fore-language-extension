# IEaxHeaders.FirstPageHeader

IEaxHeaders.FirstPageHeader
-


# IEaxHeaders.FirstPageHeader


## Синтаксис


FirstPageHeader: [IEaxHeader](../IEaxHeader/IEaxHeader.htm);


## Описание


Свойство FirstPageHeader возвращает
 параметры верхнего колонтитула первой страницы.


## Комментарии


Для получения параметров нижнего колонтитула первой страницы используйте
 свойство [IEaxHeaders.FirstPageFooter](IEaxHeaders.FirstPageFooter.htm).


Для использования настроек особого колонтитула для первой страницы используйте
 свойство [IEaxHeaders.DifferentFirstPageHeaderFooter](IEaxHeaders.DifferentFirstPageHeaderFooter.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Express : IEaxAnalyzer;

	    Headers: IEaxHeaders;

	    Param: IEaxHeader;

	Begin

	    Metabase := MetabaseClass.Active;

	    Express := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    Headers := Express.HeadersFooters;

	    // Настроим отступ колонтитулов для первой страницы

	    Param := Headers.FirstPageHeader;

	    Param.Margin := 30;

	    Param := Headers.FirstPageFooter;

	    Param.Margin := 30;

	    // Учтем настройки для первой страницы

	    Headers.DifferentFirstPageHeaderFooter := True;

	    Debug.Writeline("Отступ верхнего колонтитула первой страницы: " +

	        Headers.FirstPageHeader.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула первой страницы: " +

	        Headers.FirstPageFooter.Margin.ToString);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов
 первой страницы. В окно консоли будет выведена информация об отступах
 верхнего и нижнего колонтитулов.


См. также:


[IEaxHeaders](IEaxHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
