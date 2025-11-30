# IEaxHeaders.EvenPageHeader

IEaxHeaders.EvenPageHeader
-


# IEaxHeaders.EvenPageHeader


## Синтаксис


EvenPageHeader: [IEaxHeader](../IEaxHeader/IEaxHeader.htm);


## Описание


Свойство EvenPageHeader возвращает
 параметры верхнего колонтитула чётных страниц.


## Комментарии


Для получения параметров нижнего колонтитула чётных страниц используйте
 свойство [IEaxHeaders.EvenPageFooter](IEaxHeaders.EvenPageFooter.htm).


Для использования разных колонтитулов для чётных и нечётных страниц
 используйте свойство [IEaxHeaders.OddAndEvenPagesHeaderFooter](IEaxHeaders.OddAndEvenPagesHeaderFooter.htm).


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

	    // Настроим отступ колонтитулов для чётных страниц

	    Param := Headers.EvenPageHeader;

	    Param.Margin := 15;

	    Param := Headers.EvenPageFooter;

	    Param.Margin := 15;

	    // Учтем настройки для чётных страниц

	    Headers.OddAndEvenPagesHeaderFooter := True;

	    Debug.Writeline("Отступ верхнего колонтитула чётных страниц: " +

	        Headers.EvenPageHeader.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула чётных страниц: " +

	        Headers.EvenPageFooter.Margin.ToString);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов
 чётных страниц. В окно консоли будет выведена информация об отступах верхнего
 и нижнего колонтитулов.


См. также:


[IEaxHeaders](IEaxHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
