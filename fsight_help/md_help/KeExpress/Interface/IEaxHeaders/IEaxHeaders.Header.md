# IEaxHeaders.Header

IEaxHeaders.Header
-


# IEaxHeaders.Header


## Синтаксис


Header: [IEaxHeader](../IEaxHeader/IEaxHeader.htm);


## Описание


Свойство Header возвращает параметры
 верхнего колонтитула.


## Комментарии


Для получения параметров нижнего колонтитула используйте свойство [IEaxHeaders.Footer](IEaxHeaders.Footer.htm).


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

	    // Настроим отступ колонтитулов

	    Param := Headers.Header;

	    Param.Margin := 10;

	    Param := Headers.Footer;

	    Param.Margin := 10;

	    Debug.Writeline("Отступ верхнего колонтитула: " +

	        Headers.Header.Margin.ToString);

	    Debug.Writeline("Отступ нижнего колонтитула: " +

	        Headers.Footer.Margin.ToString);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены параметры отступа колонтитулов.
 В окно консоли будет выведена информация об отступах верхнего и нижнего
 колонтитулов.


См. также:


[IEaxHeaders](IEaxHeaders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
